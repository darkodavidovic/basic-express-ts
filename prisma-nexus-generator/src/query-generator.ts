/* eslint-disable @typescript-eslint/no-var-requires */
'use strict';

import path from "path";
import beautify from "js-beautify"
import { DMMF } from '@prisma/generator-helper/dist';
import { IConfig } from "./interfaces";
import { fileWrite } from "./utils/fileWrite";

const config: IConfig = require("../generator-config.json")
// const prismaJSON: DMMF.Model[] = require("@sicon/db/prisma/generated-nexus-json/prisma-models.json")
const fileToWrite: string = path.resolve(__dirname, config.queriesFile)

function generateQueryConstant(model: DMMF.Model) {
	const modelName = model.name
	const modelNameLower = modelName.charAt(0).toLocaleLowerCase() + modelName.slice(1)
	return `\nexport const ${modelNameLower}Query = queryField("${modelNameLower}Query", {
				type: "${modelName}Model",
				args: {
					${modelNameLower}Where: nullable("${modelName}Where"),
					${modelNameLower}Skip: nullable("Int"),
					${modelNameLower}Take: nullable("Int"),
					${modelNameLower}OrderBy: nullable("${modelName}OrderBy")
				},
				resolve: async (_, args, ctx) => {
					const { where, skip, take, orderBy } = prepareConditions<typeof args>(args, "${modelName}")
					const [count, data] = await ctx.prisma.$transaction([
						ctx.prisma.${modelNameLower}.count({ where, orderBy }),
						ctx.prisma.${modelNameLower}.findMany({ where, skip, take, orderBy })
					])
					return { count, data }
				}
			})\n`
}

export async function generateQueries(models: DMMF.Model[]) {
	let inputs = ""
	let constants = ""

	if (Array.isArray(models)) {
		for (const model of models) {
			if(!config.excludeQuery.includes(model.name)){
				constants += generateQueryConstant(model)
			}
		}
	}

	inputs = `import { nullable, queryField } from "nexus"
				import { prepareConditions } from "../../utils/prepare-conditions"
				${constants}`

	const formatted = beautify.js(inputs, {
		indent_size: 4,
		indent_with_tabs: true,
		space_in_empty_paren: true,
		brace_style: "preserve-inline"
	})

	// console.log(formatted)

	await fileWrite(fileToWrite, formatted)
}
// generateQueries(prismaJSON)

/* eslint-disable @typescript-eslint/no-var-requires */
'use strict';

import path from "path";
import beautify from "js-beautify"
import { DMMF } from '@prisma/generator-helper/dist';
import { IConfig } from "./interfaces";
import { fileWrite } from "./utils/fileWrite";

const config: IConfig = require("../generator-config.json")
// const prismaJSON: DMMF.Model[] = require("@sicon/db/prisma/generated-nexus-json/prisma-models.json")
const fileToWrite: string = path.resolve(__dirname, config.mutationsUpdateFile)

function generateMuatationConstant(model: DMMF.Model) {
	const modelName = model.name
	const modelNameLower = modelName.charAt(0).toLowerCase() + modelName.slice(1)
	return `\nexport const ${modelNameLower}Update = mutationField("${modelNameLower}Update", {
				type: "${modelName}Payload",
				args: {
					${modelNameLower}Where: nonNull("${modelName}Input"),
					${modelNameLower}Input: nonNull("${modelName}Input")
				},
				resolve: async (_, args, ctx) => {
					const { where } = prepareConditions<typeof args>(args, "${modelName}")
					const result = await ctx.prisma.${modelNameLower}.update({
						where,
						data: {
							...args.${modelNameLower}Input
						}
					});
					return result
				}
			})\n`
}

export async function generateUpdateMutations(models: DMMF.Model[]) {
	let inputs = ""
	let constants = ""

	if (Array.isArray(models)) {
		for (const model of models) {
			if (!config.excludeQuery.includes(model.name)) {
				constants += generateMuatationConstant(model)
			}
		}
	}

	inputs = `import { nonNull, mutationField } from "nexus"
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

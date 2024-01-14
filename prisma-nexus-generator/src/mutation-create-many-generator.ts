/* eslint-disable @typescript-eslint/no-var-requires */
'use strict';

import path from "path";
import beautify from "js-beautify"
import { DMMF } from '@prisma/generator-helper/dist';
import { IConfig } from "./interfaces";
import { fileWrite } from "./utils/fileWrite";

const config: IConfig = require("../generator-config.json")
// const prismaJSON: DMMF.Model[] = require("@sicon/db/prisma/generated-nexus-json/prisma-models.json")
const fileToWrite: string = path.resolve(__dirname, config.mutationsCreateManyFile)

function generateMuatationConstant(model: DMMF.Model) {
	const modelName = model.name
	const modelNameLower = modelName.charAt(0).toLowerCase() + modelName.slice(1)
	return `\nexport const ${modelNameLower}CreateMany = mutationField("${modelNameLower}CreateMany", {
				type: "RowsAffectedPayload",
				args: {
					${modelNameLower}Input: nonNull(list(nonNull("${modelName}Input")))
				},
				resolve: async (_, args, ctx) => {
					const result = await ctx.prisma.${modelNameLower}.createMany({
						data: args.${modelNameLower}Input
					});
					return result
				}
			})\n`
}

export async function generateCreateManyMutations(models: DMMF.Model[]) {
	let inputs = ""
	let constants = ""

	if (Array.isArray(models)) {
		for (const model of models) {
			if (!config.excludeQuery.includes(model.name)) {
				constants += generateMuatationConstant(model)
			}
		}
	}

	inputs = `import { nonNull, list, mutationField } from "nexus"
				${constants}`

	const formatted = beautify.js(inputs, {
		indent_size: 4,
		indent_with_tabs: true,
		space_in_empty_paren: true,
		brace_style: "preserve-inline"
	})

	await fileWrite(fileToWrite, formatted)
}


/* eslint-disable @typescript-eslint/no-var-requires */
'use strict';

import path from "path";
import beautify from "js-beautify"
import { DMMF } from '@prisma/generator-helper/dist';
import { IConfig } from "./interfaces";
import { fileWrite } from "./utils/fileWrite";

const config: IConfig = require("../generator-config.json")
// const prismaJSON: DMMF.Model[] = require("@sicon/db/prisma/generated-nexus-json/prisma-models.json")
const fileToWrite: string = path.resolve(__dirname, config.queryQroupByEnumsFile)

function generateEnumMembers(model: DMMF.Model) {
	const members: string[] = []
	for (const field of model.fields) {
		const { name, isRequired, kind } = field
		if (kind === "scalar" && isRequired) {
			members.push(name)
		}
	}
	return members
}

function generateEnumConstant(model: DMMF.Model) {
	const modelName = model.name
	const modelNameUpper = modelName.charAt(0).toUpperCase() + modelName.slice(1)

	const members = generateEnumMembers(model)
	const membersString = members.map(member => `"${member}"`)

	return `\nexport const ${modelNameUpper}GroupByEnum = enumType({
				name: "${modelNameUpper}GroupByEnum",
				members: [${membersString}],
				description: "Should be array with at least one of the values mentioned bellow."
			})\n`
}

export async function generateGroupByEnums(models: DMMF.Model[]) {
	let imports = ""
	let constants = ""

	if (Array.isArray(models)) {
		for (const model of models) {
			constants += generateEnumConstant(model)
		}
	}

	imports = `import { enumType } from "nexus"\n${constants}\n`

	const formatted = beautify.js(imports, {
		indent_size: 4,
		indent_with_tabs: true,
		space_in_empty_paren: true,
		brace_style: "preserve-inline"
	})

	await fileWrite(fileToWrite, formatted)
}

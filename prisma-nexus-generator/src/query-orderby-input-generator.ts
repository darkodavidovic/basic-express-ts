/* eslint-disable no-prototype-builtins */
/* eslint-disable security/detect-object-injection */
/* eslint-disable @typescript-eslint/no-var-requires */
'use strict';

import path from "path";
import beautify from "js-beautify"
import { DMMF } from '@prisma/generator-helper/dist';
import { IConfig, EExtendedQueryOrderByTypes } from "./interfaces";
import { fileWrite } from "./utils/fileWrite";

const config: IConfig = require("../generator-config.json")
// const prismaJSON: DMMF.Model[] = require("@sicon/db/prisma/generated-nexus-json/prisma-models.json")
const fileToWrite: string = path.resolve(__dirname, config.queryOrderByInputsFile)

function generateRegularInputFields(scalars: DMMF.Field[]) {
	let fieldsTmp = ""
	for (const scalar of scalars) {
		const { name, type, kind } = scalar
		if (kind === "scalar") {
			const extendedOrderBy = EExtendedQueryOrderByTypes[type as keyof typeof EExtendedQueryOrderByTypes]
			if (extendedOrderBy) {
				fieldsTmp += `t.nullable.field("${name}", { type: "${extendedOrderBy}" })\n`
			}
		}
	}
	return fieldsTmp
}

function generateInputConstant(model: DMMF.Model) {
	const modelName = model.name
	const modelNameUpper = modelName.charAt(0).toUpperCase() + modelName.slice(1)

	// use regular fields from database
	const regularFields = model.fields
	const regularFieldsTmp = generateRegularInputFields(regularFields)

	return `\nexport const ${modelNameUpper}OrderBy = inputObjectType({
				name: "${modelNameUpper}OrderBy",
				definition(t) {
					${regularFieldsTmp}
				}
			})\n`
}

export async function generateOrderByInputs(models: DMMF.Model[]) {
	let inputs = ""
	let constants = ""

	if (Array.isArray(models)) {
		for (const model of models) {
			// build input if not excluded from config
			if (!config.excludeGroupByInputs.includes(model.name)) {
				constants += generateInputConstant(model)
			}
		}
	}

	inputs = `import { inputObjectType } from "nexus"\n${constants}\n`

	const formatted = beautify.js(inputs, {
		indent_size: 4,
		indent_with_tabs: true,
		space_in_empty_paren: true,
		brace_style: "preserve-inline"
	})

	await fileWrite(fileToWrite, formatted)
}

// ******** FOR DEBUG ONLY *********
// 1. Uncomment line 11 to use prismaJSON directly from prisma generated JSON file
// 2. Uncomment this line bellow to call it with: npm run dev:inputs
// generateQueryInputs(prismaJSON)

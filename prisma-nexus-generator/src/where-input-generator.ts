/* eslint-disable no-prototype-builtins */
/* eslint-disable security/detect-object-injection */
/* eslint-disable @typescript-eslint/no-var-requires */
'use strict';

import path from "path";
import beautify from "js-beautify"
import { DMMF } from '@prisma/generator-helper';
import { IConfig, EInlineScalarTypes, EExtendedQueryWhereTypes, ICustomFieldData, EInlineMappedScalarTypes } from "./interfaces";
import { fileWrite } from "./utils/fileWrite";

const config: IConfig = require("../generator-config.json")
// const prismaJSON: DMMF.Model[] = require("@sicon/db/prisma/generated-nexus-json/prisma-models.json")
const fileToWrite: string = path.resolve(__dirname, config.queryWhereInputsFile)

function generateRegularInputFields(scalars: DMMF.Field[]) {
	let fieldsTmp = ""
	for (const scalar of scalars) {
		const { name, type, kind } = scalar
		if (kind === "scalar") {
			const extendedWhere = EExtendedQueryWhereTypes[type as keyof typeof EExtendedQueryWhereTypes]
			if (extendedWhere) {
				fieldsTmp += `t.nullable.field("${name}", { type: "${extendedWhere}" })\n`
			} else {
				const scalarType = EInlineScalarTypes[type as keyof typeof EInlineScalarTypes]
				const mappedScalar = EInlineMappedScalarTypes[type as keyof typeof EInlineMappedScalarTypes]
				// if not inline scalar type, use mapped scalar type
				fieldsTmp += `t.nullable.${scalarType ? scalarType : mappedScalar}("${name}")\n`
			}
		}
		if (kind === "enum") {
			fieldsTmp += `t.nullable.field("${name}", {
							type: "${type}"
						})\n`
		}
	}
	return fieldsTmp
}

function generateCustomInputFields(scalars: ICustomFieldData[]) {
	let fieldsTmp = "// custom fields\n"
	for (const scalar of scalars) {
		const { name, type, kind } = scalar
		if (kind === "scalar") {
			const extendedWhere = EExtendedQueryWhereTypes[type as keyof typeof EExtendedQueryWhereTypes]
			// if type has extended version registered
			if (extendedWhere) {
				fieldsTmp += `t.nullable.field("${name}", { type: "${extendedWhere}" })\n`
			} else {
				const scalarType = EInlineScalarTypes[type as keyof typeof EInlineScalarTypes]
				const mappedScalar = EInlineMappedScalarTypes[type as keyof typeof EInlineMappedScalarTypes]
				// if not inline scalar type, use mapped scalar type
				fieldsTmp += `t.nullable.${scalarType ? scalarType : mappedScalar}("${name}")\n`
			}
		}
		if (kind === "enum") {
			fieldsTmp += `t.nullable.field("${name}", {
							type: "${type}"
						})\n`
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

	// check if any customField in config.customFields
	let customFields: ICustomFieldData[] = []
	if (config.customFields.hasOwnProperty(modelName) && Array.isArray(config.customFields[modelName])) {
		customFields = config.customFields[modelName]
	}
	const customFieldsTmp = generateCustomInputFields(customFields)

	return `\nexport const ${modelNameUpper}Where = inputObjectType({
				name: "${modelNameUpper}Where",
				definition(t) {
					${regularFieldsTmp}
					${customFields.length ? customFieldsTmp : ""}
				}
			})\n`
}

export async function generateWhereInputs(models: DMMF.Model[]) {
	let inputs = ""
	let constants = ""

	if (Array.isArray(models)) {
		for (const model of models) {
			// build input if not excluded from config
			if (!config.excludeWhereInputs.includes(model.name)) {
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

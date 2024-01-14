/* eslint-disable max-lines-per-function */
/* eslint-disable editorconfig/indent */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-prototype-builtins */
/* eslint-disable security/detect-object-injection */
'use strict';

import path from "path"
import beautify from "js-beautify"
import { DMMF } from '@prisma/generator-helper/dist';
import { customFields, eachCustomField } from "./custom-fields"
import { IConfig, EInlineScalarTypes, EInlineMappedScalarTypes } from "./interfaces";
import { fileWrite } from "./utils/fileWrite";
import { relationManager } from "./utils/relation-manager";

const config: IConfig = require("../generator-config.json")
const fileToWrite: string = path.resolve(__dirname, config.modelsFile)
let prismaJSON: DMMF.Model[] = []
let prismaEnumsJSON: DMMF.DatamodelEnum[] = []
const nexusImports: string[] = []
const dbModelImports: string[] = []

function getEachCustomField(modelName: string) {
	const modelNameLower = modelName.charAt(0).toLocaleLowerCase() + modelName.slice(1)
	let fieldsTmp = ""
	if (eachCustomField && Array.isArray(eachCustomField)) {
		for (const field of eachCustomField) {
			if (field) fieldsTmp += `${field.field.replace("<table>", modelNameLower)}\n`
		}
		return fieldsTmp
	}
	return false
}

// Generate custom fields end resolvers for Queries/Subscriptions/Mutations
function getCustomFields(modelName: string) {
	const model = customFields.find(model => model.modelName === modelName)
	let fieldsTmp = ""
	if (model && Array.isArray(model.fields)) {
		for (const field of model.fields) {
			fieldsTmp += `${field.field}\n`
		}
		return fieldsTmp
	}
	return false
}

function generateField(modelName: string, fieldData: DMMF.Field) {
	const inlineScalar = EInlineScalarTypes[fieldData.type as keyof typeof EInlineScalarTypes]
	const inlineMappedScalar = EInlineMappedScalarTypes[fieldData.type as keyof typeof EInlineMappedScalarTypes]
	const fieldName = fieldData.name
	const fieldType = fieldData.type
	const isList = fieldData.isList
	const nullable = !fieldData.isRequired
	const isEnumerator = fieldData.kind === "enum"
	const isObject = fieldData.kind === "object"
	const authorised = config.models?.hasOwnProperty(modelName) && Array.isArray(config.models[modelName].authorized)
		? config.models[modelName].authorized?.includes(fieldName) : false
	const documentation = fieldData.documentation

	if (nullable) nexusImports.push("nullable")

	if (inlineScalar && !authorised) {
		return `t${nullable ? ".nullable" : ""}.${inlineScalar}("${fieldName}"${documentation ? `, {
					description: \`${documentation}\`
				})` : ")"}\n`
	}

	if (inlineScalar && authorised) {
		const typeUpper = inlineScalar && typeof inlineScalar === "string" ? inlineScalar.charAt(0).toUpperCase() + inlineScalar.slice(1) : ""
		return `t${nullable ? ".nullable" : ""}${isList ? ".list" : ""}.field("${fieldName}", {
           			 type: ${nullable ? `nullable("${typeUpper}")` : `"${typeUpper}"`},${documentation
				? `description: \`${documentation}\`,` : ""}
           			 authorize: (_, __, ctx) => {
               	 	const system = ctx.user?.system
                	return Boolean(system)
            	}
			})\n`
	}

	if (isObject && isList) {
		const modelLowercase = typeof fieldType === "string" ? fieldType.charAt(0).toLowerCase() + fieldType.slice(1) : ""
		const relMan = relationManager(prismaJSON, fieldData, modelName);
		dbModelImports.push(fieldType)
		return `t${nullable ? ".nullable" : ""}.field("${fieldName}", {
            		type: "${fieldType}Model",${documentation
				? `description: \`${documentation}\`,` : ""}
					args: {
						${modelLowercase}Where: nullable("${fieldType}Where"),
						${modelLowercase}Skip: nullable("Int"),
						${modelLowercase}Take: nullable("Int"),
						${modelLowercase}OrderBy: nullable("${fieldType}OrderBy"),
					},
            		resolve: async (root, args, ctx) => {
						const { where, skip, take, orderBy } = prepareConditions<typeof args>(args, "${fieldType}")
						// ${relMan?.isRegular ? "Regular relation" : "Syntetic relation"}
						const bindRelation = ${relMan ? `{${relMan.relation.toField}: Number(root.${relMan.relation.fromField})}` : "{}"}
						if(Object.keys(where).length){
							const [count, data] = await ctx.prisma.$transaction([
								ctx.prisma.${modelLowercase}.count({ where: {...where, ...bindRelation }, orderBy }),
								ctx.prisma.${modelLowercase}.findMany({ where: {...where, ...bindRelation }, skip, take, orderBy })
							])
							return { count, data }
						}
						const [count, data] = await ctx.prisma.$transaction([
							ctx.prisma.${modelLowercase}.count({ where: bindRelation }),
							ctx.prisma.${modelLowercase}.findMany({ where: bindRelation, ${"orderBy"}, ${"skip"}, ${"take"}})
						])
						return { count, data }
					}
				})\n`
	}

	if (isObject && !isList) {
		const modelLowercase = typeof fieldType === "string" ? fieldType.charAt(0).toLowerCase() + fieldType.slice(1) : ""
		const relMan = relationManager(prismaJSON, fieldData, modelName);
		dbModelImports.push(fieldType)
		// type: ${relMan?.isRegular ? `nullable("${fieldType}")` : `"${fieldType}"`},${documentation
		return `t${nullable ? ".nullable" : ""}.field("${fieldName}", {
            		type: "${fieldType}",${documentation
				? `description: \`${documentation}\`,` : ""}
					args: {
						${modelLowercase}Where: nullable("${fieldType}Where"),
						${modelLowercase}Skip: nullable("Int"),
						${modelLowercase}Take: nullable("Int"),
						${modelLowercase}OrderBy: nullable("${fieldType}OrderBy"),
					},
            		resolve: async (root, args, ctx) => {
						const { where } = prepareConditions<typeof args>(args, "${fieldType}")
						// ${relMan?.isRegular ? "Regular relation" : "Syntetic relation"}
						const bindRelation = ${relMan ? `{${relMan.relation.toField}: Number(root.${relMan.relation.fromField})}` : "{}"}
						if(Object.keys(where).length) return await ctx.prisma.${modelLowercase}.findFirst({ where: {...where, ...bindRelation } })
						return await ctx.prisma.${modelLowercase}.findFirst({ where: bindRelation })
					}
				})\n`
	}

	if (!inlineScalar && isEnumerator) {
		const enumObject = prismaEnumsJSON.find(en => en.name === fieldType)
		const enumMap = enumObject?.values.map(field => `"${field.name}"`)
		return `t${nullable ? ".nullable" : ""}.field("${fieldName}", {
					type: "${fieldType}",
					description: 'Contains Enum Type, any of: ${enumMap?.join(" | ")}'
				})\n`
	}

	// Mapped JSON fields from the database. Example: kpi = "MappedKPI"
	if (inlineMappedScalar) {
		const isMapped = config.jsonFieldsMap[modelName]?.hasOwnProperty(fieldName)
		if (isMapped) {
			const { type, isList } = config.jsonFieldsMap[modelName][fieldName]
			return `// Custom mapped Json field
					t${nullable ? ".nullable" : ""}.field("${fieldName}", {
						type: ${isList ? `list("${type}")` : `"${type}"`},
						description: 'Custom mapped Json field'
					})\n`
		}
		return `t${nullable ? ".nullable" : ""}.${inlineMappedScalar}("${fieldName}"${documentation ? `, {
					description: "${documentation}"
				})` : ")"}\n`
	}
	return ""
}

function generateModelField(modelData: DMMF.Model) {
	const modelName = modelData.name
	const customFields = getCustomFields(modelName)
	const eachFileds = getEachCustomField(modelName)
	const fields = modelData.fields
	let modelTmp = "";

	for (const fieldData of fields) {
		if (config.models.hasOwnProperty(modelName) && Array.isArray(config.models[modelName].excluded) && !config.models[modelName].excluded?.includes(fieldData.name)) {
			modelTmp += generateField(modelName, fieldData)
		}
		if ((config.models.hasOwnProperty(modelName) && !Array.isArray(config.models[modelName].excluded)) || !config.models.hasOwnProperty(modelName)) {
			modelTmp += generateField(modelName, fieldData)
		}
	}

	if (customFields) modelTmp += customFields
	if (eachFileds) modelTmp += eachFileds

	return `\nexport const ${modelName}Model = objectType({
				name: "${modelName}Model",
				definition(t) {
					t.field("data", {
						type: list("${modelName}"),
					})
					t.field("count", {
						type: "Int"
					})
				}
			})\n
			export const ${modelName}Constant = objectType({
				name: "${modelName}",
				definition(t) {
					${modelTmp}
				}
			})\n`
}

function generateEnum(enumData: DMMF.DatamodelEnum) {
	const fields = enumData.values
	const enumName = enumData.name
	const enumMap = fields.map(field => `"${field.name}"`)
	return `\nexport const ${enumName} = enumType({
				name: "${enumName}",
				members: [${enumMap}],
				description: 'Contains Enum Type, any of: ${enumMap.join(" | ")}'
			})\n`
}

export async function generateNexusModels(models: DMMF.Model[], enums: DMMF.DatamodelEnum[]) {
	prismaJSON = models
	prismaEnumsJSON = enums

	let modelsTmp = "";
	let enumsTmp = "";

	if (Array.isArray(prismaJSON)) {
		for (const modelData of prismaJSON) {
			modelsTmp += generateModelField(modelData)
		}
	}

	if (Array.isArray(prismaEnumsJSON)) {
		for (const enumData of prismaEnumsJSON) {
			enumsTmp += generateEnum(enumData)
		}
		if (prismaEnumsJSON.length) nexusImports.push("enumType")
	}

	// import { ${[...new Set(dbModelImports)]} } from "@sicon/db"
	modelsTmp = `/* eslint-disable max-lines-per-function */
				import {objectType, list${nexusImports.length ? "," : ""}${[...new Set(nexusImports)]}} from "nexus"
				import { prepareConditions } from "../../utils/prepare-conditions"
					${enumsTmp}
					${modelsTmp}
				`
	const formatted = beautify.js(modelsTmp, {
		indent_size: 4,
		indent_with_tabs: true,
		space_in_empty_paren: true,
		brace_style: "preserve-inline",
		// test_output_raw: true,
	})

	await fileWrite(fileToWrite, formatted)
}

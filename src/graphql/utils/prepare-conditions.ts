/* eslint-disable security/detect-object-injection */
/* eslint-disable no-prototype-builtins */
/* eslint-disable @typescript-eslint/no-var-requires */

// local interfaces
import { byType, IWhere, IOrderBy } from "../../interfaces/graphql"
// generator interfaces
// import { IConfig, IExcludeWhereCondition } from "@prisma-nexus-generator/src/interfaces";
// generator config
const config: any = require("../../../prisma-nexus-generator/generator-config.json")

export function prepareConditions<Args>(args: Args, model: string) {
	const modelName = model.charAt(0).toLowerCase() + model.slice(1)

	const groupByArgs = args[`${modelName}GroupBy` as keyof Args] as byType
	const groupByExist = groupByArgs && Array.isArray(groupByArgs) && groupByArgs.length

	const whereArgs = args[`${modelName}Where` as keyof Args] as IWhere
	const whereExist = whereArgs && !!Object.keys(whereArgs).length

	const orderByArgs = args[`${modelName}OrderBy` as keyof Args] as IOrderBy
	const orderByExist = orderByArgs && !!Object.keys(orderByArgs).length

	const skipArgs = args[`${modelName}Skip` as keyof Args] as number
	const skip = skipArgs ? Number(skipArgs) : undefined

	const takeArgs = args[`${modelName}Take` as keyof Args] as number
	const take = takeArgs ? Number(takeArgs) : undefined

	let by: byType = undefined
	if (groupByExist) by = groupByArgs

	let where: IWhere = {}
	if (whereExist) where = { ...whereArgs }

	let orderBy: IOrderBy = {}
	if (orderByExist) orderBy = { ...orderByArgs }

	// IGNORE CUSTOM FIELDS from prisma where conditions
	if (config.excludeWhereConditions.hasOwnProperty(model) && Array.isArray(config.excludeWhereConditions[model])) {
		for (const field of config.excludeWhereConditions[model]) {
			delete where[field as any]
		}
	}
	// END IGNORE CUSTOM FIELDS from prisma

	// DEBUG ONLY
	// console.log(`where args for ${modelName}Where:`, { where, orderBy, skip, take })
	// console.log("Has final where Conditions:", where)
	// console.log("Prepare conditions final args", args);
	return {
		by,
		where,
		orderBy,
		skip,
		take
	}
}

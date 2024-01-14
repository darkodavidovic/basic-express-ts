export interface IConfigModel {
	[key: string]: {
		authorized?: string[]
		excluded?: string[]
	}
}

export interface ICustomFieldData {
	name: string
	kind: string
	type: string
}

export interface ICustomField {
	[key: string]: ICustomFieldData[]
}

export interface IExcludeWhereCondition {
	[key: string]: string[]
}

export interface IJSONMap {
	[key: string]: {
		[key: string]: {
			type: string
			isList: boolean
		}
	}
}

export interface IConfig {
	modelsFile: string
	queryWhereInputsFile: string
	queryOrderByInputsFile: string
	queryQroupByEnumsFile: string
	queriesFile: string
	subscriptionsFile: string
	mutationsPayloadsFile: string
	mutationsInputsFile: string
	mutationsUpdateFile: string
	mutationsUpdateManyFile: string
	mutationsCreateFile: string
	mutationsCreateManyFile: string
	mutationsDeleteFile: string
	mutationsDeleteManyFile: string
	models: IConfigModel
	customFields: ICustomField
	excludeWhereConditions: IExcludeWhereCondition
	excludeQuery: string[]
	excludeSubscription: string[]
	excludeGroupByInputs: string[]
	excludeWhereInputs: string[]
	jsonFieldsMap: IJSONMap
}

export enum EInlineScalarTypes {
	Int = "int",
	BigInt = "bigInt",
	Decimal = "decimal",
	Float = "float",
	String = "string",
	Boolean = "boolean",
	DateTime = "dateTime"
}

export enum EInlineMappedScalarTypes {
	Json = "json"
}

export enum EExtendedQueryWhereTypes {
	Int = "WhereInt",
	String = "WhereString",
	DateTime = "WhereDateTime",
	Decimal = "WhereString"
}

export enum EExtendedQueryOrderByTypes {
	Int = "EnumAscDesc",
	String = "EnumAscDesc",
	DateTime = "EnumAscDesc",
	Decimal = "EnumAscDesc"
}

export enum ESubscriptionInputTypes {
	Int = "int",
	String = "string",
	DateTime = "dateTime"
}

export interface ICustomFields {
	modelName: string
	fields: { field: string }[]
}

export interface IEachCustomField {
	field: string
}

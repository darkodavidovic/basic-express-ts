
export type byType = string[] | undefined

export interface IWhere {
	[key: string]: object
}

export interface IOrderBy {
	[key: string]: unknown
}

export interface IArgs {
	where?: IWhere | null | undefined
	orderBy?: IOrderBy | null | undefined
	skip?: number | null | undefined
	take?: number | null | undefined
}

export enum EMiddlewareActions {
	create,
	update,
	delete,
	createMany,
	updateMany,
	deleteMany
}

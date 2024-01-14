import { DMMF } from '@prisma/generator-helper/dist';

export interface IRelation {
	fromField: string
	toField: string
}

interface IRelationManager {
	isRegular: boolean
	relation: IRelation
}

export function relationManager(prismaJSON: DMMF.Model[], fieldData: DMMF.Field, toModel: string): IRelationManager | undefined {
	const fromModel = fieldData.type // the type here is current Model/Type name to ask relation from
	const fromField = fieldData?.relationFromFields?.[0] || "";
	const toField = fieldData?.relationToFields?.[0] || "";
	if (fromField && toField) return { isRegular: true, relation: { fromField, toField } }
	const synteticRelation = getSynteticRelation(prismaJSON, fromModel, toModel)
	if (synteticRelation.fromField && synteticRelation.toField) return { isRegular: false, relation: synteticRelation }
	return undefined
}

function getSynteticRelation(prismaJSON: DMMF.Model[], fromModel: string, toModel: string): IRelation {
	const modelObject = prismaJSON.find((model) => model.name === fromModel);
	const fieldObject = modelObject?.fields?.find(field => field.kind === "object" && field.type === toModel);
	const fromField = fieldObject?.relationFromFields?.[0] || "";
	const toField = fieldObject?.relationToFields?.[0] || "";
	// swap the relation from to because in syntetic we have reversed relation call
	return { fromField: toField, toField: fromField };
}

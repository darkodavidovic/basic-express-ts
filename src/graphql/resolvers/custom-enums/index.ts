import { enumType } from "nexus"

// This enum is used as extended field for orderBy in resolver/query-inputs/order-inputs.ts
// used also in order-generator
export const EnumAscDesc = enumType({
	name: "EnumAscDesc",
	members: ["asc", "desc"],
	description: 'orderBy can recieve only one string "asc" or "desc"'
})

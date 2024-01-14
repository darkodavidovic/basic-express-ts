import { list, nonNull, nullable, queryField } from "nexus"
import { prepareConditions } from "../../utils/prepare-conditions"

// export const deviceHistoryQuery = queryField("deviceHistoryQuery", {
// 	type: "DeviceDataModel",
// 	args: {
// 		deviceDataWhere: nullable("DeviceDataWhere"),
// 		deviceDataSkip: nullable("Int"),
// 		deviceDataTake: nullable("Int")
// 	},
// 	resolve: async (_, args, ctx) => {
// 		const { where, skip, take } = prepareConditions<typeof args>(args, "DeviceData")
// 		const [count, data] = await ctx.prisma.$transaction([
// 			ctx.prisma.deviceData.count({ where }),
// 			ctx.prisma.deviceData.findMany({ where, skip, take })
// 		]) as [number, DeviceData[]]
// 		return { count, data }
// 	}
// })

export const customQueriesPlaceholder = ""

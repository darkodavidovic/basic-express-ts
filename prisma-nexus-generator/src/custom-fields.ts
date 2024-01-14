import { ICustomFields, IEachCustomField } from "./interfaces"

export const customFields: ICustomFields[] = [
	{
		modelName: "DeviceInstance",
		fields: [
			{
				field: `// custom resolved field but excluded from model
						t.nullable.field("kpi", {
							type: "JSON",
							resolve: async (root, _args, ctx) => {
								const kpiData = await ctx.prisma.deviceInstance.findFirst({
									where: { id: { equals: root.id } },
									select: { kpi: true }
								})
								if (kpiData?.kpi && Object.keys(kpiData.kpi).length) return kpiData.kpi
								return await ctx.resource.models.DeviceInstance.extractKPIfromDataSet({
									ID: root.id,
									KPI: null
								})
							}
						})`
			},
			{
				field: `// custom field
						t.nullable.field("deviceStatus", {
							type: "JSON",
							resolve: async (root, _args, ctx) => {
								const resource = ctx.resource
								const status = await getCurrentDeviceStatus(resource, root.id)
								return status
							}
						})`
			}
		]
	}
]

export const eachCustomField: IEachCustomField[] = []

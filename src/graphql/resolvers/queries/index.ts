import { nullable, queryField } from "nexus"
import { prepareConditions } from "../../utils/prepare-conditions"

export const activeEventInstanceQuery = queryField("activeEventInstanceQuery", {
	type: "ActiveEventInstanceModel",
	args: {
		activeEventInstanceWhere: nullable("ActiveEventInstanceWhere"),
		activeEventInstanceSkip: nullable("Int"),
		activeEventInstanceTake: nullable("Int"),
		activeEventInstanceOrderBy: nullable("ActiveEventInstanceOrderBy")
	},
	resolve: async (_, args, ctx) => {
		const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "ActiveEventInstance")
		const [count, data] = await ctx.prisma.$transaction([
			ctx.prisma.activeEventInstance.count({ where, orderBy }),
			ctx.prisma.activeEventInstance.findMany({ where, skip, take, orderBy })
		])
		return { count, data }
	}
})

export const databaseStatusQuery = queryField("databaseStatusQuery", {
	type: "DatabaseStatusModel",
	args: {
		databaseStatusWhere: nullable("DatabaseStatusWhere"),
		databaseStatusSkip: nullable("Int"),
		databaseStatusTake: nullable("Int"),
		databaseStatusOrderBy: nullable("DatabaseStatusOrderBy")
	},
	resolve: async (_, args, ctx) => {
		const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "DatabaseStatus")
		const [count, data] = await ctx.prisma.$transaction([
			ctx.prisma.databaseStatus.count({ where, orderBy }),
			ctx.prisma.databaseStatus.findMany({ where, skip, take, orderBy })
		])
		return { count, data }
	}
})

export const deviceIndexDataTypeQuery = queryField("deviceIndexDataTypeQuery", {
	type: "DeviceIndexDataTypeModel",
	args: {
		deviceIndexDataTypeWhere: nullable("DeviceIndexDataTypeWhere"),
		deviceIndexDataTypeSkip: nullable("Int"),
		deviceIndexDataTypeTake: nullable("Int"),
		deviceIndexDataTypeOrderBy: nullable("DeviceIndexDataTypeOrderBy")
	},
	resolve: async (_, args, ctx) => {
		const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "DeviceIndexDataType")
		const [count, data] = await ctx.prisma.$transaction([
			ctx.prisma.deviceIndexDataType.count({ where, orderBy }),
			ctx.prisma.deviceIndexDataType.findMany({ where, skip, take, orderBy })
		])
		return { count, data }
	}
})

export const deviceClassQuery = queryField("deviceClassQuery", {
	type: "DeviceClassModel",
	args: {
		deviceClassWhere: nullable("DeviceClassWhere"),
		deviceClassSkip: nullable("Int"),
		deviceClassTake: nullable("Int"),
		deviceClassOrderBy: nullable("DeviceClassOrderBy")
	},
	resolve: async (_, args, ctx) => {
		const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "DeviceClass")
		const [count, data] = await ctx.prisma.$transaction([
			ctx.prisma.deviceClass.count({ where, orderBy }),
			ctx.prisma.deviceClass.findMany({ where, skip, take, orderBy })
		])
		return { count, data }
	}
})

export const deviceControlQuery = queryField("deviceControlQuery", {
	type: "DeviceControlModel",
	args: {
		deviceControlWhere: nullable("DeviceControlWhere"),
		deviceControlSkip: nullable("Int"),
		deviceControlTake: nullable("Int"),
		deviceControlOrderBy: nullable("DeviceControlOrderBy")
	},
	resolve: async (_, args, ctx) => {
		const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "DeviceControl")
		const [count, data] = await ctx.prisma.$transaction([
			ctx.prisma.deviceControl.count({ where, orderBy }),
			ctx.prisma.deviceControl.findMany({ where, skip, take, orderBy })
		])
		return { count, data }
	}
})

export const deviceCycleQuery = queryField("deviceCycleQuery", {
	type: "DeviceCycleModel",
	args: {
		deviceCycleWhere: nullable("DeviceCycleWhere"),
		deviceCycleSkip: nullable("Int"),
		deviceCycleTake: nullable("Int"),
		deviceCycleOrderBy: nullable("DeviceCycleOrderBy")
	},
	resolve: async (_, args, ctx) => {
		const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "DeviceCycle")
		const [count, data] = await ctx.prisma.$transaction([
			ctx.prisma.deviceCycle.count({ where, orderBy }),
			ctx.prisma.deviceCycle.findMany({ where, skip, take, orderBy })
		])
		return { count, data }
	}
})

export const deviceFileQuery = queryField("deviceFileQuery", {
	type: "DeviceFileModel",
	args: {
		deviceFileWhere: nullable("DeviceFileWhere"),
		deviceFileSkip: nullable("Int"),
		deviceFileTake: nullable("Int"),
		deviceFileOrderBy: nullable("DeviceFileOrderBy")
	},
	resolve: async (_, args, ctx) => {
		const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "DeviceFile")
		const [count, data] = await ctx.prisma.$transaction([
			ctx.prisma.deviceFile.count({ where, orderBy }),
			ctx.prisma.deviceFile.findMany({ where, skip, take, orderBy })
		])
		return { count, data }
	}
})

export const deviceInstanceQuery = queryField("deviceInstanceQuery", {
	type: "DeviceInstanceModel",
	args: {
		deviceInstanceWhere: nullable("DeviceInstanceWhere"),
		deviceInstanceSkip: nullable("Int"),
		deviceInstanceTake: nullable("Int"),
		deviceInstanceOrderBy: nullable("DeviceInstanceOrderBy")
	},
	resolve: async (_, args, ctx) => {
		const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "DeviceInstance")
		const [count, data] = await ctx.prisma.$transaction([
			ctx.prisma.deviceInstance.count({ where, orderBy }),
			ctx.prisma.deviceInstance.findMany({ where, skip, take, orderBy })
		])
		return { count, data }
	}
})

export const etcHostQuery = queryField("etcHostQuery", {
	type: "EtcHostModel",
	args: {
		etcHostWhere: nullable("EtcHostWhere"),
		etcHostSkip: nullable("Int"),
		etcHostTake: nullable("Int"),
		etcHostOrderBy: nullable("EtcHostOrderBy")
	},
	resolve: async (_, args, ctx) => {
		const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "EtcHost")
		const [count, data] = await ctx.prisma.$transaction([
			ctx.prisma.etcHost.count({ where, orderBy }),
			ctx.prisma.etcHost.findMany({ where, skip, take, orderBy })
		])
		return { count, data }
	}
})

export const eventClassQuery = queryField("eventClassQuery", {
	type: "EventClassModel",
	args: {
		eventClassWhere: nullable("EventClassWhere"),
		eventClassSkip: nullable("Int"),
		eventClassTake: nullable("Int"),
		eventClassOrderBy: nullable("EventClassOrderBy")
	},
	resolve: async (_, args, ctx) => {
		const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "EventClass")
		const [count, data] = await ctx.prisma.$transaction([
			ctx.prisma.eventClass.count({ where, orderBy }),
			ctx.prisma.eventClass.findMany({ where, skip, take, orderBy })
		])
		return { count, data }
	}
})

export const eventGroupCodeQuery = queryField("eventGroupCodeQuery", {
	type: "EventGroupCodeModel",
	args: {
		eventGroupCodeWhere: nullable("EventGroupCodeWhere"),
		eventGroupCodeSkip: nullable("Int"),
		eventGroupCodeTake: nullable("Int"),
		eventGroupCodeOrderBy: nullable("EventGroupCodeOrderBy")
	},
	resolve: async (_, args, ctx) => {
		const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "EventGroupCode")
		const [count, data] = await ctx.prisma.$transaction([
			ctx.prisma.eventGroupCode.count({ where, orderBy }),
			ctx.prisma.eventGroupCode.findMany({ where, skip, take, orderBy })
		])
		return { count, data }
	}
})

export const eventGroupDataQuery = queryField("eventGroupDataQuery", {
	type: "EventGroupDataModel",
	args: {
		eventGroupDataWhere: nullable("EventGroupDataWhere"),
		eventGroupDataSkip: nullable("Int"),
		eventGroupDataTake: nullable("Int"),
		eventGroupDataOrderBy: nullable("EventGroupDataOrderBy")
	},
	resolve: async (_, args, ctx) => {
		const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "EventGroupData")
		const [count, data] = await ctx.prisma.$transaction([
			ctx.prisma.eventGroupData.count({ where, orderBy }),
			ctx.prisma.eventGroupData.findMany({ where, skip, take, orderBy })
		])
		return { count, data }
	}
})

export const eventGroupDataHourAggregateQuery = queryField("eventGroupDataHourAggregateQuery", {
	type: "EventGroupDataHourAggregateModel",
	args: {
		eventGroupDataHourAggregateWhere: nullable("EventGroupDataHourAggregateWhere"),
		eventGroupDataHourAggregateSkip: nullable("Int"),
		eventGroupDataHourAggregateTake: nullable("Int"),
		eventGroupDataHourAggregateOrderBy: nullable("EventGroupDataHourAggregateOrderBy")
	},
	resolve: async (_, args, ctx) => {
		const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "EventGroupDataHourAggregate")
		const [count, data] = await ctx.prisma.$transaction([
			ctx.prisma.eventGroupDataHourAggregate.count({ where, orderBy }),
			ctx.prisma.eventGroupDataHourAggregate.findMany({ where, skip, take, orderBy })
		])
		return { count, data }
	}
})

export const eventGroupValueQuery = queryField("eventGroupValueQuery", {
	type: "EventGroupValueModel",
	args: {
		eventGroupValueWhere: nullable("EventGroupValueWhere"),
		eventGroupValueSkip: nullable("Int"),
		eventGroupValueTake: nullable("Int"),
		eventGroupValueOrderBy: nullable("EventGroupValueOrderBy")
	},
	resolve: async (_, args, ctx) => {
		const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "EventGroupValue")
		const [count, data] = await ctx.prisma.$transaction([
			ctx.prisma.eventGroupValue.count({ where, orderBy }),
			ctx.prisma.eventGroupValue.findMany({ where, skip, take, orderBy })
		])
		return { count, data }
	}
})

export const eventGroupQuery = queryField("eventGroupQuery", {
	type: "EventGroupModel",
	args: {
		eventGroupWhere: nullable("EventGroupWhere"),
		eventGroupSkip: nullable("Int"),
		eventGroupTake: nullable("Int"),
		eventGroupOrderBy: nullable("EventGroupOrderBy")
	},
	resolve: async (_, args, ctx) => {
		const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "EventGroup")
		const [count, data] = await ctx.prisma.$transaction([
			ctx.prisma.eventGroup.count({ where, orderBy }),
			ctx.prisma.eventGroup.findMany({ where, skip, take, orderBy })
		])
		return { count, data }
	}
})

export const eventInstanceQuery = queryField("eventInstanceQuery", {
	type: "EventInstanceModel",
	args: {
		eventInstanceWhere: nullable("EventInstanceWhere"),
		eventInstanceSkip: nullable("Int"),
		eventInstanceTake: nullable("Int"),
		eventInstanceOrderBy: nullable("EventInstanceOrderBy")
	},
	resolve: async (_, args, ctx) => {
		const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "EventInstance")
		const [count, data] = await ctx.prisma.$transaction([
			ctx.prisma.eventInstance.count({ where, orderBy }),
			ctx.prisma.eventInstance.findMany({ where, skip, take, orderBy })
		])
		return { count, data }
	}
})

export const eventTypeQuery = queryField("eventTypeQuery", {
	type: "EventTypeModel",
	args: {
		eventTypeWhere: nullable("EventTypeWhere"),
		eventTypeSkip: nullable("Int"),
		eventTypeTake: nullable("Int"),
		eventTypeOrderBy: nullable("EventTypeOrderBy")
	},
	resolve: async (_, args, ctx) => {
		const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "EventType")
		const [count, data] = await ctx.prisma.$transaction([
			ctx.prisma.eventType.count({ where, orderBy }),
			ctx.prisma.eventType.findMany({ where, skip, take, orderBy })
		])
		return { count, data }
	}
})

export const floorPlanQuery = queryField("floorPlanQuery", {
	type: "FloorPlanModel",
	args: {
		floorPlanWhere: nullable("FloorPlanWhere"),
		floorPlanSkip: nullable("Int"),
		floorPlanTake: nullable("Int"),
		floorPlanOrderBy: nullable("FloorPlanOrderBy")
	},
	resolve: async (_, args, ctx) => {
		const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "FloorPlan")
		const [count, data] = await ctx.prisma.$transaction([
			ctx.prisma.floorPlan.count({ where, orderBy }),
			ctx.prisma.floorPlan.findMany({ where, skip, take, orderBy })
		])
		return { count, data }
	}
})

export const deviceDataQuery = queryField("deviceDataQuery", {
	type: "DeviceDataModel",
	args: {
		deviceDataWhere: nullable("DeviceDataWhere"),
		deviceDataSkip: nullable("Int"),
		deviceDataTake: nullable("Int"),
		deviceDataOrderBy: nullable("DeviceDataOrderBy")
	},
	resolve: async (_, args, ctx) => {
		const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "DeviceData")
		const [count, data] = await ctx.prisma.$transaction([
			ctx.prisma.deviceData.count({ where, orderBy }),
			ctx.prisma.deviceData.findMany({ where, skip, take, orderBy })
		])
		return { count, data }
	}
})

export const mainDeviceClassQuery = queryField("mainDeviceClassQuery", {
	type: "MainDeviceClassModel",
	args: {
		mainDeviceClassWhere: nullable("MainDeviceClassWhere"),
		mainDeviceClassSkip: nullable("Int"),
		mainDeviceClassTake: nullable("Int"),
		mainDeviceClassOrderBy: nullable("MainDeviceClassOrderBy")
	},
	resolve: async (_, args, ctx) => {
		const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "MainDeviceClass")
		const [count, data] = await ctx.prisma.$transaction([
			ctx.prisma.mainDeviceClass.count({ where, orderBy }),
			ctx.prisma.mainDeviceClass.findMany({ where, skip, take, orderBy })
		])
		return { count, data }
	}
})

export const mainDeviceInstanceQuery = queryField("mainDeviceInstanceQuery", {
	type: "MainDeviceInstanceModel",
	args: {
		mainDeviceInstanceWhere: nullable("MainDeviceInstanceWhere"),
		mainDeviceInstanceSkip: nullable("Int"),
		mainDeviceInstanceTake: nullable("Int"),
		mainDeviceInstanceOrderBy: nullable("MainDeviceInstanceOrderBy")
	},
	resolve: async (_, args, ctx) => {
		const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "MainDeviceInstance")
		const [count, data] = await ctx.prisma.$transaction([
			ctx.prisma.mainDeviceInstance.count({ where, orderBy }),
			ctx.prisma.mainDeviceInstance.findMany({ where, skip, take, orderBy })
		])
		return { count, data }
	}
})

export const performanceIndicatorConfigQuery = queryField("performanceIndicatorConfigQuery", {
	type: "PerformanceIndicatorConfigModel",
	args: {
		performanceIndicatorConfigWhere: nullable("PerformanceIndicatorConfigWhere"),
		performanceIndicatorConfigSkip: nullable("Int"),
		performanceIndicatorConfigTake: nullable("Int"),
		performanceIndicatorConfigOrderBy: nullable("PerformanceIndicatorConfigOrderBy")
	},
	resolve: async (_, args, ctx) => {
		const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "PerformanceIndicatorConfig")
		const [count, data] = await ctx.prisma.$transaction([
			ctx.prisma.performanceIndicatorConfig.count({ where, orderBy }),
			ctx.prisma.performanceIndicatorConfig.findMany({ where, skip, take, orderBy })
		])
		return { count, data }
	}
})

export const privilegeQuery = queryField("privilegeQuery", {
	type: "PrivilegeModel",
	args: {
		privilegeWhere: nullable("PrivilegeWhere"),
		privilegeSkip: nullable("Int"),
		privilegeTake: nullable("Int"),
		privilegeOrderBy: nullable("PrivilegeOrderBy")
	},
	resolve: async (_, args, ctx) => {
		const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "Privilege")
		const [count, data] = await ctx.prisma.$transaction([
			ctx.prisma.privilege.count({ where, orderBy }),
			ctx.prisma.privilege.findMany({ where, skip, take, orderBy })
		])
		return { count, data }
	}
})

export const processDataQuery = queryField("processDataQuery", {
	type: "ProcessDataModel",
	args: {
		processDataWhere: nullable("ProcessDataWhere"),
		processDataSkip: nullable("Int"),
		processDataTake: nullable("Int"),
		processDataOrderBy: nullable("ProcessDataOrderBy")
	},
	resolve: async (_, args, ctx) => {
		const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "ProcessData")
		const [count, data] = await ctx.prisma.$transaction([
			ctx.prisma.processData.count({ where, orderBy }),
			ctx.prisma.processData.findMany({ where, skip, take, orderBy })
		])
		return { count, data }
	}
})

export const processDataConditionQuery = queryField("processDataConditionQuery", {
	type: "ProcessDataConditionModel",
	args: {
		processDataConditionWhere: nullable("ProcessDataConditionWhere"),
		processDataConditionSkip: nullable("Int"),
		processDataConditionTake: nullable("Int"),
		processDataConditionOrderBy: nullable("ProcessDataConditionOrderBy")
	},
	resolve: async (_, args, ctx) => {
		const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "ProcessDataCondition")
		const [count, data] = await ctx.prisma.$transaction([
			ctx.prisma.processDataCondition.count({ where, orderBy }),
			ctx.prisma.processDataCondition.findMany({ where, skip, take, orderBy })
		])
		return { count, data }
	}
})

export const processDataModeQuery = queryField("processDataModeQuery", {
	type: "ProcessDataModeModel",
	args: {
		processDataModeWhere: nullable("ProcessDataModeWhere"),
		processDataModeSkip: nullable("Int"),
		processDataModeTake: nullable("Int"),
		processDataModeOrderBy: nullable("ProcessDataModeOrderBy")
	},
	resolve: async (_, args, ctx) => {
		const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "ProcessDataMode")
		const [count, data] = await ctx.prisma.$transaction([
			ctx.prisma.processDataMode.count({ where, orderBy }),
			ctx.prisma.processDataMode.findMany({ where, skip, take, orderBy })
		])
		return { count, data }
	}
})

export const registrationStatusQuery = queryField("registrationStatusQuery", {
	type: "RegistrationStatusModel",
	args: {
		registrationStatusWhere: nullable("RegistrationStatusWhere"),
		registrationStatusSkip: nullable("Int"),
		registrationStatusTake: nullable("Int"),
		registrationStatusOrderBy: nullable("RegistrationStatusOrderBy")
	},
	resolve: async (_, args, ctx) => {
		const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "RegistrationStatus")
		const [count, data] = await ctx.prisma.$transaction([
			ctx.prisma.registrationStatus.count({ where, orderBy }),
			ctx.prisma.registrationStatus.findMany({ where, skip, take, orderBy })
		])
		return { count, data }
	}
})

export const replayConfigQuery = queryField("replayConfigQuery", {
	type: "ReplayConfigModel",
	args: {
		replayConfigWhere: nullable("ReplayConfigWhere"),
		replayConfigSkip: nullable("Int"),
		replayConfigTake: nullable("Int"),
		replayConfigOrderBy: nullable("ReplayConfigOrderBy")
	},
	resolve: async (_, args, ctx) => {
		const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "ReplayConfig")
		const [count, data] = await ctx.prisma.$transaction([
			ctx.prisma.replayConfig.count({ where, orderBy }),
			ctx.prisma.replayConfig.findMany({ where, skip, take, orderBy })
		])
		return { count, data }
	}
})

export const replayDataQuery = queryField("replayDataQuery", {
	type: "ReplayDataModel",
	args: {
		replayDataWhere: nullable("ReplayDataWhere"),
		replayDataSkip: nullable("Int"),
		replayDataTake: nullable("Int"),
		replayDataOrderBy: nullable("ReplayDataOrderBy")
	},
	resolve: async (_, args, ctx) => {
		const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "ReplayData")
		const [count, data] = await ctx.prisma.$transaction([
			ctx.prisma.replayData.count({ where, orderBy }),
			ctx.prisma.replayData.findMany({ where, skip, take, orderBy })
		])
		return { count, data }
	}
})

export const replaySetQuery = queryField("replaySetQuery", {
	type: "ReplaySetModel",
	args: {
		replaySetWhere: nullable("ReplaySetWhere"),
		replaySetSkip: nullable("Int"),
		replaySetTake: nullable("Int"),
		replaySetOrderBy: nullable("ReplaySetOrderBy")
	},
	resolve: async (_, args, ctx) => {
		const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "ReplaySet")
		const [count, data] = await ctx.prisma.$transaction([
			ctx.prisma.replaySet.count({ where, orderBy }),
			ctx.prisma.replaySet.findMany({ where, skip, take, orderBy })
		])
		return { count, data }
	}
})

export const reportingQuery = queryField("reportingQuery", {
	type: "ReportingModel",
	args: {
		reportingWhere: nullable("ReportingWhere"),
		reportingSkip: nullable("Int"),
		reportingTake: nullable("Int"),
		reportingOrderBy: nullable("ReportingOrderBy")
	},
	resolve: async (_, args, ctx) => {
		const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "Reporting")
		const [count, data] = await ctx.prisma.$transaction([
			ctx.prisma.reporting.count({ where, orderBy }),
			ctx.prisma.reporting.findMany({ where, skip, take, orderBy })
		])
		return { count, data }
	}
})

export const reportingConfigQuery = queryField("reportingConfigQuery", {
	type: "ReportingConfigModel",
	args: {
		reportingConfigWhere: nullable("ReportingConfigWhere"),
		reportingConfigSkip: nullable("Int"),
		reportingConfigTake: nullable("Int"),
		reportingConfigOrderBy: nullable("ReportingConfigOrderBy")
	},
	resolve: async (_, args, ctx) => {
		const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "ReportingConfig")
		const [count, data] = await ctx.prisma.$transaction([
			ctx.prisma.reportingConfig.count({ where, orderBy }),
			ctx.prisma.reportingConfig.findMany({ where, skip, take, orderBy })
		])
		return { count, data }
	}
})

export const representationQuery = queryField("representationQuery", {
	type: "RepresentationModel",
	args: {
		representationWhere: nullable("RepresentationWhere"),
		representationSkip: nullable("Int"),
		representationTake: nullable("Int"),
		representationOrderBy: nullable("RepresentationOrderBy")
	},
	resolve: async (_, args, ctx) => {
		const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "Representation")
		const [count, data] = await ctx.prisma.$transaction([
			ctx.prisma.representation.count({ where, orderBy }),
			ctx.prisma.representation.findMany({ where, skip, take, orderBy })
		])
		return { count, data }
	}
})

export const rolePrivilegeQuery = queryField("rolePrivilegeQuery", {
	type: "RolePrivilegeModel",
	args: {
		rolePrivilegeWhere: nullable("RolePrivilegeWhere"),
		rolePrivilegeSkip: nullable("Int"),
		rolePrivilegeTake: nullable("Int"),
		rolePrivilegeOrderBy: nullable("RolePrivilegeOrderBy")
	},
	resolve: async (_, args, ctx) => {
		const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "RolePrivilege")
		const [count, data] = await ctx.prisma.$transaction([
			ctx.prisma.rolePrivilege.count({ where, orderBy }),
			ctx.prisma.rolePrivilege.findMany({ where, skip, take, orderBy })
		])
		return { count, data }
	}
})

export const roleQuery = queryField("roleQuery", {
	type: "RoleModel",
	args: {
		roleWhere: nullable("RoleWhere"),
		roleSkip: nullable("Int"),
		roleTake: nullable("Int"),
		roleOrderBy: nullable("RoleOrderBy")
	},
	resolve: async (_, args, ctx) => {
		const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "Role")
		const [count, data] = await ctx.prisma.$transaction([
			ctx.prisma.role.count({ where, orderBy }),
			ctx.prisma.role.findMany({ where, skip, take, orderBy })
		])
		return { count, data }
	}
})

export const softwareAdapterQuery = queryField("softwareAdapterQuery", {
	type: "SoftwareAdapterModel",
	args: {
		softwareAdapterWhere: nullable("SoftwareAdapterWhere"),
		softwareAdapterSkip: nullable("Int"),
		softwareAdapterTake: nullable("Int"),
		softwareAdapterOrderBy: nullable("SoftwareAdapterOrderBy")
	},
	resolve: async (_, args, ctx) => {
		const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "SoftwareAdapter")
		const [count, data] = await ctx.prisma.$transaction([
			ctx.prisma.softwareAdapter.count({ where, orderBy }),
			ctx.prisma.softwareAdapter.findMany({ where, skip, take, orderBy })
		])
		return { count, data }
	}
})

export const timeseriesQuery = queryField("timeseriesQuery", {
	type: "TimeseriesModel",
	args: {
		timeseriesWhere: nullable("TimeseriesWhere"),
		timeseriesSkip: nullable("Int"),
		timeseriesTake: nullable("Int"),
		timeseriesOrderBy: nullable("TimeseriesOrderBy")
	},
	resolve: async (_, args, ctx) => {
		const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "Timeseries")
		const [count, data] = await ctx.prisma.$transaction([
			ctx.prisma.timeseries.count({ where, orderBy }),
			ctx.prisma.timeseries.findMany({ where, skip, take, orderBy })
		])
		return { count, data }
	}
})

export const timeseriesDataQuery = queryField("timeseriesDataQuery", {
	type: "TimeseriesDataModel",
	args: {
		timeseriesDataWhere: nullable("TimeseriesDataWhere"),
		timeseriesDataSkip: nullable("Int"),
		timeseriesDataTake: nullable("Int"),
		timeseriesDataOrderBy: nullable("TimeseriesDataOrderBy")
	},
	resolve: async (_, args, ctx) => {
		const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "TimeseriesData")
		const [count, data] = await ctx.prisma.$transaction([
			ctx.prisma.timeseriesData.count({ where, orderBy }),
			ctx.prisma.timeseriesData.findMany({ where, skip, take, orderBy })
		])
		return { count, data }
	}
})

export const timeseriesDataHourAggregateQuery = queryField("timeseriesDataHourAggregateQuery", {
	type: "TimeseriesDataHourAggregateModel",
	args: {
		timeseriesDataHourAggregateWhere: nullable("TimeseriesDataHourAggregateWhere"),
		timeseriesDataHourAggregateSkip: nullable("Int"),
		timeseriesDataHourAggregateTake: nullable("Int"),
		timeseriesDataHourAggregateOrderBy: nullable("TimeseriesDataHourAggregateOrderBy")
	},
	resolve: async (_, args, ctx) => {
		const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "TimeseriesDataHourAggregate")
		const [count, data] = await ctx.prisma.$transaction([
			ctx.prisma.timeseriesDataHourAggregate.count({ where, orderBy }),
			ctx.prisma.timeseriesDataHourAggregate.findMany({ where, skip, take, orderBy })
		])
		return { count, data }
	}
})

export const updaterConfigQuery = queryField("updaterConfigQuery", {
	type: "UpdaterConfigModel",
	args: {
		updaterConfigWhere: nullable("UpdaterConfigWhere"),
		updaterConfigSkip: nullable("Int"),
		updaterConfigTake: nullable("Int"),
		updaterConfigOrderBy: nullable("UpdaterConfigOrderBy")
	},
	resolve: async (_, args, ctx) => {
		const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "UpdaterConfig")
		const [count, data] = await ctx.prisma.$transaction([
			ctx.prisma.updaterConfig.count({ where, orderBy }),
			ctx.prisma.updaterConfig.findMany({ where, skip, take, orderBy })
		])
		return { count, data }
	}
})

export const userRoleQuery = queryField("userRoleQuery", {
	type: "UserRoleModel",
	args: {
		userRoleWhere: nullable("UserRoleWhere"),
		userRoleSkip: nullable("Int"),
		userRoleTake: nullable("Int"),
		userRoleOrderBy: nullable("UserRoleOrderBy")
	},
	resolve: async (_, args, ctx) => {
		const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "UserRole")
		const [count, data] = await ctx.prisma.$transaction([
			ctx.prisma.userRole.count({ where, orderBy }),
			ctx.prisma.userRole.findMany({ where, skip, take, orderBy })
		])
		return { count, data }
	}
})

export const userQuery = queryField("userQuery", {
	type: "UserModel",
	args: {
		userWhere: nullable("UserWhere"),
		userSkip: nullable("Int"),
		userTake: nullable("Int"),
		userOrderBy: nullable("UserOrderBy")
	},
	resolve: async (_, args, ctx) => {
		const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "User")
		const [count, data] = await ctx.prisma.$transaction([
			ctx.prisma.user.count({ where, orderBy }),
			ctx.prisma.user.findMany({ where, skip, take, orderBy })
		])
		return { count, data }
	}
})

export const vendorQuery = queryField("vendorQuery", {
	type: "VendorModel",
	args: {
		vendorWhere: nullable("VendorWhere"),
		vendorSkip: nullable("Int"),
		vendorTake: nullable("Int"),
		vendorOrderBy: nullable("VendorOrderBy")
	},
	resolve: async (_, args, ctx) => {
		const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "Vendor")
		const [count, data] = await ctx.prisma.$transaction([
			ctx.prisma.vendor.count({ where, orderBy }),
			ctx.prisma.vendor.findMany({ where, skip, take, orderBy })
		])
		return { count, data }
	}
})

export const xConfigQuery = queryField("xConfigQuery", {
	type: "XConfigModel",
	args: {
		xConfigWhere: nullable("XConfigWhere"),
		xConfigSkip: nullable("Int"),
		xConfigTake: nullable("Int"),
		xConfigOrderBy: nullable("XConfigOrderBy")
	},
	resolve: async (_, args, ctx) => {
		const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "XConfig")
		const [count, data] = await ctx.prisma.$transaction([
			ctx.prisma.xConfig.count({ where, orderBy }),
			ctx.prisma.xConfig.findMany({ where, skip, take, orderBy })
		])
		return { count, data }
	}
})

export const extrapolationFunctionQuery = queryField("extrapolationFunctionQuery", {
	type: "ExtrapolationFunctionModel",
	args: {
		extrapolationFunctionWhere: nullable("ExtrapolationFunctionWhere"),
		extrapolationFunctionSkip: nullable("Int"),
		extrapolationFunctionTake: nullable("Int"),
		extrapolationFunctionOrderBy: nullable("ExtrapolationFunctionOrderBy")
	},
	resolve: async (_, args, ctx) => {
		const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "ExtrapolationFunction")
		const [count, data] = await ctx.prisma.$transaction([
			ctx.prisma.extrapolationFunction.count({ where, orderBy }),
			ctx.prisma.extrapolationFunction.findMany({ where, skip, take, orderBy })
		])
		return { count, data }
	}
})

export const predictionConfigQuery = queryField("predictionConfigQuery", {
	type: "PredictionConfigModel",
	args: {
		predictionConfigWhere: nullable("PredictionConfigWhere"),
		predictionConfigSkip: nullable("Int"),
		predictionConfigTake: nullable("Int"),
		predictionConfigOrderBy: nullable("PredictionConfigOrderBy")
	},
	resolve: async (_, args, ctx) => {
		const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "PredictionConfig")
		const [count, data] = await ctx.prisma.$transaction([
			ctx.prisma.predictionConfig.count({ where, orderBy }),
			ctx.prisma.predictionConfig.findMany({ where, skip, take, orderBy })
		])
		return { count, data }
	}
})

export const maintenanceQuery = queryField("maintenanceQuery", {
	type: "MaintenanceModel",
	args: {
		maintenanceWhere: nullable("MaintenanceWhere"),
		maintenanceSkip: nullable("Int"),
		maintenanceTake: nullable("Int"),
		maintenanceOrderBy: nullable("MaintenanceOrderBy")
	},
	resolve: async (_, args, ctx) => {
		const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "Maintenance")
		const [count, data] = await ctx.prisma.$transaction([
			ctx.prisma.maintenance.count({ where, orderBy }),
			ctx.prisma.maintenance.findMany({ where, skip, take, orderBy })
		])
		return { count, data }
	}
})

export const maintenanceTypeQuery = queryField("maintenanceTypeQuery", {
	type: "MaintenanceTypeModel",
	args: {
		maintenanceTypeWhere: nullable("MaintenanceTypeWhere"),
		maintenanceTypeSkip: nullable("Int"),
		maintenanceTypeTake: nullable("Int"),
		maintenanceTypeOrderBy: nullable("MaintenanceTypeOrderBy")
	},
	resolve: async (_, args, ctx) => {
		const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "MaintenanceType")
		const [count, data] = await ctx.prisma.$transaction([
			ctx.prisma.maintenanceType.count({ where, orderBy }),
			ctx.prisma.maintenanceType.findMany({ where, skip, take, orderBy })
		])
		return { count, data }
	}
})

export const maintenanceAlarmConfigQuery = queryField("maintenanceAlarmConfigQuery", {
	type: "MaintenanceAlarmConfigModel",
	args: {
		maintenanceAlarmConfigWhere: nullable("MaintenanceAlarmConfigWhere"),
		maintenanceAlarmConfigSkip: nullable("Int"),
		maintenanceAlarmConfigTake: nullable("Int"),
		maintenanceAlarmConfigOrderBy: nullable("MaintenanceAlarmConfigOrderBy")
	},
	resolve: async (_, args, ctx) => {
		const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "MaintenanceAlarmConfig")
		const [count, data] = await ctx.prisma.$transaction([
			ctx.prisma.maintenanceAlarmConfig.count({ where, orderBy }),
			ctx.prisma.maintenanceAlarmConfig.findMany({ where, skip, take, orderBy })
		])
		return { count, data }
	}
})

export const maintenanceConfigQuery = queryField("maintenanceConfigQuery", {
	type: "MaintenanceConfigModel",
	args: {
		maintenanceConfigWhere: nullable("MaintenanceConfigWhere"),
		maintenanceConfigSkip: nullable("Int"),
		maintenanceConfigTake: nullable("Int"),
		maintenanceConfigOrderBy: nullable("MaintenanceConfigOrderBy")
	},
	resolve: async (_, args, ctx) => {
		const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "MaintenanceConfig")
		const [count, data] = await ctx.prisma.$transaction([
			ctx.prisma.maintenanceConfig.count({ where, orderBy }),
			ctx.prisma.maintenanceConfig.findMany({ where, skip, take, orderBy })
		])
		return { count, data }
	}
})

export const reportTypeQuery = queryField("reportTypeQuery", {
	type: "ReportTypeModel",
	args: {
		reportTypeWhere: nullable("ReportTypeWhere"),
		reportTypeSkip: nullable("Int"),
		reportTypeTake: nullable("Int"),
		reportTypeOrderBy: nullable("ReportTypeOrderBy")
	},
	resolve: async (_, args, ctx) => {
		const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "ReportType")
		const [count, data] = await ctx.prisma.$transaction([
			ctx.prisma.reportType.count({ where, orderBy }),
			ctx.prisma.reportType.findMany({ where, skip, take, orderBy })
		])
		return { count, data }
	}
})

export const taskQuery = queryField("taskQuery", {
	type: "TaskModel",
	args: {
		taskWhere: nullable("TaskWhere"),
		taskSkip: nullable("Int"),
		taskTake: nullable("Int"),
		taskOrderBy: nullable("TaskOrderBy")
	},
	resolve: async (_, args, ctx) => {
		const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "Task")
		const [count, data] = await ctx.prisma.$transaction([
			ctx.prisma.task.count({ where, orderBy }),
			ctx.prisma.task.findMany({ where, skip, take, orderBy })
		])
		return { count, data }
	}
})
import { nonNull, mutationField } from "nexus"
import { prepareConditions } from "../../utils/prepare-conditions"

export const activeEventInstanceDelete = mutationField("activeEventInstanceDelete", {
	type: "ActiveEventInstancePayload",
	args: {
		activeEventInstanceWhere: nonNull("ActiveEventInstanceInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "ActiveEventInstance")
		const result = await ctx.prisma.activeEventInstance.delete({
			where
		});
		return result
	}
})

export const databaseStatusDelete = mutationField("databaseStatusDelete", {
	type: "DatabaseStatusPayload",
	args: {
		databaseStatusWhere: nonNull("DatabaseStatusInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "DatabaseStatus")
		const result = await ctx.prisma.databaseStatus.delete({
			where
		});
		return result
	}
})

export const deviceIndexDataTypeDelete = mutationField("deviceIndexDataTypeDelete", {
	type: "DeviceIndexDataTypePayload",
	args: {
		deviceIndexDataTypeWhere: nonNull("DeviceIndexDataTypeInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "DeviceIndexDataType")
		const result = await ctx.prisma.deviceIndexDataType.delete({
			where
		});
		return result
	}
})

export const deviceClassDelete = mutationField("deviceClassDelete", {
	type: "DeviceClassPayload",
	args: {
		deviceClassWhere: nonNull("DeviceClassInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "DeviceClass")
		const result = await ctx.prisma.deviceClass.delete({
			where
		});
		return result
	}
})

export const deviceControlDelete = mutationField("deviceControlDelete", {
	type: "DeviceControlPayload",
	args: {
		deviceControlWhere: nonNull("DeviceControlInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "DeviceControl")
		const result = await ctx.prisma.deviceControl.delete({
			where
		});
		return result
	}
})

export const deviceCycleDelete = mutationField("deviceCycleDelete", {
	type: "DeviceCyclePayload",
	args: {
		deviceCycleWhere: nonNull("DeviceCycleInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "DeviceCycle")
		const result = await ctx.prisma.deviceCycle.delete({
			where
		});
		return result
	}
})

export const deviceFileDelete = mutationField("deviceFileDelete", {
	type: "DeviceFilePayload",
	args: {
		deviceFileWhere: nonNull("DeviceFileInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "DeviceFile")
		const result = await ctx.prisma.deviceFile.delete({
			where
		});
		return result
	}
})

export const deviceInstanceDelete = mutationField("deviceInstanceDelete", {
	type: "DeviceInstancePayload",
	args: {
		deviceInstanceWhere: nonNull("DeviceInstanceInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "DeviceInstance")
		const result = await ctx.prisma.deviceInstance.delete({
			where
		});
		return result
	}
})

export const etcHostDelete = mutationField("etcHostDelete", {
	type: "EtcHostPayload",
	args: {
		etcHostWhere: nonNull("EtcHostInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "EtcHost")
		const result = await ctx.prisma.etcHost.delete({
			where
		});
		return result
	}
})

export const eventClassDelete = mutationField("eventClassDelete", {
	type: "EventClassPayload",
	args: {
		eventClassWhere: nonNull("EventClassInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "EventClass")
		const result = await ctx.prisma.eventClass.delete({
			where
		});
		return result
	}
})

export const eventGroupCodeDelete = mutationField("eventGroupCodeDelete", {
	type: "EventGroupCodePayload",
	args: {
		eventGroupCodeWhere: nonNull("EventGroupCodeInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "EventGroupCode")
		const result = await ctx.prisma.eventGroupCode.delete({
			where
		});
		return result
	}
})

export const eventGroupDataDelete = mutationField("eventGroupDataDelete", {
	type: "EventGroupDataPayload",
	args: {
		eventGroupDataWhere: nonNull("EventGroupDataInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "EventGroupData")
		const result = await ctx.prisma.eventGroupData.delete({
			where
		});
		return result
	}
})

export const eventGroupDataHourAggregateDelete = mutationField("eventGroupDataHourAggregateDelete", {
	type: "EventGroupDataHourAggregatePayload",
	args: {
		eventGroupDataHourAggregateWhere: nonNull("EventGroupDataHourAggregateInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "EventGroupDataHourAggregate")
		const result = await ctx.prisma.eventGroupDataHourAggregate.delete({
			where
		});
		return result
	}
})

export const eventGroupValueDelete = mutationField("eventGroupValueDelete", {
	type: "EventGroupValuePayload",
	args: {
		eventGroupValueWhere: nonNull("EventGroupValueInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "EventGroupValue")
		const result = await ctx.prisma.eventGroupValue.delete({
			where
		});
		return result
	}
})

export const eventGroupDelete = mutationField("eventGroupDelete", {
	type: "EventGroupPayload",
	args: {
		eventGroupWhere: nonNull("EventGroupInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "EventGroup")
		const result = await ctx.prisma.eventGroup.delete({
			where
		});
		return result
	}
})

export const eventInstanceDelete = mutationField("eventInstanceDelete", {
	type: "EventInstancePayload",
	args: {
		eventInstanceWhere: nonNull("EventInstanceInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "EventInstance")
		const result = await ctx.prisma.eventInstance.delete({
			where
		});
		return result
	}
})

export const eventTypeDelete = mutationField("eventTypeDelete", {
	type: "EventTypePayload",
	args: {
		eventTypeWhere: nonNull("EventTypeInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "EventType")
		const result = await ctx.prisma.eventType.delete({
			where
		});
		return result
	}
})

export const floorPlanDelete = mutationField("floorPlanDelete", {
	type: "FloorPlanPayload",
	args: {
		floorPlanWhere: nonNull("FloorPlanInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "FloorPlan")
		const result = await ctx.prisma.floorPlan.delete({
			where
		});
		return result
	}
})

export const deviceDataDelete = mutationField("deviceDataDelete", {
	type: "DeviceDataPayload",
	args: {
		deviceDataWhere: nonNull("DeviceDataInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "DeviceData")
		const result = await ctx.prisma.deviceData.delete({
			where
		});
		return result
	}
})

export const mainDeviceClassDelete = mutationField("mainDeviceClassDelete", {
	type: "MainDeviceClassPayload",
	args: {
		mainDeviceClassWhere: nonNull("MainDeviceClassInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "MainDeviceClass")
		const result = await ctx.prisma.mainDeviceClass.delete({
			where
		});
		return result
	}
})

export const mainDeviceInstanceDelete = mutationField("mainDeviceInstanceDelete", {
	type: "MainDeviceInstancePayload",
	args: {
		mainDeviceInstanceWhere: nonNull("MainDeviceInstanceInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "MainDeviceInstance")
		const result = await ctx.prisma.mainDeviceInstance.delete({
			where
		});
		return result
	}
})

export const performanceIndicatorConfigDelete = mutationField("performanceIndicatorConfigDelete", {
	type: "PerformanceIndicatorConfigPayload",
	args: {
		performanceIndicatorConfigWhere: nonNull("PerformanceIndicatorConfigInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "PerformanceIndicatorConfig")
		const result = await ctx.prisma.performanceIndicatorConfig.delete({
			where
		});
		return result
	}
})

export const privilegeDelete = mutationField("privilegeDelete", {
	type: "PrivilegePayload",
	args: {
		privilegeWhere: nonNull("PrivilegeInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "Privilege")
		const result = await ctx.prisma.privilege.delete({
			where
		});
		return result
	}
})

export const processDataDelete = mutationField("processDataDelete", {
	type: "ProcessDataPayload",
	args: {
		processDataWhere: nonNull("ProcessDataInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "ProcessData")
		const result = await ctx.prisma.processData.delete({
			where
		});
		return result
	}
})

export const processDataConditionDelete = mutationField("processDataConditionDelete", {
	type: "ProcessDataConditionPayload",
	args: {
		processDataConditionWhere: nonNull("ProcessDataConditionInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "ProcessDataCondition")
		const result = await ctx.prisma.processDataCondition.delete({
			where
		});
		return result
	}
})

export const processDataModeDelete = mutationField("processDataModeDelete", {
	type: "ProcessDataModePayload",
	args: {
		processDataModeWhere: nonNull("ProcessDataModeInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "ProcessDataMode")
		const result = await ctx.prisma.processDataMode.delete({
			where
		});
		return result
	}
})

export const registrationStatusDelete = mutationField("registrationStatusDelete", {
	type: "RegistrationStatusPayload",
	args: {
		registrationStatusWhere: nonNull("RegistrationStatusInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "RegistrationStatus")
		const result = await ctx.prisma.registrationStatus.delete({
			where
		});
		return result
	}
})

export const replayConfigDelete = mutationField("replayConfigDelete", {
	type: "ReplayConfigPayload",
	args: {
		replayConfigWhere: nonNull("ReplayConfigInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "ReplayConfig")
		const result = await ctx.prisma.replayConfig.delete({
			where
		});
		return result
	}
})

export const replayDataDelete = mutationField("replayDataDelete", {
	type: "ReplayDataPayload",
	args: {
		replayDataWhere: nonNull("ReplayDataInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "ReplayData")
		const result = await ctx.prisma.replayData.delete({
			where
		});
		return result
	}
})

export const replaySetDelete = mutationField("replaySetDelete", {
	type: "ReplaySetPayload",
	args: {
		replaySetWhere: nonNull("ReplaySetInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "ReplaySet")
		const result = await ctx.prisma.replaySet.delete({
			where
		});
		return result
	}
})

export const reportingDelete = mutationField("reportingDelete", {
	type: "ReportingPayload",
	args: {
		reportingWhere: nonNull("ReportingInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "Reporting")
		const result = await ctx.prisma.reporting.delete({
			where
		});
		return result
	}
})

export const reportingConfigDelete = mutationField("reportingConfigDelete", {
	type: "ReportingConfigPayload",
	args: {
		reportingConfigWhere: nonNull("ReportingConfigInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "ReportingConfig")
		const result = await ctx.prisma.reportingConfig.delete({
			where
		});
		return result
	}
})

export const representationDelete = mutationField("representationDelete", {
	type: "RepresentationPayload",
	args: {
		representationWhere: nonNull("RepresentationInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "Representation")
		const result = await ctx.prisma.representation.delete({
			where
		});
		return result
	}
})

export const rolePrivilegeDelete = mutationField("rolePrivilegeDelete", {
	type: "RolePrivilegePayload",
	args: {
		rolePrivilegeWhere: nonNull("RolePrivilegeInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "RolePrivilege")
		const result = await ctx.prisma.rolePrivilege.delete({
			where
		});
		return result
	}
})

export const roleDelete = mutationField("roleDelete", {
	type: "RolePayload",
	args: {
		roleWhere: nonNull("RoleInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "Role")
		const result = await ctx.prisma.role.delete({
			where
		});
		return result
	}
})

export const softwareAdapterDelete = mutationField("softwareAdapterDelete", {
	type: "SoftwareAdapterPayload",
	args: {
		softwareAdapterWhere: nonNull("SoftwareAdapterInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "SoftwareAdapter")
		const result = await ctx.prisma.softwareAdapter.delete({
			where
		});
		return result
	}
})

export const timeseriesDelete = mutationField("timeseriesDelete", {
	type: "TimeseriesPayload",
	args: {
		timeseriesWhere: nonNull("TimeseriesInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "Timeseries")
		const result = await ctx.prisma.timeseries.delete({
			where
		});
		return result
	}
})

export const timeseriesDataDelete = mutationField("timeseriesDataDelete", {
	type: "TimeseriesDataPayload",
	args: {
		timeseriesDataWhere: nonNull("TimeseriesDataInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "TimeseriesData")
		const result = await ctx.prisma.timeseriesData.delete({
			where
		});
		return result
	}
})

export const timeseriesDataHourAggregateDelete = mutationField("timeseriesDataHourAggregateDelete", {
	type: "TimeseriesDataHourAggregatePayload",
	args: {
		timeseriesDataHourAggregateWhere: nonNull("TimeseriesDataHourAggregateInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "TimeseriesDataHourAggregate")
		const result = await ctx.prisma.timeseriesDataHourAggregate.delete({
			where
		});
		return result
	}
})

export const updaterConfigDelete = mutationField("updaterConfigDelete", {
	type: "UpdaterConfigPayload",
	args: {
		updaterConfigWhere: nonNull("UpdaterConfigInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "UpdaterConfig")
		const result = await ctx.prisma.updaterConfig.delete({
			where
		});
		return result
	}
})

export const userRoleDelete = mutationField("userRoleDelete", {
	type: "UserRolePayload",
	args: {
		userRoleWhere: nonNull("UserRoleInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "UserRole")
		const result = await ctx.prisma.userRole.delete({
			where
		});
		return result
	}
})

export const userDelete = mutationField("userDelete", {
	type: "UserPayload",
	args: {
		userWhere: nonNull("UserInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "User")
		const result = await ctx.prisma.user.delete({
			where
		});
		return result
	}
})

export const vendorDelete = mutationField("vendorDelete", {
	type: "VendorPayload",
	args: {
		vendorWhere: nonNull("VendorInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "Vendor")
		const result = await ctx.prisma.vendor.delete({
			where
		});
		return result
	}
})

export const xConfigDelete = mutationField("xConfigDelete", {
	type: "XConfigPayload",
	args: {
		xConfigWhere: nonNull("XConfigInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "XConfig")
		const result = await ctx.prisma.xConfig.delete({
			where
		});
		return result
	}
})

export const extrapolationFunctionDelete = mutationField("extrapolationFunctionDelete", {
	type: "ExtrapolationFunctionPayload",
	args: {
		extrapolationFunctionWhere: nonNull("ExtrapolationFunctionInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "ExtrapolationFunction")
		const result = await ctx.prisma.extrapolationFunction.delete({
			where
		});
		return result
	}
})

export const predictionConfigDelete = mutationField("predictionConfigDelete", {
	type: "PredictionConfigPayload",
	args: {
		predictionConfigWhere: nonNull("PredictionConfigInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "PredictionConfig")
		const result = await ctx.prisma.predictionConfig.delete({
			where
		});
		return result
	}
})

export const maintenanceDelete = mutationField("maintenanceDelete", {
	type: "MaintenancePayload",
	args: {
		maintenanceWhere: nonNull("MaintenanceInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "Maintenance")
		const result = await ctx.prisma.maintenance.delete({
			where
		});
		return result
	}
})

export const maintenanceTypeDelete = mutationField("maintenanceTypeDelete", {
	type: "MaintenanceTypePayload",
	args: {
		maintenanceTypeWhere: nonNull("MaintenanceTypeInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "MaintenanceType")
		const result = await ctx.prisma.maintenanceType.delete({
			where
		});
		return result
	}
})

export const maintenanceAlarmConfigDelete = mutationField("maintenanceAlarmConfigDelete", {
	type: "MaintenanceAlarmConfigPayload",
	args: {
		maintenanceAlarmConfigWhere: nonNull("MaintenanceAlarmConfigInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "MaintenanceAlarmConfig")
		const result = await ctx.prisma.maintenanceAlarmConfig.delete({
			where
		});
		return result
	}
})

export const maintenanceConfigDelete = mutationField("maintenanceConfigDelete", {
	type: "MaintenanceConfigPayload",
	args: {
		maintenanceConfigWhere: nonNull("MaintenanceConfigInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "MaintenanceConfig")
		const result = await ctx.prisma.maintenanceConfig.delete({
			where
		});
		return result
	}
})

export const reportTypeDelete = mutationField("reportTypeDelete", {
	type: "ReportTypePayload",
	args: {
		reportTypeWhere: nonNull("ReportTypeInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "ReportType")
		const result = await ctx.prisma.reportType.delete({
			where
		});
		return result
	}
})

export const taskDelete = mutationField("taskDelete", {
	type: "TaskPayload",
	args: {
		taskWhere: nonNull("TaskInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "Task")
		const result = await ctx.prisma.task.delete({
			where
		});
		return result
	}
})
import { nonNull, mutationField } from "nexus"
import { prepareConditions } from "../../utils/prepare-conditions"

export const activeEventInstanceDeleteMany = mutationField("activeEventInstanceDeleteMany", {
	type: "RowsAffectedPayload",
	args: {
		activeEventInstanceWhere: nonNull("ActiveEventInstanceWhere")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "ActiveEventInstance")
		const result = await ctx.prisma.activeEventInstance.deleteMany({
			where
		});
		return result
	}
})

export const databaseStatusDeleteMany = mutationField("databaseStatusDeleteMany", {
	type: "RowsAffectedPayload",
	args: {
		databaseStatusWhere: nonNull("DatabaseStatusWhere")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "DatabaseStatus")
		const result = await ctx.prisma.databaseStatus.deleteMany({
			where
		});
		return result
	}
})

export const deviceIndexDataTypeDeleteMany = mutationField("deviceIndexDataTypeDeleteMany", {
	type: "RowsAffectedPayload",
	args: {
		deviceIndexDataTypeWhere: nonNull("DeviceIndexDataTypeWhere")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "DeviceIndexDataType")
		const result = await ctx.prisma.deviceIndexDataType.deleteMany({
			where
		});
		return result
	}
})

export const deviceClassDeleteMany = mutationField("deviceClassDeleteMany", {
	type: "RowsAffectedPayload",
	args: {
		deviceClassWhere: nonNull("DeviceClassWhere")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "DeviceClass")
		const result = await ctx.prisma.deviceClass.deleteMany({
			where
		});
		return result
	}
})

export const deviceControlDeleteMany = mutationField("deviceControlDeleteMany", {
	type: "RowsAffectedPayload",
	args: {
		deviceControlWhere: nonNull("DeviceControlWhere")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "DeviceControl")
		const result = await ctx.prisma.deviceControl.deleteMany({
			where
		});
		return result
	}
})

export const deviceCycleDeleteMany = mutationField("deviceCycleDeleteMany", {
	type: "RowsAffectedPayload",
	args: {
		deviceCycleWhere: nonNull("DeviceCycleWhere")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "DeviceCycle")
		const result = await ctx.prisma.deviceCycle.deleteMany({
			where
		});
		return result
	}
})

export const deviceFileDeleteMany = mutationField("deviceFileDeleteMany", {
	type: "RowsAffectedPayload",
	args: {
		deviceFileWhere: nonNull("DeviceFileWhere")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "DeviceFile")
		const result = await ctx.prisma.deviceFile.deleteMany({
			where
		});
		return result
	}
})

export const deviceInstanceDeleteMany = mutationField("deviceInstanceDeleteMany", {
	type: "RowsAffectedPayload",
	args: {
		deviceInstanceWhere: nonNull("DeviceInstanceWhere")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "DeviceInstance")
		const result = await ctx.prisma.deviceInstance.deleteMany({
			where
		});
		return result
	}
})

export const etcHostDeleteMany = mutationField("etcHostDeleteMany", {
	type: "RowsAffectedPayload",
	args: {
		etcHostWhere: nonNull("EtcHostWhere")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "EtcHost")
		const result = await ctx.prisma.etcHost.deleteMany({
			where
		});
		return result
	}
})

export const eventClassDeleteMany = mutationField("eventClassDeleteMany", {
	type: "RowsAffectedPayload",
	args: {
		eventClassWhere: nonNull("EventClassWhere")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "EventClass")
		const result = await ctx.prisma.eventClass.deleteMany({
			where
		});
		return result
	}
})

export const eventGroupCodeDeleteMany = mutationField("eventGroupCodeDeleteMany", {
	type: "RowsAffectedPayload",
	args: {
		eventGroupCodeWhere: nonNull("EventGroupCodeWhere")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "EventGroupCode")
		const result = await ctx.prisma.eventGroupCode.deleteMany({
			where
		});
		return result
	}
})

export const eventGroupDataDeleteMany = mutationField("eventGroupDataDeleteMany", {
	type: "RowsAffectedPayload",
	args: {
		eventGroupDataWhere: nonNull("EventGroupDataWhere")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "EventGroupData")
		const result = await ctx.prisma.eventGroupData.deleteMany({
			where
		});
		return result
	}
})

export const eventGroupDataHourAggregateDeleteMany = mutationField("eventGroupDataHourAggregateDeleteMany", {
	type: "RowsAffectedPayload",
	args: {
		eventGroupDataHourAggregateWhere: nonNull("EventGroupDataHourAggregateWhere")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "EventGroupDataHourAggregate")
		const result = await ctx.prisma.eventGroupDataHourAggregate.deleteMany({
			where
		});
		return result
	}
})

export const eventGroupValueDeleteMany = mutationField("eventGroupValueDeleteMany", {
	type: "RowsAffectedPayload",
	args: {
		eventGroupValueWhere: nonNull("EventGroupValueWhere")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "EventGroupValue")
		const result = await ctx.prisma.eventGroupValue.deleteMany({
			where
		});
		return result
	}
})

export const eventGroupDeleteMany = mutationField("eventGroupDeleteMany", {
	type: "RowsAffectedPayload",
	args: {
		eventGroupWhere: nonNull("EventGroupWhere")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "EventGroup")
		const result = await ctx.prisma.eventGroup.deleteMany({
			where
		});
		return result
	}
})

export const eventInstanceDeleteMany = mutationField("eventInstanceDeleteMany", {
	type: "RowsAffectedPayload",
	args: {
		eventInstanceWhere: nonNull("EventInstanceWhere")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "EventInstance")
		const result = await ctx.prisma.eventInstance.deleteMany({
			where
		});
		return result
	}
})

export const eventTypeDeleteMany = mutationField("eventTypeDeleteMany", {
	type: "RowsAffectedPayload",
	args: {
		eventTypeWhere: nonNull("EventTypeWhere")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "EventType")
		const result = await ctx.prisma.eventType.deleteMany({
			where
		});
		return result
	}
})

export const floorPlanDeleteMany = mutationField("floorPlanDeleteMany", {
	type: "RowsAffectedPayload",
	args: {
		floorPlanWhere: nonNull("FloorPlanWhere")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "FloorPlan")
		const result = await ctx.prisma.floorPlan.deleteMany({
			where
		});
		return result
	}
})

export const deviceDataDeleteMany = mutationField("deviceDataDeleteMany", {
	type: "RowsAffectedPayload",
	args: {
		deviceDataWhere: nonNull("DeviceDataWhere")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "DeviceData")
		const result = await ctx.prisma.deviceData.deleteMany({
			where
		});
		return result
	}
})

export const mainDeviceClassDeleteMany = mutationField("mainDeviceClassDeleteMany", {
	type: "RowsAffectedPayload",
	args: {
		mainDeviceClassWhere: nonNull("MainDeviceClassWhere")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "MainDeviceClass")
		const result = await ctx.prisma.mainDeviceClass.deleteMany({
			where
		});
		return result
	}
})

export const mainDeviceInstanceDeleteMany = mutationField("mainDeviceInstanceDeleteMany", {
	type: "RowsAffectedPayload",
	args: {
		mainDeviceInstanceWhere: nonNull("MainDeviceInstanceWhere")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "MainDeviceInstance")
		const result = await ctx.prisma.mainDeviceInstance.deleteMany({
			where
		});
		return result
	}
})

export const performanceIndicatorConfigDeleteMany = mutationField("performanceIndicatorConfigDeleteMany", {
	type: "RowsAffectedPayload",
	args: {
		performanceIndicatorConfigWhere: nonNull("PerformanceIndicatorConfigWhere")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "PerformanceIndicatorConfig")
		const result = await ctx.prisma.performanceIndicatorConfig.deleteMany({
			where
		});
		return result
	}
})

export const privilegeDeleteMany = mutationField("privilegeDeleteMany", {
	type: "RowsAffectedPayload",
	args: {
		privilegeWhere: nonNull("PrivilegeWhere")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "Privilege")
		const result = await ctx.prisma.privilege.deleteMany({
			where
		});
		return result
	}
})

export const processDataDeleteMany = mutationField("processDataDeleteMany", {
	type: "RowsAffectedPayload",
	args: {
		processDataWhere: nonNull("ProcessDataWhere")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "ProcessData")
		const result = await ctx.prisma.processData.deleteMany({
			where
		});
		return result
	}
})

export const processDataConditionDeleteMany = mutationField("processDataConditionDeleteMany", {
	type: "RowsAffectedPayload",
	args: {
		processDataConditionWhere: nonNull("ProcessDataConditionWhere")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "ProcessDataCondition")
		const result = await ctx.prisma.processDataCondition.deleteMany({
			where
		});
		return result
	}
})

export const processDataModeDeleteMany = mutationField("processDataModeDeleteMany", {
	type: "RowsAffectedPayload",
	args: {
		processDataModeWhere: nonNull("ProcessDataModeWhere")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "ProcessDataMode")
		const result = await ctx.prisma.processDataMode.deleteMany({
			where
		});
		return result
	}
})

export const registrationStatusDeleteMany = mutationField("registrationStatusDeleteMany", {
	type: "RowsAffectedPayload",
	args: {
		registrationStatusWhere: nonNull("RegistrationStatusWhere")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "RegistrationStatus")
		const result = await ctx.prisma.registrationStatus.deleteMany({
			where
		});
		return result
	}
})

export const replayConfigDeleteMany = mutationField("replayConfigDeleteMany", {
	type: "RowsAffectedPayload",
	args: {
		replayConfigWhere: nonNull("ReplayConfigWhere")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "ReplayConfig")
		const result = await ctx.prisma.replayConfig.deleteMany({
			where
		});
		return result
	}
})

export const replayDataDeleteMany = mutationField("replayDataDeleteMany", {
	type: "RowsAffectedPayload",
	args: {
		replayDataWhere: nonNull("ReplayDataWhere")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "ReplayData")
		const result = await ctx.prisma.replayData.deleteMany({
			where
		});
		return result
	}
})

export const replaySetDeleteMany = mutationField("replaySetDeleteMany", {
	type: "RowsAffectedPayload",
	args: {
		replaySetWhere: nonNull("ReplaySetWhere")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "ReplaySet")
		const result = await ctx.prisma.replaySet.deleteMany({
			where
		});
		return result
	}
})

export const reportingDeleteMany = mutationField("reportingDeleteMany", {
	type: "RowsAffectedPayload",
	args: {
		reportingWhere: nonNull("ReportingWhere")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "Reporting")
		const result = await ctx.prisma.reporting.deleteMany({
			where
		});
		return result
	}
})

export const reportingConfigDeleteMany = mutationField("reportingConfigDeleteMany", {
	type: "RowsAffectedPayload",
	args: {
		reportingConfigWhere: nonNull("ReportingConfigWhere")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "ReportingConfig")
		const result = await ctx.prisma.reportingConfig.deleteMany({
			where
		});
		return result
	}
})

export const representationDeleteMany = mutationField("representationDeleteMany", {
	type: "RowsAffectedPayload",
	args: {
		representationWhere: nonNull("RepresentationWhere")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "Representation")
		const result = await ctx.prisma.representation.deleteMany({
			where
		});
		return result
	}
})

export const rolePrivilegeDeleteMany = mutationField("rolePrivilegeDeleteMany", {
	type: "RowsAffectedPayload",
	args: {
		rolePrivilegeWhere: nonNull("RolePrivilegeWhere")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "RolePrivilege")
		const result = await ctx.prisma.rolePrivilege.deleteMany({
			where
		});
		return result
	}
})

export const roleDeleteMany = mutationField("roleDeleteMany", {
	type: "RowsAffectedPayload",
	args: {
		roleWhere: nonNull("RoleWhere")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "Role")
		const result = await ctx.prisma.role.deleteMany({
			where
		});
		return result
	}
})

export const softwareAdapterDeleteMany = mutationField("softwareAdapterDeleteMany", {
	type: "RowsAffectedPayload",
	args: {
		softwareAdapterWhere: nonNull("SoftwareAdapterWhere")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "SoftwareAdapter")
		const result = await ctx.prisma.softwareAdapter.deleteMany({
			where
		});
		return result
	}
})

export const timeseriesDeleteMany = mutationField("timeseriesDeleteMany", {
	type: "RowsAffectedPayload",
	args: {
		timeseriesWhere: nonNull("TimeseriesWhere")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "Timeseries")
		const result = await ctx.prisma.timeseries.deleteMany({
			where
		});
		return result
	}
})

export const timeseriesDataDeleteMany = mutationField("timeseriesDataDeleteMany", {
	type: "RowsAffectedPayload",
	args: {
		timeseriesDataWhere: nonNull("TimeseriesDataWhere")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "TimeseriesData")
		const result = await ctx.prisma.timeseriesData.deleteMany({
			where
		});
		return result
	}
})

export const timeseriesDataHourAggregateDeleteMany = mutationField("timeseriesDataHourAggregateDeleteMany", {
	type: "RowsAffectedPayload",
	args: {
		timeseriesDataHourAggregateWhere: nonNull("TimeseriesDataHourAggregateWhere")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "TimeseriesDataHourAggregate")
		const result = await ctx.prisma.timeseriesDataHourAggregate.deleteMany({
			where
		});
		return result
	}
})

export const updaterConfigDeleteMany = mutationField("updaterConfigDeleteMany", {
	type: "RowsAffectedPayload",
	args: {
		updaterConfigWhere: nonNull("UpdaterConfigWhere")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "UpdaterConfig")
		const result = await ctx.prisma.updaterConfig.deleteMany({
			where
		});
		return result
	}
})

export const userRoleDeleteMany = mutationField("userRoleDeleteMany", {
	type: "RowsAffectedPayload",
	args: {
		userRoleWhere: nonNull("UserRoleWhere")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "UserRole")
		const result = await ctx.prisma.userRole.deleteMany({
			where
		});
		return result
	}
})

export const userDeleteMany = mutationField("userDeleteMany", {
	type: "RowsAffectedPayload",
	args: {
		userWhere: nonNull("UserWhere")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "User")
		const result = await ctx.prisma.user.deleteMany({
			where
		});
		return result
	}
})

export const vendorDeleteMany = mutationField("vendorDeleteMany", {
	type: "RowsAffectedPayload",
	args: {
		vendorWhere: nonNull("VendorWhere")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "Vendor")
		const result = await ctx.prisma.vendor.deleteMany({
			where
		});
		return result
	}
})

export const xConfigDeleteMany = mutationField("xConfigDeleteMany", {
	type: "RowsAffectedPayload",
	args: {
		xConfigWhere: nonNull("XConfigWhere")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "XConfig")
		const result = await ctx.prisma.xConfig.deleteMany({
			where
		});
		return result
	}
})

export const extrapolationFunctionDeleteMany = mutationField("extrapolationFunctionDeleteMany", {
	type: "RowsAffectedPayload",
	args: {
		extrapolationFunctionWhere: nonNull("ExtrapolationFunctionWhere")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "ExtrapolationFunction")
		const result = await ctx.prisma.extrapolationFunction.deleteMany({
			where
		});
		return result
	}
})

export const predictionConfigDeleteMany = mutationField("predictionConfigDeleteMany", {
	type: "RowsAffectedPayload",
	args: {
		predictionConfigWhere: nonNull("PredictionConfigWhere")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "PredictionConfig")
		const result = await ctx.prisma.predictionConfig.deleteMany({
			where
		});
		return result
	}
})

export const maintenanceDeleteMany = mutationField("maintenanceDeleteMany", {
	type: "RowsAffectedPayload",
	args: {
		maintenanceWhere: nonNull("MaintenanceWhere")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "Maintenance")
		const result = await ctx.prisma.maintenance.deleteMany({
			where
		});
		return result
	}
})

export const maintenanceTypeDeleteMany = mutationField("maintenanceTypeDeleteMany", {
	type: "RowsAffectedPayload",
	args: {
		maintenanceTypeWhere: nonNull("MaintenanceTypeWhere")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "MaintenanceType")
		const result = await ctx.prisma.maintenanceType.deleteMany({
			where
		});
		return result
	}
})

export const maintenanceAlarmConfigDeleteMany = mutationField("maintenanceAlarmConfigDeleteMany", {
	type: "RowsAffectedPayload",
	args: {
		maintenanceAlarmConfigWhere: nonNull("MaintenanceAlarmConfigWhere")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "MaintenanceAlarmConfig")
		const result = await ctx.prisma.maintenanceAlarmConfig.deleteMany({
			where
		});
		return result
	}
})

export const maintenanceConfigDeleteMany = mutationField("maintenanceConfigDeleteMany", {
	type: "RowsAffectedPayload",
	args: {
		maintenanceConfigWhere: nonNull("MaintenanceConfigWhere")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "MaintenanceConfig")
		const result = await ctx.prisma.maintenanceConfig.deleteMany({
			where
		});
		return result
	}
})

export const reportTypeDeleteMany = mutationField("reportTypeDeleteMany", {
	type: "RowsAffectedPayload",
	args: {
		reportTypeWhere: nonNull("ReportTypeWhere")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "ReportType")
		const result = await ctx.prisma.reportType.deleteMany({
			where
		});
		return result
	}
})

export const taskDeleteMany = mutationField("taskDeleteMany", {
	type: "RowsAffectedPayload",
	args: {
		taskWhere: nonNull("TaskWhere")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "Task")
		const result = await ctx.prisma.task.deleteMany({
			where
		});
		return result
	}
})
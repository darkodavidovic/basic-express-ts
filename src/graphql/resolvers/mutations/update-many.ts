import { nonNull, mutationField } from "nexus"
import { prepareConditions } from "../../utils/prepare-conditions"

export const activeEventInstanceUpdateMany = mutationField("activeEventInstanceUpdateMany", {
	type: "RowsAffectedPayload",
	args: {
		activeEventInstanceWhere: nonNull("ActiveEventInstanceWhere"),
		activeEventInstanceInput: nonNull("ActiveEventInstanceInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "ActiveEventInstance")
		const result = await ctx.prisma.activeEventInstance.updateMany({
			where,
			data: {
				...args.activeEventInstanceInput
			}
		});
		return result
	}
})

export const databaseStatusUpdateMany = mutationField("databaseStatusUpdateMany", {
	type: "RowsAffectedPayload",
	args: {
		databaseStatusWhere: nonNull("DatabaseStatusWhere"),
		databaseStatusInput: nonNull("DatabaseStatusInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "DatabaseStatus")
		const result = await ctx.prisma.databaseStatus.updateMany({
			where,
			data: {
				...args.databaseStatusInput
			}
		});
		return result
	}
})

export const deviceIndexDataTypeUpdateMany = mutationField("deviceIndexDataTypeUpdateMany", {
	type: "RowsAffectedPayload",
	args: {
		deviceIndexDataTypeWhere: nonNull("DeviceIndexDataTypeWhere"),
		deviceIndexDataTypeInput: nonNull("DeviceIndexDataTypeInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "DeviceIndexDataType")
		const result = await ctx.prisma.deviceIndexDataType.updateMany({
			where,
			data: {
				...args.deviceIndexDataTypeInput
			}
		});
		return result
	}
})

export const deviceClassUpdateMany = mutationField("deviceClassUpdateMany", {
	type: "RowsAffectedPayload",
	args: {
		deviceClassWhere: nonNull("DeviceClassWhere"),
		deviceClassInput: nonNull("DeviceClassInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "DeviceClass")
		const result = await ctx.prisma.deviceClass.updateMany({
			where,
			data: {
				...args.deviceClassInput
			}
		});
		return result
	}
})

export const deviceControlUpdateMany = mutationField("deviceControlUpdateMany", {
	type: "RowsAffectedPayload",
	args: {
		deviceControlWhere: nonNull("DeviceControlWhere"),
		deviceControlInput: nonNull("DeviceControlInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "DeviceControl")
		const result = await ctx.prisma.deviceControl.updateMany({
			where,
			data: {
				...args.deviceControlInput
			}
		});
		return result
	}
})

export const deviceCycleUpdateMany = mutationField("deviceCycleUpdateMany", {
	type: "RowsAffectedPayload",
	args: {
		deviceCycleWhere: nonNull("DeviceCycleWhere"),
		deviceCycleInput: nonNull("DeviceCycleInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "DeviceCycle")
		const result = await ctx.prisma.deviceCycle.updateMany({
			where,
			data: {
				...args.deviceCycleInput
			}
		});
		return result
	}
})

export const deviceFileUpdateMany = mutationField("deviceFileUpdateMany", {
	type: "RowsAffectedPayload",
	args: {
		deviceFileWhere: nonNull("DeviceFileWhere"),
		deviceFileInput: nonNull("DeviceFileInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "DeviceFile")
		const result = await ctx.prisma.deviceFile.updateMany({
			where,
			data: {
				...args.deviceFileInput
			}
		});
		return result
	}
})

export const deviceInstanceUpdateMany = mutationField("deviceInstanceUpdateMany", {
	type: "RowsAffectedPayload",
	args: {
		deviceInstanceWhere: nonNull("DeviceInstanceWhere"),
		deviceInstanceInput: nonNull("DeviceInstanceInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "DeviceInstance")
		const result = await ctx.prisma.deviceInstance.updateMany({
			where,
			data: {
				...args.deviceInstanceInput
			}
		});
		return result
	}
})

export const etcHostUpdateMany = mutationField("etcHostUpdateMany", {
	type: "RowsAffectedPayload",
	args: {
		etcHostWhere: nonNull("EtcHostWhere"),
		etcHostInput: nonNull("EtcHostInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "EtcHost")
		const result = await ctx.prisma.etcHost.updateMany({
			where,
			data: {
				...args.etcHostInput
			}
		});
		return result
	}
})

export const eventClassUpdateMany = mutationField("eventClassUpdateMany", {
	type: "RowsAffectedPayload",
	args: {
		eventClassWhere: nonNull("EventClassWhere"),
		eventClassInput: nonNull("EventClassInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "EventClass")
		const result = await ctx.prisma.eventClass.updateMany({
			where,
			data: {
				...args.eventClassInput
			}
		});
		return result
	}
})

export const eventGroupCodeUpdateMany = mutationField("eventGroupCodeUpdateMany", {
	type: "RowsAffectedPayload",
	args: {
		eventGroupCodeWhere: nonNull("EventGroupCodeWhere"),
		eventGroupCodeInput: nonNull("EventGroupCodeInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "EventGroupCode")
		const result = await ctx.prisma.eventGroupCode.updateMany({
			where,
			data: {
				...args.eventGroupCodeInput
			}
		});
		return result
	}
})

export const eventGroupDataUpdateMany = mutationField("eventGroupDataUpdateMany", {
	type: "RowsAffectedPayload",
	args: {
		eventGroupDataWhere: nonNull("EventGroupDataWhere"),
		eventGroupDataInput: nonNull("EventGroupDataInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "EventGroupData")
		const result = await ctx.prisma.eventGroupData.updateMany({
			where,
			data: {
				...args.eventGroupDataInput
			}
		});
		return result
	}
})

export const eventGroupDataHourAggregateUpdateMany = mutationField("eventGroupDataHourAggregateUpdateMany", {
	type: "RowsAffectedPayload",
	args: {
		eventGroupDataHourAggregateWhere: nonNull("EventGroupDataHourAggregateWhere"),
		eventGroupDataHourAggregateInput: nonNull("EventGroupDataHourAggregateInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "EventGroupDataHourAggregate")
		const result = await ctx.prisma.eventGroupDataHourAggregate.updateMany({
			where,
			data: {
				...args.eventGroupDataHourAggregateInput
			}
		});
		return result
	}
})

export const eventGroupValueUpdateMany = mutationField("eventGroupValueUpdateMany", {
	type: "RowsAffectedPayload",
	args: {
		eventGroupValueWhere: nonNull("EventGroupValueWhere"),
		eventGroupValueInput: nonNull("EventGroupValueInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "EventGroupValue")
		const result = await ctx.prisma.eventGroupValue.updateMany({
			where,
			data: {
				...args.eventGroupValueInput
			}
		});
		return result
	}
})

export const eventGroupUpdateMany = mutationField("eventGroupUpdateMany", {
	type: "RowsAffectedPayload",
	args: {
		eventGroupWhere: nonNull("EventGroupWhere"),
		eventGroupInput: nonNull("EventGroupInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "EventGroup")
		const result = await ctx.prisma.eventGroup.updateMany({
			where,
			data: {
				...args.eventGroupInput
			}
		});
		return result
	}
})

export const eventInstanceUpdateMany = mutationField("eventInstanceUpdateMany", {
	type: "RowsAffectedPayload",
	args: {
		eventInstanceWhere: nonNull("EventInstanceWhere"),
		eventInstanceInput: nonNull("EventInstanceInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "EventInstance")
		const result = await ctx.prisma.eventInstance.updateMany({
			where,
			data: {
				...args.eventInstanceInput
			}
		});
		return result
	}
})

export const eventTypeUpdateMany = mutationField("eventTypeUpdateMany", {
	type: "RowsAffectedPayload",
	args: {
		eventTypeWhere: nonNull("EventTypeWhere"),
		eventTypeInput: nonNull("EventTypeInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "EventType")
		const result = await ctx.prisma.eventType.updateMany({
			where,
			data: {
				...args.eventTypeInput
			}
		});
		return result
	}
})

export const floorPlanUpdateMany = mutationField("floorPlanUpdateMany", {
	type: "RowsAffectedPayload",
	args: {
		floorPlanWhere: nonNull("FloorPlanWhere"),
		floorPlanInput: nonNull("FloorPlanInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "FloorPlan")
		const result = await ctx.prisma.floorPlan.updateMany({
			where,
			data: {
				...args.floorPlanInput
			}
		});
		return result
	}
})

export const deviceDataUpdateMany = mutationField("deviceDataUpdateMany", {
	type: "RowsAffectedPayload",
	args: {
		deviceDataWhere: nonNull("DeviceDataWhere"),
		deviceDataInput: nonNull("DeviceDataInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "DeviceData")
		const result = await ctx.prisma.deviceData.updateMany({
			where,
			data: {
				...args.deviceDataInput
			}
		});
		return result
	}
})

export const mainDeviceClassUpdateMany = mutationField("mainDeviceClassUpdateMany", {
	type: "RowsAffectedPayload",
	args: {
		mainDeviceClassWhere: nonNull("MainDeviceClassWhere"),
		mainDeviceClassInput: nonNull("MainDeviceClassInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "MainDeviceClass")
		const result = await ctx.prisma.mainDeviceClass.updateMany({
			where,
			data: {
				...args.mainDeviceClassInput
			}
		});
		return result
	}
})

export const mainDeviceInstanceUpdateMany = mutationField("mainDeviceInstanceUpdateMany", {
	type: "RowsAffectedPayload",
	args: {
		mainDeviceInstanceWhere: nonNull("MainDeviceInstanceWhere"),
		mainDeviceInstanceInput: nonNull("MainDeviceInstanceInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "MainDeviceInstance")
		const result = await ctx.prisma.mainDeviceInstance.updateMany({
			where,
			data: {
				...args.mainDeviceInstanceInput
			}
		});
		return result
	}
})

export const performanceIndicatorConfigUpdateMany = mutationField("performanceIndicatorConfigUpdateMany", {
	type: "RowsAffectedPayload",
	args: {
		performanceIndicatorConfigWhere: nonNull("PerformanceIndicatorConfigWhere"),
		performanceIndicatorConfigInput: nonNull("PerformanceIndicatorConfigInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "PerformanceIndicatorConfig")
		const result = await ctx.prisma.performanceIndicatorConfig.updateMany({
			where,
			data: {
				...args.performanceIndicatorConfigInput
			}
		});
		return result
	}
})

export const privilegeUpdateMany = mutationField("privilegeUpdateMany", {
	type: "RowsAffectedPayload",
	args: {
		privilegeWhere: nonNull("PrivilegeWhere"),
		privilegeInput: nonNull("PrivilegeInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "Privilege")
		const result = await ctx.prisma.privilege.updateMany({
			where,
			data: {
				...args.privilegeInput
			}
		});
		return result
	}
})

export const processDataUpdateMany = mutationField("processDataUpdateMany", {
	type: "RowsAffectedPayload",
	args: {
		processDataWhere: nonNull("ProcessDataWhere"),
		processDataInput: nonNull("ProcessDataInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "ProcessData")
		const result = await ctx.prisma.processData.updateMany({
			where,
			data: {
				...args.processDataInput
			}
		});
		return result
	}
})

export const processDataConditionUpdateMany = mutationField("processDataConditionUpdateMany", {
	type: "RowsAffectedPayload",
	args: {
		processDataConditionWhere: nonNull("ProcessDataConditionWhere"),
		processDataConditionInput: nonNull("ProcessDataConditionInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "ProcessDataCondition")
		const result = await ctx.prisma.processDataCondition.updateMany({
			where,
			data: {
				...args.processDataConditionInput
			}
		});
		return result
	}
})

export const processDataModeUpdateMany = mutationField("processDataModeUpdateMany", {
	type: "RowsAffectedPayload",
	args: {
		processDataModeWhere: nonNull("ProcessDataModeWhere"),
		processDataModeInput: nonNull("ProcessDataModeInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "ProcessDataMode")
		const result = await ctx.prisma.processDataMode.updateMany({
			where,
			data: {
				...args.processDataModeInput
			}
		});
		return result
	}
})

export const registrationStatusUpdateMany = mutationField("registrationStatusUpdateMany", {
	type: "RowsAffectedPayload",
	args: {
		registrationStatusWhere: nonNull("RegistrationStatusWhere"),
		registrationStatusInput: nonNull("RegistrationStatusInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "RegistrationStatus")
		const result = await ctx.prisma.registrationStatus.updateMany({
			where,
			data: {
				...args.registrationStatusInput
			}
		});
		return result
	}
})

export const replayConfigUpdateMany = mutationField("replayConfigUpdateMany", {
	type: "RowsAffectedPayload",
	args: {
		replayConfigWhere: nonNull("ReplayConfigWhere"),
		replayConfigInput: nonNull("ReplayConfigInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "ReplayConfig")
		const result = await ctx.prisma.replayConfig.updateMany({
			where,
			data: {
				...args.replayConfigInput
			}
		});
		return result
	}
})

export const replayDataUpdateMany = mutationField("replayDataUpdateMany", {
	type: "RowsAffectedPayload",
	args: {
		replayDataWhere: nonNull("ReplayDataWhere"),
		replayDataInput: nonNull("ReplayDataInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "ReplayData")
		const result = await ctx.prisma.replayData.updateMany({
			where,
			data: {
				...args.replayDataInput
			}
		});
		return result
	}
})

export const replaySetUpdateMany = mutationField("replaySetUpdateMany", {
	type: "RowsAffectedPayload",
	args: {
		replaySetWhere: nonNull("ReplaySetWhere"),
		replaySetInput: nonNull("ReplaySetInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "ReplaySet")
		const result = await ctx.prisma.replaySet.updateMany({
			where,
			data: {
				...args.replaySetInput
			}
		});
		return result
	}
})

export const reportingUpdateMany = mutationField("reportingUpdateMany", {
	type: "RowsAffectedPayload",
	args: {
		reportingWhere: nonNull("ReportingWhere"),
		reportingInput: nonNull("ReportingInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "Reporting")
		const result = await ctx.prisma.reporting.updateMany({
			where,
			data: {
				...args.reportingInput
			}
		});
		return result
	}
})

export const reportingConfigUpdateMany = mutationField("reportingConfigUpdateMany", {
	type: "RowsAffectedPayload",
	args: {
		reportingConfigWhere: nonNull("ReportingConfigWhere"),
		reportingConfigInput: nonNull("ReportingConfigInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "ReportingConfig")
		const result = await ctx.prisma.reportingConfig.updateMany({
			where,
			data: {
				...args.reportingConfigInput
			}
		});
		return result
	}
})

export const representationUpdateMany = mutationField("representationUpdateMany", {
	type: "RowsAffectedPayload",
	args: {
		representationWhere: nonNull("RepresentationWhere"),
		representationInput: nonNull("RepresentationInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "Representation")
		const result = await ctx.prisma.representation.updateMany({
			where,
			data: {
				...args.representationInput
			}
		});
		return result
	}
})

export const rolePrivilegeUpdateMany = mutationField("rolePrivilegeUpdateMany", {
	type: "RowsAffectedPayload",
	args: {
		rolePrivilegeWhere: nonNull("RolePrivilegeWhere"),
		rolePrivilegeInput: nonNull("RolePrivilegeInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "RolePrivilege")
		const result = await ctx.prisma.rolePrivilege.updateMany({
			where,
			data: {
				...args.rolePrivilegeInput
			}
		});
		return result
	}
})

export const roleUpdateMany = mutationField("roleUpdateMany", {
	type: "RowsAffectedPayload",
	args: {
		roleWhere: nonNull("RoleWhere"),
		roleInput: nonNull("RoleInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "Role")
		const result = await ctx.prisma.role.updateMany({
			where,
			data: {
				...args.roleInput
			}
		});
		return result
	}
})

export const softwareAdapterUpdateMany = mutationField("softwareAdapterUpdateMany", {
	type: "RowsAffectedPayload",
	args: {
		softwareAdapterWhere: nonNull("SoftwareAdapterWhere"),
		softwareAdapterInput: nonNull("SoftwareAdapterInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "SoftwareAdapter")
		const result = await ctx.prisma.softwareAdapter.updateMany({
			where,
			data: {
				...args.softwareAdapterInput
			}
		});
		return result
	}
})

export const timeseriesUpdateMany = mutationField("timeseriesUpdateMany", {
	type: "RowsAffectedPayload",
	args: {
		timeseriesWhere: nonNull("TimeseriesWhere"),
		timeseriesInput: nonNull("TimeseriesInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "Timeseries")
		const result = await ctx.prisma.timeseries.updateMany({
			where,
			data: {
				...args.timeseriesInput
			}
		});
		return result
	}
})

export const timeseriesDataUpdateMany = mutationField("timeseriesDataUpdateMany", {
	type: "RowsAffectedPayload",
	args: {
		timeseriesDataWhere: nonNull("TimeseriesDataWhere"),
		timeseriesDataInput: nonNull("TimeseriesDataInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "TimeseriesData")
		const result = await ctx.prisma.timeseriesData.updateMany({
			where,
			data: {
				...args.timeseriesDataInput
			}
		});
		return result
	}
})

export const timeseriesDataHourAggregateUpdateMany = mutationField("timeseriesDataHourAggregateUpdateMany", {
	type: "RowsAffectedPayload",
	args: {
		timeseriesDataHourAggregateWhere: nonNull("TimeseriesDataHourAggregateWhere"),
		timeseriesDataHourAggregateInput: nonNull("TimeseriesDataHourAggregateInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "TimeseriesDataHourAggregate")
		const result = await ctx.prisma.timeseriesDataHourAggregate.updateMany({
			where,
			data: {
				...args.timeseriesDataHourAggregateInput
			}
		});
		return result
	}
})

export const updaterConfigUpdateMany = mutationField("updaterConfigUpdateMany", {
	type: "RowsAffectedPayload",
	args: {
		updaterConfigWhere: nonNull("UpdaterConfigWhere"),
		updaterConfigInput: nonNull("UpdaterConfigInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "UpdaterConfig")
		const result = await ctx.prisma.updaterConfig.updateMany({
			where,
			data: {
				...args.updaterConfigInput
			}
		});
		return result
	}
})

export const userRoleUpdateMany = mutationField("userRoleUpdateMany", {
	type: "RowsAffectedPayload",
	args: {
		userRoleWhere: nonNull("UserRoleWhere"),
		userRoleInput: nonNull("UserRoleInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "UserRole")
		const result = await ctx.prisma.userRole.updateMany({
			where,
			data: {
				...args.userRoleInput
			}
		});
		return result
	}
})

export const userUpdateMany = mutationField("userUpdateMany", {
	type: "RowsAffectedPayload",
	args: {
		userWhere: nonNull("UserWhere"),
		userInput: nonNull("UserInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "User")
		const result = await ctx.prisma.user.updateMany({
			where,
			data: {
				...args.userInput
			}
		});
		return result
	}
})

export const vendorUpdateMany = mutationField("vendorUpdateMany", {
	type: "RowsAffectedPayload",
	args: {
		vendorWhere: nonNull("VendorWhere"),
		vendorInput: nonNull("VendorInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "Vendor")
		const result = await ctx.prisma.vendor.updateMany({
			where,
			data: {
				...args.vendorInput
			}
		});
		return result
	}
})

export const xConfigUpdateMany = mutationField("xConfigUpdateMany", {
	type: "RowsAffectedPayload",
	args: {
		xConfigWhere: nonNull("XConfigWhere"),
		xConfigInput: nonNull("XConfigInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "XConfig")
		const result = await ctx.prisma.xConfig.updateMany({
			where,
			data: {
				...args.xConfigInput
			}
		});
		return result
	}
})

export const extrapolationFunctionUpdateMany = mutationField("extrapolationFunctionUpdateMany", {
	type: "RowsAffectedPayload",
	args: {
		extrapolationFunctionWhere: nonNull("ExtrapolationFunctionWhere"),
		extrapolationFunctionInput: nonNull("ExtrapolationFunctionInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "ExtrapolationFunction")
		const result = await ctx.prisma.extrapolationFunction.updateMany({
			where,
			data: {
				...args.extrapolationFunctionInput
			}
		});
		return result
	}
})

export const predictionConfigUpdateMany = mutationField("predictionConfigUpdateMany", {
	type: "RowsAffectedPayload",
	args: {
		predictionConfigWhere: nonNull("PredictionConfigWhere"),
		predictionConfigInput: nonNull("PredictionConfigInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "PredictionConfig")
		const result = await ctx.prisma.predictionConfig.updateMany({
			where,
			data: {
				...args.predictionConfigInput
			}
		});
		return result
	}
})

export const maintenanceUpdateMany = mutationField("maintenanceUpdateMany", {
	type: "RowsAffectedPayload",
	args: {
		maintenanceWhere: nonNull("MaintenanceWhere"),
		maintenanceInput: nonNull("MaintenanceInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "Maintenance")
		const result = await ctx.prisma.maintenance.updateMany({
			where,
			data: {
				...args.maintenanceInput
			}
		});
		return result
	}
})

export const maintenanceTypeUpdateMany = mutationField("maintenanceTypeUpdateMany", {
	type: "RowsAffectedPayload",
	args: {
		maintenanceTypeWhere: nonNull("MaintenanceTypeWhere"),
		maintenanceTypeInput: nonNull("MaintenanceTypeInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "MaintenanceType")
		const result = await ctx.prisma.maintenanceType.updateMany({
			where,
			data: {
				...args.maintenanceTypeInput
			}
		});
		return result
	}
})

export const maintenanceAlarmConfigUpdateMany = mutationField("maintenanceAlarmConfigUpdateMany", {
	type: "RowsAffectedPayload",
	args: {
		maintenanceAlarmConfigWhere: nonNull("MaintenanceAlarmConfigWhere"),
		maintenanceAlarmConfigInput: nonNull("MaintenanceAlarmConfigInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "MaintenanceAlarmConfig")
		const result = await ctx.prisma.maintenanceAlarmConfig.updateMany({
			where,
			data: {
				...args.maintenanceAlarmConfigInput
			}
		});
		return result
	}
})

export const maintenanceConfigUpdateMany = mutationField("maintenanceConfigUpdateMany", {
	type: "RowsAffectedPayload",
	args: {
		maintenanceConfigWhere: nonNull("MaintenanceConfigWhere"),
		maintenanceConfigInput: nonNull("MaintenanceConfigInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "MaintenanceConfig")
		const result = await ctx.prisma.maintenanceConfig.updateMany({
			where,
			data: {
				...args.maintenanceConfigInput
			}
		});
		return result
	}
})

export const reportTypeUpdateMany = mutationField("reportTypeUpdateMany", {
	type: "RowsAffectedPayload",
	args: {
		reportTypeWhere: nonNull("ReportTypeWhere"),
		reportTypeInput: nonNull("ReportTypeInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "ReportType")
		const result = await ctx.prisma.reportType.updateMany({
			where,
			data: {
				...args.reportTypeInput
			}
		});
		return result
	}
})

export const taskUpdateMany = mutationField("taskUpdateMany", {
	type: "RowsAffectedPayload",
	args: {
		taskWhere: nonNull("TaskWhere"),
		taskInput: nonNull("TaskInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "Task")
		const result = await ctx.prisma.task.updateMany({
			where,
			data: {
				...args.taskInput
			}
		});
		return result
	}
})
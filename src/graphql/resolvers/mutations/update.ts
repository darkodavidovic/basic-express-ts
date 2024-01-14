import { nonNull, mutationField } from "nexus"
import { prepareConditions } from "../../utils/prepare-conditions"

export const activeEventInstanceUpdate = mutationField("activeEventInstanceUpdate", {
	type: "ActiveEventInstancePayload",
	args: {
		activeEventInstanceWhere: nonNull("ActiveEventInstanceInput"),
		activeEventInstanceInput: nonNull("ActiveEventInstanceInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "ActiveEventInstance")
		const result = await ctx.prisma.activeEventInstance.update({
			where,
			data: {
				...args.activeEventInstanceInput
			}
		});
		return result
	}
})

export const databaseStatusUpdate = mutationField("databaseStatusUpdate", {
	type: "DatabaseStatusPayload",
	args: {
		databaseStatusWhere: nonNull("DatabaseStatusInput"),
		databaseStatusInput: nonNull("DatabaseStatusInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "DatabaseStatus")
		const result = await ctx.prisma.databaseStatus.update({
			where,
			data: {
				...args.databaseStatusInput
			}
		});
		return result
	}
})

export const deviceIndexDataTypeUpdate = mutationField("deviceIndexDataTypeUpdate", {
	type: "DeviceIndexDataTypePayload",
	args: {
		deviceIndexDataTypeWhere: nonNull("DeviceIndexDataTypeInput"),
		deviceIndexDataTypeInput: nonNull("DeviceIndexDataTypeInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "DeviceIndexDataType")
		const result = await ctx.prisma.deviceIndexDataType.update({
			where,
			data: {
				...args.deviceIndexDataTypeInput
			}
		});
		return result
	}
})

export const deviceClassUpdate = mutationField("deviceClassUpdate", {
	type: "DeviceClassPayload",
	args: {
		deviceClassWhere: nonNull("DeviceClassInput"),
		deviceClassInput: nonNull("DeviceClassInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "DeviceClass")
		const result = await ctx.prisma.deviceClass.update({
			where,
			data: {
				...args.deviceClassInput
			}
		});
		return result
	}
})

export const deviceControlUpdate = mutationField("deviceControlUpdate", {
	type: "DeviceControlPayload",
	args: {
		deviceControlWhere: nonNull("DeviceControlInput"),
		deviceControlInput: nonNull("DeviceControlInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "DeviceControl")
		const result = await ctx.prisma.deviceControl.update({
			where,
			data: {
				...args.deviceControlInput
			}
		});
		return result
	}
})

export const deviceCycleUpdate = mutationField("deviceCycleUpdate", {
	type: "DeviceCyclePayload",
	args: {
		deviceCycleWhere: nonNull("DeviceCycleInput"),
		deviceCycleInput: nonNull("DeviceCycleInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "DeviceCycle")
		const result = await ctx.prisma.deviceCycle.update({
			where,
			data: {
				...args.deviceCycleInput
			}
		});
		return result
	}
})

export const deviceFileUpdate = mutationField("deviceFileUpdate", {
	type: "DeviceFilePayload",
	args: {
		deviceFileWhere: nonNull("DeviceFileInput"),
		deviceFileInput: nonNull("DeviceFileInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "DeviceFile")
		const result = await ctx.prisma.deviceFile.update({
			where,
			data: {
				...args.deviceFileInput
			}
		});
		return result
	}
})

export const deviceInstanceUpdate = mutationField("deviceInstanceUpdate", {
	type: "DeviceInstancePayload",
	args: {
		deviceInstanceWhere: nonNull("DeviceInstanceInput"),
		deviceInstanceInput: nonNull("DeviceInstanceInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "DeviceInstance")
		const result = await ctx.prisma.deviceInstance.update({
			where,
			data: {
				...args.deviceInstanceInput
			}
		});
		return result
	}
})

export const etcHostUpdate = mutationField("etcHostUpdate", {
	type: "EtcHostPayload",
	args: {
		etcHostWhere: nonNull("EtcHostInput"),
		etcHostInput: nonNull("EtcHostInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "EtcHost")
		const result = await ctx.prisma.etcHost.update({
			where,
			data: {
				...args.etcHostInput
			}
		});
		return result
	}
})

export const eventClassUpdate = mutationField("eventClassUpdate", {
	type: "EventClassPayload",
	args: {
		eventClassWhere: nonNull("EventClassInput"),
		eventClassInput: nonNull("EventClassInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "EventClass")
		const result = await ctx.prisma.eventClass.update({
			where,
			data: {
				...args.eventClassInput
			}
		});
		return result
	}
})

export const eventGroupCodeUpdate = mutationField("eventGroupCodeUpdate", {
	type: "EventGroupCodePayload",
	args: {
		eventGroupCodeWhere: nonNull("EventGroupCodeInput"),
		eventGroupCodeInput: nonNull("EventGroupCodeInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "EventGroupCode")
		const result = await ctx.prisma.eventGroupCode.update({
			where,
			data: {
				...args.eventGroupCodeInput
			}
		});
		return result
	}
})

export const eventGroupDataUpdate = mutationField("eventGroupDataUpdate", {
	type: "EventGroupDataPayload",
	args: {
		eventGroupDataWhere: nonNull("EventGroupDataInput"),
		eventGroupDataInput: nonNull("EventGroupDataInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "EventGroupData")
		const result = await ctx.prisma.eventGroupData.update({
			where,
			data: {
				...args.eventGroupDataInput
			}
		});
		return result
	}
})

export const eventGroupDataHourAggregateUpdate = mutationField("eventGroupDataHourAggregateUpdate", {
	type: "EventGroupDataHourAggregatePayload",
	args: {
		eventGroupDataHourAggregateWhere: nonNull("EventGroupDataHourAggregateInput"),
		eventGroupDataHourAggregateInput: nonNull("EventGroupDataHourAggregateInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "EventGroupDataHourAggregate")
		const result = await ctx.prisma.eventGroupDataHourAggregate.update({
			where,
			data: {
				...args.eventGroupDataHourAggregateInput
			}
		});
		return result
	}
})

export const eventGroupValueUpdate = mutationField("eventGroupValueUpdate", {
	type: "EventGroupValuePayload",
	args: {
		eventGroupValueWhere: nonNull("EventGroupValueInput"),
		eventGroupValueInput: nonNull("EventGroupValueInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "EventGroupValue")
		const result = await ctx.prisma.eventGroupValue.update({
			where,
			data: {
				...args.eventGroupValueInput
			}
		});
		return result
	}
})

export const eventGroupUpdate = mutationField("eventGroupUpdate", {
	type: "EventGroupPayload",
	args: {
		eventGroupWhere: nonNull("EventGroupInput"),
		eventGroupInput: nonNull("EventGroupInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "EventGroup")
		const result = await ctx.prisma.eventGroup.update({
			where,
			data: {
				...args.eventGroupInput
			}
		});
		return result
	}
})

export const eventInstanceUpdate = mutationField("eventInstanceUpdate", {
	type: "EventInstancePayload",
	args: {
		eventInstanceWhere: nonNull("EventInstanceInput"),
		eventInstanceInput: nonNull("EventInstanceInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "EventInstance")
		const result = await ctx.prisma.eventInstance.update({
			where,
			data: {
				...args.eventInstanceInput
			}
		});
		return result
	}
})

export const eventTypeUpdate = mutationField("eventTypeUpdate", {
	type: "EventTypePayload",
	args: {
		eventTypeWhere: nonNull("EventTypeInput"),
		eventTypeInput: nonNull("EventTypeInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "EventType")
		const result = await ctx.prisma.eventType.update({
			where,
			data: {
				...args.eventTypeInput
			}
		});
		return result
	}
})

export const floorPlanUpdate = mutationField("floorPlanUpdate", {
	type: "FloorPlanPayload",
	args: {
		floorPlanWhere: nonNull("FloorPlanInput"),
		floorPlanInput: nonNull("FloorPlanInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "FloorPlan")
		const result = await ctx.prisma.floorPlan.update({
			where,
			data: {
				...args.floorPlanInput
			}
		});
		return result
	}
})

export const deviceDataUpdate = mutationField("deviceDataUpdate", {
	type: "DeviceDataPayload",
	args: {
		deviceDataWhere: nonNull("DeviceDataInput"),
		deviceDataInput: nonNull("DeviceDataInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "DeviceData")
		const result = await ctx.prisma.deviceData.update({
			where,
			data: {
				...args.deviceDataInput
			}
		});
		return result
	}
})

export const mainDeviceClassUpdate = mutationField("mainDeviceClassUpdate", {
	type: "MainDeviceClassPayload",
	args: {
		mainDeviceClassWhere: nonNull("MainDeviceClassInput"),
		mainDeviceClassInput: nonNull("MainDeviceClassInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "MainDeviceClass")
		const result = await ctx.prisma.mainDeviceClass.update({
			where,
			data: {
				...args.mainDeviceClassInput
			}
		});
		return result
	}
})

export const mainDeviceInstanceUpdate = mutationField("mainDeviceInstanceUpdate", {
	type: "MainDeviceInstancePayload",
	args: {
		mainDeviceInstanceWhere: nonNull("MainDeviceInstanceInput"),
		mainDeviceInstanceInput: nonNull("MainDeviceInstanceInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "MainDeviceInstance")
		const result = await ctx.prisma.mainDeviceInstance.update({
			where,
			data: {
				...args.mainDeviceInstanceInput
			}
		});
		return result
	}
})

export const performanceIndicatorConfigUpdate = mutationField("performanceIndicatorConfigUpdate", {
	type: "PerformanceIndicatorConfigPayload",
	args: {
		performanceIndicatorConfigWhere: nonNull("PerformanceIndicatorConfigInput"),
		performanceIndicatorConfigInput: nonNull("PerformanceIndicatorConfigInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "PerformanceIndicatorConfig")
		const result = await ctx.prisma.performanceIndicatorConfig.update({
			where,
			data: {
				...args.performanceIndicatorConfigInput
			}
		});
		return result
	}
})

export const privilegeUpdate = mutationField("privilegeUpdate", {
	type: "PrivilegePayload",
	args: {
		privilegeWhere: nonNull("PrivilegeInput"),
		privilegeInput: nonNull("PrivilegeInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "Privilege")
		const result = await ctx.prisma.privilege.update({
			where,
			data: {
				...args.privilegeInput
			}
		});
		return result
	}
})

export const processDataUpdate = mutationField("processDataUpdate", {
	type: "ProcessDataPayload",
	args: {
		processDataWhere: nonNull("ProcessDataInput"),
		processDataInput: nonNull("ProcessDataInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "ProcessData")
		const result = await ctx.prisma.processData.update({
			where,
			data: {
				...args.processDataInput
			}
		});
		return result
	}
})

export const processDataConditionUpdate = mutationField("processDataConditionUpdate", {
	type: "ProcessDataConditionPayload",
	args: {
		processDataConditionWhere: nonNull("ProcessDataConditionInput"),
		processDataConditionInput: nonNull("ProcessDataConditionInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "ProcessDataCondition")
		const result = await ctx.prisma.processDataCondition.update({
			where,
			data: {
				...args.processDataConditionInput
			}
		});
		return result
	}
})

export const processDataModeUpdate = mutationField("processDataModeUpdate", {
	type: "ProcessDataModePayload",
	args: {
		processDataModeWhere: nonNull("ProcessDataModeInput"),
		processDataModeInput: nonNull("ProcessDataModeInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "ProcessDataMode")
		const result = await ctx.prisma.processDataMode.update({
			where,
			data: {
				...args.processDataModeInput
			}
		});
		return result
	}
})

export const registrationStatusUpdate = mutationField("registrationStatusUpdate", {
	type: "RegistrationStatusPayload",
	args: {
		registrationStatusWhere: nonNull("RegistrationStatusInput"),
		registrationStatusInput: nonNull("RegistrationStatusInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "RegistrationStatus")
		const result = await ctx.prisma.registrationStatus.update({
			where,
			data: {
				...args.registrationStatusInput
			}
		});
		return result
	}
})

export const replayConfigUpdate = mutationField("replayConfigUpdate", {
	type: "ReplayConfigPayload",
	args: {
		replayConfigWhere: nonNull("ReplayConfigInput"),
		replayConfigInput: nonNull("ReplayConfigInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "ReplayConfig")
		const result = await ctx.prisma.replayConfig.update({
			where,
			data: {
				...args.replayConfigInput
			}
		});
		return result
	}
})

export const replayDataUpdate = mutationField("replayDataUpdate", {
	type: "ReplayDataPayload",
	args: {
		replayDataWhere: nonNull("ReplayDataInput"),
		replayDataInput: nonNull("ReplayDataInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "ReplayData")
		const result = await ctx.prisma.replayData.update({
			where,
			data: {
				...args.replayDataInput
			}
		});
		return result
	}
})

export const replaySetUpdate = mutationField("replaySetUpdate", {
	type: "ReplaySetPayload",
	args: {
		replaySetWhere: nonNull("ReplaySetInput"),
		replaySetInput: nonNull("ReplaySetInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "ReplaySet")
		const result = await ctx.prisma.replaySet.update({
			where,
			data: {
				...args.replaySetInput
			}
		});
		return result
	}
})

export const reportingUpdate = mutationField("reportingUpdate", {
	type: "ReportingPayload",
	args: {
		reportingWhere: nonNull("ReportingInput"),
		reportingInput: nonNull("ReportingInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "Reporting")
		const result = await ctx.prisma.reporting.update({
			where,
			data: {
				...args.reportingInput
			}
		});
		return result
	}
})

export const reportingConfigUpdate = mutationField("reportingConfigUpdate", {
	type: "ReportingConfigPayload",
	args: {
		reportingConfigWhere: nonNull("ReportingConfigInput"),
		reportingConfigInput: nonNull("ReportingConfigInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "ReportingConfig")
		const result = await ctx.prisma.reportingConfig.update({
			where,
			data: {
				...args.reportingConfigInput
			}
		});
		return result
	}
})

export const representationUpdate = mutationField("representationUpdate", {
	type: "RepresentationPayload",
	args: {
		representationWhere: nonNull("RepresentationInput"),
		representationInput: nonNull("RepresentationInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "Representation")
		const result = await ctx.prisma.representation.update({
			where,
			data: {
				...args.representationInput
			}
		});
		return result
	}
})

export const rolePrivilegeUpdate = mutationField("rolePrivilegeUpdate", {
	type: "RolePrivilegePayload",
	args: {
		rolePrivilegeWhere: nonNull("RolePrivilegeInput"),
		rolePrivilegeInput: nonNull("RolePrivilegeInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "RolePrivilege")
		const result = await ctx.prisma.rolePrivilege.update({
			where,
			data: {
				...args.rolePrivilegeInput
			}
		});
		return result
	}
})

export const roleUpdate = mutationField("roleUpdate", {
	type: "RolePayload",
	args: {
		roleWhere: nonNull("RoleInput"),
		roleInput: nonNull("RoleInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "Role")
		const result = await ctx.prisma.role.update({
			where,
			data: {
				...args.roleInput
			}
		});
		return result
	}
})

export const softwareAdapterUpdate = mutationField("softwareAdapterUpdate", {
	type: "SoftwareAdapterPayload",
	args: {
		softwareAdapterWhere: nonNull("SoftwareAdapterInput"),
		softwareAdapterInput: nonNull("SoftwareAdapterInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "SoftwareAdapter")
		const result = await ctx.prisma.softwareAdapter.update({
			where,
			data: {
				...args.softwareAdapterInput
			}
		});
		return result
	}
})

export const timeseriesUpdate = mutationField("timeseriesUpdate", {
	type: "TimeseriesPayload",
	args: {
		timeseriesWhere: nonNull("TimeseriesInput"),
		timeseriesInput: nonNull("TimeseriesInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "Timeseries")
		const result = await ctx.prisma.timeseries.update({
			where,
			data: {
				...args.timeseriesInput
			}
		});
		return result
	}
})

export const timeseriesDataUpdate = mutationField("timeseriesDataUpdate", {
	type: "TimeseriesDataPayload",
	args: {
		timeseriesDataWhere: nonNull("TimeseriesDataInput"),
		timeseriesDataInput: nonNull("TimeseriesDataInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "TimeseriesData")
		const result = await ctx.prisma.timeseriesData.update({
			where,
			data: {
				...args.timeseriesDataInput
			}
		});
		return result
	}
})

export const timeseriesDataHourAggregateUpdate = mutationField("timeseriesDataHourAggregateUpdate", {
	type: "TimeseriesDataHourAggregatePayload",
	args: {
		timeseriesDataHourAggregateWhere: nonNull("TimeseriesDataHourAggregateInput"),
		timeseriesDataHourAggregateInput: nonNull("TimeseriesDataHourAggregateInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "TimeseriesDataHourAggregate")
		const result = await ctx.prisma.timeseriesDataHourAggregate.update({
			where,
			data: {
				...args.timeseriesDataHourAggregateInput
			}
		});
		return result
	}
})

export const updaterConfigUpdate = mutationField("updaterConfigUpdate", {
	type: "UpdaterConfigPayload",
	args: {
		updaterConfigWhere: nonNull("UpdaterConfigInput"),
		updaterConfigInput: nonNull("UpdaterConfigInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "UpdaterConfig")
		const result = await ctx.prisma.updaterConfig.update({
			where,
			data: {
				...args.updaterConfigInput
			}
		});
		return result
	}
})

export const userRoleUpdate = mutationField("userRoleUpdate", {
	type: "UserRolePayload",
	args: {
		userRoleWhere: nonNull("UserRoleInput"),
		userRoleInput: nonNull("UserRoleInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "UserRole")
		const result = await ctx.prisma.userRole.update({
			where,
			data: {
				...args.userRoleInput
			}
		});
		return result
	}
})

export const userUpdate = mutationField("userUpdate", {
	type: "UserPayload",
	args: {
		userWhere: nonNull("UserInput"),
		userInput: nonNull("UserInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "User")
		const result = await ctx.prisma.user.update({
			where,
			data: {
				...args.userInput
			}
		});
		return result
	}
})

export const vendorUpdate = mutationField("vendorUpdate", {
	type: "VendorPayload",
	args: {
		vendorWhere: nonNull("VendorInput"),
		vendorInput: nonNull("VendorInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "Vendor")
		const result = await ctx.prisma.vendor.update({
			where,
			data: {
				...args.vendorInput
			}
		});
		return result
	}
})

export const xConfigUpdate = mutationField("xConfigUpdate", {
	type: "XConfigPayload",
	args: {
		xConfigWhere: nonNull("XConfigInput"),
		xConfigInput: nonNull("XConfigInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "XConfig")
		const result = await ctx.prisma.xConfig.update({
			where,
			data: {
				...args.xConfigInput
			}
		});
		return result
	}
})

export const extrapolationFunctionUpdate = mutationField("extrapolationFunctionUpdate", {
	type: "ExtrapolationFunctionPayload",
	args: {
		extrapolationFunctionWhere: nonNull("ExtrapolationFunctionInput"),
		extrapolationFunctionInput: nonNull("ExtrapolationFunctionInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "ExtrapolationFunction")
		const result = await ctx.prisma.extrapolationFunction.update({
			where,
			data: {
				...args.extrapolationFunctionInput
			}
		});
		return result
	}
})

export const predictionConfigUpdate = mutationField("predictionConfigUpdate", {
	type: "PredictionConfigPayload",
	args: {
		predictionConfigWhere: nonNull("PredictionConfigInput"),
		predictionConfigInput: nonNull("PredictionConfigInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "PredictionConfig")
		const result = await ctx.prisma.predictionConfig.update({
			where,
			data: {
				...args.predictionConfigInput
			}
		});
		return result
	}
})

export const maintenanceUpdate = mutationField("maintenanceUpdate", {
	type: "MaintenancePayload",
	args: {
		maintenanceWhere: nonNull("MaintenanceInput"),
		maintenanceInput: nonNull("MaintenanceInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "Maintenance")
		const result = await ctx.prisma.maintenance.update({
			where,
			data: {
				...args.maintenanceInput
			}
		});
		return result
	}
})

export const maintenanceTypeUpdate = mutationField("maintenanceTypeUpdate", {
	type: "MaintenanceTypePayload",
	args: {
		maintenanceTypeWhere: nonNull("MaintenanceTypeInput"),
		maintenanceTypeInput: nonNull("MaintenanceTypeInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "MaintenanceType")
		const result = await ctx.prisma.maintenanceType.update({
			where,
			data: {
				...args.maintenanceTypeInput
			}
		});
		return result
	}
})

export const maintenanceAlarmConfigUpdate = mutationField("maintenanceAlarmConfigUpdate", {
	type: "MaintenanceAlarmConfigPayload",
	args: {
		maintenanceAlarmConfigWhere: nonNull("MaintenanceAlarmConfigInput"),
		maintenanceAlarmConfigInput: nonNull("MaintenanceAlarmConfigInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "MaintenanceAlarmConfig")
		const result = await ctx.prisma.maintenanceAlarmConfig.update({
			where,
			data: {
				...args.maintenanceAlarmConfigInput
			}
		});
		return result
	}
})

export const maintenanceConfigUpdate = mutationField("maintenanceConfigUpdate", {
	type: "MaintenanceConfigPayload",
	args: {
		maintenanceConfigWhere: nonNull("MaintenanceConfigInput"),
		maintenanceConfigInput: nonNull("MaintenanceConfigInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "MaintenanceConfig")
		const result = await ctx.prisma.maintenanceConfig.update({
			where,
			data: {
				...args.maintenanceConfigInput
			}
		});
		return result
	}
})

export const reportTypeUpdate = mutationField("reportTypeUpdate", {
	type: "ReportTypePayload",
	args: {
		reportTypeWhere: nonNull("ReportTypeInput"),
		reportTypeInput: nonNull("ReportTypeInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "ReportType")
		const result = await ctx.prisma.reportType.update({
			where,
			data: {
				...args.reportTypeInput
			}
		});
		return result
	}
})

export const taskUpdate = mutationField("taskUpdate", {
	type: "TaskPayload",
	args: {
		taskWhere: nonNull("TaskInput"),
		taskInput: nonNull("TaskInput")
	},
	resolve: async (_, args, ctx) => {
		const { where } = prepareConditions < typeof args > (args, "Task")
		const result = await ctx.prisma.task.update({
			where,
			data: {
				...args.taskInput
			}
		});
		return result
	}
})
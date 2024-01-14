import { nonNull, list, mutationField } from "nexus"

export const activeEventInstanceCreateMany = mutationField("activeEventInstanceCreateMany", {
	type: "RowsAffectedPayload",
	args: {
		activeEventInstanceInput: nonNull(list(nonNull("ActiveEventInstanceInput")))
	},
	resolve: async (_, args, ctx) => {
		const result = await ctx.prisma.activeEventInstance.createMany({
			data: args.activeEventInstanceInput
		});
		return result
	}
})

export const databaseStatusCreateMany = mutationField("databaseStatusCreateMany", {
	type: "RowsAffectedPayload",
	args: {
		databaseStatusInput: nonNull(list(nonNull("DatabaseStatusInput")))
	},
	resolve: async (_, args, ctx) => {
		const result = await ctx.prisma.databaseStatus.createMany({
			data: args.databaseStatusInput
		});
		return result
	}
})

export const deviceIndexDataTypeCreateMany = mutationField("deviceIndexDataTypeCreateMany", {
	type: "RowsAffectedPayload",
	args: {
		deviceIndexDataTypeInput: nonNull(list(nonNull("DeviceIndexDataTypeInput")))
	},
	resolve: async (_, args, ctx) => {
		const result = await ctx.prisma.deviceIndexDataType.createMany({
			data: args.deviceIndexDataTypeInput
		});
		return result
	}
})

export const deviceClassCreateMany = mutationField("deviceClassCreateMany", {
	type: "RowsAffectedPayload",
	args: {
		deviceClassInput: nonNull(list(nonNull("DeviceClassInput")))
	},
	resolve: async (_, args, ctx) => {
		const result = await ctx.prisma.deviceClass.createMany({
			data: args.deviceClassInput
		});
		return result
	}
})

export const deviceControlCreateMany = mutationField("deviceControlCreateMany", {
	type: "RowsAffectedPayload",
	args: {
		deviceControlInput: nonNull(list(nonNull("DeviceControlInput")))
	},
	resolve: async (_, args, ctx) => {
		const result = await ctx.prisma.deviceControl.createMany({
			data: args.deviceControlInput
		});
		return result
	}
})

export const deviceCycleCreateMany = mutationField("deviceCycleCreateMany", {
	type: "RowsAffectedPayload",
	args: {
		deviceCycleInput: nonNull(list(nonNull("DeviceCycleInput")))
	},
	resolve: async (_, args, ctx) => {
		const result = await ctx.prisma.deviceCycle.createMany({
			data: args.deviceCycleInput
		});
		return result
	}
})

export const deviceFileCreateMany = mutationField("deviceFileCreateMany", {
	type: "RowsAffectedPayload",
	args: {
		deviceFileInput: nonNull(list(nonNull("DeviceFileInput")))
	},
	resolve: async (_, args, ctx) => {
		const result = await ctx.prisma.deviceFile.createMany({
			data: args.deviceFileInput
		});
		return result
	}
})

export const deviceInstanceCreateMany = mutationField("deviceInstanceCreateMany", {
	type: "RowsAffectedPayload",
	args: {
		deviceInstanceInput: nonNull(list(nonNull("DeviceInstanceInput")))
	},
	resolve: async (_, args, ctx) => {
		const result = await ctx.prisma.deviceInstance.createMany({
			data: args.deviceInstanceInput
		});
		return result
	}
})

export const etcHostCreateMany = mutationField("etcHostCreateMany", {
	type: "RowsAffectedPayload",
	args: {
		etcHostInput: nonNull(list(nonNull("EtcHostInput")))
	},
	resolve: async (_, args, ctx) => {
		const result = await ctx.prisma.etcHost.createMany({
			data: args.etcHostInput
		});
		return result
	}
})

export const eventClassCreateMany = mutationField("eventClassCreateMany", {
	type: "RowsAffectedPayload",
	args: {
		eventClassInput: nonNull(list(nonNull("EventClassInput")))
	},
	resolve: async (_, args, ctx) => {
		const result = await ctx.prisma.eventClass.createMany({
			data: args.eventClassInput
		});
		return result
	}
})

export const eventGroupCodeCreateMany = mutationField("eventGroupCodeCreateMany", {
	type: "RowsAffectedPayload",
	args: {
		eventGroupCodeInput: nonNull(list(nonNull("EventGroupCodeInput")))
	},
	resolve: async (_, args, ctx) => {
		const result = await ctx.prisma.eventGroupCode.createMany({
			data: args.eventGroupCodeInput
		});
		return result
	}
})

export const eventGroupDataCreateMany = mutationField("eventGroupDataCreateMany", {
	type: "RowsAffectedPayload",
	args: {
		eventGroupDataInput: nonNull(list(nonNull("EventGroupDataInput")))
	},
	resolve: async (_, args, ctx) => {
		const result = await ctx.prisma.eventGroupData.createMany({
			data: args.eventGroupDataInput
		});
		return result
	}
})

export const eventGroupDataHourAggregateCreateMany = mutationField("eventGroupDataHourAggregateCreateMany", {
	type: "RowsAffectedPayload",
	args: {
		eventGroupDataHourAggregateInput: nonNull(list(nonNull("EventGroupDataHourAggregateInput")))
	},
	resolve: async (_, args, ctx) => {
		const result = await ctx.prisma.eventGroupDataHourAggregate.createMany({
			data: args.eventGroupDataHourAggregateInput
		});
		return result
	}
})

export const eventGroupValueCreateMany = mutationField("eventGroupValueCreateMany", {
	type: "RowsAffectedPayload",
	args: {
		eventGroupValueInput: nonNull(list(nonNull("EventGroupValueInput")))
	},
	resolve: async (_, args, ctx) => {
		const result = await ctx.prisma.eventGroupValue.createMany({
			data: args.eventGroupValueInput
		});
		return result
	}
})

export const eventGroupCreateMany = mutationField("eventGroupCreateMany", {
	type: "RowsAffectedPayload",
	args: {
		eventGroupInput: nonNull(list(nonNull("EventGroupInput")))
	},
	resolve: async (_, args, ctx) => {
		const result = await ctx.prisma.eventGroup.createMany({
			data: args.eventGroupInput
		});
		return result
	}
})

export const eventInstanceCreateMany = mutationField("eventInstanceCreateMany", {
	type: "RowsAffectedPayload",
	args: {
		eventInstanceInput: nonNull(list(nonNull("EventInstanceInput")))
	},
	resolve: async (_, args, ctx) => {
		const result = await ctx.prisma.eventInstance.createMany({
			data: args.eventInstanceInput
		});
		return result
	}
})

export const eventTypeCreateMany = mutationField("eventTypeCreateMany", {
	type: "RowsAffectedPayload",
	args: {
		eventTypeInput: nonNull(list(nonNull("EventTypeInput")))
	},
	resolve: async (_, args, ctx) => {
		const result = await ctx.prisma.eventType.createMany({
			data: args.eventTypeInput
		});
		return result
	}
})

export const floorPlanCreateMany = mutationField("floorPlanCreateMany", {
	type: "RowsAffectedPayload",
	args: {
		floorPlanInput: nonNull(list(nonNull("FloorPlanInput")))
	},
	resolve: async (_, args, ctx) => {
		const result = await ctx.prisma.floorPlan.createMany({
			data: args.floorPlanInput
		});
		return result
	}
})

export const deviceDataCreateMany = mutationField("deviceDataCreateMany", {
	type: "RowsAffectedPayload",
	args: {
		deviceDataInput: nonNull(list(nonNull("DeviceDataInput")))
	},
	resolve: async (_, args, ctx) => {
		const result = await ctx.prisma.deviceData.createMany({
			data: args.deviceDataInput
		});
		return result
	}
})

export const mainDeviceClassCreateMany = mutationField("mainDeviceClassCreateMany", {
	type: "RowsAffectedPayload",
	args: {
		mainDeviceClassInput: nonNull(list(nonNull("MainDeviceClassInput")))
	},
	resolve: async (_, args, ctx) => {
		const result = await ctx.prisma.mainDeviceClass.createMany({
			data: args.mainDeviceClassInput
		});
		return result
	}
})

export const mainDeviceInstanceCreateMany = mutationField("mainDeviceInstanceCreateMany", {
	type: "RowsAffectedPayload",
	args: {
		mainDeviceInstanceInput: nonNull(list(nonNull("MainDeviceInstanceInput")))
	},
	resolve: async (_, args, ctx) => {
		const result = await ctx.prisma.mainDeviceInstance.createMany({
			data: args.mainDeviceInstanceInput
		});
		return result
	}
})

export const performanceIndicatorConfigCreateMany = mutationField("performanceIndicatorConfigCreateMany", {
	type: "RowsAffectedPayload",
	args: {
		performanceIndicatorConfigInput: nonNull(list(nonNull("PerformanceIndicatorConfigInput")))
	},
	resolve: async (_, args, ctx) => {
		const result = await ctx.prisma.performanceIndicatorConfig.createMany({
			data: args.performanceIndicatorConfigInput
		});
		return result
	}
})

export const privilegeCreateMany = mutationField("privilegeCreateMany", {
	type: "RowsAffectedPayload",
	args: {
		privilegeInput: nonNull(list(nonNull("PrivilegeInput")))
	},
	resolve: async (_, args, ctx) => {
		const result = await ctx.prisma.privilege.createMany({
			data: args.privilegeInput
		});
		return result
	}
})

export const processDataCreateMany = mutationField("processDataCreateMany", {
	type: "RowsAffectedPayload",
	args: {
		processDataInput: nonNull(list(nonNull("ProcessDataInput")))
	},
	resolve: async (_, args, ctx) => {
		const result = await ctx.prisma.processData.createMany({
			data: args.processDataInput
		});
		return result
	}
})

export const processDataConditionCreateMany = mutationField("processDataConditionCreateMany", {
	type: "RowsAffectedPayload",
	args: {
		processDataConditionInput: nonNull(list(nonNull("ProcessDataConditionInput")))
	},
	resolve: async (_, args, ctx) => {
		const result = await ctx.prisma.processDataCondition.createMany({
			data: args.processDataConditionInput
		});
		return result
	}
})

export const processDataModeCreateMany = mutationField("processDataModeCreateMany", {
	type: "RowsAffectedPayload",
	args: {
		processDataModeInput: nonNull(list(nonNull("ProcessDataModeInput")))
	},
	resolve: async (_, args, ctx) => {
		const result = await ctx.prisma.processDataMode.createMany({
			data: args.processDataModeInput
		});
		return result
	}
})

export const registrationStatusCreateMany = mutationField("registrationStatusCreateMany", {
	type: "RowsAffectedPayload",
	args: {
		registrationStatusInput: nonNull(list(nonNull("RegistrationStatusInput")))
	},
	resolve: async (_, args, ctx) => {
		const result = await ctx.prisma.registrationStatus.createMany({
			data: args.registrationStatusInput
		});
		return result
	}
})

export const replayConfigCreateMany = mutationField("replayConfigCreateMany", {
	type: "RowsAffectedPayload",
	args: {
		replayConfigInput: nonNull(list(nonNull("ReplayConfigInput")))
	},
	resolve: async (_, args, ctx) => {
		const result = await ctx.prisma.replayConfig.createMany({
			data: args.replayConfigInput
		});
		return result
	}
})

export const replayDataCreateMany = mutationField("replayDataCreateMany", {
	type: "RowsAffectedPayload",
	args: {
		replayDataInput: nonNull(list(nonNull("ReplayDataInput")))
	},
	resolve: async (_, args, ctx) => {
		const result = await ctx.prisma.replayData.createMany({
			data: args.replayDataInput
		});
		return result
	}
})

export const replaySetCreateMany = mutationField("replaySetCreateMany", {
	type: "RowsAffectedPayload",
	args: {
		replaySetInput: nonNull(list(nonNull("ReplaySetInput")))
	},
	resolve: async (_, args, ctx) => {
		const result = await ctx.prisma.replaySet.createMany({
			data: args.replaySetInput
		});
		return result
	}
})

export const reportingCreateMany = mutationField("reportingCreateMany", {
	type: "RowsAffectedPayload",
	args: {
		reportingInput: nonNull(list(nonNull("ReportingInput")))
	},
	resolve: async (_, args, ctx) => {
		const result = await ctx.prisma.reporting.createMany({
			data: args.reportingInput
		});
		return result
	}
})

export const reportingConfigCreateMany = mutationField("reportingConfigCreateMany", {
	type: "RowsAffectedPayload",
	args: {
		reportingConfigInput: nonNull(list(nonNull("ReportingConfigInput")))
	},
	resolve: async (_, args, ctx) => {
		const result = await ctx.prisma.reportingConfig.createMany({
			data: args.reportingConfigInput
		});
		return result
	}
})

export const representationCreateMany = mutationField("representationCreateMany", {
	type: "RowsAffectedPayload",
	args: {
		representationInput: nonNull(list(nonNull("RepresentationInput")))
	},
	resolve: async (_, args, ctx) => {
		const result = await ctx.prisma.representation.createMany({
			data: args.representationInput
		});
		return result
	}
})

export const rolePrivilegeCreateMany = mutationField("rolePrivilegeCreateMany", {
	type: "RowsAffectedPayload",
	args: {
		rolePrivilegeInput: nonNull(list(nonNull("RolePrivilegeInput")))
	},
	resolve: async (_, args, ctx) => {
		const result = await ctx.prisma.rolePrivilege.createMany({
			data: args.rolePrivilegeInput
		});
		return result
	}
})

export const roleCreateMany = mutationField("roleCreateMany", {
	type: "RowsAffectedPayload",
	args: {
		roleInput: nonNull(list(nonNull("RoleInput")))
	},
	resolve: async (_, args, ctx) => {
		const result = await ctx.prisma.role.createMany({
			data: args.roleInput
		});
		return result
	}
})

export const softwareAdapterCreateMany = mutationField("softwareAdapterCreateMany", {
	type: "RowsAffectedPayload",
	args: {
		softwareAdapterInput: nonNull(list(nonNull("SoftwareAdapterInput")))
	},
	resolve: async (_, args, ctx) => {
		const result = await ctx.prisma.softwareAdapter.createMany({
			data: args.softwareAdapterInput
		});
		return result
	}
})

export const timeseriesCreateMany = mutationField("timeseriesCreateMany", {
	type: "RowsAffectedPayload",
	args: {
		timeseriesInput: nonNull(list(nonNull("TimeseriesInput")))
	},
	resolve: async (_, args, ctx) => {
		const result = await ctx.prisma.timeseries.createMany({
			data: args.timeseriesInput
		});
		return result
	}
})

export const timeseriesDataCreateMany = mutationField("timeseriesDataCreateMany", {
	type: "RowsAffectedPayload",
	args: {
		timeseriesDataInput: nonNull(list(nonNull("TimeseriesDataInput")))
	},
	resolve: async (_, args, ctx) => {
		const result = await ctx.prisma.timeseriesData.createMany({
			data: args.timeseriesDataInput
		});
		return result
	}
})

export const timeseriesDataHourAggregateCreateMany = mutationField("timeseriesDataHourAggregateCreateMany", {
	type: "RowsAffectedPayload",
	args: {
		timeseriesDataHourAggregateInput: nonNull(list(nonNull("TimeseriesDataHourAggregateInput")))
	},
	resolve: async (_, args, ctx) => {
		const result = await ctx.prisma.timeseriesDataHourAggregate.createMany({
			data: args.timeseriesDataHourAggregateInput
		});
		return result
	}
})

export const updaterConfigCreateMany = mutationField("updaterConfigCreateMany", {
	type: "RowsAffectedPayload",
	args: {
		updaterConfigInput: nonNull(list(nonNull("UpdaterConfigInput")))
	},
	resolve: async (_, args, ctx) => {
		const result = await ctx.prisma.updaterConfig.createMany({
			data: args.updaterConfigInput
		});
		return result
	}
})

export const userRoleCreateMany = mutationField("userRoleCreateMany", {
	type: "RowsAffectedPayload",
	args: {
		userRoleInput: nonNull(list(nonNull("UserRoleInput")))
	},
	resolve: async (_, args, ctx) => {
		const result = await ctx.prisma.userRole.createMany({
			data: args.userRoleInput
		});
		return result
	}
})

export const userCreateMany = mutationField("userCreateMany", {
	type: "RowsAffectedPayload",
	args: {
		userInput: nonNull(list(nonNull("UserInput")))
	},
	resolve: async (_, args, ctx) => {
		const result = await ctx.prisma.user.createMany({
			data: args.userInput
		});
		return result
	}
})

export const vendorCreateMany = mutationField("vendorCreateMany", {
	type: "RowsAffectedPayload",
	args: {
		vendorInput: nonNull(list(nonNull("VendorInput")))
	},
	resolve: async (_, args, ctx) => {
		const result = await ctx.prisma.vendor.createMany({
			data: args.vendorInput
		});
		return result
	}
})

export const xConfigCreateMany = mutationField("xConfigCreateMany", {
	type: "RowsAffectedPayload",
	args: {
		xConfigInput: nonNull(list(nonNull("XConfigInput")))
	},
	resolve: async (_, args, ctx) => {
		const result = await ctx.prisma.xConfig.createMany({
			data: args.xConfigInput
		});
		return result
	}
})

export const extrapolationFunctionCreateMany = mutationField("extrapolationFunctionCreateMany", {
	type: "RowsAffectedPayload",
	args: {
		extrapolationFunctionInput: nonNull(list(nonNull("ExtrapolationFunctionInput")))
	},
	resolve: async (_, args, ctx) => {
		const result = await ctx.prisma.extrapolationFunction.createMany({
			data: args.extrapolationFunctionInput
		});
		return result
	}
})

export const predictionConfigCreateMany = mutationField("predictionConfigCreateMany", {
	type: "RowsAffectedPayload",
	args: {
		predictionConfigInput: nonNull(list(nonNull("PredictionConfigInput")))
	},
	resolve: async (_, args, ctx) => {
		const result = await ctx.prisma.predictionConfig.createMany({
			data: args.predictionConfigInput
		});
		return result
	}
})

export const maintenanceCreateMany = mutationField("maintenanceCreateMany", {
	type: "RowsAffectedPayload",
	args: {
		maintenanceInput: nonNull(list(nonNull("MaintenanceInput")))
	},
	resolve: async (_, args, ctx) => {
		const result = await ctx.prisma.maintenance.createMany({
			data: args.maintenanceInput
		});
		return result
	}
})

export const maintenanceTypeCreateMany = mutationField("maintenanceTypeCreateMany", {
	type: "RowsAffectedPayload",
	args: {
		maintenanceTypeInput: nonNull(list(nonNull("MaintenanceTypeInput")))
	},
	resolve: async (_, args, ctx) => {
		const result = await ctx.prisma.maintenanceType.createMany({
			data: args.maintenanceTypeInput
		});
		return result
	}
})

export const maintenanceAlarmConfigCreateMany = mutationField("maintenanceAlarmConfigCreateMany", {
	type: "RowsAffectedPayload",
	args: {
		maintenanceAlarmConfigInput: nonNull(list(nonNull("MaintenanceAlarmConfigInput")))
	},
	resolve: async (_, args, ctx) => {
		const result = await ctx.prisma.maintenanceAlarmConfig.createMany({
			data: args.maintenanceAlarmConfigInput
		});
		return result
	}
})

export const maintenanceConfigCreateMany = mutationField("maintenanceConfigCreateMany", {
	type: "RowsAffectedPayload",
	args: {
		maintenanceConfigInput: nonNull(list(nonNull("MaintenanceConfigInput")))
	},
	resolve: async (_, args, ctx) => {
		const result = await ctx.prisma.maintenanceConfig.createMany({
			data: args.maintenanceConfigInput
		});
		return result
	}
})

export const reportTypeCreateMany = mutationField("reportTypeCreateMany", {
	type: "RowsAffectedPayload",
	args: {
		reportTypeInput: nonNull(list(nonNull("ReportTypeInput")))
	},
	resolve: async (_, args, ctx) => {
		const result = await ctx.prisma.reportType.createMany({
			data: args.reportTypeInput
		});
		return result
	}
})

export const taskCreateMany = mutationField("taskCreateMany", {
	type: "RowsAffectedPayload",
	args: {
		taskInput: nonNull(list(nonNull("TaskInput")))
	},
	resolve: async (_, args, ctx) => {
		const result = await ctx.prisma.task.createMany({
			data: args.taskInput
		});
		return result
	}
})
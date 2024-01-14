import { nonNull, mutationField } from "nexus"

export const activeEventInstanceCreate = mutationField("activeEventInstanceCreate", {
	type: "ActiveEventInstancePayload",
	args: {
		activeEventInstanceInput: nonNull("ActiveEventInstanceInput"),
	},
	resolve: async (_, args, ctx) => {
		const result = await ctx.prisma.activeEventInstance.create({
			data: {
				...args.activeEventInstanceInput
			}
		});
		return result
	}
})

export const databaseStatusCreate = mutationField("databaseStatusCreate", {
	type: "DatabaseStatusPayload",
	args: {
		databaseStatusInput: nonNull("DatabaseStatusInput"),
	},
	resolve: async (_, args, ctx) => {
		const result = await ctx.prisma.databaseStatus.create({
			data: {
				...args.databaseStatusInput
			}
		});
		return result
	}
})

export const deviceIndexDataTypeCreate = mutationField("deviceIndexDataTypeCreate", {
	type: "DeviceIndexDataTypePayload",
	args: {
		deviceIndexDataTypeInput: nonNull("DeviceIndexDataTypeInput"),
	},
	resolve: async (_, args, ctx) => {
		const result = await ctx.prisma.deviceIndexDataType.create({
			data: {
				...args.deviceIndexDataTypeInput
			}
		});
		return result
	}
})

export const deviceClassCreate = mutationField("deviceClassCreate", {
	type: "DeviceClassPayload",
	args: {
		deviceClassInput: nonNull("DeviceClassInput"),
	},
	resolve: async (_, args, ctx) => {
		const result = await ctx.prisma.deviceClass.create({
			data: {
				...args.deviceClassInput
			}
		});
		return result
	}
})

export const deviceControlCreate = mutationField("deviceControlCreate", {
	type: "DeviceControlPayload",
	args: {
		deviceControlInput: nonNull("DeviceControlInput"),
	},
	resolve: async (_, args, ctx) => {
		const result = await ctx.prisma.deviceControl.create({
			data: {
				...args.deviceControlInput
			}
		});
		return result
	}
})

export const deviceCycleCreate = mutationField("deviceCycleCreate", {
	type: "DeviceCyclePayload",
	args: {
		deviceCycleInput: nonNull("DeviceCycleInput"),
	},
	resolve: async (_, args, ctx) => {
		const result = await ctx.prisma.deviceCycle.create({
			data: {
				...args.deviceCycleInput
			}
		});
		return result
	}
})

export const deviceFileCreate = mutationField("deviceFileCreate", {
	type: "DeviceFilePayload",
	args: {
		deviceFileInput: nonNull("DeviceFileInput"),
	},
	resolve: async (_, args, ctx) => {
		const result = await ctx.prisma.deviceFile.create({
			data: {
				...args.deviceFileInput
			}
		});
		return result
	}
})

export const deviceInstanceCreate = mutationField("deviceInstanceCreate", {
	type: "DeviceInstancePayload",
	args: {
		deviceInstanceInput: nonNull("DeviceInstanceInput"),
	},
	resolve: async (_, args, ctx) => {
		const result = await ctx.prisma.deviceInstance.create({
			data: {
				...args.deviceInstanceInput
			}
		});
		return result
	}
})

export const etcHostCreate = mutationField("etcHostCreate", {
	type: "EtcHostPayload",
	args: {
		etcHostInput: nonNull("EtcHostInput"),
	},
	resolve: async (_, args, ctx) => {
		const result = await ctx.prisma.etcHost.create({
			data: {
				...args.etcHostInput
			}
		});
		return result
	}
})

export const eventClassCreate = mutationField("eventClassCreate", {
	type: "EventClassPayload",
	args: {
		eventClassInput: nonNull("EventClassInput"),
	},
	resolve: async (_, args, ctx) => {
		const result = await ctx.prisma.eventClass.create({
			data: {
				...args.eventClassInput
			}
		});
		return result
	}
})

export const eventGroupCodeCreate = mutationField("eventGroupCodeCreate", {
	type: "EventGroupCodePayload",
	args: {
		eventGroupCodeInput: nonNull("EventGroupCodeInput"),
	},
	resolve: async (_, args, ctx) => {
		const result = await ctx.prisma.eventGroupCode.create({
			data: {
				...args.eventGroupCodeInput
			}
		});
		return result
	}
})

export const eventGroupDataCreate = mutationField("eventGroupDataCreate", {
	type: "EventGroupDataPayload",
	args: {
		eventGroupDataInput: nonNull("EventGroupDataInput"),
	},
	resolve: async (_, args, ctx) => {
		const result = await ctx.prisma.eventGroupData.create({
			data: {
				...args.eventGroupDataInput
			}
		});
		return result
	}
})

export const eventGroupDataHourAggregateCreate = mutationField("eventGroupDataHourAggregateCreate", {
	type: "EventGroupDataHourAggregatePayload",
	args: {
		eventGroupDataHourAggregateInput: nonNull("EventGroupDataHourAggregateInput"),
	},
	resolve: async (_, args, ctx) => {
		const result = await ctx.prisma.eventGroupDataHourAggregate.create({
			data: {
				...args.eventGroupDataHourAggregateInput
			}
		});
		return result
	}
})

export const eventGroupValueCreate = mutationField("eventGroupValueCreate", {
	type: "EventGroupValuePayload",
	args: {
		eventGroupValueInput: nonNull("EventGroupValueInput"),
	},
	resolve: async (_, args, ctx) => {
		const result = await ctx.prisma.eventGroupValue.create({
			data: {
				...args.eventGroupValueInput
			}
		});
		return result
	}
})

export const eventGroupCreate = mutationField("eventGroupCreate", {
	type: "EventGroupPayload",
	args: {
		eventGroupInput: nonNull("EventGroupInput"),
	},
	resolve: async (_, args, ctx) => {
		const result = await ctx.prisma.eventGroup.create({
			data: {
				...args.eventGroupInput
			}
		});
		return result
	}
})

export const eventInstanceCreate = mutationField("eventInstanceCreate", {
	type: "EventInstancePayload",
	args: {
		eventInstanceInput: nonNull("EventInstanceInput"),
	},
	resolve: async (_, args, ctx) => {
		const result = await ctx.prisma.eventInstance.create({
			data: {
				...args.eventInstanceInput
			}
		});
		return result
	}
})

export const eventTypeCreate = mutationField("eventTypeCreate", {
	type: "EventTypePayload",
	args: {
		eventTypeInput: nonNull("EventTypeInput"),
	},
	resolve: async (_, args, ctx) => {
		const result = await ctx.prisma.eventType.create({
			data: {
				...args.eventTypeInput
			}
		});
		return result
	}
})

export const floorPlanCreate = mutationField("floorPlanCreate", {
	type: "FloorPlanPayload",
	args: {
		floorPlanInput: nonNull("FloorPlanInput"),
	},
	resolve: async (_, args, ctx) => {
		const result = await ctx.prisma.floorPlan.create({
			data: {
				...args.floorPlanInput
			}
		});
		return result
	}
})

export const deviceDataCreate = mutationField("deviceDataCreate", {
	type: "DeviceDataPayload",
	args: {
		deviceDataInput: nonNull("DeviceDataInput"),
	},
	resolve: async (_, args, ctx) => {
		const result = await ctx.prisma.deviceData.create({
			data: {
				...args.deviceDataInput
			}
		});
		return result
	}
})

export const mainDeviceClassCreate = mutationField("mainDeviceClassCreate", {
	type: "MainDeviceClassPayload",
	args: {
		mainDeviceClassInput: nonNull("MainDeviceClassInput"),
	},
	resolve: async (_, args, ctx) => {
		const result = await ctx.prisma.mainDeviceClass.create({
			data: {
				...args.mainDeviceClassInput
			}
		});
		return result
	}
})

export const mainDeviceInstanceCreate = mutationField("mainDeviceInstanceCreate", {
	type: "MainDeviceInstancePayload",
	args: {
		mainDeviceInstanceInput: nonNull("MainDeviceInstanceInput"),
	},
	resolve: async (_, args, ctx) => {
		const result = await ctx.prisma.mainDeviceInstance.create({
			data: {
				...args.mainDeviceInstanceInput
			}
		});
		return result
	}
})

export const performanceIndicatorConfigCreate = mutationField("performanceIndicatorConfigCreate", {
	type: "PerformanceIndicatorConfigPayload",
	args: {
		performanceIndicatorConfigInput: nonNull("PerformanceIndicatorConfigInput"),
	},
	resolve: async (_, args, ctx) => {
		const result = await ctx.prisma.performanceIndicatorConfig.create({
			data: {
				...args.performanceIndicatorConfigInput
			}
		});
		return result
	}
})

export const privilegeCreate = mutationField("privilegeCreate", {
	type: "PrivilegePayload",
	args: {
		privilegeInput: nonNull("PrivilegeInput"),
	},
	resolve: async (_, args, ctx) => {
		const result = await ctx.prisma.privilege.create({
			data: {
				...args.privilegeInput
			}
		});
		return result
	}
})

export const processDataCreate = mutationField("processDataCreate", {
	type: "ProcessDataPayload",
	args: {
		processDataInput: nonNull("ProcessDataInput"),
	},
	resolve: async (_, args, ctx) => {
		const result = await ctx.prisma.processData.create({
			data: {
				...args.processDataInput
			}
		});
		return result
	}
})

export const processDataConditionCreate = mutationField("processDataConditionCreate", {
	type: "ProcessDataConditionPayload",
	args: {
		processDataConditionInput: nonNull("ProcessDataConditionInput"),
	},
	resolve: async (_, args, ctx) => {
		const result = await ctx.prisma.processDataCondition.create({
			data: {
				...args.processDataConditionInput
			}
		});
		return result
	}
})

export const processDataModeCreate = mutationField("processDataModeCreate", {
	type: "ProcessDataModePayload",
	args: {
		processDataModeInput: nonNull("ProcessDataModeInput"),
	},
	resolve: async (_, args, ctx) => {
		const result = await ctx.prisma.processDataMode.create({
			data: {
				...args.processDataModeInput
			}
		});
		return result
	}
})

export const registrationStatusCreate = mutationField("registrationStatusCreate", {
	type: "RegistrationStatusPayload",
	args: {
		registrationStatusInput: nonNull("RegistrationStatusInput"),
	},
	resolve: async (_, args, ctx) => {
		const result = await ctx.prisma.registrationStatus.create({
			data: {
				...args.registrationStatusInput
			}
		});
		return result
	}
})

export const replayConfigCreate = mutationField("replayConfigCreate", {
	type: "ReplayConfigPayload",
	args: {
		replayConfigInput: nonNull("ReplayConfigInput"),
	},
	resolve: async (_, args, ctx) => {
		const result = await ctx.prisma.replayConfig.create({
			data: {
				...args.replayConfigInput
			}
		});
		return result
	}
})

export const replayDataCreate = mutationField("replayDataCreate", {
	type: "ReplayDataPayload",
	args: {
		replayDataInput: nonNull("ReplayDataInput"),
	},
	resolve: async (_, args, ctx) => {
		const result = await ctx.prisma.replayData.create({
			data: {
				...args.replayDataInput
			}
		});
		return result
	}
})

export const replaySetCreate = mutationField("replaySetCreate", {
	type: "ReplaySetPayload",
	args: {
		replaySetInput: nonNull("ReplaySetInput"),
	},
	resolve: async (_, args, ctx) => {
		const result = await ctx.prisma.replaySet.create({
			data: {
				...args.replaySetInput
			}
		});
		return result
	}
})

export const reportingCreate = mutationField("reportingCreate", {
	type: "ReportingPayload",
	args: {
		reportingInput: nonNull("ReportingInput"),
	},
	resolve: async (_, args, ctx) => {
		const result = await ctx.prisma.reporting.create({
			data: {
				...args.reportingInput
			}
		});
		return result
	}
})

export const reportingConfigCreate = mutationField("reportingConfigCreate", {
	type: "ReportingConfigPayload",
	args: {
		reportingConfigInput: nonNull("ReportingConfigInput"),
	},
	resolve: async (_, args, ctx) => {
		const result = await ctx.prisma.reportingConfig.create({
			data: {
				...args.reportingConfigInput
			}
		});
		return result
	}
})

export const representationCreate = mutationField("representationCreate", {
	type: "RepresentationPayload",
	args: {
		representationInput: nonNull("RepresentationInput"),
	},
	resolve: async (_, args, ctx) => {
		const result = await ctx.prisma.representation.create({
			data: {
				...args.representationInput
			}
		});
		return result
	}
})

export const rolePrivilegeCreate = mutationField("rolePrivilegeCreate", {
	type: "RolePrivilegePayload",
	args: {
		rolePrivilegeInput: nonNull("RolePrivilegeInput"),
	},
	resolve: async (_, args, ctx) => {
		const result = await ctx.prisma.rolePrivilege.create({
			data: {
				...args.rolePrivilegeInput
			}
		});
		return result
	}
})

export const roleCreate = mutationField("roleCreate", {
	type: "RolePayload",
	args: {
		roleInput: nonNull("RoleInput"),
	},
	resolve: async (_, args, ctx) => {
		const result = await ctx.prisma.role.create({
			data: {
				...args.roleInput
			}
		});
		return result
	}
})

export const softwareAdapterCreate = mutationField("softwareAdapterCreate", {
	type: "SoftwareAdapterPayload",
	args: {
		softwareAdapterInput: nonNull("SoftwareAdapterInput"),
	},
	resolve: async (_, args, ctx) => {
		const result = await ctx.prisma.softwareAdapter.create({
			data: {
				...args.softwareAdapterInput
			}
		});
		return result
	}
})

export const timeseriesCreate = mutationField("timeseriesCreate", {
	type: "TimeseriesPayload",
	args: {
		timeseriesInput: nonNull("TimeseriesInput"),
	},
	resolve: async (_, args, ctx) => {
		const result = await ctx.prisma.timeseries.create({
			data: {
				...args.timeseriesInput
			}
		});
		return result
	}
})

export const timeseriesDataCreate = mutationField("timeseriesDataCreate", {
	type: "TimeseriesDataPayload",
	args: {
		timeseriesDataInput: nonNull("TimeseriesDataInput"),
	},
	resolve: async (_, args, ctx) => {
		const result = await ctx.prisma.timeseriesData.create({
			data: {
				...args.timeseriesDataInput
			}
		});
		return result
	}
})

export const timeseriesDataHourAggregateCreate = mutationField("timeseriesDataHourAggregateCreate", {
	type: "TimeseriesDataHourAggregatePayload",
	args: {
		timeseriesDataHourAggregateInput: nonNull("TimeseriesDataHourAggregateInput"),
	},
	resolve: async (_, args, ctx) => {
		const result = await ctx.prisma.timeseriesDataHourAggregate.create({
			data: {
				...args.timeseriesDataHourAggregateInput
			}
		});
		return result
	}
})

export const updaterConfigCreate = mutationField("updaterConfigCreate", {
	type: "UpdaterConfigPayload",
	args: {
		updaterConfigInput: nonNull("UpdaterConfigInput"),
	},
	resolve: async (_, args, ctx) => {
		const result = await ctx.prisma.updaterConfig.create({
			data: {
				...args.updaterConfigInput
			}
		});
		return result
	}
})

export const userRoleCreate = mutationField("userRoleCreate", {
	type: "UserRolePayload",
	args: {
		userRoleInput: nonNull("UserRoleInput"),
	},
	resolve: async (_, args, ctx) => {
		const result = await ctx.prisma.userRole.create({
			data: {
				...args.userRoleInput
			}
		});
		return result
	}
})

export const userCreate = mutationField("userCreate", {
	type: "UserPayload",
	args: {
		userInput: nonNull("UserInput"),
	},
	resolve: async (_, args, ctx) => {
		const result = await ctx.prisma.user.create({
			data: {
				...args.userInput
			}
		});
		return result
	}
})

export const vendorCreate = mutationField("vendorCreate", {
	type: "VendorPayload",
	args: {
		vendorInput: nonNull("VendorInput"),
	},
	resolve: async (_, args, ctx) => {
		const result = await ctx.prisma.vendor.create({
			data: {
				...args.vendorInput
			}
		});
		return result
	}
})

export const xConfigCreate = mutationField("xConfigCreate", {
	type: "XConfigPayload",
	args: {
		xConfigInput: nonNull("XConfigInput"),
	},
	resolve: async (_, args, ctx) => {
		const result = await ctx.prisma.xConfig.create({
			data: {
				...args.xConfigInput
			}
		});
		return result
	}
})

export const extrapolationFunctionCreate = mutationField("extrapolationFunctionCreate", {
	type: "ExtrapolationFunctionPayload",
	args: {
		extrapolationFunctionInput: nonNull("ExtrapolationFunctionInput"),
	},
	resolve: async (_, args, ctx) => {
		const result = await ctx.prisma.extrapolationFunction.create({
			data: {
				...args.extrapolationFunctionInput
			}
		});
		return result
	}
})

export const predictionConfigCreate = mutationField("predictionConfigCreate", {
	type: "PredictionConfigPayload",
	args: {
		predictionConfigInput: nonNull("PredictionConfigInput"),
	},
	resolve: async (_, args, ctx) => {
		const result = await ctx.prisma.predictionConfig.create({
			data: {
				...args.predictionConfigInput
			}
		});
		return result
	}
})

export const maintenanceCreate = mutationField("maintenanceCreate", {
	type: "MaintenancePayload",
	args: {
		maintenanceInput: nonNull("MaintenanceInput"),
	},
	resolve: async (_, args, ctx) => {
		const result = await ctx.prisma.maintenance.create({
			data: {
				...args.maintenanceInput
			}
		});
		return result
	}
})

export const maintenanceTypeCreate = mutationField("maintenanceTypeCreate", {
	type: "MaintenanceTypePayload",
	args: {
		maintenanceTypeInput: nonNull("MaintenanceTypeInput"),
	},
	resolve: async (_, args, ctx) => {
		const result = await ctx.prisma.maintenanceType.create({
			data: {
				...args.maintenanceTypeInput
			}
		});
		return result
	}
})

export const maintenanceAlarmConfigCreate = mutationField("maintenanceAlarmConfigCreate", {
	type: "MaintenanceAlarmConfigPayload",
	args: {
		maintenanceAlarmConfigInput: nonNull("MaintenanceAlarmConfigInput"),
	},
	resolve: async (_, args, ctx) => {
		const result = await ctx.prisma.maintenanceAlarmConfig.create({
			data: {
				...args.maintenanceAlarmConfigInput
			}
		});
		return result
	}
})

export const maintenanceConfigCreate = mutationField("maintenanceConfigCreate", {
	type: "MaintenanceConfigPayload",
	args: {
		maintenanceConfigInput: nonNull("MaintenanceConfigInput"),
	},
	resolve: async (_, args, ctx) => {
		const result = await ctx.prisma.maintenanceConfig.create({
			data: {
				...args.maintenanceConfigInput
			}
		});
		return result
	}
})

export const reportTypeCreate = mutationField("reportTypeCreate", {
	type: "ReportTypePayload",
	args: {
		reportTypeInput: nonNull("ReportTypeInput"),
	},
	resolve: async (_, args, ctx) => {
		const result = await ctx.prisma.reportType.create({
			data: {
				...args.reportTypeInput
			}
		});
		return result
	}
})

export const taskCreate = mutationField("taskCreate", {
	type: "TaskPayload",
	args: {
		taskInput: nonNull("TaskInput"),
	},
	resolve: async (_, args, ctx) => {
		const result = await ctx.prisma.task.create({
			data: {
				...args.taskInput
			}
		});
		return result
	}
})
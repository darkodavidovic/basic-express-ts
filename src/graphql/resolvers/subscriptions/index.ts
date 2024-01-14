import { nullable, subscriptionField } from "nexus";
import { prepareConditions } from "../../utils/prepare-conditions";

export const activeEventInstanceSubscription = subscriptionField("activeEventInstanceSubscription", {
	type: "ActiveEventInstanceModel",
	args: {
		activeEventInstanceWhere: nullable("ActiveEventInstanceWhere"),
		activeEventInstanceSkip: nullable("Int"),
		activeEventInstanceTake: nullable("Int"),
		activeEventInstanceOrderBy: nullable("ActiveEventInstanceOrderBy")
	},
	subscribe: (_root, _args, ctx) => {
		setTimeout(() => ctx.pubsub.publish("ActiveEventInstance", { dataChanged: true }), 500);
		return ctx.pubsub.asyncIterator("ActiveEventInstance")
	},
	resolve: async (payload, args, ctx) => {
		const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "ActiveEventInstance")
		const [count, data] = await ctx.prisma.$transaction([
			ctx.prisma.activeEventInstance.count({ where, orderBy }),
			ctx.prisma.activeEventInstance.findMany({ where, skip, take, orderBy })
		])
		return { count, data }
	}
})

export const databaseStatusSubscription = subscriptionField("databaseStatusSubscription", {
	type: "DatabaseStatusModel",
	args: {
		databaseStatusWhere: nullable("DatabaseStatusWhere"),
		databaseStatusSkip: nullable("Int"),
		databaseStatusTake: nullable("Int"),
		databaseStatusOrderBy: nullable("DatabaseStatusOrderBy")
	},
	subscribe: (_root, _args, ctx) => {
		setTimeout(() => ctx.pubsub.publish("DatabaseStatus", { dataChanged: true }), 500);
		return ctx.pubsub.asyncIterator("DatabaseStatus")
	},
	resolve: async (payload, args, ctx) => {
		const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "DatabaseStatus")
		const [count, data] = await ctx.prisma.$transaction([
			ctx.prisma.databaseStatus.count({ where, orderBy }),
			ctx.prisma.databaseStatus.findMany({ where, skip, take, orderBy })
		])
		return { count, data }
	}
})

export const deviceIndexDataTypeSubscription = subscriptionField("deviceIndexDataTypeSubscription", {
	type: "DeviceIndexDataTypeModel",
	args: {
		deviceIndexDataTypeWhere: nullable("DeviceIndexDataTypeWhere"),
		deviceIndexDataTypeSkip: nullable("Int"),
		deviceIndexDataTypeTake: nullable("Int"),
		deviceIndexDataTypeOrderBy: nullable("DeviceIndexDataTypeOrderBy")
	},
	subscribe: (_root, _args, ctx) => {
		setTimeout(() => ctx.pubsub.publish("DeviceIndexDataType", { dataChanged: true }), 500);
		return ctx.pubsub.asyncIterator("DeviceIndexDataType")
	},
	resolve: async (payload, args, ctx) => {
		const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "DeviceIndexDataType")
		const [count, data] = await ctx.prisma.$transaction([
			ctx.prisma.deviceIndexDataType.count({ where, orderBy }),
			ctx.prisma.deviceIndexDataType.findMany({ where, skip, take, orderBy })
		])
		return { count, data }
	}
})

export const deviceClassSubscription = subscriptionField("deviceClassSubscription", {
	type: "DeviceClassModel",
	args: {
		deviceClassWhere: nullable("DeviceClassWhere"),
		deviceClassSkip: nullable("Int"),
		deviceClassTake: nullable("Int"),
		deviceClassOrderBy: nullable("DeviceClassOrderBy")
	},
	subscribe: (_root, _args, ctx) => {
		setTimeout(() => ctx.pubsub.publish("DeviceClass", { dataChanged: true }), 500);
		return ctx.pubsub.asyncIterator("DeviceClass")
	},
	resolve: async (payload, args, ctx) => {
		const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "DeviceClass")
		const [count, data] = await ctx.prisma.$transaction([
			ctx.prisma.deviceClass.count({ where, orderBy }),
			ctx.prisma.deviceClass.findMany({ where, skip, take, orderBy })
		])
		return { count, data }
	}
})

export const deviceControlSubscription = subscriptionField("deviceControlSubscription", {
	type: "DeviceControlModel",
	args: {
		deviceControlWhere: nullable("DeviceControlWhere"),
		deviceControlSkip: nullable("Int"),
		deviceControlTake: nullable("Int"),
		deviceControlOrderBy: nullable("DeviceControlOrderBy")
	},
	subscribe: (_root, _args, ctx) => {
		setTimeout(() => ctx.pubsub.publish("DeviceControl", { dataChanged: true }), 500);
		return ctx.pubsub.asyncIterator("DeviceControl")
	},
	resolve: async (payload, args, ctx) => {
		const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "DeviceControl")
		const [count, data] = await ctx.prisma.$transaction([
			ctx.prisma.deviceControl.count({ where, orderBy }),
			ctx.prisma.deviceControl.findMany({ where, skip, take, orderBy })
		])
		return { count, data }
	}
})

export const deviceCycleSubscription = subscriptionField("deviceCycleSubscription", {
	type: "DeviceCycleModel",
	args: {
		deviceCycleWhere: nullable("DeviceCycleWhere"),
		deviceCycleSkip: nullable("Int"),
		deviceCycleTake: nullable("Int"),
		deviceCycleOrderBy: nullable("DeviceCycleOrderBy")
	},
	subscribe: (_root, _args, ctx) => {
		setTimeout(() => ctx.pubsub.publish("DeviceCycle", { dataChanged: true }), 500);
		return ctx.pubsub.asyncIterator("DeviceCycle")
	},
	resolve: async (payload, args, ctx) => {
		const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "DeviceCycle")
		const [count, data] = await ctx.prisma.$transaction([
			ctx.prisma.deviceCycle.count({ where, orderBy }),
			ctx.prisma.deviceCycle.findMany({ where, skip, take, orderBy })
		])
		return { count, data }
	}
})

export const deviceFileSubscription = subscriptionField("deviceFileSubscription", {
	type: "DeviceFileModel",
	args: {
		deviceFileWhere: nullable("DeviceFileWhere"),
		deviceFileSkip: nullable("Int"),
		deviceFileTake: nullable("Int"),
		deviceFileOrderBy: nullable("DeviceFileOrderBy")
	},
	subscribe: (_root, _args, ctx) => {
		setTimeout(() => ctx.pubsub.publish("DeviceFile", { dataChanged: true }), 500);
		return ctx.pubsub.asyncIterator("DeviceFile")
	},
	resolve: async (payload, args, ctx) => {
		const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "DeviceFile")
		const [count, data] = await ctx.prisma.$transaction([
			ctx.prisma.deviceFile.count({ where, orderBy }),
			ctx.prisma.deviceFile.findMany({ where, skip, take, orderBy })
		])
		return { count, data }
	}
})

export const deviceInstanceSubscription = subscriptionField("deviceInstanceSubscription", {
	type: "DeviceInstanceModel",
	args: {
		deviceInstanceWhere: nullable("DeviceInstanceWhere"),
		deviceInstanceSkip: nullable("Int"),
		deviceInstanceTake: nullable("Int"),
		deviceInstanceOrderBy: nullable("DeviceInstanceOrderBy")
	},
	subscribe: (_root, _args, ctx) => {
		setTimeout(() => ctx.pubsub.publish("DeviceInstance", { dataChanged: true }), 500);
		return ctx.pubsub.asyncIterator("DeviceInstance")
	},
	resolve: async (payload, args, ctx) => {
		const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "DeviceInstance")
		const [count, data] = await ctx.prisma.$transaction([
			ctx.prisma.deviceInstance.count({ where, orderBy }),
			ctx.prisma.deviceInstance.findMany({ where, skip, take, orderBy })
		])
		return { count, data }
	}
})

export const etcHostSubscription = subscriptionField("etcHostSubscription", {
	type: "EtcHostModel",
	args: {
		etcHostWhere: nullable("EtcHostWhere"),
		etcHostSkip: nullable("Int"),
		etcHostTake: nullable("Int"),
		etcHostOrderBy: nullable("EtcHostOrderBy")
	},
	subscribe: (_root, _args, ctx) => {
		setTimeout(() => ctx.pubsub.publish("EtcHost", { dataChanged: true }), 500);
		return ctx.pubsub.asyncIterator("EtcHost")
	},
	resolve: async (payload, args, ctx) => {
		const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "EtcHost")
		const [count, data] = await ctx.prisma.$transaction([
			ctx.prisma.etcHost.count({ where, orderBy }),
			ctx.prisma.etcHost.findMany({ where, skip, take, orderBy })
		])
		return { count, data }
	}
})

export const eventClassSubscription = subscriptionField("eventClassSubscription", {
	type: "EventClassModel",
	args: {
		eventClassWhere: nullable("EventClassWhere"),
		eventClassSkip: nullable("Int"),
		eventClassTake: nullable("Int"),
		eventClassOrderBy: nullable("EventClassOrderBy")
	},
	subscribe: (_root, _args, ctx) => {
		setTimeout(() => ctx.pubsub.publish("EventClass", { dataChanged: true }), 500);
		return ctx.pubsub.asyncIterator("EventClass")
	},
	resolve: async (payload, args, ctx) => {
		const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "EventClass")
		const [count, data] = await ctx.prisma.$transaction([
			ctx.prisma.eventClass.count({ where, orderBy }),
			ctx.prisma.eventClass.findMany({ where, skip, take, orderBy })
		])
		return { count, data }
	}
})

export const eventGroupCodeSubscription = subscriptionField("eventGroupCodeSubscription", {
	type: "EventGroupCodeModel",
	args: {
		eventGroupCodeWhere: nullable("EventGroupCodeWhere"),
		eventGroupCodeSkip: nullable("Int"),
		eventGroupCodeTake: nullable("Int"),
		eventGroupCodeOrderBy: nullable("EventGroupCodeOrderBy")
	},
	subscribe: (_root, _args, ctx) => {
		setTimeout(() => ctx.pubsub.publish("EventGroupCode", { dataChanged: true }), 500);
		return ctx.pubsub.asyncIterator("EventGroupCode")
	},
	resolve: async (payload, args, ctx) => {
		const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "EventGroupCode")
		const [count, data] = await ctx.prisma.$transaction([
			ctx.prisma.eventGroupCode.count({ where, orderBy }),
			ctx.prisma.eventGroupCode.findMany({ where, skip, take, orderBy })
		])
		return { count, data }
	}
})

export const eventGroupDataSubscription = subscriptionField("eventGroupDataSubscription", {
	type: "EventGroupDataModel",
	args: {
		eventGroupDataWhere: nullable("EventGroupDataWhere"),
		eventGroupDataSkip: nullable("Int"),
		eventGroupDataTake: nullable("Int"),
		eventGroupDataOrderBy: nullable("EventGroupDataOrderBy")
	},
	subscribe: (_root, _args, ctx) => {
		setTimeout(() => ctx.pubsub.publish("EventGroupData", { dataChanged: true }), 500);
		return ctx.pubsub.asyncIterator("EventGroupData")
	},
	resolve: async (payload, args, ctx) => {
		const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "EventGroupData")
		const [count, data] = await ctx.prisma.$transaction([
			ctx.prisma.eventGroupData.count({ where, orderBy }),
			ctx.prisma.eventGroupData.findMany({ where, skip, take, orderBy })
		])
		return { count, data }
	}
})

export const eventGroupDataHourAggregateSubscription = subscriptionField("eventGroupDataHourAggregateSubscription", {
	type: "EventGroupDataHourAggregateModel",
	args: {
		eventGroupDataHourAggregateWhere: nullable("EventGroupDataHourAggregateWhere"),
		eventGroupDataHourAggregateSkip: nullable("Int"),
		eventGroupDataHourAggregateTake: nullable("Int"),
		eventGroupDataHourAggregateOrderBy: nullable("EventGroupDataHourAggregateOrderBy")
	},
	subscribe: (_root, _args, ctx) => {
		setTimeout(() => ctx.pubsub.publish("EventGroupDataHourAggregate", { dataChanged: true }), 500);
		return ctx.pubsub.asyncIterator("EventGroupDataHourAggregate")
	},
	resolve: async (payload, args, ctx) => {
		const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "EventGroupDataHourAggregate")
		const [count, data] = await ctx.prisma.$transaction([
			ctx.prisma.eventGroupDataHourAggregate.count({ where, orderBy }),
			ctx.prisma.eventGroupDataHourAggregate.findMany({ where, skip, take, orderBy })
		])
		return { count, data }
	}
})

export const eventGroupValueSubscription = subscriptionField("eventGroupValueSubscription", {
	type: "EventGroupValueModel",
	args: {
		eventGroupValueWhere: nullable("EventGroupValueWhere"),
		eventGroupValueSkip: nullable("Int"),
		eventGroupValueTake: nullable("Int"),
		eventGroupValueOrderBy: nullable("EventGroupValueOrderBy")
	},
	subscribe: (_root, _args, ctx) => {
		setTimeout(() => ctx.pubsub.publish("EventGroupValue", { dataChanged: true }), 500);
		return ctx.pubsub.asyncIterator("EventGroupValue")
	},
	resolve: async (payload, args, ctx) => {
		const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "EventGroupValue")
		const [count, data] = await ctx.prisma.$transaction([
			ctx.prisma.eventGroupValue.count({ where, orderBy }),
			ctx.prisma.eventGroupValue.findMany({ where, skip, take, orderBy })
		])
		return { count, data }
	}
})

export const eventGroupSubscription = subscriptionField("eventGroupSubscription", {
	type: "EventGroupModel",
	args: {
		eventGroupWhere: nullable("EventGroupWhere"),
		eventGroupSkip: nullable("Int"),
		eventGroupTake: nullable("Int"),
		eventGroupOrderBy: nullable("EventGroupOrderBy")
	},
	subscribe: (_root, _args, ctx) => {
		setTimeout(() => ctx.pubsub.publish("EventGroup", { dataChanged: true }), 500);
		return ctx.pubsub.asyncIterator("EventGroup")
	},
	resolve: async (payload, args, ctx) => {
		const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "EventGroup")
		const [count, data] = await ctx.prisma.$transaction([
			ctx.prisma.eventGroup.count({ where, orderBy }),
			ctx.prisma.eventGroup.findMany({ where, skip, take, orderBy })
		])
		return { count, data }
	}
})

export const eventInstanceSubscription = subscriptionField("eventInstanceSubscription", {
	type: "EventInstanceModel",
	args: {
		eventInstanceWhere: nullable("EventInstanceWhere"),
		eventInstanceSkip: nullable("Int"),
		eventInstanceTake: nullable("Int"),
		eventInstanceOrderBy: nullable("EventInstanceOrderBy")
	},
	subscribe: (_root, _args, ctx) => {
		setTimeout(() => ctx.pubsub.publish("EventInstance", { dataChanged: true }), 500);
		return ctx.pubsub.asyncIterator("EventInstance")
	},
	resolve: async (payload, args, ctx) => {
		const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "EventInstance")
		const [count, data] = await ctx.prisma.$transaction([
			ctx.prisma.eventInstance.count({ where, orderBy }),
			ctx.prisma.eventInstance.findMany({ where, skip, take, orderBy })
		])
		return { count, data }
	}
})

export const eventTypeSubscription = subscriptionField("eventTypeSubscription", {
	type: "EventTypeModel",
	args: {
		eventTypeWhere: nullable("EventTypeWhere"),
		eventTypeSkip: nullable("Int"),
		eventTypeTake: nullable("Int"),
		eventTypeOrderBy: nullable("EventTypeOrderBy")
	},
	subscribe: (_root, _args, ctx) => {
		setTimeout(() => ctx.pubsub.publish("EventType", { dataChanged: true }), 500);
		return ctx.pubsub.asyncIterator("EventType")
	},
	resolve: async (payload, args, ctx) => {
		const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "EventType")
		const [count, data] = await ctx.prisma.$transaction([
			ctx.prisma.eventType.count({ where, orderBy }),
			ctx.prisma.eventType.findMany({ where, skip, take, orderBy })
		])
		return { count, data }
	}
})

export const floorPlanSubscription = subscriptionField("floorPlanSubscription", {
	type: "FloorPlanModel",
	args: {
		floorPlanWhere: nullable("FloorPlanWhere"),
		floorPlanSkip: nullable("Int"),
		floorPlanTake: nullable("Int"),
		floorPlanOrderBy: nullable("FloorPlanOrderBy")
	},
	subscribe: (_root, _args, ctx) => {
		setTimeout(() => ctx.pubsub.publish("FloorPlan", { dataChanged: true }), 500);
		return ctx.pubsub.asyncIterator("FloorPlan")
	},
	resolve: async (payload, args, ctx) => {
		const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "FloorPlan")
		const [count, data] = await ctx.prisma.$transaction([
			ctx.prisma.floorPlan.count({ where, orderBy }),
			ctx.prisma.floorPlan.findMany({ where, skip, take, orderBy })
		])
		return { count, data }
	}
})

export const deviceDataSubscription = subscriptionField("deviceDataSubscription", {
	type: "DeviceDataModel",
	args: {
		deviceDataWhere: nullable("DeviceDataWhere"),
		deviceDataSkip: nullable("Int"),
		deviceDataTake: nullable("Int"),
		deviceDataOrderBy: nullable("DeviceDataOrderBy")
	},
	subscribe: (_root, _args, ctx) => {
		setTimeout(() => ctx.pubsub.publish("DeviceData", { dataChanged: true }), 500);
		return ctx.pubsub.asyncIterator("DeviceData")
	},
	resolve: async (payload, args, ctx) => {
		const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "DeviceData")
		const [count, data] = await ctx.prisma.$transaction([
			ctx.prisma.deviceData.count({ where, orderBy }),
			ctx.prisma.deviceData.findMany({ where, skip, take, orderBy })
		])
		return { count, data }
	}
})

export const mainDeviceClassSubscription = subscriptionField("mainDeviceClassSubscription", {
	type: "MainDeviceClassModel",
	args: {
		mainDeviceClassWhere: nullable("MainDeviceClassWhere"),
		mainDeviceClassSkip: nullable("Int"),
		mainDeviceClassTake: nullable("Int"),
		mainDeviceClassOrderBy: nullable("MainDeviceClassOrderBy")
	},
	subscribe: (_root, _args, ctx) => {
		setTimeout(() => ctx.pubsub.publish("MainDeviceClass", { dataChanged: true }), 500);
		return ctx.pubsub.asyncIterator("MainDeviceClass")
	},
	resolve: async (payload, args, ctx) => {
		const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "MainDeviceClass")
		const [count, data] = await ctx.prisma.$transaction([
			ctx.prisma.mainDeviceClass.count({ where, orderBy }),
			ctx.prisma.mainDeviceClass.findMany({ where, skip, take, orderBy })
		])
		return { count, data }
	}
})

export const mainDeviceInstanceSubscription = subscriptionField("mainDeviceInstanceSubscription", {
	type: "MainDeviceInstanceModel",
	args: {
		mainDeviceInstanceWhere: nullable("MainDeviceInstanceWhere"),
		mainDeviceInstanceSkip: nullable("Int"),
		mainDeviceInstanceTake: nullable("Int"),
		mainDeviceInstanceOrderBy: nullable("MainDeviceInstanceOrderBy")
	},
	subscribe: (_root, _args, ctx) => {
		setTimeout(() => ctx.pubsub.publish("MainDeviceInstance", { dataChanged: true }), 500);
		return ctx.pubsub.asyncIterator("MainDeviceInstance")
	},
	resolve: async (payload, args, ctx) => {
		const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "MainDeviceInstance")
		const [count, data] = await ctx.prisma.$transaction([
			ctx.prisma.mainDeviceInstance.count({ where, orderBy }),
			ctx.prisma.mainDeviceInstance.findMany({ where, skip, take, orderBy })
		])
		return { count, data }
	}
})

export const performanceIndicatorConfigSubscription = subscriptionField("performanceIndicatorConfigSubscription", {
	type: "PerformanceIndicatorConfigModel",
	args: {
		performanceIndicatorConfigWhere: nullable("PerformanceIndicatorConfigWhere"),
		performanceIndicatorConfigSkip: nullable("Int"),
		performanceIndicatorConfigTake: nullable("Int"),
		performanceIndicatorConfigOrderBy: nullable("PerformanceIndicatorConfigOrderBy")
	},
	subscribe: (_root, _args, ctx) => {
		setTimeout(() => ctx.pubsub.publish("PerformanceIndicatorConfig", { dataChanged: true }), 500);
		return ctx.pubsub.asyncIterator("PerformanceIndicatorConfig")
	},
	resolve: async (payload, args, ctx) => {
		const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "PerformanceIndicatorConfig")
		const [count, data] = await ctx.prisma.$transaction([
			ctx.prisma.performanceIndicatorConfig.count({ where, orderBy }),
			ctx.prisma.performanceIndicatorConfig.findMany({ where, skip, take, orderBy })
		])
		return { count, data }
	}
})

export const privilegeSubscription = subscriptionField("privilegeSubscription", {
	type: "PrivilegeModel",
	args: {
		privilegeWhere: nullable("PrivilegeWhere"),
		privilegeSkip: nullable("Int"),
		privilegeTake: nullable("Int"),
		privilegeOrderBy: nullable("PrivilegeOrderBy")
	},
	subscribe: (_root, _args, ctx) => {
		setTimeout(() => ctx.pubsub.publish("Privilege", { dataChanged: true }), 500);
		return ctx.pubsub.asyncIterator("Privilege")
	},
	resolve: async (payload, args, ctx) => {
		const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "Privilege")
		const [count, data] = await ctx.prisma.$transaction([
			ctx.prisma.privilege.count({ where, orderBy }),
			ctx.prisma.privilege.findMany({ where, skip, take, orderBy })
		])
		return { count, data }
	}
})

export const processDataSubscription = subscriptionField("processDataSubscription", {
	type: "ProcessDataModel",
	args: {
		processDataWhere: nullable("ProcessDataWhere"),
		processDataSkip: nullable("Int"),
		processDataTake: nullable("Int"),
		processDataOrderBy: nullable("ProcessDataOrderBy")
	},
	subscribe: (_root, _args, ctx) => {
		setTimeout(() => ctx.pubsub.publish("ProcessData", { dataChanged: true }), 500);
		return ctx.pubsub.asyncIterator("ProcessData")
	},
	resolve: async (payload, args, ctx) => {
		const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "ProcessData")
		const [count, data] = await ctx.prisma.$transaction([
			ctx.prisma.processData.count({ where, orderBy }),
			ctx.prisma.processData.findMany({ where, skip, take, orderBy })
		])
		return { count, data }
	}
})

export const processDataConditionSubscription = subscriptionField("processDataConditionSubscription", {
	type: "ProcessDataConditionModel",
	args: {
		processDataConditionWhere: nullable("ProcessDataConditionWhere"),
		processDataConditionSkip: nullable("Int"),
		processDataConditionTake: nullable("Int"),
		processDataConditionOrderBy: nullable("ProcessDataConditionOrderBy")
	},
	subscribe: (_root, _args, ctx) => {
		setTimeout(() => ctx.pubsub.publish("ProcessDataCondition", { dataChanged: true }), 500);
		return ctx.pubsub.asyncIterator("ProcessDataCondition")
	},
	resolve: async (payload, args, ctx) => {
		const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "ProcessDataCondition")
		const [count, data] = await ctx.prisma.$transaction([
			ctx.prisma.processDataCondition.count({ where, orderBy }),
			ctx.prisma.processDataCondition.findMany({ where, skip, take, orderBy })
		])
		return { count, data }
	}
})

export const processDataModeSubscription = subscriptionField("processDataModeSubscription", {
	type: "ProcessDataModeModel",
	args: {
		processDataModeWhere: nullable("ProcessDataModeWhere"),
		processDataModeSkip: nullable("Int"),
		processDataModeTake: nullable("Int"),
		processDataModeOrderBy: nullable("ProcessDataModeOrderBy")
	},
	subscribe: (_root, _args, ctx) => {
		setTimeout(() => ctx.pubsub.publish("ProcessDataMode", { dataChanged: true }), 500);
		return ctx.pubsub.asyncIterator("ProcessDataMode")
	},
	resolve: async (payload, args, ctx) => {
		const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "ProcessDataMode")
		const [count, data] = await ctx.prisma.$transaction([
			ctx.prisma.processDataMode.count({ where, orderBy }),
			ctx.prisma.processDataMode.findMany({ where, skip, take, orderBy })
		])
		return { count, data }
	}
})

export const registrationStatusSubscription = subscriptionField("registrationStatusSubscription", {
	type: "RegistrationStatusModel",
	args: {
		registrationStatusWhere: nullable("RegistrationStatusWhere"),
		registrationStatusSkip: nullable("Int"),
		registrationStatusTake: nullable("Int"),
		registrationStatusOrderBy: nullable("RegistrationStatusOrderBy")
	},
	subscribe: (_root, _args, ctx) => {
		setTimeout(() => ctx.pubsub.publish("RegistrationStatus", { dataChanged: true }), 500);
		return ctx.pubsub.asyncIterator("RegistrationStatus")
	},
	resolve: async (payload, args, ctx) => {
		const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "RegistrationStatus")
		const [count, data] = await ctx.prisma.$transaction([
			ctx.prisma.registrationStatus.count({ where, orderBy }),
			ctx.prisma.registrationStatus.findMany({ where, skip, take, orderBy })
		])
		return { count, data }
	}
})

export const replayConfigSubscription = subscriptionField("replayConfigSubscription", {
	type: "ReplayConfigModel",
	args: {
		replayConfigWhere: nullable("ReplayConfigWhere"),
		replayConfigSkip: nullable("Int"),
		replayConfigTake: nullable("Int"),
		replayConfigOrderBy: nullable("ReplayConfigOrderBy")
	},
	subscribe: (_root, _args, ctx) => {
		setTimeout(() => ctx.pubsub.publish("ReplayConfig", { dataChanged: true }), 500);
		return ctx.pubsub.asyncIterator("ReplayConfig")
	},
	resolve: async (payload, args, ctx) => {
		const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "ReplayConfig")
		const [count, data] = await ctx.prisma.$transaction([
			ctx.prisma.replayConfig.count({ where, orderBy }),
			ctx.prisma.replayConfig.findMany({ where, skip, take, orderBy })
		])
		return { count, data }
	}
})

export const replayDataSubscription = subscriptionField("replayDataSubscription", {
	type: "ReplayDataModel",
	args: {
		replayDataWhere: nullable("ReplayDataWhere"),
		replayDataSkip: nullable("Int"),
		replayDataTake: nullable("Int"),
		replayDataOrderBy: nullable("ReplayDataOrderBy")
	},
	subscribe: (_root, _args, ctx) => {
		setTimeout(() => ctx.pubsub.publish("ReplayData", { dataChanged: true }), 500);
		return ctx.pubsub.asyncIterator("ReplayData")
	},
	resolve: async (payload, args, ctx) => {
		const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "ReplayData")
		const [count, data] = await ctx.prisma.$transaction([
			ctx.prisma.replayData.count({ where, orderBy }),
			ctx.prisma.replayData.findMany({ where, skip, take, orderBy })
		])
		return { count, data }
	}
})

export const replaySetSubscription = subscriptionField("replaySetSubscription", {
	type: "ReplaySetModel",
	args: {
		replaySetWhere: nullable("ReplaySetWhere"),
		replaySetSkip: nullable("Int"),
		replaySetTake: nullable("Int"),
		replaySetOrderBy: nullable("ReplaySetOrderBy")
	},
	subscribe: (_root, _args, ctx) => {
		setTimeout(() => ctx.pubsub.publish("ReplaySet", { dataChanged: true }), 500);
		return ctx.pubsub.asyncIterator("ReplaySet")
	},
	resolve: async (payload, args, ctx) => {
		const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "ReplaySet")
		const [count, data] = await ctx.prisma.$transaction([
			ctx.prisma.replaySet.count({ where, orderBy }),
			ctx.prisma.replaySet.findMany({ where, skip, take, orderBy })
		])
		return { count, data }
	}
})

export const reportingSubscription = subscriptionField("reportingSubscription", {
	type: "ReportingModel",
	args: {
		reportingWhere: nullable("ReportingWhere"),
		reportingSkip: nullable("Int"),
		reportingTake: nullable("Int"),
		reportingOrderBy: nullable("ReportingOrderBy")
	},
	subscribe: (_root, _args, ctx) => {
		setTimeout(() => ctx.pubsub.publish("Reporting", { dataChanged: true }), 500);
		return ctx.pubsub.asyncIterator("Reporting")
	},
	resolve: async (payload, args, ctx) => {
		const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "Reporting")
		const [count, data] = await ctx.prisma.$transaction([
			ctx.prisma.reporting.count({ where, orderBy }),
			ctx.prisma.reporting.findMany({ where, skip, take, orderBy })
		])
		return { count, data }
	}
})

export const reportingConfigSubscription = subscriptionField("reportingConfigSubscription", {
	type: "ReportingConfigModel",
	args: {
		reportingConfigWhere: nullable("ReportingConfigWhere"),
		reportingConfigSkip: nullable("Int"),
		reportingConfigTake: nullable("Int"),
		reportingConfigOrderBy: nullable("ReportingConfigOrderBy")
	},
	subscribe: (_root, _args, ctx) => {
		setTimeout(() => ctx.pubsub.publish("ReportingConfig", { dataChanged: true }), 500);
		return ctx.pubsub.asyncIterator("ReportingConfig")
	},
	resolve: async (payload, args, ctx) => {
		const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "ReportingConfig")
		const [count, data] = await ctx.prisma.$transaction([
			ctx.prisma.reportingConfig.count({ where, orderBy }),
			ctx.prisma.reportingConfig.findMany({ where, skip, take, orderBy })
		])
		return { count, data }
	}
})

export const representationSubscription = subscriptionField("representationSubscription", {
	type: "RepresentationModel",
	args: {
		representationWhere: nullable("RepresentationWhere"),
		representationSkip: nullable("Int"),
		representationTake: nullable("Int"),
		representationOrderBy: nullable("RepresentationOrderBy")
	},
	subscribe: (_root, _args, ctx) => {
		setTimeout(() => ctx.pubsub.publish("Representation", { dataChanged: true }), 500);
		return ctx.pubsub.asyncIterator("Representation")
	},
	resolve: async (payload, args, ctx) => {
		const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "Representation")
		const [count, data] = await ctx.prisma.$transaction([
			ctx.prisma.representation.count({ where, orderBy }),
			ctx.prisma.representation.findMany({ where, skip, take, orderBy })
		])
		return { count, data }
	}
})

export const rolePrivilegeSubscription = subscriptionField("rolePrivilegeSubscription", {
	type: "RolePrivilegeModel",
	args: {
		rolePrivilegeWhere: nullable("RolePrivilegeWhere"),
		rolePrivilegeSkip: nullable("Int"),
		rolePrivilegeTake: nullable("Int"),
		rolePrivilegeOrderBy: nullable("RolePrivilegeOrderBy")
	},
	subscribe: (_root, _args, ctx) => {
		setTimeout(() => ctx.pubsub.publish("RolePrivilege", { dataChanged: true }), 500);
		return ctx.pubsub.asyncIterator("RolePrivilege")
	},
	resolve: async (payload, args, ctx) => {
		const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "RolePrivilege")
		const [count, data] = await ctx.prisma.$transaction([
			ctx.prisma.rolePrivilege.count({ where, orderBy }),
			ctx.prisma.rolePrivilege.findMany({ where, skip, take, orderBy })
		])
		return { count, data }
	}
})

export const roleSubscription = subscriptionField("roleSubscription", {
	type: "RoleModel",
	args: {
		roleWhere: nullable("RoleWhere"),
		roleSkip: nullable("Int"),
		roleTake: nullable("Int"),
		roleOrderBy: nullable("RoleOrderBy")
	},
	subscribe: (_root, _args, ctx) => {
		setTimeout(() => ctx.pubsub.publish("Role", { dataChanged: true }), 500);
		return ctx.pubsub.asyncIterator("Role")
	},
	resolve: async (payload, args, ctx) => {
		const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "Role")
		const [count, data] = await ctx.prisma.$transaction([
			ctx.prisma.role.count({ where, orderBy }),
			ctx.prisma.role.findMany({ where, skip, take, orderBy })
		])
		return { count, data }
	}
})

export const softwareAdapterSubscription = subscriptionField("softwareAdapterSubscription", {
	type: "SoftwareAdapterModel",
	args: {
		softwareAdapterWhere: nullable("SoftwareAdapterWhere"),
		softwareAdapterSkip: nullable("Int"),
		softwareAdapterTake: nullable("Int"),
		softwareAdapterOrderBy: nullable("SoftwareAdapterOrderBy")
	},
	subscribe: (_root, _args, ctx) => {
		setTimeout(() => ctx.pubsub.publish("SoftwareAdapter", { dataChanged: true }), 500);
		return ctx.pubsub.asyncIterator("SoftwareAdapter")
	},
	resolve: async (payload, args, ctx) => {
		const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "SoftwareAdapter")
		const [count, data] = await ctx.prisma.$transaction([
			ctx.prisma.softwareAdapter.count({ where, orderBy }),
			ctx.prisma.softwareAdapter.findMany({ where, skip, take, orderBy })
		])
		return { count, data }
	}
})

export const timeseriesSubscription = subscriptionField("timeseriesSubscription", {
	type: "TimeseriesModel",
	args: {
		timeseriesWhere: nullable("TimeseriesWhere"),
		timeseriesSkip: nullable("Int"),
		timeseriesTake: nullable("Int"),
		timeseriesOrderBy: nullable("TimeseriesOrderBy")
	},
	subscribe: (_root, _args, ctx) => {
		setTimeout(() => ctx.pubsub.publish("Timeseries", { dataChanged: true }), 500);
		return ctx.pubsub.asyncIterator("Timeseries")
	},
	resolve: async (payload, args, ctx) => {
		const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "Timeseries")
		const [count, data] = await ctx.prisma.$transaction([
			ctx.prisma.timeseries.count({ where, orderBy }),
			ctx.prisma.timeseries.findMany({ where, skip, take, orderBy })
		])
		return { count, data }
	}
})

export const timeseriesDataSubscription = subscriptionField("timeseriesDataSubscription", {
	type: "TimeseriesDataModel",
	args: {
		timeseriesDataWhere: nullable("TimeseriesDataWhere"),
		timeseriesDataSkip: nullable("Int"),
		timeseriesDataTake: nullable("Int"),
		timeseriesDataOrderBy: nullable("TimeseriesDataOrderBy")
	},
	subscribe: (_root, _args, ctx) => {
		setTimeout(() => ctx.pubsub.publish("TimeseriesData", { dataChanged: true }), 500);
		return ctx.pubsub.asyncIterator("TimeseriesData")
	},
	resolve: async (payload, args, ctx) => {
		const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "TimeseriesData")
		const [count, data] = await ctx.prisma.$transaction([
			ctx.prisma.timeseriesData.count({ where, orderBy }),
			ctx.prisma.timeseriesData.findMany({ where, skip, take, orderBy })
		])
		return { count, data }
	}
})

export const timeseriesDataHourAggregateSubscription = subscriptionField("timeseriesDataHourAggregateSubscription", {
	type: "TimeseriesDataHourAggregateModel",
	args: {
		timeseriesDataHourAggregateWhere: nullable("TimeseriesDataHourAggregateWhere"),
		timeseriesDataHourAggregateSkip: nullable("Int"),
		timeseriesDataHourAggregateTake: nullable("Int"),
		timeseriesDataHourAggregateOrderBy: nullable("TimeseriesDataHourAggregateOrderBy")
	},
	subscribe: (_root, _args, ctx) => {
		setTimeout(() => ctx.pubsub.publish("TimeseriesDataHourAggregate", { dataChanged: true }), 500);
		return ctx.pubsub.asyncIterator("TimeseriesDataHourAggregate")
	},
	resolve: async (payload, args, ctx) => {
		const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "TimeseriesDataHourAggregate")
		const [count, data] = await ctx.prisma.$transaction([
			ctx.prisma.timeseriesDataHourAggregate.count({ where, orderBy }),
			ctx.prisma.timeseriesDataHourAggregate.findMany({ where, skip, take, orderBy })
		])
		return { count, data }
	}
})

export const updaterConfigSubscription = subscriptionField("updaterConfigSubscription", {
	type: "UpdaterConfigModel",
	args: {
		updaterConfigWhere: nullable("UpdaterConfigWhere"),
		updaterConfigSkip: nullable("Int"),
		updaterConfigTake: nullable("Int"),
		updaterConfigOrderBy: nullable("UpdaterConfigOrderBy")
	},
	subscribe: (_root, _args, ctx) => {
		setTimeout(() => ctx.pubsub.publish("UpdaterConfig", { dataChanged: true }), 500);
		return ctx.pubsub.asyncIterator("UpdaterConfig")
	},
	resolve: async (payload, args, ctx) => {
		const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "UpdaterConfig")
		const [count, data] = await ctx.prisma.$transaction([
			ctx.prisma.updaterConfig.count({ where, orderBy }),
			ctx.prisma.updaterConfig.findMany({ where, skip, take, orderBy })
		])
		return { count, data }
	}
})

export const userRoleSubscription = subscriptionField("userRoleSubscription", {
	type: "UserRoleModel",
	args: {
		userRoleWhere: nullable("UserRoleWhere"),
		userRoleSkip: nullable("Int"),
		userRoleTake: nullable("Int"),
		userRoleOrderBy: nullable("UserRoleOrderBy")
	},
	subscribe: (_root, _args, ctx) => {
		setTimeout(() => ctx.pubsub.publish("UserRole", { dataChanged: true }), 500);
		return ctx.pubsub.asyncIterator("UserRole")
	},
	resolve: async (payload, args, ctx) => {
		const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "UserRole")
		const [count, data] = await ctx.prisma.$transaction([
			ctx.prisma.userRole.count({ where, orderBy }),
			ctx.prisma.userRole.findMany({ where, skip, take, orderBy })
		])
		return { count, data }
	}
})

export const userSubscription = subscriptionField("userSubscription", {
	type: "UserModel",
	args: {
		userWhere: nullable("UserWhere"),
		userSkip: nullable("Int"),
		userTake: nullable("Int"),
		userOrderBy: nullable("UserOrderBy")
	},
	subscribe: (_root, _args, ctx) => {
		setTimeout(() => ctx.pubsub.publish("User", { dataChanged: true }), 500);
		return ctx.pubsub.asyncIterator("User")
	},
	resolve: async (payload, args, ctx) => {
		const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "User")
		const [count, data] = await ctx.prisma.$transaction([
			ctx.prisma.user.count({ where, orderBy }),
			ctx.prisma.user.findMany({ where, skip, take, orderBy })
		])
		return { count, data }
	}
})

export const vendorSubscription = subscriptionField("vendorSubscription", {
	type: "VendorModel",
	args: {
		vendorWhere: nullable("VendorWhere"),
		vendorSkip: nullable("Int"),
		vendorTake: nullable("Int"),
		vendorOrderBy: nullable("VendorOrderBy")
	},
	subscribe: (_root, _args, ctx) => {
		setTimeout(() => ctx.pubsub.publish("Vendor", { dataChanged: true }), 500);
		return ctx.pubsub.asyncIterator("Vendor")
	},
	resolve: async (payload, args, ctx) => {
		const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "Vendor")
		const [count, data] = await ctx.prisma.$transaction([
			ctx.prisma.vendor.count({ where, orderBy }),
			ctx.prisma.vendor.findMany({ where, skip, take, orderBy })
		])
		return { count, data }
	}
})

export const xConfigSubscription = subscriptionField("xConfigSubscription", {
	type: "XConfigModel",
	args: {
		xConfigWhere: nullable("XConfigWhere"),
		xConfigSkip: nullable("Int"),
		xConfigTake: nullable("Int"),
		xConfigOrderBy: nullable("XConfigOrderBy")
	},
	subscribe: (_root, _args, ctx) => {
		setTimeout(() => ctx.pubsub.publish("XConfig", { dataChanged: true }), 500);
		return ctx.pubsub.asyncIterator("XConfig")
	},
	resolve: async (payload, args, ctx) => {
		const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "XConfig")
		const [count, data] = await ctx.prisma.$transaction([
			ctx.prisma.xConfig.count({ where, orderBy }),
			ctx.prisma.xConfig.findMany({ where, skip, take, orderBy })
		])
		return { count, data }
	}
})

export const extrapolationFunctionSubscription = subscriptionField("extrapolationFunctionSubscription", {
	type: "ExtrapolationFunctionModel",
	args: {
		extrapolationFunctionWhere: nullable("ExtrapolationFunctionWhere"),
		extrapolationFunctionSkip: nullable("Int"),
		extrapolationFunctionTake: nullable("Int"),
		extrapolationFunctionOrderBy: nullable("ExtrapolationFunctionOrderBy")
	},
	subscribe: (_root, _args, ctx) => {
		setTimeout(() => ctx.pubsub.publish("ExtrapolationFunction", { dataChanged: true }), 500);
		return ctx.pubsub.asyncIterator("ExtrapolationFunction")
	},
	resolve: async (payload, args, ctx) => {
		const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "ExtrapolationFunction")
		const [count, data] = await ctx.prisma.$transaction([
			ctx.prisma.extrapolationFunction.count({ where, orderBy }),
			ctx.prisma.extrapolationFunction.findMany({ where, skip, take, orderBy })
		])
		return { count, data }
	}
})

export const predictionConfigSubscription = subscriptionField("predictionConfigSubscription", {
	type: "PredictionConfigModel",
	args: {
		predictionConfigWhere: nullable("PredictionConfigWhere"),
		predictionConfigSkip: nullable("Int"),
		predictionConfigTake: nullable("Int"),
		predictionConfigOrderBy: nullable("PredictionConfigOrderBy")
	},
	subscribe: (_root, _args, ctx) => {
		setTimeout(() => ctx.pubsub.publish("PredictionConfig", { dataChanged: true }), 500);
		return ctx.pubsub.asyncIterator("PredictionConfig")
	},
	resolve: async (payload, args, ctx) => {
		const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "PredictionConfig")
		const [count, data] = await ctx.prisma.$transaction([
			ctx.prisma.predictionConfig.count({ where, orderBy }),
			ctx.prisma.predictionConfig.findMany({ where, skip, take, orderBy })
		])
		return { count, data }
	}
})

export const maintenanceSubscription = subscriptionField("maintenanceSubscription", {
	type: "MaintenanceModel",
	args: {
		maintenanceWhere: nullable("MaintenanceWhere"),
		maintenanceSkip: nullable("Int"),
		maintenanceTake: nullable("Int"),
		maintenanceOrderBy: nullable("MaintenanceOrderBy")
	},
	subscribe: (_root, _args, ctx) => {
		setTimeout(() => ctx.pubsub.publish("Maintenance", { dataChanged: true }), 500);
		return ctx.pubsub.asyncIterator("Maintenance")
	},
	resolve: async (payload, args, ctx) => {
		const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "Maintenance")
		const [count, data] = await ctx.prisma.$transaction([
			ctx.prisma.maintenance.count({ where, orderBy }),
			ctx.prisma.maintenance.findMany({ where, skip, take, orderBy })
		])
		return { count, data }
	}
})

export const maintenanceTypeSubscription = subscriptionField("maintenanceTypeSubscription", {
	type: "MaintenanceTypeModel",
	args: {
		maintenanceTypeWhere: nullable("MaintenanceTypeWhere"),
		maintenanceTypeSkip: nullable("Int"),
		maintenanceTypeTake: nullable("Int"),
		maintenanceTypeOrderBy: nullable("MaintenanceTypeOrderBy")
	},
	subscribe: (_root, _args, ctx) => {
		setTimeout(() => ctx.pubsub.publish("MaintenanceType", { dataChanged: true }), 500);
		return ctx.pubsub.asyncIterator("MaintenanceType")
	},
	resolve: async (payload, args, ctx) => {
		const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "MaintenanceType")
		const [count, data] = await ctx.prisma.$transaction([
			ctx.prisma.maintenanceType.count({ where, orderBy }),
			ctx.prisma.maintenanceType.findMany({ where, skip, take, orderBy })
		])
		return { count, data }
	}
})

export const maintenanceAlarmConfigSubscription = subscriptionField("maintenanceAlarmConfigSubscription", {
	type: "MaintenanceAlarmConfigModel",
	args: {
		maintenanceAlarmConfigWhere: nullable("MaintenanceAlarmConfigWhere"),
		maintenanceAlarmConfigSkip: nullable("Int"),
		maintenanceAlarmConfigTake: nullable("Int"),
		maintenanceAlarmConfigOrderBy: nullable("MaintenanceAlarmConfigOrderBy")
	},
	subscribe: (_root, _args, ctx) => {
		setTimeout(() => ctx.pubsub.publish("MaintenanceAlarmConfig", { dataChanged: true }), 500);
		return ctx.pubsub.asyncIterator("MaintenanceAlarmConfig")
	},
	resolve: async (payload, args, ctx) => {
		const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "MaintenanceAlarmConfig")
		const [count, data] = await ctx.prisma.$transaction([
			ctx.prisma.maintenanceAlarmConfig.count({ where, orderBy }),
			ctx.prisma.maintenanceAlarmConfig.findMany({ where, skip, take, orderBy })
		])
		return { count, data }
	}
})

export const maintenanceConfigSubscription = subscriptionField("maintenanceConfigSubscription", {
	type: "MaintenanceConfigModel",
	args: {
		maintenanceConfigWhere: nullable("MaintenanceConfigWhere"),
		maintenanceConfigSkip: nullable("Int"),
		maintenanceConfigTake: nullable("Int"),
		maintenanceConfigOrderBy: nullable("MaintenanceConfigOrderBy")
	},
	subscribe: (_root, _args, ctx) => {
		setTimeout(() => ctx.pubsub.publish("MaintenanceConfig", { dataChanged: true }), 500);
		return ctx.pubsub.asyncIterator("MaintenanceConfig")
	},
	resolve: async (payload, args, ctx) => {
		const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "MaintenanceConfig")
		const [count, data] = await ctx.prisma.$transaction([
			ctx.prisma.maintenanceConfig.count({ where, orderBy }),
			ctx.prisma.maintenanceConfig.findMany({ where, skip, take, orderBy })
		])
		return { count, data }
	}
})

export const reportTypeSubscription = subscriptionField("reportTypeSubscription", {
	type: "ReportTypeModel",
	args: {
		reportTypeWhere: nullable("ReportTypeWhere"),
		reportTypeSkip: nullable("Int"),
		reportTypeTake: nullable("Int"),
		reportTypeOrderBy: nullable("ReportTypeOrderBy")
	},
	subscribe: (_root, _args, ctx) => {
		setTimeout(() => ctx.pubsub.publish("ReportType", { dataChanged: true }), 500);
		return ctx.pubsub.asyncIterator("ReportType")
	},
	resolve: async (payload, args, ctx) => {
		const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "ReportType")
		const [count, data] = await ctx.prisma.$transaction([
			ctx.prisma.reportType.count({ where, orderBy }),
			ctx.prisma.reportType.findMany({ where, skip, take, orderBy })
		])
		return { count, data }
	}
})

export const taskSubscription = subscriptionField("taskSubscription", {
	type: "TaskModel",
	args: {
		taskWhere: nullable("TaskWhere"),
		taskSkip: nullable("Int"),
		taskTake: nullable("Int"),
		taskOrderBy: nullable("TaskOrderBy")
	},
	subscribe: (_root, _args, ctx) => {
		setTimeout(() => ctx.pubsub.publish("Task", { dataChanged: true }), 500);
		return ctx.pubsub.asyncIterator("Task")
	},
	resolve: async (payload, args, ctx) => {
		const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "Task")
		const [count, data] = await ctx.prisma.$transaction([
			ctx.prisma.task.count({ where, orderBy }),
			ctx.prisma.task.findMany({ where, skip, take, orderBy })
		])
		return { count, data }
	}
})
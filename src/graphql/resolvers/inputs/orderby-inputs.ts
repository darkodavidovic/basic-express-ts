import { inputObjectType } from "nexus"

export const ActiveEventInstanceOrderBy = inputObjectType({
	name: "ActiveEventInstanceOrderBy",
	definition(t) {
		t.nullable.field("id", { type: "EnumAscDesc" })
		t.nullable.field("devId", { type: "EnumAscDesc" })
		t.nullable.field("eventClassId", { type: "EnumAscDesc" })
		t.nullable.field("timestampAppears", { type: "EnumAscDesc" })
		t.nullable.field("userId", { type: "EnumAscDesc" })
		t.nullable.field("x1", { type: "EnumAscDesc" })
		t.nullable.field("x2", { type: "EnumAscDesc" })
		t.nullable.field("x3", { type: "EnumAscDesc" })
		t.nullable.field("x4", { type: "EnumAscDesc" })

	}
})

export const DatabaseStatusOrderBy = inputObjectType({
	name: "DatabaseStatusOrderBy",
	definition(t) {
		t.nullable.field("id", { type: "EnumAscDesc" })
		t.nullable.field("timestamp", { type: "EnumAscDesc" })

	}
})

export const DeviceIndexDataTypeOrderBy = inputObjectType({
	name: "DeviceIndexDataTypeOrderBy",
	definition(t) {
		t.nullable.field("id", { type: "EnumAscDesc" })
		t.nullable.field("name", { type: "EnumAscDesc" })

	}
})

export const DeviceClassOrderBy = inputObjectType({
	name: "DeviceClassOrderBy",
	definition(t) {
		t.nullable.field("id", { type: "EnumAscDesc" })
		t.nullable.field("deviceId", { type: "EnumAscDesc" })
		t.nullable.field("pictureFileName", { type: "EnumAscDesc" })
		t.nullable.field("productId", { type: "EnumAscDesc" })
		t.nullable.field("productName", { type: "EnumAscDesc" })
		t.nullable.field("deviceType", { type: "EnumAscDesc" })
		t.nullable.field("deviceSubType", { type: "EnumAscDesc" })
		t.nullable.field("description", { type: "EnumAscDesc" })
		t.nullable.field("iconFileName", { type: "EnumAscDesc" })
		t.nullable.field("pDbitLengthIn", { type: "EnumAscDesc" })
		t.nullable.field("pDbitLengthOut", { type: "EnumAscDesc" })
		t.nullable.field("firmwareVersion", { type: "EnumAscDesc" })

	}
})

export const DeviceControlOrderBy = inputObjectType({
	name: "DeviceControlOrderBy",
	definition(t) {
		t.nullable.field("id", { type: "EnumAscDesc" })
		t.nullable.field("devId", { type: "EnumAscDesc" })
		t.nullable.field("DeviceIndexDataTypeId", { type: "EnumAscDesc" })
		t.nullable.field("bitLength", { type: "EnumAscDesc" })
		t.nullable.field("index", { type: "EnumAscDesc" })
		t.nullable.field("subindex", { type: "EnumAscDesc" })
		t.nullable.field("mqttName", { type: "EnumAscDesc" })
		t.nullable.field("subtopicId", { type: "EnumAscDesc" })
		t.nullable.field("parameterId", { type: "EnumAscDesc" })
		t.nullable.field("mqttLabel", { type: "EnumAscDesc" })
		t.nullable.field("label", { type: "EnumAscDesc" })
		t.nullable.field("range", { type: "EnumAscDesc" })
		t.nullable.field("access", { type: "EnumAscDesc" })
		t.nullable.field("remark", { type: "EnumAscDesc" })
		t.nullable.field("parameterDescriptor", { type: "EnumAscDesc" })
		t.nullable.field("parameterGroup", { type: "EnumAscDesc" })
		t.nullable.field("lastSuccessDate", { type: "EnumAscDesc" })
		t.nullable.field("value", { type: "EnumAscDesc" })
		t.nullable.field("defaultValue", { type: "EnumAscDesc" })
		t.nullable.field("resolution", { type: "EnumAscDesc" })

	}
})

export const DeviceCycleOrderBy = inputObjectType({
	name: "DeviceCycleOrderBy",
	definition(t) {
		t.nullable.field("id", { type: "EnumAscDesc" })
		t.nullable.field("devId", { type: "EnumAscDesc" })
		t.nullable.field("globalCyclesStart", { type: "EnumAscDesc" })
		t.nullable.field("globalCyclesEnd", { type: "EnumAscDesc" })
		t.nullable.field("timestampStart", { type: "EnumAscDesc" })
		t.nullable.field("timestampEnd", { type: "EnumAscDesc" })
		t.nullable.field("timestamp", { type: "EnumAscDesc" })

	}
})

export const DeviceFileOrderBy = inputObjectType({
	name: "DeviceFileOrderBy",
	definition(t) {
		t.nullable.field("id", { type: "EnumAscDesc" })
		t.nullable.field("deviceId", { type: "EnumAscDesc" })
		t.nullable.field("filetype", { type: "EnumAscDesc" })
		t.nullable.field("filename", { type: "EnumAscDesc" })
		t.nullable.field("deviceClassId", { type: "EnumAscDesc" })
		t.nullable.field("updatedAt", { type: "EnumAscDesc" })

	}
})

export const DeviceInstanceOrderBy = inputObjectType({
	name: "DeviceInstanceOrderBy",
	definition(t) {
		t.nullable.field("id", { type: "EnumAscDesc" })
		t.nullable.field("name", { type: "EnumAscDesc" })
		t.nullable.field("parentDevId", { type: "EnumAscDesc" })
		t.nullable.field("ancestorMainDevId", { type: "EnumAscDesc" })
		t.nullable.field("deviceClassId", { type: "EnumAscDesc" })
		t.nullable.field("subinterface", { type: "EnumAscDesc" })
		t.nullable.field("regStatusId", { type: "EnumAscDesc" })
		t.nullable.field("articleNumber", { type: "EnumAscDesc" })
		t.nullable.field("serialNumber", { type: "EnumAscDesc" })
		t.nullable.field("shortName", { type: "EnumAscDesc" })
		t.nullable.field("customPictureFileName", { type: "EnumAscDesc" })
		t.nullable.field("createdOn", { type: "EnumAscDesc" })
		t.nullable.field("uniqueId", { type: "EnumAscDesc" })
		t.nullable.field("userId", { type: "EnumAscDesc" })
		t.nullable.field("eventStart", { type: "EnumAscDesc" })
		t.nullable.field("eventEnd", { type: "EnumAscDesc" })
		t.nullable.field("locationTag", { type: "EnumAscDesc" })
		t.nullable.field("locationPos", { type: "EnumAscDesc" })
		t.nullable.field("locationAssetId", { type: "EnumAscDesc" })
		t.nullable.field("preservedChunks", { type: "EnumAscDesc" })

	}
})

export const EtcHostOrderBy = inputObjectType({
	name: "EtcHostOrderBy",
	definition(t) {
		t.nullable.field("url", { type: "EnumAscDesc" })
		t.nullable.field("ipAddress", { type: "EnumAscDesc" })

	}
})

export const EventClassOrderBy = inputObjectType({
	name: "EventClassOrderBy",
	definition(t) {
		t.nullable.field("id", { type: "EnumAscDesc" })
		t.nullable.field("deviceClassId", { type: "EnumAscDesc" })
		t.nullable.field("eventTypesId", { type: "EnumAscDesc" })
		t.nullable.field("name", { type: "EnumAscDesc" })
		t.nullable.field("remark", { type: "EnumAscDesc" })
		t.nullable.field("description", { type: "EnumAscDesc" })
		t.nullable.field("cause", { type: "EnumAscDesc" })
		t.nullable.field("impact", { type: "EnumAscDesc" })
		t.nullable.field("solution", { type: "EnumAscDesc" })
		t.nullable.field("source", { type: "EnumAscDesc" })

	}
})

export const EventGroupCodeOrderBy = inputObjectType({
	name: "EventGroupCodeOrderBy",
	definition(t) {
		t.nullable.field("id", { type: "EnumAscDesc" })
		t.nullable.field("eventGroupId", { type: "EnumAscDesc" })
		t.nullable.field("eventCode", { type: "EnumAscDesc" })
		t.nullable.field("eventClassId", { type: "EnumAscDesc" })
		t.nullable.field("label", { type: "EnumAscDesc" })

	}
})

export const EventGroupDataOrderBy = inputObjectType({
	name: "EventGroupDataOrderBy",
	definition(t) {
		t.nullable.field("id", { type: "EnumAscDesc" })
		t.nullable.field("devId", { type: "EnumAscDesc" })
		t.nullable.field("eventGroupId", { type: "EnumAscDesc" })
		t.nullable.field("label", { type: "EnumAscDesc" })
		t.nullable.field("timestampStart", { type: "EnumAscDesc" })
		t.nullable.field("code", { type: "EnumAscDesc" })

	}
})

export const EventGroupDataHourAggregateOrderBy = inputObjectType({
	name: "EventGroupDataHourAggregateOrderBy",
	definition(t) {
		t.nullable.field("id", { type: "EnumAscDesc" })
		t.nullable.field("timestamp", { type: "EnumAscDesc" })
		t.nullable.field("devId", { type: "EnumAscDesc" })
		t.nullable.field("eventGroupId", { type: "EnumAscDesc" })
		t.nullable.field("label", { type: "EnumAscDesc" })
		t.nullable.field("code", { type: "EnumAscDesc" })
		t.nullable.field("sum", { type: "EnumAscDesc" })
		t.nullable.field("min", { type: "EnumAscDesc" })
		t.nullable.field("max", { type: "EnumAscDesc" })
		t.nullable.field("average", { type: "EnumAscDesc" })

	}
})

export const EventGroupValueOrderBy = inputObjectType({
	name: "EventGroupValueOrderBy",
	definition(t) {
		t.nullable.field("id", { type: "EnumAscDesc" })
		t.nullable.field("devId", { type: "EnumAscDesc" })
		t.nullable.field("eventGroupName", { type: "EnumAscDesc" })
		t.nullable.field("label", { type: "EnumAscDesc" })
		t.nullable.field("eventGroupValue", { type: "EnumAscDesc" })
		t.nullable.field("code", { type: "EnumAscDesc" })
		t.nullable.field("timestamp", { type: "EnumAscDesc" })

	}
})

export const EventGroupOrderBy = inputObjectType({
	name: "EventGroupOrderBy",
	definition(t) {
		t.nullable.field("id", { type: "EnumAscDesc" })
		t.nullable.field("devId", { type: "EnumAscDesc" })
		t.nullable.field("groupName", { type: "EnumAscDesc" })

	}
})

export const EventInstanceOrderBy = inputObjectType({
	name: "EventInstanceOrderBy",
	definition(t) {
		t.nullable.field("id", { type: "EnumAscDesc" })
		t.nullable.field("devId", { type: "EnumAscDesc" })
		t.nullable.field("eventClassId", { type: "EnumAscDesc" })
		t.nullable.field("timestampAppears", { type: "EnumAscDesc" })
		t.nullable.field("timestampDisappears", { type: "EnumAscDesc" })
		t.nullable.field("userId", { type: "EnumAscDesc" })
		t.nullable.field("x1", { type: "EnumAscDesc" })
		t.nullable.field("x2", { type: "EnumAscDesc" })
		t.nullable.field("x3", { type: "EnumAscDesc" })
		t.nullable.field("x4", { type: "EnumAscDesc" })

	}
})

export const EventTypeOrderBy = inputObjectType({
	name: "EventTypeOrderBy",
	definition(t) {
		t.nullable.field("id", { type: "EnumAscDesc" })
		t.nullable.field("type", { type: "EnumAscDesc" })
		t.nullable.field("deviceCondition", { type: "EnumAscDesc" })

	}
})

export const FloorPlanOrderBy = inputObjectType({
	name: "FloorPlanOrderBy",
	definition(t) {
		t.nullable.field("id", { type: "EnumAscDesc" })
		t.nullable.field("name", { type: "EnumAscDesc" })
		t.nullable.field("file", { type: "EnumAscDesc" })

	}
})

export const DeviceDataOrderBy = inputObjectType({
	name: "DeviceDataOrderBy",
	definition(t) {
		t.nullable.field("id", { type: "EnumAscDesc" })
		t.nullable.field("subtable", { type: "EnumAscDesc" })
		t.nullable.field("devId", { type: "EnumAscDesc" })
		t.nullable.field("deviceIndexDataTypeId", { type: "EnumAscDesc" })
		t.nullable.field("bitLength", { type: "EnumAscDesc" })
		t.nullable.field("bitOffset", { type: "EnumAscDesc" })
		t.nullable.field("index", { type: "EnumAscDesc" })
		t.nullable.field("subindex", { type: "EnumAscDesc" })
		t.nullable.field("subtopicId", { type: "EnumAscDesc" })
		t.nullable.field("parameterId", { type: "EnumAscDesc" })
		t.nullable.field("mqttName", { type: "EnumAscDesc" })
		t.nullable.field("mqttLabel", { type: "EnumAscDesc" })
		t.nullable.field("label", { type: "EnumAscDesc" })
		t.nullable.field("range", { type: "EnumAscDesc" })
		t.nullable.field("access", { type: "EnumAscDesc" })
		t.nullable.field("remark", { type: "EnumAscDesc" })
		t.nullable.field("value", { type: "EnumAscDesc" })
		t.nullable.field("defaultValue", { type: "EnumAscDesc" })
		t.nullable.field("resolution", { type: "EnumAscDesc" })
		t.nullable.field("gradient", { type: "EnumAscDesc" })
		t.nullable.field("unit", { type: "EnumAscDesc" })
		t.nullable.field("representationId", { type: "EnumAscDesc" })
		t.nullable.field("parameterGroup0", { type: "EnumAscDesc" })
		t.nullable.field("parameterGroup1", { type: "EnumAscDesc" })
		t.nullable.field("parameterGroup2", { type: "EnumAscDesc" })
		t.nullable.field("parameterGroup3", { type: "EnumAscDesc" })
		t.nullable.field("offset", { type: "EnumAscDesc" })
		t.nullable.field("parameterDescriptor", { type: "EnumAscDesc" })
		t.nullable.field("subParameterDescriptor", { type: "EnumAscDesc" })
		t.nullable.field("subDataTypeId", { type: "EnumAscDesc" })
		t.nullable.field("subBitLength", { type: "EnumAscDesc" })
		t.nullable.field("subRange", { type: "EnumAscDesc" })
		t.nullable.field("requestObject", { type: "EnumAscDesc" })

	}
})

export const MainDeviceClassOrderBy = inputObjectType({
	name: "MainDeviceClassOrderBy",
	definition(t) {
		t.nullable.field("id", { type: "EnumAscDesc" })
		t.nullable.field("deviceClassId", { type: "EnumAscDesc" })
		t.nullable.field("catalogName", { type: "EnumAscDesc" })
		t.nullable.field("subinterfaces", { type: "EnumAscDesc" })
		t.nullable.field("standardPort", { type: "EnumAscDesc" })
		t.nullable.field("softwareAdapterId", { type: "EnumAscDesc" })
		t.nullable.field("defaultExtraInfos", { type: "EnumAscDesc" })
		t.nullable.field("productCategory", { type: "EnumAscDesc" })

	}
})

export const MainDeviceInstanceOrderBy = inputObjectType({
	name: "MainDeviceInstanceOrderBy",
	definition(t) {
		t.nullable.field("id", { type: "EnumAscDesc" })
		t.nullable.field("devId", { type: "EnumAscDesc" })
		t.nullable.field("mainDeviceClassId", { type: "EnumAscDesc" })
		t.nullable.field("mac", { type: "EnumAscDesc" })
		t.nullable.field("ipAddress", { type: "EnumAscDesc" })
		t.nullable.field("port", { type: "EnumAscDesc" })
		t.nullable.field("extraInfos", { type: "EnumAscDesc" })
		t.nullable.field("floorPlanId", { type: "EnumAscDesc" })

	}
})

export const PerformanceIndicatorConfigOrderBy = inputObjectType({
	name: "PerformanceIndicatorConfigOrderBy",
	definition(t) {
		t.nullable.field("id", { type: "EnumAscDesc" })
		t.nullable.field("index", { type: "EnumAscDesc" })
		t.nullable.field("maxValue", { type: "EnumAscDesc" })
		t.nullable.field("devId", { type: "EnumAscDesc" })

	}
})

export const PrivilegeOrderBy = inputObjectType({
	name: "PrivilegeOrderBy",
	definition(t) {
		t.nullable.field("id", { type: "EnumAscDesc" })
		t.nullable.field("privilege", { type: "EnumAscDesc" })
		t.nullable.field("description", { type: "EnumAscDesc" })

	}
})

export const ProcessDataOrderBy = inputObjectType({
	name: "ProcessDataOrderBy",
	definition(t) {
		t.nullable.field("id", { type: "EnumAscDesc" })
		t.nullable.field("devId", { type: "EnumAscDesc" })
		t.nullable.field("deviceIndexDataTypeId", { type: "EnumAscDesc" })
		t.nullable.field("bitLength", { type: "EnumAscDesc" })
		t.nullable.field("bitOffset", { type: "EnumAscDesc" })
		t.nullable.field("index", { type: "EnumAscDesc" })
		t.nullable.field("subindex", { type: "EnumAscDesc" })
		t.nullable.field("subtopicId", { type: "EnumAscDesc" })
		t.nullable.field("parameterId", { type: "EnumAscDesc" })
		t.nullable.field("mqttName", { type: "EnumAscDesc" })
		t.nullable.field("mqttLabel", { type: "EnumAscDesc" })
		t.nullable.field("label", { type: "EnumAscDesc" })
		t.nullable.field("range", { type: "EnumAscDesc" })
		t.nullable.field("access", { type: "EnumAscDesc" })
		t.nullable.field("remark", { type: "EnumAscDesc" })
		t.nullable.field("value", { type: "EnumAscDesc" })
		t.nullable.field("defaultValue", { type: "EnumAscDesc" })
		t.nullable.field("resolution", { type: "EnumAscDesc" })
		t.nullable.field("gradient", { type: "EnumAscDesc" })
		t.nullable.field("unit", { type: "EnumAscDesc" })
		t.nullable.field("representationId", { type: "EnumAscDesc" })
		t.nullable.field("parameterGroup0", { type: "EnumAscDesc" })
		t.nullable.field("parameterGroup1", { type: "EnumAscDesc" })
		t.nullable.field("parameterGroup2", { type: "EnumAscDesc" })
		t.nullable.field("parameterGroup3", { type: "EnumAscDesc" })
		t.nullable.field("offset", { type: "EnumAscDesc" })
		t.nullable.field("parameterDescriptor", { type: "EnumAscDesc" })
		t.nullable.field("subParameterDescriptor", { type: "EnumAscDesc" })
		t.nullable.field("subDataTypeId", { type: "EnumAscDesc" })
		t.nullable.field("subBitLength", { type: "EnumAscDesc" })
		t.nullable.field("subRange", { type: "EnumAscDesc" })
		t.nullable.field("requestObject", { type: "EnumAscDesc" })
		t.nullable.field("byteOrder", { type: "EnumAscDesc" })
		t.nullable.field("samplingRate", { type: "EnumAscDesc" })
		t.nullable.field("conditionId", { type: "EnumAscDesc" })

	}
})

export const ProcessDataConditionOrderBy = inputObjectType({
	name: "ProcessDataConditionOrderBy",
	definition(t) {
		t.nullable.field("id", { type: "EnumAscDesc" })
		t.nullable.field("index", { type: "EnumAscDesc" })
		t.nullable.field("subindex", { type: "EnumAscDesc" })
		t.nullable.field("value", { type: "EnumAscDesc" })

	}
})

export const ProcessDataModeOrderBy = inputObjectType({
	name: "ProcessDataModeOrderBy",
	definition(t) {
		t.nullable.field("id", { type: "EnumAscDesc" })
		t.nullable.field("name", { type: "EnumAscDesc" })
		t.nullable.field("messageSize", { type: "EnumAscDesc" })
		t.nullable.field("minimalSamplingTime", { type: "EnumAscDesc" })
		t.nullable.field("samplingTimeUnit", { type: "EnumAscDesc" })
		t.nullable.field("devId", { type: "EnumAscDesc" })

	}
})

export const RegistrationStatusOrderBy = inputObjectType({
	name: "RegistrationStatusOrderBy",
	definition(t) {
		t.nullable.field("id", { type: "EnumAscDesc" })
		t.nullable.field("status", { type: "EnumAscDesc" })

	}
})

export const ReplayConfigOrderBy = inputObjectType({
	name: "ReplayConfigOrderBy",
	definition(t) {
		t.nullable.field("id", { type: "EnumAscDesc" })
		t.nullable.field("devId", { type: "EnumAscDesc" })

	}
})

export const ReplayDataOrderBy = inputObjectType({
	name: "ReplayDataOrderBy",
	definition(t) {
		t.nullable.field("id", { type: "EnumAscDesc" })
		t.nullable.field("replaySetId", { type: "EnumAscDesc" })
		t.nullable.field("timestamp", { type: "EnumAscDesc" })
		t.nullable.field("y1", { type: "EnumAscDesc" })
		t.nullable.field("y2", { type: "EnumAscDesc" })
		t.nullable.field("y3", { type: "EnumAscDesc" })
		t.nullable.field("y4", { type: "EnumAscDesc" })
		t.nullable.field("y5", { type: "EnumAscDesc" })
		t.nullable.field("y6", { type: "EnumAscDesc" })
		t.nullable.field("y7", { type: "EnumAscDesc" })
		t.nullable.field("y8", { type: "EnumAscDesc" })
		t.nullable.field("y9", { type: "EnumAscDesc" })
		t.nullable.field("y10", { type: "EnumAscDesc" })
		t.nullable.field("y11", { type: "EnumAscDesc" })
		t.nullable.field("y12", { type: "EnumAscDesc" })
		t.nullable.field("y13", { type: "EnumAscDesc" })
		t.nullable.field("y14", { type: "EnumAscDesc" })
		t.nullable.field("y15", { type: "EnumAscDesc" })
		t.nullable.field("y16", { type: "EnumAscDesc" })
		t.nullable.field("y17", { type: "EnumAscDesc" })
		t.nullable.field("y18", { type: "EnumAscDesc" })
		t.nullable.field("y19", { type: "EnumAscDesc" })
		t.nullable.field("y20", { type: "EnumAscDesc" })
		t.nullable.field("y21", { type: "EnumAscDesc" })
		t.nullable.field("y22", { type: "EnumAscDesc" })
		t.nullable.field("y23", { type: "EnumAscDesc" })
		t.nullable.field("y24", { type: "EnumAscDesc" })
		t.nullable.field("y25", { type: "EnumAscDesc" })
		t.nullable.field("y26", { type: "EnumAscDesc" })
		t.nullable.field("y27", { type: "EnumAscDesc" })
		t.nullable.field("y28", { type: "EnumAscDesc" })
		t.nullable.field("y29", { type: "EnumAscDesc" })
		t.nullable.field("y30", { type: "EnumAscDesc" })

	}
})

export const ReplaySetOrderBy = inputObjectType({
	name: "ReplaySetOrderBy",
	definition(t) {
		t.nullable.field("id", { type: "EnumAscDesc" })
		t.nullable.field("timestamp", { type: "EnumAscDesc" })
		t.nullable.field("eventClassId", { type: "EnumAscDesc" })
		t.nullable.field("label", { type: "EnumAscDesc" })
		t.nullable.field("devId", { type: "EnumAscDesc" })

	}
})

export const ReportingOrderBy = inputObjectType({
	name: "ReportingOrderBy",
	definition(t) {
		t.nullable.field("id", { type: "EnumAscDesc" })
		t.nullable.field("devId", { type: "EnumAscDesc" })
		t.nullable.field("timestamp", { type: "EnumAscDesc" })
		t.nullable.field("source", { type: "EnumAscDesc" })
		t.nullable.field("x1", { type: "EnumAscDesc" })
		t.nullable.field("x2", { type: "EnumAscDesc" })
		t.nullable.field("x3", { type: "EnumAscDesc" })
		t.nullable.field("x4", { type: "EnumAscDesc" })
		t.nullable.field("y1", { type: "EnumAscDesc" })
		t.nullable.field("y2", { type: "EnumAscDesc" })
		t.nullable.field("y3", { type: "EnumAscDesc" })
		t.nullable.field("y4", { type: "EnumAscDesc" })
		t.nullable.field("y5", { type: "EnumAscDesc" })
		t.nullable.field("y6", { type: "EnumAscDesc" })
		t.nullable.field("y7", { type: "EnumAscDesc" })
		t.nullable.field("y8", { type: "EnumAscDesc" })
		t.nullable.field("y9", { type: "EnumAscDesc" })
		t.nullable.field("y10", { type: "EnumAscDesc" })
		t.nullable.field("y11", { type: "EnumAscDesc" })
		t.nullable.field("y12", { type: "EnumAscDesc" })
		t.nullable.field("y13", { type: "EnumAscDesc" })
		t.nullable.field("y14", { type: "EnumAscDesc" })
		t.nullable.field("y15", { type: "EnumAscDesc" })
		t.nullable.field("y16", { type: "EnumAscDesc" })
		t.nullable.field("y17", { type: "EnumAscDesc" })
		t.nullable.field("y18", { type: "EnumAscDesc" })
		t.nullable.field("y19", { type: "EnumAscDesc" })
		t.nullable.field("y20", { type: "EnumAscDesc" })
		t.nullable.field("y21", { type: "EnumAscDesc" })
		t.nullable.field("y22", { type: "EnumAscDesc" })
		t.nullable.field("y23", { type: "EnumAscDesc" })
		t.nullable.field("y24", { type: "EnumAscDesc" })
		t.nullable.field("y25", { type: "EnumAscDesc" })
		t.nullable.field("y26", { type: "EnumAscDesc" })
		t.nullable.field("y27", { type: "EnumAscDesc" })
		t.nullable.field("y28", { type: "EnumAscDesc" })
		t.nullable.field("y29", { type: "EnumAscDesc" })
		t.nullable.field("y30", { type: "EnumAscDesc" })

	}
})

export const ReportingConfigOrderBy = inputObjectType({
	name: "ReportingConfigOrderBy",
	definition(t) {
		t.nullable.field("id", { type: "EnumAscDesc" })
		t.nullable.field("devId", { type: "EnumAscDesc" })

	}
})

export const RepresentationOrderBy = inputObjectType({
	name: "RepresentationOrderBy",
	definition(t) {
		t.nullable.field("id", { type: "EnumAscDesc" })
		t.nullable.field("name", { type: "EnumAscDesc" })
		t.nullable.field("description", { type: "EnumAscDesc" })

	}
})

export const RolePrivilegeOrderBy = inputObjectType({
	name: "RolePrivilegeOrderBy",
	definition(t) {
		t.nullable.field("id", { type: "EnumAscDesc" })
		t.nullable.field("roleId", { type: "EnumAscDesc" })
		t.nullable.field("privilegeId", { type: "EnumAscDesc" })

	}
})

export const RoleOrderBy = inputObjectType({
	name: "RoleOrderBy",
	definition(t) {
		t.nullable.field("id", { type: "EnumAscDesc" })
		t.nullable.field("name", { type: "EnumAscDesc" })
		t.nullable.field("description", { type: "EnumAscDesc" })

	}
})

export const SoftwareAdapterOrderBy = inputObjectType({
	name: "SoftwareAdapterOrderBy",
	definition(t) {
		t.nullable.field("id", { type: "EnumAscDesc" })
		t.nullable.field("name", { type: "EnumAscDesc" })
		t.nullable.field("imageFile", { type: "EnumAscDesc" })
		t.nullable.field("productName", { type: "EnumAscDesc" })
		t.nullable.field("orderCode", { type: "EnumAscDesc" })
		t.nullable.field("description", { type: "EnumAscDesc" })
		t.nullable.field("revision", { type: "EnumAscDesc" })
		t.nullable.field("dockerImage", { type: "EnumAscDesc" })

	}
})

export const TimeseriesOrderBy = inputObjectType({
	name: "TimeseriesOrderBy",
	definition(t) {
		t.nullable.field("id", { type: "EnumAscDesc" })
		t.nullable.field("devId", { type: "EnumAscDesc" })
		t.nullable.field("name", { type: "EnumAscDesc" })

	}
})

export const TimeseriesDataOrderBy = inputObjectType({
	name: "TimeseriesDataOrderBy",
	definition(t) {
		t.nullable.field("id", { type: "EnumAscDesc" })
		t.nullable.field("timeseriesId", { type: "EnumAscDesc" })
		t.nullable.field("devId", { type: "EnumAscDesc" })
		t.nullable.field("timestampStart", { type: "EnumAscDesc" })
		t.nullable.field("value", { type: "EnumAscDesc" })

	}
})

export const TimeseriesDataHourAggregateOrderBy = inputObjectType({
	name: "TimeseriesDataHourAggregateOrderBy",
	definition(t) {
		t.nullable.field("id", { type: "EnumAscDesc" })
		t.nullable.field("timestamp", { type: "EnumAscDesc" })
		t.nullable.field("devId", { type: "EnumAscDesc" })
		t.nullable.field("timeseriesId", { type: "EnumAscDesc" })
		t.nullable.field("value", { type: "EnumAscDesc" })

	}
})

export const UpdaterConfigOrderBy = inputObjectType({
	name: "UpdaterConfigOrderBy",
	definition(t) {
		t.nullable.field("id", { type: "EnumAscDesc" })
		t.nullable.field("interval", { type: "EnumAscDesc" })
		t.nullable.field("indices", { type: "EnumAscDesc" })
		t.nullable.field("devId", { type: "EnumAscDesc" })

	}
})

export const UserRoleOrderBy = inputObjectType({
	name: "UserRoleOrderBy",
	definition(t) {
		t.nullable.field("id", { type: "EnumAscDesc" })
		t.nullable.field("userId", { type: "EnumAscDesc" })
		t.nullable.field("roleId", { type: "EnumAscDesc" })

	}
})

export const UserOrderBy = inputObjectType({
	name: "UserOrderBy",
	definition(t) {
		t.nullable.field("id", { type: "EnumAscDesc" })
		t.nullable.field("user", { type: "EnumAscDesc" })
		t.nullable.field("password", { type: "EnumAscDesc" })
		t.nullable.field("firstname", { type: "EnumAscDesc" })
		t.nullable.field("lastname", { type: "EnumAscDesc" })
		t.nullable.field("email", { type: "EnumAscDesc" })

	}
})

export const VendorOrderBy = inputObjectType({
	name: "VendorOrderBy",
	definition(t) {
		t.nullable.field("name", { type: "EnumAscDesc" })
		t.nullable.field("text", { type: "EnumAscDesc" })
		t.nullable.field("url", { type: "EnumAscDesc" })
		t.nullable.field("logo", { type: "EnumAscDesc" })

	}
})

export const XConfigOrderBy = inputObjectType({
	name: "XConfigOrderBy",
	definition(t) {
		t.nullable.field("id", { type: "EnumAscDesc" })
		t.nullable.field("devId", { type: "EnumAscDesc" })

	}
})

export const ExtrapolationFunctionOrderBy = inputObjectType({
	name: "ExtrapolationFunctionOrderBy",
	definition(t) {
		t.nullable.field("id", { type: "EnumAscDesc" })
		t.nullable.field("name", { type: "EnumAscDesc" })

	}
})

export const PredictionConfigOrderBy = inputObjectType({
	name: "PredictionConfigOrderBy",
	definition(t) {
		t.nullable.field("id", { type: "EnumAscDesc" })
		t.nullable.field("identifier", { type: "EnumAscDesc" })
		t.nullable.field("rangeAttribute", { type: "EnumAscDesc" })
		t.nullable.field("rangeStart", { type: "EnumAscDesc" })
		t.nullable.field("rangeEnd", { type: "EnumAscDesc" })
		t.nullable.field("type", { type: "EnumAscDesc" })
		t.nullable.field("deviceClassId", { type: "EnumAscDesc" })
		t.nullable.field("extrapolationFunctionId", { type: "EnumAscDesc" })
		t.nullable.field("maintenanceTypeId", { type: "EnumAscDesc" })

	}
})

export const MaintenanceOrderBy = inputObjectType({
	name: "MaintenanceOrderBy",
	definition(t) {
		t.nullable.field("id", { type: "EnumAscDesc" })
		t.nullable.field("action", { type: "EnumAscDesc" })
		t.nullable.field("dueDate", { type: "EnumAscDesc" })
		t.nullable.field("maintenanceStartDate", { type: "EnumAscDesc" })
		t.nullable.field("maintenanceEndDate", { type: "EnumAscDesc" })
		t.nullable.field("createdAt", { type: "EnumAscDesc" })
		t.nullable.field("updatedAt", { type: "EnumAscDesc" })
		t.nullable.field("assigneeId", { type: "EnumAscDesc" })
		t.nullable.field("deviceInstanceId", { type: "EnumAscDesc" })
		t.nullable.field("fixedByUserId", { type: "EnumAscDesc" })
		t.nullable.field("predictionConfigId", { type: "EnumAscDesc" })
		t.nullable.field("maintenanceTypeId", { type: "EnumAscDesc" })

	}
})

export const MaintenanceTypeOrderBy = inputObjectType({
	name: "MaintenanceTypeOrderBy",
	definition(t) {
		t.nullable.field("id", { type: "EnumAscDesc" })
		t.nullable.field("name", { type: "EnumAscDesc" })
		t.nullable.field("type", { type: "EnumAscDesc" })
		t.nullable.field("description", { type: "EnumAscDesc" })
		t.nullable.field("part", { type: "EnumAscDesc" })
		t.nullable.field("cause", { type: "EnumAscDesc" })
		t.nullable.field("impact", { type: "EnumAscDesc" })
		t.nullable.field("solution", { type: "EnumAscDesc" })
		t.nullable.field("createdAt", { type: "EnumAscDesc" })
		t.nullable.field("updatedAt", { type: "EnumAscDesc" })
		t.nullable.field("deviceClassId", { type: "EnumAscDesc" })

	}
})

export const MaintenanceAlarmConfigOrderBy = inputObjectType({
	name: "MaintenanceAlarmConfigOrderBy",
	definition(t) {
		t.nullable.field("id", { type: "EnumAscDesc" })
		t.nullable.field("maintenanceTypeId", { type: "EnumAscDesc" })
		t.nullable.field("deviceClassId", { type: "EnumAscDesc" })
		t.nullable.field("eventClassId", { type: "EnumAscDesc" })

	}
})

export const MaintenanceConfigOrderBy = inputObjectType({
	name: "MaintenanceConfigOrderBy",
	definition(t) {
		t.nullable.field("id", { type: "EnumAscDesc" })
		t.nullable.field("format", { type: "EnumAscDesc" })
		t.nullable.field("createdAt", { type: "EnumAscDesc" })
		t.nullable.field("updatedAt", { type: "EnumAscDesc" })
		t.nullable.field("deviceClassId", { type: "EnumAscDesc" })
		t.nullable.field("maintenanceTypeId", { type: "EnumAscDesc" })

	}
})

export const ReportTypeOrderBy = inputObjectType({
	name: "ReportTypeOrderBy",
	definition(t) {
		t.nullable.field("id", { type: "EnumAscDesc" })
		t.nullable.field("name", { type: "EnumAscDesc" })
		t.nullable.field("information", { type: "EnumAscDesc" })
		t.nullable.field("mailBody", { type: "EnumAscDesc" })
		t.nullable.field("contentType", { type: "EnumAscDesc" })
		t.nullable.field("fileNameSchema", { type: "EnumAscDesc" })
		t.nullable.field("defaultOptions", { type: "EnumAscDesc" })

	}
})

export const TaskOrderBy = inputObjectType({
	name: "TaskOrderBy",
	definition(t) {
		t.nullable.field("id", { type: "EnumAscDesc" })
		t.nullable.field("devId", { type: "EnumAscDesc" })
		t.nullable.field("reportTypeId", { type: "EnumAscDesc" })
		t.nullable.field("roleId", { type: "EnumAscDesc" })
		t.nullable.field("firstSendDate", { type: "EnumAscDesc" })
		t.nullable.field("frequency", { type: "EnumAscDesc" })
		t.nullable.field("reportOptions", { type: "EnumAscDesc" })

	}
})
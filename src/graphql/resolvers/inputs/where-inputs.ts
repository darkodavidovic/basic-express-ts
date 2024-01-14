import { inputObjectType } from "nexus"

export const ActiveEventInstanceWhere = inputObjectType({
	name: "ActiveEventInstanceWhere",
	definition(t) {
		t.nullable.field("id", { type: "WhereInt" })
		t.nullable.field("devId", { type: "WhereInt" })
		t.nullable.field("eventClassId", { type: "WhereInt" })
		t.nullable.field("timestampAppears", { type: "WhereDateTime" })
		t.nullable.field("userId", { type: "WhereInt" })
		t.nullable.field("x1", { type: "WhereString" })
		t.nullable.field("x2", { type: "WhereString" })
		t.nullable.field("x3", { type: "WhereString" })
		t.nullable.field("x4", { type: "WhereString" })


	}
})

export const DatabaseStatusWhere = inputObjectType({
	name: "DatabaseStatusWhere",
	definition(t) {
		t.nullable.field("id", { type: "WhereInt" })
		t.nullable.field("status", {
			type: "DatabaseStatusStatus"
		})
		t.nullable.field("timestamp", { type: "WhereDateTime" })


	}
})

export const DeviceIndexDataTypeWhere = inputObjectType({
	name: "DeviceIndexDataTypeWhere",
	definition(t) {
		t.nullable.field("id", { type: "WhereInt" })
		t.nullable.field("name", { type: "WhereString" })


	}
})

export const DeviceClassWhere = inputObjectType({
	name: "DeviceClassWhere",
	definition(t) {
		t.nullable.field("id", { type: "WhereInt" })
		t.nullable.field("deviceId", { type: "WhereInt" })
		t.nullable.bigInt("vendorId")
		t.nullable.field("pictureFileName", { type: "WhereString" })
		t.nullable.field("productId", { type: "WhereString" })
		t.nullable.field("productName", { type: "WhereString" })
		t.nullable.field("deviceType", { type: "WhereString" })
		t.nullable.field("deviceSubType", { type: "WhereString" })
		t.nullable.field("description", { type: "WhereString" })
		t.nullable.field("iconFileName", { type: "WhereString" })
		t.nullable.field("pDbitLengthIn", { type: "WhereInt" })
		t.nullable.field("pDbitLengthOut", { type: "WhereInt" })
		t.nullable.boolean("allowFirmwareUpload")
		t.nullable.boolean("catalog")
		t.nullable.json("mappedIndices")
		t.nullable.field("firmwareVersion", { type: "WhereString" })


	}
})

export const DeviceControlWhere = inputObjectType({
	name: "DeviceControlWhere",
	definition(t) {
		t.nullable.field("id", { type: "WhereInt" })
		t.nullable.field("devId", { type: "WhereInt" })
		t.nullable.field("DeviceIndexDataTypeId", { type: "WhereInt" })
		t.nullable.field("bitLength", { type: "WhereInt" })
		t.nullable.field("index", { type: "WhereInt" })
		t.nullable.field("subindex", { type: "WhereInt" })
		t.nullable.boolean("dynamic")
		t.nullable.boolean("modifiesOtherVariables")
		t.nullable.field("mqttName", { type: "WhereString" })
		t.nullable.field("subtopicId", { type: "WhereInt" })
		t.nullable.field("parameterId", { type: "WhereString" })
		t.nullable.field("mqttLabel", { type: "WhereString" })
		t.nullable.field("label", { type: "WhereString" })
		t.nullable.field("range", { type: "WhereString" })
		t.nullable.field("access", { type: "WhereString" })
		t.nullable.field("remark", { type: "WhereString" })
		t.nullable.field("parameterDescriptor", { type: "WhereString" })
		t.nullable.field("parameterGroup", { type: "WhereString" })
		t.nullable.boolean("successStatus")
		t.nullable.field("lastSuccessDate", { type: "WhereDateTime" })
		t.nullable.field("value", { type: "WhereString" })
		t.nullable.field("defaultValue", { type: "WhereString" })
		t.nullable.field("resolution", { type: "WhereString" })


	}
})

export const DeviceCycleWhere = inputObjectType({
	name: "DeviceCycleWhere",
	definition(t) {
		t.nullable.field("id", { type: "WhereInt" })
		t.nullable.field("devId", { type: "WhereInt" })
		t.nullable.field("globalCyclesStart", { type: "WhereInt" })
		t.nullable.field("globalCyclesEnd", { type: "WhereInt" })
		t.nullable.field("timestampStart", { type: "WhereDateTime" })
		t.nullable.field("timestampEnd", { type: "WhereDateTime" })
		t.nullable.field("timestamp", { type: "WhereDateTime" })


	}
})

export const DeviceFileWhere = inputObjectType({
	name: "DeviceFileWhere",
	definition(t) {
		t.nullable.field("id", { type: "WhereInt" })
		t.nullable.bigInt("vendorId")
		t.nullable.field("deviceId", { type: "WhereInt" })
		t.nullable.field("filetype", { type: "WhereString" })
		t.nullable.field("filename", { type: "WhereString" })
		t.nullable.float("revision")
		t.nullable.field("deviceClassId", { type: "WhereInt" })
		t.nullable.field("updatedAt", { type: "WhereDateTime" })


	}
})

export const DeviceInstanceWhere = inputObjectType({
	name: "DeviceInstanceWhere",
	definition(t) {
		t.nullable.field("id", { type: "WhereInt" })
		t.nullable.field("name", { type: "WhereString" })
		t.nullable.field("parentDevId", { type: "WhereInt" })
		t.nullable.field("ancestorMainDevId", { type: "WhereInt" })
		t.nullable.field("deviceClassId", { type: "WhereInt" })
		t.nullable.field("subinterface", { type: "WhereString" })
		t.nullable.field("regStatusId", { type: "WhereInt" })
		t.nullable.json("deviceDescription")
		t.nullable.boolean("connectionState")
		t.nullable.boolean("manuallyDeactivated")
		t.nullable.boolean("active")
		t.nullable.field("articleNumber", { type: "WhereString" })
		t.nullable.field("serialNumber", { type: "WhereString" })
		t.nullable.field("shortName", { type: "WhereString" })
		t.nullable.field("customPictureFileName", { type: "WhereString" })
		t.nullable.json("kpi")
		t.nullable.json("oeeConfig")
		t.nullable.json("appLink")
		t.nullable.json("eventMap")
		t.nullable.boolean("allowDelete")
		t.nullable.boolean("exportCloud")
		t.nullable.boolean("hidden")
		t.nullable.boolean("isRelayed")
		t.nullable.field("createdOn", { type: "WhereDateTime" })
		t.nullable.json("geolocation")
		t.nullable.field("uniqueId", { type: "WhereString" })
		t.nullable.field("userId", { type: "WhereInt" })
		t.nullable.field("eventStart", { type: "WhereDateTime" })
		t.nullable.field("eventEnd", { type: "WhereDateTime" })
		t.nullable.field("locationTag", { type: "WhereString" })
		t.nullable.field("locationPos", { type: "WhereString" })
		t.nullable.field("locationAssetId", { type: "WhereString" })
		t.nullable.field("preservedChunks", { type: "WhereString" })


	}
})

export const EtcHostWhere = inputObjectType({
	name: "EtcHostWhere",
	definition(t) {
		t.nullable.field("url", { type: "WhereString" })
		t.nullable.field("ipAddress", { type: "WhereString" })


	}
})

export const EventClassWhere = inputObjectType({
	name: "EventClassWhere",
	definition(t) {
		t.nullable.field("id", { type: "WhereInt" })
		t.nullable.field("deviceClassId", { type: "WhereInt" })
		t.nullable.bigInt("code")
		t.nullable.field("eventTypesId", { type: "WhereInt" })
		t.nullable.field("name", { type: "WhereString" })
		t.nullable.field("remark", { type: "WhereString" })
		t.nullable.field("description", { type: "WhereString" })
		t.nullable.field("cause", { type: "WhereString" })
		t.nullable.field("impact", { type: "WhereString" })
		t.nullable.field("solution", { type: "WhereString" })
		t.nullable.field("source", { type: "WhereString" })


	}
})

export const EventGroupCodeWhere = inputObjectType({
	name: "EventGroupCodeWhere",
	definition(t) {
		t.nullable.field("id", { type: "WhereInt" })
		t.nullable.field("eventGroupId", { type: "WhereInt" })
		t.nullable.field("eventCode", { type: "WhereInt" })
		t.nullable.field("eventClassId", { type: "WhereInt" })
		t.nullable.field("label", { type: "WhereString" })


	}
})

export const EventGroupDataWhere = inputObjectType({
	name: "EventGroupDataWhere",
	definition(t) {
		t.nullable.field("id", { type: "WhereInt" })
		t.nullable.field("devId", { type: "WhereInt" })
		t.nullable.field("eventGroupId", { type: "WhereInt" })
		t.nullable.field("label", { type: "WhereString" })
		t.nullable.field("timestampStart", { type: "WhereDateTime" })
		t.nullable.field("code", { type: "WhereInt" })


	}
})

export const EventGroupDataHourAggregateWhere = inputObjectType({
	name: "EventGroupDataHourAggregateWhere",
	definition(t) {
		t.nullable.field("id", { type: "WhereInt" })
		t.nullable.field("timestamp", { type: "WhereDateTime" })
		t.nullable.field("devId", { type: "WhereInt" })
		t.nullable.field("eventGroupId", { type: "WhereInt" })
		t.nullable.field("label", { type: "WhereString" })
		t.nullable.field("code", { type: "WhereInt" })
		t.nullable.field("sum", { type: "WhereInt" })
		t.nullable.field("min", { type: "WhereInt" })
		t.nullable.field("max", { type: "WhereInt" })
		t.nullable.field("average", { type: "WhereString" })


	}
})

export const EventGroupValueWhere = inputObjectType({
	name: "EventGroupValueWhere",
	definition(t) {
		t.nullable.field("id", { type: "WhereInt" })
		t.nullable.field("devId", { type: "WhereInt" })
		t.nullable.field("eventGroupName", { type: "WhereString" })
		t.nullable.field("label", { type: "WhereString" })
		t.nullable.field("eventGroupValue", { type: "WhereString" })
		t.nullable.field("code", { type: "WhereInt" })
		t.nullable.field("timestamp", { type: "WhereDateTime" })


	}
})

export const EventGroupWhere = inputObjectType({
	name: "EventGroupWhere",
	definition(t) {
		t.nullable.field("id", { type: "WhereInt" })
		t.nullable.field("devId", { type: "WhereInt" })
		t.nullable.field("groupName", { type: "WhereString" })
		t.nullable.json("computed")


	}
})

export const EventInstanceWhere = inputObjectType({
	name: "EventInstanceWhere",
	definition(t) {
		t.nullable.field("id", { type: "WhereInt" })
		t.nullable.field("devId", { type: "WhereInt" })
		t.nullable.field("eventClassId", { type: "WhereInt" })
		t.nullable.field("timestampAppears", { type: "WhereDateTime" })
		t.nullable.field("timestampDisappears", { type: "WhereDateTime" })
		t.nullable.field("userId", { type: "WhereInt" })
		t.nullable.field("x1", { type: "WhereString" })
		t.nullable.field("x2", { type: "WhereString" })
		t.nullable.field("x3", { type: "WhereString" })
		t.nullable.field("x4", { type: "WhereString" })


	}
})

export const EventTypeWhere = inputObjectType({
	name: "EventTypeWhere",
	definition(t) {
		t.nullable.field("id", { type: "WhereInt" })
		t.nullable.field("type", { type: "WhereString" })
		t.nullable.field("deviceCondition", { type: "WhereInt" })


	}
})

export const FloorPlanWhere = inputObjectType({
	name: "FloorPlanWhere",
	definition(t) {
		t.nullable.field("id", { type: "WhereInt" })
		t.nullable.field("name", { type: "WhereString" })
		t.nullable.field("file", { type: "WhereString" })


	}
})

export const DeviceDataWhere = inputObjectType({
	name: "DeviceDataWhere",
	definition(t) {
		t.nullable.field("id", { type: "WhereInt" })
		t.nullable.field("subtable", { type: "WhereString" })
		t.nullable.field("devId", { type: "WhereInt" })
		t.nullable.field("deviceIndexDataTypeId", { type: "WhereInt" })
		t.nullable.field("bitLength", { type: "WhereInt" })
		t.nullable.field("bitOffset", { type: "WhereInt" })
		t.nullable.field("index", { type: "WhereInt" })
		t.nullable.field("subindex", { type: "WhereInt" })
		t.nullable.boolean("dynamic")
		t.nullable.boolean("modifiesOtherVariables")
		t.nullable.field("subtopicId", { type: "WhereInt" })
		t.nullable.boolean("active")
		t.nullable.field("parameterId", { type: "WhereString" })
		t.nullable.field("mqttName", { type: "WhereString" })
		t.nullable.field("mqttLabel", { type: "WhereString" })
		t.nullable.field("label", { type: "WhereString" })
		t.nullable.field("range", { type: "WhereString" })
		t.nullable.field("access", { type: "WhereString" })
		t.nullable.field("remark", { type: "WhereString" })
		t.nullable.field("value", { type: "WhereString" })
		t.nullable.field("defaultValue", { type: "WhereString" })
		t.nullable.field("resolution", { type: "WhereString" })
		t.nullable.field("gradient", { type: "WhereString" })
		t.nullable.field("unit", { type: "WhereString" })
		t.nullable.field("representationId", { type: "WhereInt" })
		t.nullable.field("parameterGroup0", { type: "WhereString" })
		t.nullable.field("parameterGroup1", { type: "WhereString" })
		t.nullable.field("parameterGroup2", { type: "WhereString" })
		t.nullable.field("parameterGroup3", { type: "WhereString" })
		t.nullable.field("offset", { type: "WhereString" })
		t.nullable.field("parameterDescriptor", { type: "WhereString" })
		t.nullable.field("subParameterDescriptor", { type: "WhereString" })
		t.nullable.field("subDataTypeId", { type: "WhereInt" })
		t.nullable.field("subBitLength", { type: "WhereInt" })
		t.nullable.field("subRange", { type: "WhereString" })
		t.nullable.boolean("subindexAccessSupported")
		t.nullable.field("requestObject", { type: "WhereString" })


	}
})

export const MainDeviceClassWhere = inputObjectType({
	name: "MainDeviceClassWhere",
	definition(t) {
		t.nullable.field("id", { type: "WhereInt" })
		t.nullable.field("deviceClassId", { type: "WhereInt" })
		t.nullable.field("catalogName", { type: "WhereString" })
		t.nullable.field("subinterfaces", { type: "WhereString" })
		t.nullable.field("standardPort", { type: "WhereInt" })
		t.nullable.field("softwareAdapterId", { type: "WhereInt" })
		t.nullable.field("defaultExtraInfos", { type: "WhereString" })
		t.nullable.boolean("configurationFileRequired")
		t.nullable.boolean("unlocked")
		t.nullable.boolean("ipRequired")
		t.nullable.field("productCategory", { type: "WhereString" })
		t.nullable.json("configurationOptions")


	}
})

export const MainDeviceInstanceWhere = inputObjectType({
	name: "MainDeviceInstanceWhere",
	definition(t) {
		t.nullable.field("id", { type: "WhereInt" })
		t.nullable.field("devId", { type: "WhereInt" })
		t.nullable.field("mainDeviceClassId", { type: "WhereInt" })
		t.nullable.field("mac", { type: "WhereString" })
		t.nullable.field("ipAddress", { type: "WhereString" })
		t.nullable.field("port", { type: "WhereInt" })
		t.nullable.boolean("isSelfRegistering")
		t.nullable.boolean("stopOnProblems")
		t.nullable.field("extraInfos", { type: "WhereString" })
		t.nullable.boolean("startDevices")
		t.nullable.field("floorPlanId", { type: "WhereInt" })
		t.nullable.json("configuration")
		t.nullable.boolean("allowPDOutWrite")
		t.nullable.boolean("statePDOutWrite")


	}
})

export const PerformanceIndicatorConfigWhere = inputObjectType({
	name: "PerformanceIndicatorConfigWhere",
	definition(t) {
		t.nullable.field("id", { type: "WhereInt" })
		t.nullable.field("index", { type: "WhereString" })
		t.nullable.field("maxValue", { type: "WhereString" })
		t.nullable.field("devId", { type: "WhereInt" })


	}
})

export const PrivilegeWhere = inputObjectType({
	name: "PrivilegeWhere",
	definition(t) {
		t.nullable.field("id", { type: "WhereInt" })
		t.nullable.field("privilege", { type: "WhereString" })
		t.nullable.field("description", { type: "WhereString" })


	}
})

export const ProcessDataWhere = inputObjectType({
	name: "ProcessDataWhere",
	definition(t) {
		t.nullable.field("id", { type: "WhereInt" })
		t.nullable.field("devId", { type: "WhereInt" })
		t.nullable.field("deviceIndexDataTypeId", { type: "WhereInt" })
		t.nullable.field("bitLength", { type: "WhereInt" })
		t.nullable.field("bitOffset", { type: "WhereInt" })
		t.nullable.field("index", { type: "WhereInt" })
		t.nullable.field("subindex", { type: "WhereInt" })
		t.nullable.boolean("dynamic")
		t.nullable.boolean("modifiesOtherVariables")
		t.nullable.field("subtopicId", { type: "WhereInt" })
		t.nullable.boolean("active")
		t.nullable.field("parameterId", { type: "WhereString" })
		t.nullable.field("mqttName", { type: "WhereString" })
		t.nullable.field("mqttLabel", { type: "WhereString" })
		t.nullable.field("label", { type: "WhereString" })
		t.nullable.field("range", { type: "WhereString" })
		t.nullable.field("access", { type: "WhereString" })
		t.nullable.field("remark", { type: "WhereString" })
		t.nullable.field("value", { type: "WhereString" })
		t.nullable.field("defaultValue", { type: "WhereString" })
		t.nullable.field("resolution", { type: "WhereString" })
		t.nullable.field("gradient", { type: "WhereString" })
		t.nullable.field("unit", { type: "WhereString" })
		t.nullable.field("representationId", { type: "WhereInt" })
		t.nullable.field("parameterGroup0", { type: "WhereString" })
		t.nullable.field("parameterGroup1", { type: "WhereString" })
		t.nullable.field("parameterGroup2", { type: "WhereString" })
		t.nullable.field("parameterGroup3", { type: "WhereString" })
		t.nullable.field("offset", { type: "WhereString" })
		t.nullable.field("parameterDescriptor", { type: "WhereString" })
		t.nullable.field("subParameterDescriptor", { type: "WhereString" })
		t.nullable.field("subDataTypeId", { type: "WhereInt" })
		t.nullable.field("subBitLength", { type: "WhereInt" })
		t.nullable.field("subRange", { type: "WhereString" })
		t.nullable.boolean("subindexAccessSupported")
		t.nullable.field("requestObject", { type: "WhereString" })
		t.nullable.field("byteOrder", { type: "WhereString" })
		t.nullable.field("samplingRate", { type: "WhereInt" })
		t.nullable.field("conditionId", { type: "WhereInt" })


	}
})

export const ProcessDataConditionWhere = inputObjectType({
	name: "ProcessDataConditionWhere",
	definition(t) {
		t.nullable.field("id", { type: "WhereInt" })
		t.nullable.field("index", { type: "WhereInt" })
		t.nullable.field("subindex", { type: "WhereInt" })
		t.nullable.field("value", { type: "WhereString" })


	}
})

export const ProcessDataModeWhere = inputObjectType({
	name: "ProcessDataModeWhere",
	definition(t) {
		t.nullable.field("id", { type: "WhereInt" })
		t.nullable.field("name", { type: "WhereString" })
		t.nullable.field("messageSize", { type: "WhereInt" })
		t.nullable.field("minimalSamplingTime", { type: "WhereInt" })
		t.nullable.field("samplingTimeUnit", { type: "WhereString" })
		t.nullable.field("devId", { type: "WhereInt" })


	}
})

export const RegistrationStatusWhere = inputObjectType({
	name: "RegistrationStatusWhere",
	definition(t) {
		t.nullable.field("id", { type: "WhereInt" })
		t.nullable.field("status", { type: "WhereString" })


	}
})

export const ReplayConfigWhere = inputObjectType({
	name: "ReplayConfigWhere",
	definition(t) {
		t.nullable.field("id", { type: "WhereInt" })
		t.nullable.json("triggers")
		t.nullable.json("valueMap")
		t.nullable.field("devId", { type: "WhereInt" })


	}
})

export const ReplayDataWhere = inputObjectType({
	name: "ReplayDataWhere",
	definition(t) {
		t.nullable.field("id", { type: "WhereInt" })
		t.nullable.field("replaySetId", { type: "WhereInt" })
		t.nullable.field("timestamp", { type: "WhereDateTime" })
		t.nullable.field("y1", { type: "WhereString" })
		t.nullable.field("y2", { type: "WhereString" })
		t.nullable.field("y3", { type: "WhereString" })
		t.nullable.field("y4", { type: "WhereString" })
		t.nullable.field("y5", { type: "WhereString" })
		t.nullable.field("y6", { type: "WhereString" })
		t.nullable.field("y7", { type: "WhereString" })
		t.nullable.field("y8", { type: "WhereString" })
		t.nullable.field("y9", { type: "WhereString" })
		t.nullable.field("y10", { type: "WhereString" })
		t.nullable.field("y11", { type: "WhereString" })
		t.nullable.field("y12", { type: "WhereString" })
		t.nullable.field("y13", { type: "WhereString" })
		t.nullable.field("y14", { type: "WhereString" })
		t.nullable.field("y15", { type: "WhereString" })
		t.nullable.field("y16", { type: "WhereString" })
		t.nullable.field("y17", { type: "WhereString" })
		t.nullable.field("y18", { type: "WhereString" })
		t.nullable.field("y19", { type: "WhereString" })
		t.nullable.field("y20", { type: "WhereString" })
		t.nullable.field("y21", { type: "WhereString" })
		t.nullable.field("y22", { type: "WhereString" })
		t.nullable.field("y23", { type: "WhereString" })
		t.nullable.field("y24", { type: "WhereString" })
		t.nullable.field("y25", { type: "WhereString" })
		t.nullable.field("y26", { type: "WhereString" })
		t.nullable.field("y27", { type: "WhereString" })
		t.nullable.field("y28", { type: "WhereString" })
		t.nullable.field("y29", { type: "WhereString" })
		t.nullable.field("y30", { type: "WhereString" })


	}
})

export const ReplaySetWhere = inputObjectType({
	name: "ReplaySetWhere",
	definition(t) {
		t.nullable.field("id", { type: "WhereInt" })
		t.nullable.field("timestamp", { type: "WhereDateTime" })
		t.nullable.field("eventClassId", { type: "WhereInt" })
		t.nullable.field("label", { type: "WhereString" })
		t.nullable.field("devId", { type: "WhereInt" })


	}
})

export const ReportingWhere = inputObjectType({
	name: "ReportingWhere",
	definition(t) {
		t.nullable.field("id", { type: "WhereInt" })
		t.nullable.field("devId", { type: "WhereInt" })
		t.nullable.field("timestamp", { type: "WhereDateTime" })
		t.nullable.field("source", { type: "WhereString" })
		t.nullable.field("x1", { type: "WhereString" })
		t.nullable.field("x2", { type: "WhereString" })
		t.nullable.field("x3", { type: "WhereString" })
		t.nullable.field("x4", { type: "WhereString" })
		t.nullable.field("y1", { type: "WhereString" })
		t.nullable.field("y2", { type: "WhereString" })
		t.nullable.field("y3", { type: "WhereString" })
		t.nullable.field("y4", { type: "WhereString" })
		t.nullable.field("y5", { type: "WhereString" })
		t.nullable.field("y6", { type: "WhereString" })
		t.nullable.field("y7", { type: "WhereString" })
		t.nullable.field("y8", { type: "WhereString" })
		t.nullable.field("y9", { type: "WhereString" })
		t.nullable.field("y10", { type: "WhereString" })
		t.nullable.field("y11", { type: "WhereString" })
		t.nullable.field("y12", { type: "WhereString" })
		t.nullable.field("y13", { type: "WhereString" })
		t.nullable.field("y14", { type: "WhereString" })
		t.nullable.field("y15", { type: "WhereString" })
		t.nullable.field("y16", { type: "WhereString" })
		t.nullable.field("y17", { type: "WhereString" })
		t.nullable.field("y18", { type: "WhereString" })
		t.nullable.field("y19", { type: "WhereString" })
		t.nullable.field("y20", { type: "WhereString" })
		t.nullable.field("y21", { type: "WhereString" })
		t.nullable.field("y22", { type: "WhereString" })
		t.nullable.field("y23", { type: "WhereString" })
		t.nullable.field("y24", { type: "WhereString" })
		t.nullable.field("y25", { type: "WhereString" })
		t.nullable.field("y26", { type: "WhereString" })
		t.nullable.field("y27", { type: "WhereString" })
		t.nullable.field("y28", { type: "WhereString" })
		t.nullable.field("y29", { type: "WhereString" })
		t.nullable.field("y30", { type: "WhereString" })


	}
})

export const ReportingConfigWhere = inputObjectType({
	name: "ReportingConfigWhere",
	definition(t) {
		t.nullable.field("id", { type: "WhereInt" })
		t.nullable.json("trigger")
		t.nullable.json("valueMap")
		t.nullable.json("summaryAccess")
		t.nullable.field("devId", { type: "WhereInt" })


	}
})

export const RepresentationWhere = inputObjectType({
	name: "RepresentationWhere",
	definition(t) {
		t.nullable.field("id", { type: "WhereInt" })
		t.nullable.field("name", { type: "WhereString" })
		t.nullable.field("description", { type: "WhereString" })


	}
})

export const RolePrivilegeWhere = inputObjectType({
	name: "RolePrivilegeWhere",
	definition(t) {
		t.nullable.field("id", { type: "WhereInt" })
		t.nullable.field("roleId", { type: "WhereInt" })
		t.nullable.field("privilegeId", { type: "WhereInt" })


	}
})

export const RoleWhere = inputObjectType({
	name: "RoleWhere",
	definition(t) {
		t.nullable.field("id", { type: "WhereInt" })
		t.nullable.field("name", { type: "WhereString" })
		t.nullable.boolean("system")
		t.nullable.field("description", { type: "WhereString" })


	}
})

export const SoftwareAdapterWhere = inputObjectType({
	name: "SoftwareAdapterWhere",
	definition(t) {
		t.nullable.field("id", { type: "WhereInt" })
		t.nullable.field("name", { type: "WhereString" })
		t.nullable.field("imageFile", { type: "WhereString" })
		t.nullable.bigInt("vendorId")
		t.nullable.field("productName", { type: "WhereString" })
		t.nullable.field("orderCode", { type: "WhereString" })
		t.nullable.field("description", { type: "WhereString" })
		t.nullable.field("revision", { type: "WhereString" })
		t.nullable.boolean("isIntern")
		t.nullable.field("dockerImage", { type: "WhereString" })


	}
})

export const TimeseriesWhere = inputObjectType({
	name: "TimeseriesWhere",
	definition(t) {
		t.nullable.field("id", { type: "WhereInt" })
		t.nullable.field("devId", { type: "WhereInt" })
		t.nullable.field("name", { type: "WhereString" })


	}
})

export const TimeseriesDataWhere = inputObjectType({
	name: "TimeseriesDataWhere",
	definition(t) {
		t.nullable.field("id", { type: "WhereInt" })
		t.nullable.field("timeseriesId", { type: "WhereInt" })
		t.nullable.field("devId", { type: "WhereInt" })
		t.nullable.field("timestampStart", { type: "WhereDateTime" })
		t.nullable.field("value", { type: "WhereString" })


	}
})

export const TimeseriesDataHourAggregateWhere = inputObjectType({
	name: "TimeseriesDataHourAggregateWhere",
	definition(t) {
		t.nullable.field("id", { type: "WhereInt" })
		t.nullable.field("timestamp", { type: "WhereDateTime" })
		t.nullable.field("devId", { type: "WhereInt" })
		t.nullable.field("timeseriesId", { type: "WhereInt" })
		t.nullable.field("value", { type: "WhereInt" })


	}
})

export const UpdaterConfigWhere = inputObjectType({
	name: "UpdaterConfigWhere",
	definition(t) {
		t.nullable.field("id", { type: "WhereInt" })
		t.nullable.field("interval", { type: "WhereInt" })
		t.nullable.field("indices", { type: "WhereString" })
		t.nullable.field("devId", { type: "WhereInt" })


	}
})

export const UserRoleWhere = inputObjectType({
	name: "UserRoleWhere",
	definition(t) {
		t.nullable.field("id", { type: "WhereInt" })
		t.nullable.field("userId", { type: "WhereInt" })
		t.nullable.field("roleId", { type: "WhereInt" })


	}
})

export const UserWhere = inputObjectType({
	name: "UserWhere",
	definition(t) {
		t.nullable.field("id", { type: "WhereInt" })
		t.nullable.field("user", { type: "WhereString" })
		t.nullable.field("password", { type: "WhereString" })
		t.nullable.field("firstname", { type: "WhereString" })
		t.nullable.field("lastname", { type: "WhereString" })
		t.nullable.field("email", { type: "WhereString" })
		t.nullable.boolean("system")


	}
})

export const VendorWhere = inputObjectType({
	name: "VendorWhere",
	definition(t) {
		t.nullable.bigInt("id")
		t.nullable.field("name", { type: "WhereString" })
		t.nullable.field("text", { type: "WhereString" })
		t.nullable.field("url", { type: "WhereString" })
		t.nullable.field("logo", { type: "WhereString" })


	}
})

export const XConfigWhere = inputObjectType({
	name: "XConfigWhere",
	definition(t) {
		t.nullable.field("id", { type: "WhereInt" })
		t.nullable.json("valueMap")
		t.nullable.boolean("automaticReadForEvents")
		t.nullable.boolean("automaticReadForReporting")
		t.nullable.field("devId", { type: "WhereInt" })


	}
})

export const ExtrapolationFunctionWhere = inputObjectType({
	name: "ExtrapolationFunctionWhere",
	definition(t) {
		t.nullable.field("id", { type: "WhereInt" })
		t.nullable.field("name", { type: "WhereString" })


	}
})

export const PredictionConfigWhere = inputObjectType({
	name: "PredictionConfigWhere",
	definition(t) {
		t.nullable.field("id", { type: "WhereInt" })
		t.nullable.field("identifier", { type: "WhereInt" })
		t.nullable.field("rangeAttribute", { type: "WhereString" })
		t.nullable.field("rangeStart", { type: "WhereDateTime" })
		t.nullable.field("rangeEnd", { type: "WhereDateTime" })
		t.nullable.json("indexPreviousMaintenanceDate")
		t.nullable.json("indexMaxTimeBetweenMaintenances")
		t.nullable.json("indexPerformMaintenance")
		t.nullable.json("maxValue")
		t.nullable.json("currentValue")
		t.nullable.field("type", { type: "WhereString" })
		t.nullable.field("deviceClassId", { type: "WhereInt" })
		t.nullable.field("extrapolationFunctionId", { type: "WhereInt" })
		t.nullable.field("maintenanceTypeId", { type: "WhereInt" })


	}
})

export const MaintenanceWhere = inputObjectType({
	name: "MaintenanceWhere",
	definition(t) {
		t.nullable.field("id", { type: "WhereInt" })
		t.nullable.field("action", { type: "WhereString" })
		t.nullable.field("dueDate", { type: "WhereDateTime" })
		t.nullable.field("maintenanceStartDate", { type: "WhereDateTime" })
		t.nullable.field("maintenanceEndDate", { type: "WhereDateTime" })
		t.nullable.field("createdAt", { type: "WhereDateTime" })
		t.nullable.field("updatedAt", { type: "WhereDateTime" })
		t.nullable.field("assigneeId", { type: "WhereInt" })
		t.nullable.field("deviceInstanceId", { type: "WhereInt" })
		t.nullable.field("fixedByUserId", { type: "WhereInt" })
		t.nullable.field("predictionConfigId", { type: "WhereInt" })
		t.nullable.field("maintenanceTypeId", { type: "WhereInt" })


	}
})

export const MaintenanceTypeWhere = inputObjectType({
	name: "MaintenanceTypeWhere",
	definition(t) {
		t.nullable.field("id", { type: "WhereInt" })
		t.nullable.field("name", { type: "WhereString" })
		t.nullable.field("type", { type: "WhereString" })
		t.nullable.field("description", { type: "WhereString" })
		t.nullable.field("part", { type: "WhereString" })
		t.nullable.field("cause", { type: "WhereString" })
		t.nullable.field("impact", { type: "WhereString" })
		t.nullable.field("solution", { type: "WhereString" })
		t.nullable.field("createdAt", { type: "WhereDateTime" })
		t.nullable.field("updatedAt", { type: "WhereDateTime" })
		t.nullable.field("deviceClassId", { type: "WhereInt" })


	}
})

export const MaintenanceAlarmConfigWhere = inputObjectType({
	name: "MaintenanceAlarmConfigWhere",
	definition(t) {
		t.nullable.field("id", { type: "WhereInt" })
		t.nullable.bigInt("offset")
		t.nullable.field("maintenanceTypeId", { type: "WhereInt" })
		t.nullable.field("deviceClassId", { type: "WhereInt" })
		t.nullable.field("eventClassId", { type: "WhereInt" })


	}
})

export const MaintenanceConfigWhere = inputObjectType({
	name: "MaintenanceConfigWhere",
	definition(t) {
		t.nullable.field("id", { type: "WhereInt" })
		t.nullable.json("indexPreviousMaintenanceDate")
		t.nullable.json("indexMaxTimeBetweenMaintenances")
		t.nullable.json("indexPerformMaintenance")
		t.nullable.field("format", { type: "WhereString" })
		t.nullable.field("createdAt", { type: "WhereDateTime" })
		t.nullable.field("updatedAt", { type: "WhereDateTime" })
		t.nullable.field("deviceClassId", { type: "WhereInt" })
		t.nullable.field("maintenanceTypeId", { type: "WhereInt" })


	}
})

export const ReportTypeWhere = inputObjectType({
	name: "ReportTypeWhere",
	definition(t) {
		t.nullable.field("id", { type: "WhereInt" })
		t.nullable.field("name", { type: "WhereString" })
		t.nullable.field("information", { type: "WhereString" })
		t.nullable.json("chapters")
		t.nullable.field("mailBody", { type: "WhereString" })
		t.nullable.field("contentType", { type: "WhereString" })
		t.nullable.field("fileNameSchema", { type: "WhereString" })
		t.nullable.field("defaultOptions", { type: "WhereString" })
		t.nullable.json("devices")


	}
})

export const TaskWhere = inputObjectType({
	name: "TaskWhere",
	definition(t) {
		t.nullable.field("id", { type: "WhereInt" })
		t.nullable.field("devId", { type: "WhereInt" })
		t.nullable.field("reportTypeId", { type: "WhereInt" })
		t.nullable.field("roleId", { type: "WhereInt" })
		t.nullable.field("firstSendDate", { type: "WhereDateTime" })
		t.nullable.field("frequency", { type: "WhereString" })
		t.nullable.field("reportOptions", { type: "WhereString" })


	}
})
import { objectType } from "nexus"

export const ActiveEventInstancePayload = objectType({
	name: "ActiveEventInstancePayload",
	definition(t) {
		t.int("id")
		t.nullable.int("devId")
		t.nullable.int("eventClassId")
		t.nullable.dateTime("timestampAppears")
		t.nullable.int("userId")
		t.nullable.decimal("x1")
		t.nullable.decimal("x2")
		t.nullable.decimal("x3")
		t.nullable.decimal("x4")

	}
})

export const DatabaseStatusPayload = objectType({
	name: "DatabaseStatusPayload",
	definition(t) {
		t.int("id")
		t.nullable.field("status", {
			type: "DatabaseStatusStatus"
		})
		t.dateTime("timestamp")

	}
})

export const DeviceIndexDataTypePayload = objectType({
	name: "DeviceIndexDataTypePayload",
	definition(t) {
		t.int("id")
		t.nullable.string("name")

	}
})

export const DeviceClassPayload = objectType({
	name: "DeviceClassPayload",
	definition(t) {
		t.int("id")
		t.nullable.int("deviceId")
		t.nullable.bigInt("vendorId")
		t.nullable.string("pictureFileName")
		t.nullable.string("productId")
		t.nullable.string("productName")
		t.nullable.string("deviceType")
		t.nullable.string("deviceSubType")
		t.nullable.string("description")
		t.nullable.string("iconFileName")
		t.nullable.int("pDbitLengthIn")
		t.nullable.int("pDbitLengthOut")
		t.boolean("allowFirmwareUpload")
		t.boolean("catalog")
		t.nullable.json("mappedIndices")
		t.nullable.string("firmwareVersion")

	}
})

export const DeviceControlPayload = objectType({
	name: "DeviceControlPayload",
	definition(t) {
		t.int("id")
		t.nullable.int("devId")
		t.nullable.int("DeviceIndexDataTypeId")
		t.nullable.int("bitLength")
		t.nullable.int("index")
		t.nullable.int("subindex")
		t.nullable.boolean("dynamic")
		t.nullable.boolean("modifiesOtherVariables")
		t.nullable.string("mqttName")
		t.nullable.int("subtopicId")
		t.nullable.string("parameterId")
		t.nullable.string("mqttLabel")
		t.nullable.string("label")
		t.nullable.string("range")
		t.nullable.string("access")
		t.nullable.string("remark")
		t.nullable.string("parameterDescriptor")
		t.nullable.string("parameterGroup")
		t.nullable.boolean("successStatus")
		t.nullable.dateTime("lastSuccessDate")
		t.nullable.string("value")
		t.nullable.string("defaultValue")
		t.nullable.string("resolution")

	}
})

export const DeviceCyclePayload = objectType({
	name: "DeviceCyclePayload",
	definition(t) {
		t.int("id")
		t.nullable.int("devId")
		t.nullable.int("globalCyclesStart")
		t.nullable.int("globalCyclesEnd")
		t.nullable.dateTime("timestampStart")
		t.nullable.dateTime("timestampEnd")
		t.dateTime("timestamp")

	}
})

export const DeviceFilePayload = objectType({
	name: "DeviceFilePayload",
	definition(t) {
		t.int("id")
		t.nullable.bigInt("vendorId")
		t.nullable.int("deviceId")
		t.nullable.string("filetype")
		t.nullable.string("filename")
		t.nullable.float("revision")
		t.nullable.int("deviceClassId")
		t.dateTime("updatedAt")

	}
})

export const DeviceInstancePayload = objectType({
	name: "DeviceInstancePayload",
	definition(t) {
		t.int("id")
		t.nullable.string("name")
		t.nullable.int("parentDevId")
		t.nullable.int("ancestorMainDevId")
		t.nullable.int("deviceClassId")
		t.nullable.string("subinterface")
		t.nullable.int("regStatusId")
		t.nullable.json("deviceDescription")
		t.nullable.boolean("connectionState")
		t.boolean("manuallyDeactivated")
		t.boolean("active")
		t.nullable.string("articleNumber")
		t.nullable.string("serialNumber")
		t.nullable.string("shortName")
		t.nullable.string("customPictureFileName")
		t.nullable.json("kpi")
		t.nullable.json("oeeConfig")
		t.nullable.json("appLink")
		t.nullable.json("eventMap")
		t.boolean("allowDelete")
		t.boolean("exportCloud")
		t.boolean("hidden")
		t.boolean("isRelayed")
		t.dateTime("createdOn")
		t.nullable.json("geolocation")
		t.nullable.string("uniqueId")
		t.nullable.int("userId")
		t.nullable.dateTime("eventStart")
		t.nullable.dateTime("eventEnd")
		t.nullable.string("locationTag")
		t.nullable.string("locationPos")
		t.nullable.string("locationAssetId")
		t.nullable.string("preservedChunks")

	}
})

export const EtcHostPayload = objectType({
	name: "EtcHostPayload",
	definition(t) {
		t.string("url")
		t.string("ipAddress")

	}
})

export const EventClassPayload = objectType({
	name: "EventClassPayload",
	definition(t) {
		t.int("id")
		t.nullable.int("deviceClassId")
		t.nullable.bigInt("code")
		t.nullable.int("eventTypesId")
		t.nullable.string("name")
		t.nullable.string("remark")
		t.nullable.string("description")
		t.nullable.string("cause")
		t.nullable.string("impact")
		t.nullable.string("solution")
		t.nullable.string("source")

	}
})

export const EventGroupCodePayload = objectType({
	name: "EventGroupCodePayload",
	definition(t) {
		t.int("id")
		t.nullable.int("eventGroupId")
		t.nullable.int("eventCode")
		t.nullable.int("eventClassId")
		t.nullable.string("label")

	}
})

export const EventGroupDataPayload = objectType({
	name: "EventGroupDataPayload",
	definition(t) {
		t.int("id")
		t.nullable.int("devId")
		t.nullable.int("eventGroupId")
		t.nullable.string("label")
		t.dateTime("timestampStart")
		t.nullable.int("code")

	}
})

export const EventGroupDataHourAggregatePayload = objectType({
	name: "EventGroupDataHourAggregatePayload",
	definition(t) {
		t.int("id")
		t.dateTime("timestamp")
		t.nullable.int("devId")
		t.nullable.int("eventGroupId")
		t.string("label")
		t.nullable.int("code")
		t.nullable.int("sum")
		t.nullable.int("min")
		t.nullable.int("max")
		t.nullable.decimal("average")

	}
})

export const EventGroupValuePayload = objectType({
	name: "EventGroupValuePayload",
	definition(t) {
		t.int("id")
		t.nullable.int("devId")
		t.string("eventGroupName")
		t.nullable.string("label")
		t.string("eventGroupValue")
		t.nullable.int("code")
		t.dateTime("timestamp")

	}
})

export const EventGroupPayload = objectType({
	name: "EventGroupPayload",
	definition(t) {
		t.int("id")
		t.nullable.int("devId")
		t.nullable.string("groupName")
		t.nullable.json("computed")

	}
})

export const EventInstancePayload = objectType({
	name: "EventInstancePayload",
	definition(t) {
		t.int("id")
		t.nullable.int("devId")
		t.nullable.int("eventClassId")
		t.nullable.dateTime("timestampAppears")
		t.nullable.dateTime("timestampDisappears")
		t.nullable.int("userId")
		t.nullable.decimal("x1")
		t.nullable.decimal("x2")
		t.nullable.decimal("x3")
		t.nullable.decimal("x4")

	}
})

export const EventTypePayload = objectType({
	name: "EventTypePayload",
	definition(t) {
		t.int("id")
		t.nullable.string("type")
		t.nullable.int("deviceCondition")

	}
})

export const FloorPlanPayload = objectType({
	name: "FloorPlanPayload",
	definition(t) {
		t.int("id")
		t.nullable.string("name")
		t.string("file")

	}
})

export const DeviceDataPayload = objectType({
	name: "DeviceDataPayload",
	definition(t) {
		t.int("id")
		t.nullable.string("subtable")
		t.nullable.int("devId")
		t.nullable.int("deviceIndexDataTypeId")
		t.nullable.int("bitLength")
		t.nullable.int("bitOffset")
		t.nullable.int("index")
		t.nullable.int("subindex")
		t.nullable.boolean("dynamic")
		t.nullable.boolean("modifiesOtherVariables")
		t.nullable.int("subtopicId")
		t.nullable.boolean("active")
		t.nullable.string("parameterId")
		t.nullable.string("mqttName")
		t.nullable.string("mqttLabel")
		t.nullable.string("label")
		t.nullable.string("range")
		t.nullable.string("access")
		t.nullable.string("remark")
		t.nullable.string("value")
		t.nullable.string("defaultValue")
		t.nullable.string("resolution")
		t.nullable.string("gradient")
		t.nullable.string("unit")
		t.nullable.int("representationId")
		t.nullable.string("parameterGroup0")
		t.nullable.string("parameterGroup1")
		t.nullable.string("parameterGroup2")
		t.nullable.string("parameterGroup3")
		t.nullable.string("offset")
		t.nullable.string("parameterDescriptor")
		t.nullable.string("subParameterDescriptor")
		t.nullable.int("subDataTypeId")
		t.nullable.int("subBitLength")
		t.nullable.string("subRange")
		t.nullable.boolean("subindexAccessSupported")
		t.nullable.string("requestObject")

	}
})

export const MainDeviceClassPayload = objectType({
	name: "MainDeviceClassPayload",
	definition(t) {
		t.int("id")
		t.nullable.int("deviceClassId")
		t.nullable.string("catalogName")
		t.nullable.string("subinterfaces")
		t.nullable.int("standardPort")
		t.nullable.int("softwareAdapterId")
		t.nullable.string("defaultExtraInfos")
		t.boolean("configurationFileRequired")
		t.boolean("unlocked")
		t.boolean("ipRequired")
		t.string("productCategory")
		t.nullable.json("configurationOptions")

	}
})

export const MainDeviceInstancePayload = objectType({
	name: "MainDeviceInstancePayload",
	definition(t) {
		t.int("id")
		t.nullable.int("devId")
		t.nullable.int("mainDeviceClassId")
		t.nullable.string("mac")
		t.nullable.string("ipAddress")
		t.nullable.int("port")
		t.boolean("isSelfRegistering")
		t.boolean("stopOnProblems")
		t.nullable.string("extraInfos")
		t.boolean("startDevices")
		t.nullable.int("floorPlanId")
		t.nullable.json("configuration")
		t.boolean("allowPDOutWrite")
		t.boolean("statePDOutWrite")

	}
})

export const PerformanceIndicatorConfigPayload = objectType({
	name: "PerformanceIndicatorConfigPayload",
	definition(t) {
		t.int("id")
		t.nullable.string("index")
		t.nullable.decimal("maxValue")
		t.nullable.int("devId")

	}
})

export const PrivilegePayload = objectType({
	name: "PrivilegePayload",
	definition(t) {
		t.int("id")
		t.nullable.string("privilege")
		t.nullable.string("description")

	}
})

export const ProcessDataPayload = objectType({
	name: "ProcessDataPayload",
	definition(t) {
		t.int("id")
		t.int("devId")
		t.nullable.int("deviceIndexDataTypeId")
		t.nullable.int("bitLength")
		t.nullable.int("bitOffset")
		t.nullable.int("index")
		t.nullable.int("subindex")
		t.nullable.boolean("dynamic")
		t.nullable.boolean("modifiesOtherVariables")
		t.nullable.int("subtopicId")
		t.nullable.boolean("active")
		t.nullable.string("parameterId")
		t.nullable.string("mqttName")
		t.nullable.string("mqttLabel")
		t.nullable.string("label")
		t.nullable.string("range")
		t.nullable.string("access")
		t.nullable.string("remark")
		t.nullable.string("value")
		t.nullable.string("defaultValue")
		t.nullable.string("resolution")
		t.nullable.string("gradient")
		t.nullable.string("unit")
		t.nullable.int("representationId")
		t.nullable.string("parameterGroup0")
		t.nullable.string("parameterGroup1")
		t.nullable.string("parameterGroup2")
		t.nullable.string("parameterGroup3")
		t.nullable.string("offset")
		t.nullable.string("parameterDescriptor")
		t.nullable.string("subParameterDescriptor")
		t.nullable.int("subDataTypeId")
		t.nullable.int("subBitLength")
		t.nullable.string("subRange")
		t.nullable.boolean("subindexAccessSupported")
		t.nullable.string("requestObject")
		t.nullable.string("byteOrder")
		t.nullable.int("samplingRate")
		t.nullable.int("conditionId")

	}
})

export const ProcessDataConditionPayload = objectType({
	name: "ProcessDataConditionPayload",
	definition(t) {
		t.int("id")
		t.nullable.int("index")
		t.nullable.int("subindex")
		t.nullable.string("value")

	}
})

export const ProcessDataModePayload = objectType({
	name: "ProcessDataModePayload",
	definition(t) {
		t.int("id")
		t.nullable.string("name")
		t.nullable.int("messageSize")
		t.nullable.int("minimalSamplingTime")
		t.nullable.string("samplingTimeUnit")
		t.nullable.int("devId")

	}
})

export const RegistrationStatusPayload = objectType({
	name: "RegistrationStatusPayload",
	definition(t) {
		t.int("id")
		t.nullable.string("status")

	}
})

export const ReplayConfigPayload = objectType({
	name: "ReplayConfigPayload",
	definition(t) {
		t.int("id")
		t.nullable.json("triggers")
		t.nullable.json("valueMap")
		t.nullable.int("devId")

	}
})

export const ReplayDataPayload = objectType({
	name: "ReplayDataPayload",
	definition(t) {
		t.int("id")
		t.nullable.int("replaySetId")
		t.dateTime("timestamp")
		t.nullable.decimal("y1")
		t.nullable.decimal("y2")
		t.nullable.decimal("y3")
		t.nullable.decimal("y4")
		t.nullable.decimal("y5")
		t.nullable.decimal("y6")
		t.nullable.decimal("y7")
		t.nullable.decimal("y8")
		t.nullable.decimal("y9")
		t.nullable.decimal("y10")
		t.nullable.decimal("y11")
		t.nullable.decimal("y12")
		t.nullable.decimal("y13")
		t.nullable.decimal("y14")
		t.nullable.decimal("y15")
		t.nullable.decimal("y16")
		t.nullable.decimal("y17")
		t.nullable.decimal("y18")
		t.nullable.decimal("y19")
		t.nullable.decimal("y20")
		t.nullable.decimal("y21")
		t.nullable.decimal("y22")
		t.nullable.decimal("y23")
		t.nullable.decimal("y24")
		t.nullable.decimal("y25")
		t.nullable.decimal("y26")
		t.nullable.decimal("y27")
		t.nullable.decimal("y28")
		t.nullable.decimal("y29")
		t.nullable.decimal("y30")

	}
})

export const ReplaySetPayload = objectType({
	name: "ReplaySetPayload",
	definition(t) {
		t.int("id")
		t.dateTime("timestamp")
		t.nullable.int("eventClassId")
		t.nullable.string("label")
		t.nullable.int("devId")

	}
})

export const ReportingPayload = objectType({
	name: "ReportingPayload",
	definition(t) {
		t.int("id")
		t.nullable.int("devId")
		t.dateTime("timestamp")
		t.nullable.string("source")
		t.nullable.decimal("x1")
		t.nullable.decimal("x2")
		t.nullable.decimal("x3")
		t.nullable.decimal("x4")
		t.nullable.decimal("y1")
		t.nullable.decimal("y2")
		t.nullable.decimal("y3")
		t.nullable.decimal("y4")
		t.nullable.decimal("y5")
		t.nullable.decimal("y6")
		t.nullable.decimal("y7")
		t.nullable.decimal("y8")
		t.nullable.decimal("y9")
		t.nullable.decimal("y10")
		t.nullable.decimal("y11")
		t.nullable.decimal("y12")
		t.nullable.decimal("y13")
		t.nullable.decimal("y14")
		t.nullable.decimal("y15")
		t.nullable.decimal("y16")
		t.nullable.decimal("y17")
		t.nullable.decimal("y18")
		t.nullable.decimal("y19")
		t.nullable.decimal("y20")
		t.nullable.decimal("y21")
		t.nullable.decimal("y22")
		t.nullable.decimal("y23")
		t.nullable.decimal("y24")
		t.nullable.decimal("y25")
		t.nullable.decimal("y26")
		t.nullable.decimal("y27")
		t.nullable.decimal("y28")
		t.nullable.decimal("y29")
		t.nullable.decimal("y30")

	}
})

export const ReportingConfigPayload = objectType({
	name: "ReportingConfigPayload",
	definition(t) {
		t.int("id")
		t.nullable.json("trigger")
		t.nullable.json("valueMap")
		t.nullable.json("summaryAccess")
		t.nullable.int("devId")

	}
})

export const RepresentationPayload = objectType({
	name: "RepresentationPayload",
	definition(t) {
		t.int("id")
		t.nullable.string("name")
		t.nullable.string("description")

	}
})

export const RolePrivilegePayload = objectType({
	name: "RolePrivilegePayload",
	definition(t) {
		t.int("id")
		t.nullable.int("roleId")
		t.nullable.int("privilegeId")

	}
})

export const RolePayload = objectType({
	name: "RolePayload",
	definition(t) {
		t.int("id")
		t.nullable.string("name")
		t.nullable.boolean("system")
		t.nullable.string("description")

	}
})

export const SoftwareAdapterPayload = objectType({
	name: "SoftwareAdapterPayload",
	definition(t) {
		t.int("id")
		t.string("name")
		t.string("imageFile")
		t.bigInt("vendorId")
		t.string("productName")
		t.string("orderCode")
		t.string("description")
		t.nullable.string("revision")
		t.boolean("isIntern")
		t.nullable.string("dockerImage")

	}
})

export const TimeseriesPayload = objectType({
	name: "TimeseriesPayload",
	definition(t) {
		t.int("id")
		t.nullable.int("devId")
		t.nullable.string("name")

	}
})

export const TimeseriesDataPayload = objectType({
	name: "TimeseriesDataPayload",
	definition(t) {
		t.int("id")
		t.nullable.int("timeseriesId")
		t.nullable.int("devId")
		t.dateTime("timestampStart")
		t.nullable.decimal("value")

	}
})

export const TimeseriesDataHourAggregatePayload = objectType({
	name: "TimeseriesDataHourAggregatePayload",
	definition(t) {
		t.int("id")
		t.dateTime("timestamp")
		t.nullable.int("devId")
		t.nullable.int("timeseriesId")
		t.nullable.int("value")

	}
})

export const UpdaterConfigPayload = objectType({
	name: "UpdaterConfigPayload",
	definition(t) {
		t.int("id")
		t.nullable.int("interval")
		t.nullable.string("indices")
		t.nullable.int("devId")

	}
})

export const UserRolePayload = objectType({
	name: "UserRolePayload",
	definition(t) {
		t.int("id")
		t.nullable.int("userId")
		t.nullable.int("roleId")

	}
})

export const UserPayload = objectType({
	name: "UserPayload",
	definition(t) {
		t.int("id")
		t.nullable.string("user")
		t.nullable.string("password")
		t.nullable.string("firstname")
		t.nullable.string("lastname")
		t.nullable.string("email")
		t.nullable.boolean("system")

	}
})

export const VendorPayload = objectType({
	name: "VendorPayload",
	definition(t) {
		t.bigInt("id")
		t.nullable.string("name")
		t.nullable.string("text")
		t.nullable.string("url")
		t.nullable.string("logo")

	}
})

export const XConfigPayload = objectType({
	name: "XConfigPayload",
	definition(t) {
		t.int("id")
		t.nullable.json("valueMap")
		t.nullable.boolean("automaticReadForEvents")
		t.nullable.boolean("automaticReadForReporting")
		t.nullable.int("devId")

	}
})

export const ExtrapolationFunctionPayload = objectType({
	name: "ExtrapolationFunctionPayload",
	definition(t) {
		t.int("id")
		t.nullable.string("name")

	}
})

export const PredictionConfigPayload = objectType({
	name: "PredictionConfigPayload",
	definition(t) {
		t.int("id")
		t.int("identifier")
		t.nullable.string("rangeAttribute")
		t.nullable.dateTime("rangeStart")
		t.nullable.dateTime("rangeEnd")
		t.json("indexPreviousMaintenanceDate")
		t.nullable.json("indexMaxTimeBetweenMaintenances")
		t.json("indexPerformMaintenance")
		t.nullable.json("maxValue")
		t.nullable.json("currentValue")
		t.nullable.string("type")
		t.int("deviceClassId")
		t.int("extrapolationFunctionId")
		t.int("maintenanceTypeId")

	}
})

export const MaintenancePayload = objectType({
	name: "MaintenancePayload",
	definition(t) {
		t.int("id")
		t.nullable.string("action")
		t.dateTime("dueDate")
		t.nullable.dateTime("maintenanceStartDate")
		t.nullable.dateTime("maintenanceEndDate")
		t.dateTime("createdAt")
		t.nullable.dateTime("updatedAt")
		t.nullable.int("assigneeId")
		t.nullable.int("deviceInstanceId")
		t.nullable.int("fixedByUserId")
		t.nullable.int("predictionConfigId")
		t.nullable.int("maintenanceTypeId")

	}
})

export const MaintenanceTypePayload = objectType({
	name: "MaintenanceTypePayload",
	definition(t) {
		t.int("id")
		t.string("name")
		t.nullable.string("type")
		t.nullable.string("description")
		t.nullable.string("part")
		t.nullable.string("cause")
		t.nullable.string("impact")
		t.nullable.string("solution")
		t.dateTime("createdAt")
		t.nullable.dateTime("updatedAt")
		t.nullable.int("deviceClassId")

	}
})

export const MaintenanceAlarmConfigPayload = objectType({
	name: "MaintenanceAlarmConfigPayload",
	definition(t) {
		t.int("id")
		t.bigInt("offset")
		t.int("maintenanceTypeId")
		t.int("deviceClassId")
		t.int("eventClassId")

	}
})

export const MaintenanceConfigPayload = objectType({
	name: "MaintenanceConfigPayload",
	definition(t) {
		t.int("id")
		t.json("indexPreviousMaintenanceDate")
		t.json("indexMaxTimeBetweenMaintenances")
		t.json("indexPerformMaintenance")
		t.nullable.string("format")
		t.dateTime("createdAt")
		t.nullable.dateTime("updatedAt")
		t.nullable.int("deviceClassId")
		t.int("maintenanceTypeId")

	}
})

export const ReportTypePayload = objectType({
	name: "ReportTypePayload",
	definition(t) {
		t.int("id")
		t.nullable.string("name")
		t.nullable.string("information")
		t.nullable.json("chapters")
		t.nullable.string("mailBody")
		t.nullable.string("contentType")
		t.nullable.string("fileNameSchema")
		t.nullable.string("defaultOptions")
		t.nullable.json("devices")

	}
})

export const TaskPayload = objectType({
	name: "TaskPayload",
	definition(t) {
		t.int("id")
		t.nullable.int("devId")
		t.nullable.int("reportTypeId")
		t.nullable.int("roleId")
		t.dateTime("firstSendDate")
		t.nullable.string("frequency")
		t.nullable.string("reportOptions")

	}
})
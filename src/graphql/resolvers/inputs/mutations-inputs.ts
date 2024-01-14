import { inputObjectType } from "nexus"

export const ActiveEventInstanceInput = inputObjectType({
	name: "ActiveEventInstanceInput",
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

export const DatabaseStatusInput = inputObjectType({
	name: "DatabaseStatusInput",
	definition(t) {
		t.int("id")
		t.nullable.field("status", {
			type: "DatabaseStatusStatus"
		})
		t.dateTime("timestamp")

	}
})

export const DeviceIndexDataTypeInput = inputObjectType({
	name: "DeviceIndexDataTypeInput",
	definition(t) {
		t.int("id")
		t.nullable.string("name")

	}
})

export const DeviceClassInput = inputObjectType({
	name: "DeviceClassInput",
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

export const DeviceControlInput = inputObjectType({
	name: "DeviceControlInput",
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

export const DeviceCycleInput = inputObjectType({
	name: "DeviceCycleInput",
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

export const DeviceFileInput = inputObjectType({
	name: "DeviceFileInput",
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

export const DeviceInstanceInput = inputObjectType({
	name: "DeviceInstanceInput",
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

export const EtcHostInput = inputObjectType({
	name: "EtcHostInput",
	definition(t) {
		t.string("url")
		t.string("ipAddress")

	}
})

export const EventClassInput = inputObjectType({
	name: "EventClassInput",
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

export const EventGroupCodeInput = inputObjectType({
	name: "EventGroupCodeInput",
	definition(t) {
		t.int("id")
		t.nullable.int("eventGroupId")
		t.nullable.int("eventCode")
		t.nullable.int("eventClassId")
		t.nullable.string("label")

	}
})

export const EventGroupDataInput = inputObjectType({
	name: "EventGroupDataInput",
	definition(t) {
		t.int("id")
		t.nullable.int("devId")
		t.nullable.int("eventGroupId")
		t.nullable.string("label")
		t.dateTime("timestampStart")
		t.nullable.int("code")

	}
})

export const EventGroupDataHourAggregateInput = inputObjectType({
	name: "EventGroupDataHourAggregateInput",
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

export const EventGroupValueInput = inputObjectType({
	name: "EventGroupValueInput",
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

export const EventGroupInput = inputObjectType({
	name: "EventGroupInput",
	definition(t) {
		t.int("id")
		t.nullable.int("devId")
		t.nullable.string("groupName")
		t.nullable.json("computed")

	}
})

export const EventInstanceInput = inputObjectType({
	name: "EventInstanceInput",
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

export const EventTypeInput = inputObjectType({
	name: "EventTypeInput",
	definition(t) {
		t.int("id")
		t.nullable.string("type")
		t.nullable.int("deviceCondition")

	}
})

export const FloorPlanInput = inputObjectType({
	name: "FloorPlanInput",
	definition(t) {
		t.int("id")
		t.nullable.string("name")
		t.string("file")

	}
})

export const DeviceDataInput = inputObjectType({
	name: "DeviceDataInput",
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

export const MainDeviceClassInput = inputObjectType({
	name: "MainDeviceClassInput",
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

export const MainDeviceInstanceInput = inputObjectType({
	name: "MainDeviceInstanceInput",
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

export const PerformanceIndicatorConfigInput = inputObjectType({
	name: "PerformanceIndicatorConfigInput",
	definition(t) {
		t.int("id")
		t.nullable.string("index")
		t.nullable.decimal("maxValue")
		t.nullable.int("devId")

	}
})

export const PrivilegeInput = inputObjectType({
	name: "PrivilegeInput",
	definition(t) {
		t.int("id")
		t.nullable.string("privilege")
		t.nullable.string("description")

	}
})

export const ProcessDataInput = inputObjectType({
	name: "ProcessDataInput",
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

export const ProcessDataConditionInput = inputObjectType({
	name: "ProcessDataConditionInput",
	definition(t) {
		t.int("id")
		t.nullable.int("index")
		t.nullable.int("subindex")
		t.nullable.string("value")

	}
})

export const ProcessDataModeInput = inputObjectType({
	name: "ProcessDataModeInput",
	definition(t) {
		t.int("id")
		t.nullable.string("name")
		t.nullable.int("messageSize")
		t.nullable.int("minimalSamplingTime")
		t.nullable.string("samplingTimeUnit")
		t.nullable.int("devId")

	}
})

export const RegistrationStatusInput = inputObjectType({
	name: "RegistrationStatusInput",
	definition(t) {
		t.int("id")
		t.nullable.string("status")

	}
})

export const ReplayConfigInput = inputObjectType({
	name: "ReplayConfigInput",
	definition(t) {
		t.int("id")
		t.nullable.json("triggers")
		t.nullable.json("valueMap")
		t.nullable.int("devId")

	}
})

export const ReplayDataInput = inputObjectType({
	name: "ReplayDataInput",
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

export const ReplaySetInput = inputObjectType({
	name: "ReplaySetInput",
	definition(t) {
		t.int("id")
		t.dateTime("timestamp")
		t.nullable.int("eventClassId")
		t.nullable.string("label")
		t.nullable.int("devId")

	}
})

export const ReportingInput = inputObjectType({
	name: "ReportingInput",
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

export const ReportingConfigInput = inputObjectType({
	name: "ReportingConfigInput",
	definition(t) {
		t.int("id")
		t.nullable.json("trigger")
		t.nullable.json("valueMap")
		t.nullable.json("summaryAccess")
		t.nullable.int("devId")

	}
})

export const RepresentationInput = inputObjectType({
	name: "RepresentationInput",
	definition(t) {
		t.int("id")
		t.nullable.string("name")
		t.nullable.string("description")

	}
})

export const RolePrivilegeInput = inputObjectType({
	name: "RolePrivilegeInput",
	definition(t) {
		t.int("id")
		t.nullable.int("roleId")
		t.nullable.int("privilegeId")

	}
})

export const RoleInput = inputObjectType({
	name: "RoleInput",
	definition(t) {
		t.int("id")
		t.nullable.string("name")
		t.nullable.boolean("system")
		t.nullable.string("description")

	}
})

export const SoftwareAdapterInput = inputObjectType({
	name: "SoftwareAdapterInput",
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

export const TimeseriesInput = inputObjectType({
	name: "TimeseriesInput",
	definition(t) {
		t.int("id")
		t.nullable.int("devId")
		t.nullable.string("name")

	}
})

export const TimeseriesDataInput = inputObjectType({
	name: "TimeseriesDataInput",
	definition(t) {
		t.int("id")
		t.nullable.int("timeseriesId")
		t.nullable.int("devId")
		t.dateTime("timestampStart")
		t.nullable.decimal("value")

	}
})

export const TimeseriesDataHourAggregateInput = inputObjectType({
	name: "TimeseriesDataHourAggregateInput",
	definition(t) {
		t.int("id")
		t.dateTime("timestamp")
		t.nullable.int("devId")
		t.nullable.int("timeseriesId")
		t.nullable.int("value")

	}
})

export const UpdaterConfigInput = inputObjectType({
	name: "UpdaterConfigInput",
	definition(t) {
		t.int("id")
		t.nullable.int("interval")
		t.nullable.string("indices")
		t.nullable.int("devId")

	}
})

export const UserRoleInput = inputObjectType({
	name: "UserRoleInput",
	definition(t) {
		t.int("id")
		t.nullable.int("userId")
		t.nullable.int("roleId")

	}
})

export const UserInput = inputObjectType({
	name: "UserInput",
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

export const VendorInput = inputObjectType({
	name: "VendorInput",
	definition(t) {
		t.bigInt("id")
		t.nullable.string("name")
		t.nullable.string("text")
		t.nullable.string("url")
		t.nullable.string("logo")

	}
})

export const XConfigInput = inputObjectType({
	name: "XConfigInput",
	definition(t) {
		t.int("id")
		t.nullable.json("valueMap")
		t.nullable.boolean("automaticReadForEvents")
		t.nullable.boolean("automaticReadForReporting")
		t.nullable.int("devId")

	}
})

export const ExtrapolationFunctionInput = inputObjectType({
	name: "ExtrapolationFunctionInput",
	definition(t) {
		t.int("id")
		t.nullable.string("name")

	}
})

export const PredictionConfigInput = inputObjectType({
	name: "PredictionConfigInput",
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

export const MaintenanceInput = inputObjectType({
	name: "MaintenanceInput",
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

export const MaintenanceTypeInput = inputObjectType({
	name: "MaintenanceTypeInput",
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

export const MaintenanceAlarmConfigInput = inputObjectType({
	name: "MaintenanceAlarmConfigInput",
	definition(t) {
		t.int("id")
		t.bigInt("offset")
		t.int("maintenanceTypeId")
		t.int("deviceClassId")
		t.int("eventClassId")

	}
})

export const MaintenanceConfigInput = inputObjectType({
	name: "MaintenanceConfigInput",
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

export const ReportTypeInput = inputObjectType({
	name: "ReportTypeInput",
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

export const TaskInput = inputObjectType({
	name: "TaskInput",
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
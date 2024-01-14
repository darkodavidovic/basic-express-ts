import { enumType } from "nexus"

export const ActiveEventInstanceGroupByEnum = enumType({
	name: "ActiveEventInstanceGroupByEnum",
	members: ["id"],
	description: "Should be array with at least one of the values mentioned bellow."
})

export const DatabaseStatusGroupByEnum = enumType({
	name: "DatabaseStatusGroupByEnum",
	members: ["id", "timestamp"],
	description: "Should be array with at least one of the values mentioned bellow."
})

export const DeviceIndexDataTypeGroupByEnum = enumType({
	name: "DeviceIndexDataTypeGroupByEnum",
	members: ["id"],
	description: "Should be array with at least one of the values mentioned bellow."
})

export const DeviceClassGroupByEnum = enumType({
	name: "DeviceClassGroupByEnum",
	members: ["id", "allowFirmwareUpload", "catalog"],
	description: "Should be array with at least one of the values mentioned bellow."
})

export const DeviceControlGroupByEnum = enumType({
	name: "DeviceControlGroupByEnum",
	members: ["id"],
	description: "Should be array with at least one of the values mentioned bellow."
})

export const DeviceCycleGroupByEnum = enumType({
	name: "DeviceCycleGroupByEnum",
	members: ["id", "timestamp"],
	description: "Should be array with at least one of the values mentioned bellow."
})

export const DeviceFileGroupByEnum = enumType({
	name: "DeviceFileGroupByEnum",
	members: ["id", "updatedAt"],
	description: "Should be array with at least one of the values mentioned bellow."
})

export const DeviceInstanceGroupByEnum = enumType({
	name: "DeviceInstanceGroupByEnum",
	members: ["id", "manuallyDeactivated", "active", "allowDelete", "exportCloud", "hidden", "isRelayed", "createdOn"],
	description: "Should be array with at least one of the values mentioned bellow."
})

export const EtcHostGroupByEnum = enumType({
	name: "EtcHostGroupByEnum",
	members: ["url", "ipAddress"],
	description: "Should be array with at least one of the values mentioned bellow."
})

export const EventClassGroupByEnum = enumType({
	name: "EventClassGroupByEnum",
	members: ["id"],
	description: "Should be array with at least one of the values mentioned bellow."
})

export const EventGroupCodeGroupByEnum = enumType({
	name: "EventGroupCodeGroupByEnum",
	members: ["id"],
	description: "Should be array with at least one of the values mentioned bellow."
})

export const EventGroupDataGroupByEnum = enumType({
	name: "EventGroupDataGroupByEnum",
	members: ["id", "timestampStart"],
	description: "Should be array with at least one of the values mentioned bellow."
})

export const EventGroupDataHourAggregateGroupByEnum = enumType({
	name: "EventGroupDataHourAggregateGroupByEnum",
	members: ["id", "timestamp", "label"],
	description: "Should be array with at least one of the values mentioned bellow."
})

export const EventGroupValueGroupByEnum = enumType({
	name: "EventGroupValueGroupByEnum",
	members: ["id", "eventGroupName", "eventGroupValue", "timestamp"],
	description: "Should be array with at least one of the values mentioned bellow."
})

export const EventGroupGroupByEnum = enumType({
	name: "EventGroupGroupByEnum",
	members: ["id"],
	description: "Should be array with at least one of the values mentioned bellow."
})

export const EventInstanceGroupByEnum = enumType({
	name: "EventInstanceGroupByEnum",
	members: ["id"],
	description: "Should be array with at least one of the values mentioned bellow."
})

export const EventTypeGroupByEnum = enumType({
	name: "EventTypeGroupByEnum",
	members: ["id"],
	description: "Should be array with at least one of the values mentioned bellow."
})

export const FloorPlanGroupByEnum = enumType({
	name: "FloorPlanGroupByEnum",
	members: ["id", "file"],
	description: "Should be array with at least one of the values mentioned bellow."
})

export const DeviceDataGroupByEnum = enumType({
	name: "DeviceDataGroupByEnum",
	members: ["id"],
	description: "Should be array with at least one of the values mentioned bellow."
})

export const MainDeviceClassGroupByEnum = enumType({
	name: "MainDeviceClassGroupByEnum",
	members: ["id", "configurationFileRequired", "unlocked", "ipRequired", "productCategory"],
	description: "Should be array with at least one of the values mentioned bellow."
})

export const MainDeviceInstanceGroupByEnum = enumType({
	name: "MainDeviceInstanceGroupByEnum",
	members: ["id", "isSelfRegistering", "stopOnProblems", "startDevices", "allowPDOutWrite", "statePDOutWrite"],
	description: "Should be array with at least one of the values mentioned bellow."
})

export const PerformanceIndicatorConfigGroupByEnum = enumType({
	name: "PerformanceIndicatorConfigGroupByEnum",
	members: ["id"],
	description: "Should be array with at least one of the values mentioned bellow."
})

export const PrivilegeGroupByEnum = enumType({
	name: "PrivilegeGroupByEnum",
	members: ["id"],
	description: "Should be array with at least one of the values mentioned bellow."
})

export const ProcessDataGroupByEnum = enumType({
	name: "ProcessDataGroupByEnum",
	members: ["id", "devId"],
	description: "Should be array with at least one of the values mentioned bellow."
})

export const ProcessDataConditionGroupByEnum = enumType({
	name: "ProcessDataConditionGroupByEnum",
	members: ["id"],
	description: "Should be array with at least one of the values mentioned bellow."
})

export const ProcessDataModeGroupByEnum = enumType({
	name: "ProcessDataModeGroupByEnum",
	members: ["id"],
	description: "Should be array with at least one of the values mentioned bellow."
})

export const RegistrationStatusGroupByEnum = enumType({
	name: "RegistrationStatusGroupByEnum",
	members: ["id"],
	description: "Should be array with at least one of the values mentioned bellow."
})

export const ReplayConfigGroupByEnum = enumType({
	name: "ReplayConfigGroupByEnum",
	members: ["id"],
	description: "Should be array with at least one of the values mentioned bellow."
})

export const ReplayDataGroupByEnum = enumType({
	name: "ReplayDataGroupByEnum",
	members: ["id", "timestamp"],
	description: "Should be array with at least one of the values mentioned bellow."
})

export const ReplaySetGroupByEnum = enumType({
	name: "ReplaySetGroupByEnum",
	members: ["id", "timestamp"],
	description: "Should be array with at least one of the values mentioned bellow."
})

export const ReportingGroupByEnum = enumType({
	name: "ReportingGroupByEnum",
	members: ["id", "timestamp"],
	description: "Should be array with at least one of the values mentioned bellow."
})

export const ReportingConfigGroupByEnum = enumType({
	name: "ReportingConfigGroupByEnum",
	members: ["id"],
	description: "Should be array with at least one of the values mentioned bellow."
})

export const RepresentationGroupByEnum = enumType({
	name: "RepresentationGroupByEnum",
	members: ["id"],
	description: "Should be array with at least one of the values mentioned bellow."
})

export const RolePrivilegeGroupByEnum = enumType({
	name: "RolePrivilegeGroupByEnum",
	members: ["id"],
	description: "Should be array with at least one of the values mentioned bellow."
})

export const RoleGroupByEnum = enumType({
	name: "RoleGroupByEnum",
	members: ["id"],
	description: "Should be array with at least one of the values mentioned bellow."
})

export const SoftwareAdapterGroupByEnum = enumType({
	name: "SoftwareAdapterGroupByEnum",
	members: ["id", "name", "imageFile", "vendorId", "productName", "orderCode", "description", "isIntern"],
	description: "Should be array with at least one of the values mentioned bellow."
})

export const TimeseriesGroupByEnum = enumType({
	name: "TimeseriesGroupByEnum",
	members: ["id"],
	description: "Should be array with at least one of the values mentioned bellow."
})

export const TimeseriesDataGroupByEnum = enumType({
	name: "TimeseriesDataGroupByEnum",
	members: ["id", "timestampStart"],
	description: "Should be array with at least one of the values mentioned bellow."
})

export const TimeseriesDataHourAggregateGroupByEnum = enumType({
	name: "TimeseriesDataHourAggregateGroupByEnum",
	members: ["id", "timestamp"],
	description: "Should be array with at least one of the values mentioned bellow."
})

export const UpdaterConfigGroupByEnum = enumType({
	name: "UpdaterConfigGroupByEnum",
	members: ["id"],
	description: "Should be array with at least one of the values mentioned bellow."
})

export const UserRoleGroupByEnum = enumType({
	name: "UserRoleGroupByEnum",
	members: ["id"],
	description: "Should be array with at least one of the values mentioned bellow."
})

export const UserGroupByEnum = enumType({
	name: "UserGroupByEnum",
	members: ["id"],
	description: "Should be array with at least one of the values mentioned bellow."
})

export const VendorGroupByEnum = enumType({
	name: "VendorGroupByEnum",
	members: ["id"],
	description: "Should be array with at least one of the values mentioned bellow."
})

export const XConfigGroupByEnum = enumType({
	name: "XConfigGroupByEnum",
	members: ["id"],
	description: "Should be array with at least one of the values mentioned bellow."
})

export const ExtrapolationFunctionGroupByEnum = enumType({
	name: "ExtrapolationFunctionGroupByEnum",
	members: ["id"],
	description: "Should be array with at least one of the values mentioned bellow."
})

export const PredictionConfigGroupByEnum = enumType({
	name: "PredictionConfigGroupByEnum",
	members: ["id", "identifier", "indexPreviousMaintenanceDate", "indexPerformMaintenance", "deviceClassId", "extrapolationFunctionId", "maintenanceTypeId"],
	description: "Should be array with at least one of the values mentioned bellow."
})

export const MaintenanceGroupByEnum = enumType({
	name: "MaintenanceGroupByEnum",
	members: ["id", "dueDate", "createdAt"],
	description: "Should be array with at least one of the values mentioned bellow."
})

export const MaintenanceTypeGroupByEnum = enumType({
	name: "MaintenanceTypeGroupByEnum",
	members: ["id", "name", "createdAt"],
	description: "Should be array with at least one of the values mentioned bellow."
})

export const MaintenanceAlarmConfigGroupByEnum = enumType({
	name: "MaintenanceAlarmConfigGroupByEnum",
	members: ["id", "offset", "maintenanceTypeId", "deviceClassId", "eventClassId"],
	description: "Should be array with at least one of the values mentioned bellow."
})

export const MaintenanceConfigGroupByEnum = enumType({
	name: "MaintenanceConfigGroupByEnum",
	members: ["id", "indexPreviousMaintenanceDate", "indexMaxTimeBetweenMaintenances", "indexPerformMaintenance", "createdAt", "maintenanceTypeId"],
	description: "Should be array with at least one of the values mentioned bellow."
})

export const ReportTypeGroupByEnum = enumType({
	name: "ReportTypeGroupByEnum",
	members: ["id"],
	description: "Should be array with at least one of the values mentioned bellow."
})

export const TaskGroupByEnum = enumType({
	name: "TaskGroupByEnum",
	members: ["id", "firstSendDate"],
	description: "Should be array with at least one of the values mentioned bellow."
})
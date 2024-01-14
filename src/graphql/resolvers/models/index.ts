/* eslint-disable max-lines-per-function */
import { objectType, list, nullable, enumType } from "nexus"
import { prepareConditions } from "../../utils/prepare-conditions"

export const DatabaseStatusStatus = enumType({
	name: "DatabaseStatusStatus",
	members: ["initializing", "operational", "inconsistent", "error"],
	description: 'Contains Enum Type, any of: "initializing" | "operational" | "inconsistent" | "error"'
})


export const ActiveEventInstanceModel = objectType({
	name: "ActiveEventInstanceModel",
	definition(t) {
		t.field("data", {
			type: list("ActiveEventInstance"),
		})
		t.field("count", {
			type: "Int"
		})
	}
})

export const ActiveEventInstanceConstant = objectType({
	name: "ActiveEventInstance",
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
		t.nullable.field("deviceInstance", {
			type: "DeviceInstance",
			args: {
				deviceInstanceWhere: nullable("DeviceInstanceWhere"),
				deviceInstanceSkip: nullable("Int"),
				deviceInstanceTake: nullable("Int"),
				deviceInstanceOrderBy: nullable("DeviceInstanceOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where } = prepareConditions < typeof args > (args, "DeviceInstance")
				// Regular relation
				const bindRelation = { id: Number(root.devId) }
				if (Object.keys(where).length) return await ctx.prisma.deviceInstance.findFirst({ where: { ...where, ...bindRelation } })
				return await ctx.prisma.deviceInstance.findFirst({ where: bindRelation })
			}
		})
		t.nullable.field("eventClass", {
			type: "EventClass",
			args: {
				eventClassWhere: nullable("EventClassWhere"),
				eventClassSkip: nullable("Int"),
				eventClassTake: nullable("Int"),
				eventClassOrderBy: nullable("EventClassOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where } = prepareConditions < typeof args > (args, "EventClass")
				// Regular relation
				const bindRelation = { id: Number(root.eventClassId) }
				if (Object.keys(where).length) return await ctx.prisma.eventClass.findFirst({ where: { ...where, ...bindRelation } })
				return await ctx.prisma.eventClass.findFirst({ where: bindRelation })
			}
		})
		t.nullable.field("user", {
			type: "User",
			args: {
				userWhere: nullable("UserWhere"),
				userSkip: nullable("Int"),
				userTake: nullable("Int"),
				userOrderBy: nullable("UserOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where } = prepareConditions < typeof args > (args, "User")
				// Regular relation
				const bindRelation = { id: Number(root.userId) }
				if (Object.keys(where).length) return await ctx.prisma.user.findFirst({ where: { ...where, ...bindRelation } })
				return await ctx.prisma.user.findFirst({ where: bindRelation })
			}
		})

	}
})

export const DatabaseStatusModel = objectType({
	name: "DatabaseStatusModel",
	definition(t) {
		t.field("data", {
			type: list("DatabaseStatus"),
		})
		t.field("count", {
			type: "Int"
		})
	}
})

export const DatabaseStatusConstant = objectType({
	name: "DatabaseStatus",
	definition(t) {
		t.int("id")
		t.nullable.field("status", {
			type: "DatabaseStatusStatus",
			description: 'Contains Enum Type, any of: "initializing" | "operational" | "inconsistent" | "error"'
		})
		t.dateTime("timestamp")

	}
})

export const DeviceIndexDataTypeModel = objectType({
	name: "DeviceIndexDataTypeModel",
	definition(t) {
		t.field("data", {
			type: list("DeviceIndexDataType"),
		})
		t.field("count", {
			type: "Int"
		})
	}
})

export const DeviceIndexDataTypeConstant = objectType({
	name: "DeviceIndexDataType",
	definition(t) {
		t.int("id")
		t.nullable.string("name")

	}
})

export const DeviceClassModel = objectType({
	name: "DeviceClassModel",
	definition(t) {
		t.field("data", {
			type: list("DeviceClass"),
		})
		t.field("count", {
			type: "Int"
		})
	}
})

export const DeviceClassConstant = objectType({
	name: "DeviceClass",
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
		t.nullable.field("vendor", {
			type: "Vendor",
			args: {
				vendorWhere: nullable("VendorWhere"),
				vendorSkip: nullable("Int"),
				vendorTake: nullable("Int"),
				vendorOrderBy: nullable("VendorOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where } = prepareConditions < typeof args > (args, "Vendor")
				// Regular relation
				const bindRelation = { id: Number(root.vendorId) }
				if (Object.keys(where).length) return await ctx.prisma.vendor.findFirst({ where: { ...where, ...bindRelation } })
				return await ctx.prisma.vendor.findFirst({ where: bindRelation })
			}
		})
		t.field("deviceFiles", {
			type: "DeviceFileModel",
			args: {
				deviceFileWhere: nullable("DeviceFileWhere"),
				deviceFileSkip: nullable("Int"),
				deviceFileTake: nullable("Int"),
				deviceFileOrderBy: nullable("DeviceFileOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "DeviceFile")
				// Syntetic relation
				const bindRelation = { deviceClassId: Number(root.id) }
				if (Object.keys(where).length) {
					const [count, data] = await ctx.prisma.$transaction([
						ctx.prisma.deviceFile.count({ where: { ...where, ...bindRelation }, orderBy }),
						ctx.prisma.deviceFile.findMany({ where: { ...where, ...bindRelation }, skip, take, orderBy })
					])
					return { count, data }
				}
				const [count, data] = await ctx.prisma.$transaction([
					ctx.prisma.deviceFile.count({ where: bindRelation }),
					ctx.prisma.deviceFile.findMany({ where: bindRelation, orderBy, skip, take })
				])
				return { count, data }
			}
		})
		t.field("deviceInstances", {
			type: "DeviceInstanceModel",
			args: {
				deviceInstanceWhere: nullable("DeviceInstanceWhere"),
				deviceInstanceSkip: nullable("Int"),
				deviceInstanceTake: nullable("Int"),
				deviceInstanceOrderBy: nullable("DeviceInstanceOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "DeviceInstance")
				// Syntetic relation
				const bindRelation = { deviceClassId: Number(root.id) }
				if (Object.keys(where).length) {
					const [count, data] = await ctx.prisma.$transaction([
						ctx.prisma.deviceInstance.count({ where: { ...where, ...bindRelation }, orderBy }),
						ctx.prisma.deviceInstance.findMany({ where: { ...where, ...bindRelation }, skip, take, orderBy })
					])
					return { count, data }
				}
				const [count, data] = await ctx.prisma.$transaction([
					ctx.prisma.deviceInstance.count({ where: bindRelation }),
					ctx.prisma.deviceInstance.findMany({ where: bindRelation, orderBy, skip, take })
				])
				return { count, data }
			}
		})
		t.field("eventClasses", {
			type: "EventClassModel",
			args: {
				eventClassWhere: nullable("EventClassWhere"),
				eventClassSkip: nullable("Int"),
				eventClassTake: nullable("Int"),
				eventClassOrderBy: nullable("EventClassOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "EventClass")
				// Syntetic relation
				const bindRelation = { deviceClassId: Number(root.id) }
				if (Object.keys(where).length) {
					const [count, data] = await ctx.prisma.$transaction([
						ctx.prisma.eventClass.count({ where: { ...where, ...bindRelation }, orderBy }),
						ctx.prisma.eventClass.findMany({ where: { ...where, ...bindRelation }, skip, take, orderBy })
					])
					return { count, data }
				}
				const [count, data] = await ctx.prisma.$transaction([
					ctx.prisma.eventClass.count({ where: bindRelation }),
					ctx.prisma.eventClass.findMany({ where: bindRelation, orderBy, skip, take })
				])
				return { count, data }
			}
		})
		t.field("mainDeviceClasses", {
			type: "MainDeviceClassModel",
			args: {
				mainDeviceClassWhere: nullable("MainDeviceClassWhere"),
				mainDeviceClassSkip: nullable("Int"),
				mainDeviceClassTake: nullable("Int"),
				mainDeviceClassOrderBy: nullable("MainDeviceClassOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "MainDeviceClass")
				// Syntetic relation
				const bindRelation = { deviceClassId: Number(root.id) }
				if (Object.keys(where).length) {
					const [count, data] = await ctx.prisma.$transaction([
						ctx.prisma.mainDeviceClass.count({ where: { ...where, ...bindRelation }, orderBy }),
						ctx.prisma.mainDeviceClass.findMany({ where: { ...where, ...bindRelation }, skip, take, orderBy })
					])
					return { count, data }
				}
				const [count, data] = await ctx.prisma.$transaction([
					ctx.prisma.mainDeviceClass.count({ where: bindRelation }),
					ctx.prisma.mainDeviceClass.findMany({ where: bindRelation, orderBy, skip, take })
				])
				return { count, data }
			}
		})
		t.field("maintenanceTypes", {
			type: "MaintenanceTypeModel",
			args: {
				maintenanceTypeWhere: nullable("MaintenanceTypeWhere"),
				maintenanceTypeSkip: nullable("Int"),
				maintenanceTypeTake: nullable("Int"),
				maintenanceTypeOrderBy: nullable("MaintenanceTypeOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "MaintenanceType")
				// Syntetic relation
				const bindRelation = { deviceClassId: Number(root.id) }
				if (Object.keys(where).length) {
					const [count, data] = await ctx.prisma.$transaction([
						ctx.prisma.maintenanceType.count({ where: { ...where, ...bindRelation }, orderBy }),
						ctx.prisma.maintenanceType.findMany({ where: { ...where, ...bindRelation }, skip, take, orderBy })
					])
					return { count, data }
				}
				const [count, data] = await ctx.prisma.$transaction([
					ctx.prisma.maintenanceType.count({ where: bindRelation }),
					ctx.prisma.maintenanceType.findMany({ where: bindRelation, orderBy, skip, take })
				])
				return { count, data }
			}
		})
		t.field("predictionConfigs", {
			type: "PredictionConfigModel",
			args: {
				predictionConfigWhere: nullable("PredictionConfigWhere"),
				predictionConfigSkip: nullable("Int"),
				predictionConfigTake: nullable("Int"),
				predictionConfigOrderBy: nullable("PredictionConfigOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "PredictionConfig")
				// Syntetic relation
				const bindRelation = { deviceClassId: Number(root.id) }
				if (Object.keys(where).length) {
					const [count, data] = await ctx.prisma.$transaction([
						ctx.prisma.predictionConfig.count({ where: { ...where, ...bindRelation }, orderBy }),
						ctx.prisma.predictionConfig.findMany({ where: { ...where, ...bindRelation }, skip, take, orderBy })
					])
					return { count, data }
				}
				const [count, data] = await ctx.prisma.$transaction([
					ctx.prisma.predictionConfig.count({ where: bindRelation }),
					ctx.prisma.predictionConfig.findMany({ where: bindRelation, orderBy, skip, take })
				])
				return { count, data }
			}
		})
		t.field("maintenanceConfigs", {
			type: "MaintenanceConfigModel",
			args: {
				maintenanceConfigWhere: nullable("MaintenanceConfigWhere"),
				maintenanceConfigSkip: nullable("Int"),
				maintenanceConfigTake: nullable("Int"),
				maintenanceConfigOrderBy: nullable("MaintenanceConfigOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "MaintenanceConfig")
				// Syntetic relation
				const bindRelation = { deviceClassId: Number(root.id) }
				if (Object.keys(where).length) {
					const [count, data] = await ctx.prisma.$transaction([
						ctx.prisma.maintenanceConfig.count({ where: { ...where, ...bindRelation }, orderBy }),
						ctx.prisma.maintenanceConfig.findMany({ where: { ...where, ...bindRelation }, skip, take, orderBy })
					])
					return { count, data }
				}
				const [count, data] = await ctx.prisma.$transaction([
					ctx.prisma.maintenanceConfig.count({ where: bindRelation }),
					ctx.prisma.maintenanceConfig.findMany({ where: bindRelation, orderBy, skip, take })
				])
				return { count, data }
			}
		})
		t.field("maintenanceAlarmConfigs", {
			type: "MaintenanceAlarmConfigModel",
			args: {
				maintenanceAlarmConfigWhere: nullable("MaintenanceAlarmConfigWhere"),
				maintenanceAlarmConfigSkip: nullable("Int"),
				maintenanceAlarmConfigTake: nullable("Int"),
				maintenanceAlarmConfigOrderBy: nullable("MaintenanceAlarmConfigOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "MaintenanceAlarmConfig")
				// Syntetic relation
				const bindRelation = { deviceClassId: Number(root.id) }
				if (Object.keys(where).length) {
					const [count, data] = await ctx.prisma.$transaction([
						ctx.prisma.maintenanceAlarmConfig.count({ where: { ...where, ...bindRelation }, orderBy }),
						ctx.prisma.maintenanceAlarmConfig.findMany({ where: { ...where, ...bindRelation }, skip, take, orderBy })
					])
					return { count, data }
				}
				const [count, data] = await ctx.prisma.$transaction([
					ctx.prisma.maintenanceAlarmConfig.count({ where: bindRelation }),
					ctx.prisma.maintenanceAlarmConfig.findMany({ where: bindRelation, orderBy, skip, take })
				])
				return { count, data }
			}
		})

	}
})

export const DeviceControlModel = objectType({
	name: "DeviceControlModel",
	definition(t) {
		t.field("data", {
			type: list("DeviceControl"),
		})
		t.field("count", {
			type: "Int"
		})
	}
})

export const DeviceControlConstant = objectType({
	name: "DeviceControl",
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
		t.nullable.field("deviceInstance", {
			type: "DeviceInstance",
			args: {
				deviceInstanceWhere: nullable("DeviceInstanceWhere"),
				deviceInstanceSkip: nullable("Int"),
				deviceInstanceTake: nullable("Int"),
				deviceInstanceOrderBy: nullable("DeviceInstanceOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where } = prepareConditions < typeof args > (args, "DeviceInstance")
				// Regular relation
				const bindRelation = { id: Number(root.devId) }
				if (Object.keys(where).length) return await ctx.prisma.deviceInstance.findFirst({ where: { ...where, ...bindRelation } })
				return await ctx.prisma.deviceInstance.findFirst({ where: bindRelation })
			}
		})

	}
})

export const DeviceCycleModel = objectType({
	name: "DeviceCycleModel",
	definition(t) {
		t.field("data", {
			type: list("DeviceCycle"),
		})
		t.field("count", {
			type: "Int"
		})
	}
})

export const DeviceCycleConstant = objectType({
	name: "DeviceCycle",
	definition(t) {
		t.int("id")
		t.nullable.int("devId")
		t.nullable.int("globalCyclesStart")
		t.nullable.int("globalCyclesEnd")
		t.nullable.dateTime("timestampStart")
		t.nullable.dateTime("timestampEnd")
		t.dateTime("timestamp")
		t.nullable.field("deviceInstance", {
			type: "DeviceInstance",
			args: {
				deviceInstanceWhere: nullable("DeviceInstanceWhere"),
				deviceInstanceSkip: nullable("Int"),
				deviceInstanceTake: nullable("Int"),
				deviceInstanceOrderBy: nullable("DeviceInstanceOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where } = prepareConditions < typeof args > (args, "DeviceInstance")
				// Regular relation
				const bindRelation = { id: Number(root.devId) }
				if (Object.keys(where).length) return await ctx.prisma.deviceInstance.findFirst({ where: { ...where, ...bindRelation } })
				return await ctx.prisma.deviceInstance.findFirst({ where: bindRelation })
			}
		})

	}
})

export const DeviceFileModel = objectType({
	name: "DeviceFileModel",
	definition(t) {
		t.field("data", {
			type: list("DeviceFile"),
		})
		t.field("count", {
			type: "Int"
		})
	}
})

export const DeviceFileConstant = objectType({
	name: "DeviceFile",
	definition(t) {
		t.int("id")
		t.nullable.bigInt("vendorId")
		t.nullable.int("deviceId")
		t.nullable.string("filetype")
		t.nullable.string("filename")
		t.nullable.float("revision")
		t.nullable.int("deviceClassId")
		t.dateTime("updatedAt")
		t.nullable.field("deviceClass", {
			type: "DeviceClass",
			args: {
				deviceClassWhere: nullable("DeviceClassWhere"),
				deviceClassSkip: nullable("Int"),
				deviceClassTake: nullable("Int"),
				deviceClassOrderBy: nullable("DeviceClassOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where } = prepareConditions < typeof args > (args, "DeviceClass")
				// Regular relation
				const bindRelation = { id: Number(root.deviceClassId) }
				if (Object.keys(where).length) return await ctx.prisma.deviceClass.findFirst({ where: { ...where, ...bindRelation } })
				return await ctx.prisma.deviceClass.findFirst({ where: bindRelation })
			}
		})

	}
})

export const DeviceInstanceModel = objectType({
	name: "DeviceInstanceModel",
	definition(t) {
		t.field("data", {
			type: list("DeviceInstance"),
		})
		t.field("count", {
			type: "Int"
		})
	}
})

export const DeviceInstanceConstant = objectType({
	name: "DeviceInstance",
	definition(t) {
		t.int("id", {
			description: `@zod.nullish()`
		})
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
		t.dateTime("createdOn", {
			description: `@zod.nullish()`
		})
		t.nullable.json("geolocation")
		t.nullable.string("uniqueId")
		t.nullable.int("userId")
		t.nullable.dateTime("eventStart")
		t.nullable.dateTime("eventEnd")
		t.nullable.field("deviceClasses", {
			type: "DeviceClass",
			args: {
				deviceClassWhere: nullable("DeviceClassWhere"),
				deviceClassSkip: nullable("Int"),
				deviceClassTake: nullable("Int"),
				deviceClassOrderBy: nullable("DeviceClassOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where } = prepareConditions < typeof args > (args, "DeviceClass")
				// Regular relation
				const bindRelation = { id: Number(root.deviceClassId) }
				if (Object.keys(where).length) return await ctx.prisma.deviceClass.findFirst({ where: { ...where, ...bindRelation } })
				return await ctx.prisma.deviceClass.findFirst({ where: bindRelation })
			}
		})
		t.nullable.string("locationTag")
		t.nullable.string("locationPos")
		t.nullable.string("locationAssetId")
		t.nullable.string("preservedChunks")
		t.nullable.field("deviceInstance", {
			type: "DeviceInstance",
			args: {
				deviceInstanceWhere: nullable("DeviceInstanceWhere"),
				deviceInstanceSkip: nullable("Int"),
				deviceInstanceTake: nullable("Int"),
				deviceInstanceOrderBy: nullable("DeviceInstanceOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where } = prepareConditions < typeof args > (args, "DeviceInstance")
				// Regular relation
				const bindRelation = { id: Number(root.parentDevId) }
				if (Object.keys(where).length) return await ctx.prisma.deviceInstance.findFirst({ where: { ...where, ...bindRelation } })
				return await ctx.prisma.deviceInstance.findFirst({ where: bindRelation })
			}
		})
		t.nullable.field("registrationStatus", {
			type: "RegistrationStatus",
			args: {
				registrationStatusWhere: nullable("RegistrationStatusWhere"),
				registrationStatusSkip: nullable("Int"),
				registrationStatusTake: nullable("Int"),
				registrationStatusOrderBy: nullable("RegistrationStatusOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where } = prepareConditions < typeof args > (args, "RegistrationStatus")
				// Regular relation
				const bindRelation = { id: Number(root.regStatusId) }
				if (Object.keys(where).length) return await ctx.prisma.registrationStatus.findFirst({ where: { ...where, ...bindRelation } })
				return await ctx.prisma.registrationStatus.findFirst({ where: bindRelation })
			}
		})
		t.nullable.field("user", {
			type: "User",
			args: {
				userWhere: nullable("UserWhere"),
				userSkip: nullable("Int"),
				userTake: nullable("Int"),
				userOrderBy: nullable("UserOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where } = prepareConditions < typeof args > (args, "User")
				// Regular relation
				const bindRelation = { id: Number(root.userId) }
				if (Object.keys(where).length) return await ctx.prisma.user.findFirst({ where: { ...where, ...bindRelation } })
				return await ctx.prisma.user.findFirst({ where: bindRelation })
			}
		})
		t.field("activeEventInstances", {
			type: "ActiveEventInstanceModel",
			args: {
				activeEventInstanceWhere: nullable("ActiveEventInstanceWhere"),
				activeEventInstanceSkip: nullable("Int"),
				activeEventInstanceTake: nullable("Int"),
				activeEventInstanceOrderBy: nullable("ActiveEventInstanceOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "ActiveEventInstance")
				// Syntetic relation
				const bindRelation = { devId: Number(root.id) }
				if (Object.keys(where).length) {
					const [count, data] = await ctx.prisma.$transaction([
						ctx.prisma.activeEventInstance.count({ where: { ...where, ...bindRelation }, orderBy }),
						ctx.prisma.activeEventInstance.findMany({ where: { ...where, ...bindRelation }, skip, take, orderBy })
					])
					return { count, data }
				}
				const [count, data] = await ctx.prisma.$transaction([
					ctx.prisma.activeEventInstance.count({ where: bindRelation }),
					ctx.prisma.activeEventInstance.findMany({ where: bindRelation, orderBy, skip, take })
				])
				return { count, data }
			}
		})
		t.nullable.field("deviceControl", {
			type: "DeviceControl",
			args: {
				deviceControlWhere: nullable("DeviceControlWhere"),
				deviceControlSkip: nullable("Int"),
				deviceControlTake: nullable("Int"),
				deviceControlOrderBy: nullable("DeviceControlOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where } = prepareConditions < typeof args > (args, "DeviceControl")
				// Syntetic relation
				const bindRelation = { devId: Number(root.id) }
				if (Object.keys(where).length) return await ctx.prisma.deviceControl.findFirst({ where: { ...where, ...bindRelation } })
				return await ctx.prisma.deviceControl.findFirst({ where: bindRelation })
			}
		})
		t.nullable.field("deviceCycle", {
			type: "DeviceCycle",
			args: {
				deviceCycleWhere: nullable("DeviceCycleWhere"),
				deviceCycleSkip: nullable("Int"),
				deviceCycleTake: nullable("Int"),
				deviceCycleOrderBy: nullable("DeviceCycleOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where } = prepareConditions < typeof args > (args, "DeviceCycle")
				// Syntetic relation
				const bindRelation = { devId: Number(root.id) }
				if (Object.keys(where).length) return await ctx.prisma.deviceCycle.findFirst({ where: { ...where, ...bindRelation } })
				return await ctx.prisma.deviceCycle.findFirst({ where: bindRelation })
			}
		})
		t.field("otherDeviceInstances", {
			type: "DeviceInstanceModel",
			args: {
				deviceInstanceWhere: nullable("DeviceInstanceWhere"),
				deviceInstanceSkip: nullable("Int"),
				deviceInstanceTake: nullable("Int"),
				deviceInstanceOrderBy: nullable("DeviceInstanceOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "DeviceInstance")
				// Syntetic relation
				const bindRelation = { parentDevId: Number(root.id) }
				if (Object.keys(where).length) {
					const [count, data] = await ctx.prisma.$transaction([
						ctx.prisma.deviceInstance.count({ where: { ...where, ...bindRelation }, orderBy }),
						ctx.prisma.deviceInstance.findMany({ where: { ...where, ...bindRelation }, skip, take, orderBy })
					])
					return { count, data }
				}
				const [count, data] = await ctx.prisma.$transaction([
					ctx.prisma.deviceInstance.count({ where: bindRelation }),
					ctx.prisma.deviceInstance.findMany({ where: bindRelation, orderBy, skip, take })
				])
				return { count, data }
			}
		})
		t.field("eventGroupData", {
			type: "EventGroupDataModel",
			args: {
				eventGroupDataWhere: nullable("EventGroupDataWhere"),
				eventGroupDataSkip: nullable("Int"),
				eventGroupDataTake: nullable("Int"),
				eventGroupDataOrderBy: nullable("EventGroupDataOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "EventGroupData")
				// Syntetic relation
				const bindRelation = { devId: Number(root.id) }
				if (Object.keys(where).length) {
					const [count, data] = await ctx.prisma.$transaction([
						ctx.prisma.eventGroupData.count({ where: { ...where, ...bindRelation }, orderBy }),
						ctx.prisma.eventGroupData.findMany({ where: { ...where, ...bindRelation }, skip, take, orderBy })
					])
					return { count, data }
				}
				const [count, data] = await ctx.prisma.$transaction([
					ctx.prisma.eventGroupData.count({ where: bindRelation }),
					ctx.prisma.eventGroupData.findMany({ where: bindRelation, orderBy, skip, take })
				])
				return { count, data }
			}
		})
		t.field("eventGroupDataHourAggregates", {
			type: "EventGroupDataHourAggregateModel",
			args: {
				eventGroupDataHourAggregateWhere: nullable("EventGroupDataHourAggregateWhere"),
				eventGroupDataHourAggregateSkip: nullable("Int"),
				eventGroupDataHourAggregateTake: nullable("Int"),
				eventGroupDataHourAggregateOrderBy: nullable("EventGroupDataHourAggregateOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "EventGroupDataHourAggregate")
				// Syntetic relation
				const bindRelation = { devId: Number(root.id) }
				if (Object.keys(where).length) {
					const [count, data] = await ctx.prisma.$transaction([
						ctx.prisma.eventGroupDataHourAggregate.count({ where: { ...where, ...bindRelation }, orderBy }),
						ctx.prisma.eventGroupDataHourAggregate.findMany({ where: { ...where, ...bindRelation }, skip, take, orderBy })
					])
					return { count, data }
				}
				const [count, data] = await ctx.prisma.$transaction([
					ctx.prisma.eventGroupDataHourAggregate.count({ where: bindRelation }),
					ctx.prisma.eventGroupDataHourAggregate.findMany({ where: bindRelation, orderBy, skip, take })
				])
				return { count, data }
			}
		})
		t.field("eventGroupValues", {
			type: "EventGroupValueModel",
			args: {
				eventGroupValueWhere: nullable("EventGroupValueWhere"),
				eventGroupValueSkip: nullable("Int"),
				eventGroupValueTake: nullable("Int"),
				eventGroupValueOrderBy: nullable("EventGroupValueOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "EventGroupValue")
				// Syntetic relation
				const bindRelation = { devId: Number(root.id) }
				if (Object.keys(where).length) {
					const [count, data] = await ctx.prisma.$transaction([
						ctx.prisma.eventGroupValue.count({ where: { ...where, ...bindRelation }, orderBy }),
						ctx.prisma.eventGroupValue.findMany({ where: { ...where, ...bindRelation }, skip, take, orderBy })
					])
					return { count, data }
				}
				const [count, data] = await ctx.prisma.$transaction([
					ctx.prisma.eventGroupValue.count({ where: bindRelation }),
					ctx.prisma.eventGroupValue.findMany({ where: bindRelation, orderBy, skip, take })
				])
				return { count, data }
			}
		})
		t.field("eventGroups", {
			type: "EventGroupModel",
			args: {
				eventGroupWhere: nullable("EventGroupWhere"),
				eventGroupSkip: nullable("Int"),
				eventGroupTake: nullable("Int"),
				eventGroupOrderBy: nullable("EventGroupOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "EventGroup")
				// Syntetic relation
				const bindRelation = { devId: Number(root.id) }
				if (Object.keys(where).length) {
					const [count, data] = await ctx.prisma.$transaction([
						ctx.prisma.eventGroup.count({ where: { ...where, ...bindRelation }, orderBy }),
						ctx.prisma.eventGroup.findMany({ where: { ...where, ...bindRelation }, skip, take, orderBy })
					])
					return { count, data }
				}
				const [count, data] = await ctx.prisma.$transaction([
					ctx.prisma.eventGroup.count({ where: bindRelation }),
					ctx.prisma.eventGroup.findMany({ where: bindRelation, orderBy, skip, take })
				])
				return { count, data }
			}
		})
		t.field("eventInstances", {
			type: "EventInstanceModel",
			args: {
				eventInstanceWhere: nullable("EventInstanceWhere"),
				eventInstanceSkip: nullable("Int"),
				eventInstanceTake: nullable("Int"),
				eventInstanceOrderBy: nullable("EventInstanceOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "EventInstance")
				// Syntetic relation
				const bindRelation = { devId: Number(root.id) }
				if (Object.keys(where).length) {
					const [count, data] = await ctx.prisma.$transaction([
						ctx.prisma.eventInstance.count({ where: { ...where, ...bindRelation }, orderBy }),
						ctx.prisma.eventInstance.findMany({ where: { ...where, ...bindRelation }, skip, take, orderBy })
					])
					return { count, data }
				}
				const [count, data] = await ctx.prisma.$transaction([
					ctx.prisma.eventInstance.count({ where: bindRelation }),
					ctx.prisma.eventInstance.findMany({ where: bindRelation, orderBy, skip, take })
				])
				return { count, data }
			}
		})
		t.field("devicedata", {
			type: "DeviceDataModel",
			args: {
				deviceDataWhere: nullable("DeviceDataWhere"),
				deviceDataSkip: nullable("Int"),
				deviceDataTake: nullable("Int"),
				deviceDataOrderBy: nullable("DeviceDataOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "DeviceData")
				// Syntetic relation
				const bindRelation = { devId: Number(root.id) }
				if (Object.keys(where).length) {
					const [count, data] = await ctx.prisma.$transaction([
						ctx.prisma.deviceData.count({ where: { ...where, ...bindRelation }, orderBy }),
						ctx.prisma.deviceData.findMany({ where: { ...where, ...bindRelation }, skip, take, orderBy })
					])
					return { count, data }
				}
				const [count, data] = await ctx.prisma.$transaction([
					ctx.prisma.deviceData.count({ where: bindRelation }),
					ctx.prisma.deviceData.findMany({ where: bindRelation, orderBy, skip, take })
				])
				return { count, data }
			}
		})
		t.nullable.field("mainDeviceInstance", {
			type: "MainDeviceInstance",
			args: {
				mainDeviceInstanceWhere: nullable("MainDeviceInstanceWhere"),
				mainDeviceInstanceSkip: nullable("Int"),
				mainDeviceInstanceTake: nullable("Int"),
				mainDeviceInstanceOrderBy: nullable("MainDeviceInstanceOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where } = prepareConditions < typeof args > (args, "MainDeviceInstance")
				// Syntetic relation
				const bindRelation = { devId: Number(root.id) }
				if (Object.keys(where).length) return await ctx.prisma.mainDeviceInstance.findFirst({ where: { ...where, ...bindRelation } })
				return await ctx.prisma.mainDeviceInstance.findFirst({ where: bindRelation })
			}
		})
		t.field("maintenances", {
			type: "MaintenanceModel",
			args: {
				maintenanceWhere: nullable("MaintenanceWhere"),
				maintenanceSkip: nullable("Int"),
				maintenanceTake: nullable("Int"),
				maintenanceOrderBy: nullable("MaintenanceOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "Maintenance")
				// Syntetic relation
				const bindRelation = { deviceInstanceId: Number(root.id) }
				if (Object.keys(where).length) {
					const [count, data] = await ctx.prisma.$transaction([
						ctx.prisma.maintenance.count({ where: { ...where, ...bindRelation }, orderBy }),
						ctx.prisma.maintenance.findMany({ where: { ...where, ...bindRelation }, skip, take, orderBy })
					])
					return { count, data }
				}
				const [count, data] = await ctx.prisma.$transaction([
					ctx.prisma.maintenance.count({ where: bindRelation }),
					ctx.prisma.maintenance.findMany({ where: bindRelation, orderBy, skip, take })
				])
				return { count, data }
			}
		})
		t.nullable.field("performanceIndicatorConfig", {
			type: "PerformanceIndicatorConfig",
			args: {
				performanceIndicatorConfigWhere: nullable("PerformanceIndicatorConfigWhere"),
				performanceIndicatorConfigSkip: nullable("Int"),
				performanceIndicatorConfigTake: nullable("Int"),
				performanceIndicatorConfigOrderBy: nullable("PerformanceIndicatorConfigOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where } = prepareConditions < typeof args > (args, "PerformanceIndicatorConfig")
				// Syntetic relation
				const bindRelation = { devId: Number(root.id) }
				if (Object.keys(where).length) return await ctx.prisma.performanceIndicatorConfig.findFirst({ where: { ...where, ...bindRelation } })
				return await ctx.prisma.performanceIndicatorConfig.findFirst({ where: bindRelation })
			}
		})
		t.field("processData", {
			type: "ProcessDataModel",
			args: {
				processDataWhere: nullable("ProcessDataWhere"),
				processDataSkip: nullable("Int"),
				processDataTake: nullable("Int"),
				processDataOrderBy: nullable("ProcessDataOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "ProcessData")
				// Syntetic relation
				const bindRelation = { devId: Number(root.id) }
				if (Object.keys(where).length) {
					const [count, data] = await ctx.prisma.$transaction([
						ctx.prisma.processData.count({ where: { ...where, ...bindRelation }, orderBy }),
						ctx.prisma.processData.findMany({ where: { ...where, ...bindRelation }, skip, take, orderBy })
					])
					return { count, data }
				}
				const [count, data] = await ctx.prisma.$transaction([
					ctx.prisma.processData.count({ where: bindRelation }),
					ctx.prisma.processData.findMany({ where: bindRelation, orderBy, skip, take })
				])
				return { count, data }
			}
		})
		t.field("processDataModes", {
			type: "ProcessDataModeModel",
			args: {
				processDataModeWhere: nullable("ProcessDataModeWhere"),
				processDataModeSkip: nullable("Int"),
				processDataModeTake: nullable("Int"),
				processDataModeOrderBy: nullable("ProcessDataModeOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "ProcessDataMode")
				// Syntetic relation
				const bindRelation = { devId: Number(root.id) }
				if (Object.keys(where).length) {
					const [count, data] = await ctx.prisma.$transaction([
						ctx.prisma.processDataMode.count({ where: { ...where, ...bindRelation }, orderBy }),
						ctx.prisma.processDataMode.findMany({ where: { ...where, ...bindRelation }, skip, take, orderBy })
					])
					return { count, data }
				}
				const [count, data] = await ctx.prisma.$transaction([
					ctx.prisma.processDataMode.count({ where: bindRelation }),
					ctx.prisma.processDataMode.findMany({ where: bindRelation, orderBy, skip, take })
				])
				return { count, data }
			}
		})
		t.nullable.field("replayConfig", {
			type: "ReplayConfig",
			args: {
				replayConfigWhere: nullable("ReplayConfigWhere"),
				replayConfigSkip: nullable("Int"),
				replayConfigTake: nullable("Int"),
				replayConfigOrderBy: nullable("ReplayConfigOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where } = prepareConditions < typeof args > (args, "ReplayConfig")
				// Syntetic relation
				const bindRelation = { devId: Number(root.id) }
				if (Object.keys(where).length) return await ctx.prisma.replayConfig.findFirst({ where: { ...where, ...bindRelation } })
				return await ctx.prisma.replayConfig.findFirst({ where: bindRelation })
			}
		})
		t.field("replaySets", {
			type: "ReplaySetModel",
			args: {
				replaySetWhere: nullable("ReplaySetWhere"),
				replaySetSkip: nullable("Int"),
				replaySetTake: nullable("Int"),
				replaySetOrderBy: nullable("ReplaySetOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "ReplaySet")
				// Syntetic relation
				const bindRelation = { devId: Number(root.id) }
				if (Object.keys(where).length) {
					const [count, data] = await ctx.prisma.$transaction([
						ctx.prisma.replaySet.count({ where: { ...where, ...bindRelation }, orderBy }),
						ctx.prisma.replaySet.findMany({ where: { ...where, ...bindRelation }, skip, take, orderBy })
					])
					return { count, data }
				}
				const [count, data] = await ctx.prisma.$transaction([
					ctx.prisma.replaySet.count({ where: bindRelation }),
					ctx.prisma.replaySet.findMany({ where: bindRelation, orderBy, skip, take })
				])
				return { count, data }
			}
		})
		t.field("reporting", {
			type: "ReportingModel",
			args: {
				reportingWhere: nullable("ReportingWhere"),
				reportingSkip: nullable("Int"),
				reportingTake: nullable("Int"),
				reportingOrderBy: nullable("ReportingOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "Reporting")
				// Syntetic relation
				const bindRelation = { devId: Number(root.id) }
				if (Object.keys(where).length) {
					const [count, data] = await ctx.prisma.$transaction([
						ctx.prisma.reporting.count({ where: { ...where, ...bindRelation }, orderBy }),
						ctx.prisma.reporting.findMany({ where: { ...where, ...bindRelation }, skip, take, orderBy })
					])
					return { count, data }
				}
				const [count, data] = await ctx.prisma.$transaction([
					ctx.prisma.reporting.count({ where: bindRelation }),
					ctx.prisma.reporting.findMany({ where: bindRelation, orderBy, skip, take })
				])
				return { count, data }
			}
		})
		t.nullable.field("reportingConfig", {
			type: "ReportingConfig",
			args: {
				reportingConfigWhere: nullable("ReportingConfigWhere"),
				reportingConfigSkip: nullable("Int"),
				reportingConfigTake: nullable("Int"),
				reportingConfigOrderBy: nullable("ReportingConfigOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where } = prepareConditions < typeof args > (args, "ReportingConfig")
				// Syntetic relation
				const bindRelation = { devId: Number(root.id) }
				if (Object.keys(where).length) return await ctx.prisma.reportingConfig.findFirst({ where: { ...where, ...bindRelation } })
				return await ctx.prisma.reportingConfig.findFirst({ where: bindRelation })
			}
		})
		t.field("timeseries", {
			type: "TimeseriesModel",
			args: {
				timeseriesWhere: nullable("TimeseriesWhere"),
				timeseriesSkip: nullable("Int"),
				timeseriesTake: nullable("Int"),
				timeseriesOrderBy: nullable("TimeseriesOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "Timeseries")
				// Syntetic relation
				const bindRelation = { devId: Number(root.id) }
				if (Object.keys(where).length) {
					const [count, data] = await ctx.prisma.$transaction([
						ctx.prisma.timeseries.count({ where: { ...where, ...bindRelation }, orderBy }),
						ctx.prisma.timeseries.findMany({ where: { ...where, ...bindRelation }, skip, take, orderBy })
					])
					return { count, data }
				}
				const [count, data] = await ctx.prisma.$transaction([
					ctx.prisma.timeseries.count({ where: bindRelation }),
					ctx.prisma.timeseries.findMany({ where: bindRelation, orderBy, skip, take })
				])
				return { count, data }
			}
		})
		t.field("timeseriesData", {
			type: "TimeseriesDataModel",
			args: {
				timeseriesDataWhere: nullable("TimeseriesDataWhere"),
				timeseriesDataSkip: nullable("Int"),
				timeseriesDataTake: nullable("Int"),
				timeseriesDataOrderBy: nullable("TimeseriesDataOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "TimeseriesData")
				// Syntetic relation
				const bindRelation = { devId: Number(root.id) }
				if (Object.keys(where).length) {
					const [count, data] = await ctx.prisma.$transaction([
						ctx.prisma.timeseriesData.count({ where: { ...where, ...bindRelation }, orderBy }),
						ctx.prisma.timeseriesData.findMany({ where: { ...where, ...bindRelation }, skip, take, orderBy })
					])
					return { count, data }
				}
				const [count, data] = await ctx.prisma.$transaction([
					ctx.prisma.timeseriesData.count({ where: bindRelation }),
					ctx.prisma.timeseriesData.findMany({ where: bindRelation, orderBy, skip, take })
				])
				return { count, data }
			}
		})
		t.field("timeseriesDataHourAggregates", {
			type: "TimeseriesDataHourAggregateModel",
			args: {
				timeseriesDataHourAggregateWhere: nullable("TimeseriesDataHourAggregateWhere"),
				timeseriesDataHourAggregateSkip: nullable("Int"),
				timeseriesDataHourAggregateTake: nullable("Int"),
				timeseriesDataHourAggregateOrderBy: nullable("TimeseriesDataHourAggregateOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "TimeseriesDataHourAggregate")
				// Syntetic relation
				const bindRelation = { devId: Number(root.id) }
				if (Object.keys(where).length) {
					const [count, data] = await ctx.prisma.$transaction([
						ctx.prisma.timeseriesDataHourAggregate.count({ where: { ...where, ...bindRelation }, orderBy }),
						ctx.prisma.timeseriesDataHourAggregate.findMany({ where: { ...where, ...bindRelation }, skip, take, orderBy })
					])
					return { count, data }
				}
				const [count, data] = await ctx.prisma.$transaction([
					ctx.prisma.timeseriesDataHourAggregate.count({ where: bindRelation }),
					ctx.prisma.timeseriesDataHourAggregate.findMany({ where: bindRelation, orderBy, skip, take })
				])
				return { count, data }
			}
		})
		t.nullable.field("updaterConfig", {
			type: "UpdaterConfig",
			args: {
				updaterConfigWhere: nullable("UpdaterConfigWhere"),
				updaterConfigSkip: nullable("Int"),
				updaterConfigTake: nullable("Int"),
				updaterConfigOrderBy: nullable("UpdaterConfigOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where } = prepareConditions < typeof args > (args, "UpdaterConfig")
				// Syntetic relation
				const bindRelation = { devId: Number(root.id) }
				if (Object.keys(where).length) return await ctx.prisma.updaterConfig.findFirst({ where: { ...where, ...bindRelation } })
				return await ctx.prisma.updaterConfig.findFirst({ where: bindRelation })
			}
		})
		t.nullable.field("xConfig", {
			type: "XConfig",
			args: {
				xConfigWhere: nullable("XConfigWhere"),
				xConfigSkip: nullable("Int"),
				xConfigTake: nullable("Int"),
				xConfigOrderBy: nullable("XConfigOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where } = prepareConditions < typeof args > (args, "XConfig")
				// Syntetic relation
				const bindRelation = { devId: Number(root.id) }
				if (Object.keys(where).length) return await ctx.prisma.xConfig.findFirst({ where: { ...where, ...bindRelation } })
				return await ctx.prisma.xConfig.findFirst({ where: bindRelation })
			}
		})
		t.field("tasks", {
			type: "TaskModel",
			args: {
				taskWhere: nullable("TaskWhere"),
				taskSkip: nullable("Int"),
				taskTake: nullable("Int"),
				taskOrderBy: nullable("TaskOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "Task")
				// Syntetic relation
				const bindRelation = { devId: Number(root.id) }
				if (Object.keys(where).length) {
					const [count, data] = await ctx.prisma.$transaction([
						ctx.prisma.task.count({ where: { ...where, ...bindRelation }, orderBy }),
						ctx.prisma.task.findMany({ where: { ...where, ...bindRelation }, skip, take, orderBy })
					])
					return { count, data }
				}
				const [count, data] = await ctx.prisma.$transaction([
					ctx.prisma.task.count({ where: bindRelation }),
					ctx.prisma.task.findMany({ where: bindRelation, orderBy, skip, take })
				])
				return { count, data }
			}
		})
		// custom resolved field but excluded from model
		t.nullable.field("kpi", {
			type: "JSON",
			resolve: async (root, _args, ctx) => {
				const kpiData = await ctx.prisma.deviceInstance.findFirst({
					where: { id: { equals: root.id } },
					select: { kpi: true }
				})
				if (kpiData?.kpi && Object.keys(kpiData.kpi).length) return kpiData.kpi
				return await ctx.resource.models.DeviceInstance.extractKPIfromDataSet({
					ID: root.id,
					KPI: null
				})
			}
		})
		// custom field
		t.nullable.field("deviceStatus", {
			type: "JSON",
			resolve: async (root, _args, ctx) => {
				const resource = ctx.resource
				const status = await getCurrentDeviceStatus(resource, root.id)
				return status
			}
		})

	}
})

export const EtcHostModel = objectType({
	name: "EtcHostModel",
	definition(t) {
		t.field("data", {
			type: list("EtcHost"),
		})
		t.field("count", {
			type: "Int"
		})
	}
})

export const EtcHostConstant = objectType({
	name: "EtcHost",
	definition(t) {
		t.string("url")
		t.string("ipAddress")

	}
})

export const EventClassModel = objectType({
	name: "EventClassModel",
	definition(t) {
		t.field("data", {
			type: list("EventClass"),
		})
		t.field("count", {
			type: "Int"
		})
	}
})

export const EventClassConstant = objectType({
	name: "EventClass",
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
		t.nullable.field("deviceClass", {
			type: "DeviceClass",
			args: {
				deviceClassWhere: nullable("DeviceClassWhere"),
				deviceClassSkip: nullable("Int"),
				deviceClassTake: nullable("Int"),
				deviceClassOrderBy: nullable("DeviceClassOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where } = prepareConditions < typeof args > (args, "DeviceClass")
				// Regular relation
				const bindRelation = { id: Number(root.deviceClassId) }
				if (Object.keys(where).length) return await ctx.prisma.deviceClass.findFirst({ where: { ...where, ...bindRelation } })
				return await ctx.prisma.deviceClass.findFirst({ where: bindRelation })
			}
		})
		t.nullable.field("eventType", {
			type: "EventType",
			args: {
				eventTypeWhere: nullable("EventTypeWhere"),
				eventTypeSkip: nullable("Int"),
				eventTypeTake: nullable("Int"),
				eventTypeOrderBy: nullable("EventTypeOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where } = prepareConditions < typeof args > (args, "EventType")
				// Regular relation
				const bindRelation = { id: Number(root.eventTypesId) }
				if (Object.keys(where).length) return await ctx.prisma.eventType.findFirst({ where: { ...where, ...bindRelation } })
				return await ctx.prisma.eventType.findFirst({ where: bindRelation })
			}
		})
		t.field("activeEventInstances", {
			type: "ActiveEventInstanceModel",
			args: {
				activeEventInstanceWhere: nullable("ActiveEventInstanceWhere"),
				activeEventInstanceSkip: nullable("Int"),
				activeEventInstanceTake: nullable("Int"),
				activeEventInstanceOrderBy: nullable("ActiveEventInstanceOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "ActiveEventInstance")
				// Syntetic relation
				const bindRelation = { eventClassId: Number(root.id) }
				if (Object.keys(where).length) {
					const [count, data] = await ctx.prisma.$transaction([
						ctx.prisma.activeEventInstance.count({ where: { ...where, ...bindRelation }, orderBy }),
						ctx.prisma.activeEventInstance.findMany({ where: { ...where, ...bindRelation }, skip, take, orderBy })
					])
					return { count, data }
				}
				const [count, data] = await ctx.prisma.$transaction([
					ctx.prisma.activeEventInstance.count({ where: bindRelation }),
					ctx.prisma.activeEventInstance.findMany({ where: bindRelation, orderBy, skip, take })
				])
				return { count, data }
			}
		})
		t.field("eventInstances", {
			type: "EventInstanceModel",
			args: {
				eventInstanceWhere: nullable("EventInstanceWhere"),
				eventInstanceSkip: nullable("Int"),
				eventInstanceTake: nullable("Int"),
				eventInstanceOrderBy: nullable("EventInstanceOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "EventInstance")
				// Syntetic relation
				const bindRelation = { eventClassId: Number(root.id) }
				if (Object.keys(where).length) {
					const [count, data] = await ctx.prisma.$transaction([
						ctx.prisma.eventInstance.count({ where: { ...where, ...bindRelation }, orderBy }),
						ctx.prisma.eventInstance.findMany({ where: { ...where, ...bindRelation }, skip, take, orderBy })
					])
					return { count, data }
				}
				const [count, data] = await ctx.prisma.$transaction([
					ctx.prisma.eventInstance.count({ where: bindRelation }),
					ctx.prisma.eventInstance.findMany({ where: bindRelation, orderBy, skip, take })
				])
				return { count, data }
			}
		})
		t.field("replaySets", {
			type: "ReplaySetModel",
			args: {
				replaySetWhere: nullable("ReplaySetWhere"),
				replaySetSkip: nullable("Int"),
				replaySetTake: nullable("Int"),
				replaySetOrderBy: nullable("ReplaySetOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "ReplaySet")
				// Syntetic relation
				const bindRelation = { eventClassId: Number(root.id) }
				if (Object.keys(where).length) {
					const [count, data] = await ctx.prisma.$transaction([
						ctx.prisma.replaySet.count({ where: { ...where, ...bindRelation }, orderBy }),
						ctx.prisma.replaySet.findMany({ where: { ...where, ...bindRelation }, skip, take, orderBy })
					])
					return { count, data }
				}
				const [count, data] = await ctx.prisma.$transaction([
					ctx.prisma.replaySet.count({ where: bindRelation }),
					ctx.prisma.replaySet.findMany({ where: bindRelation, orderBy, skip, take })
				])
				return { count, data }
			}
		})
		t.field("maintenanceAlarmConfigs", {
			type: "MaintenanceAlarmConfigModel",
			args: {
				maintenanceAlarmConfigWhere: nullable("MaintenanceAlarmConfigWhere"),
				maintenanceAlarmConfigSkip: nullable("Int"),
				maintenanceAlarmConfigTake: nullable("Int"),
				maintenanceAlarmConfigOrderBy: nullable("MaintenanceAlarmConfigOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "MaintenanceAlarmConfig")
				// Syntetic relation
				const bindRelation = { eventClassId: Number(root.id) }
				if (Object.keys(where).length) {
					const [count, data] = await ctx.prisma.$transaction([
						ctx.prisma.maintenanceAlarmConfig.count({ where: { ...where, ...bindRelation }, orderBy }),
						ctx.prisma.maintenanceAlarmConfig.findMany({ where: { ...where, ...bindRelation }, skip, take, orderBy })
					])
					return { count, data }
				}
				const [count, data] = await ctx.prisma.$transaction([
					ctx.prisma.maintenanceAlarmConfig.count({ where: bindRelation }),
					ctx.prisma.maintenanceAlarmConfig.findMany({ where: bindRelation, orderBy, skip, take })
				])
				return { count, data }
			}
		})

	}
})

export const EventGroupCodeModel = objectType({
	name: "EventGroupCodeModel",
	definition(t) {
		t.field("data", {
			type: list("EventGroupCode"),
		})
		t.field("count", {
			type: "Int"
		})
	}
})

export const EventGroupCodeConstant = objectType({
	name: "EventGroupCode",
	definition(t) {
		t.int("id")
		t.nullable.int("eventGroupId")
		t.nullable.int("eventCode")
		t.nullable.int("eventClassId")
		t.nullable.string("label")
		t.nullable.field("eventGroup", {
			type: "EventGroup",
			args: {
				eventGroupWhere: nullable("EventGroupWhere"),
				eventGroupSkip: nullable("Int"),
				eventGroupTake: nullable("Int"),
				eventGroupOrderBy: nullable("EventGroupOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where } = prepareConditions < typeof args > (args, "EventGroup")
				// Regular relation
				const bindRelation = { id: Number(root.eventGroupId) }
				if (Object.keys(where).length) return await ctx.prisma.eventGroup.findFirst({ where: { ...where, ...bindRelation } })
				return await ctx.prisma.eventGroup.findFirst({ where: bindRelation })
			}
		})

	}
})

export const EventGroupDataModel = objectType({
	name: "EventGroupDataModel",
	definition(t) {
		t.field("data", {
			type: list("EventGroupData"),
		})
		t.field("count", {
			type: "Int"
		})
	}
})

export const EventGroupDataConstant = objectType({
	name: "EventGroupData",
	definition(t) {
		t.int("id")
		t.nullable.int("devId")
		t.nullable.int("eventGroupId")
		t.nullable.string("label")
		t.dateTime("timestampStart")
		t.nullable.int("code")
		t.nullable.field("deviceInstance", {
			type: "DeviceInstance",
			args: {
				deviceInstanceWhere: nullable("DeviceInstanceWhere"),
				deviceInstanceSkip: nullable("Int"),
				deviceInstanceTake: nullable("Int"),
				deviceInstanceOrderBy: nullable("DeviceInstanceOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where } = prepareConditions < typeof args > (args, "DeviceInstance")
				// Regular relation
				const bindRelation = { id: Number(root.devId) }
				if (Object.keys(where).length) return await ctx.prisma.deviceInstance.findFirst({ where: { ...where, ...bindRelation } })
				return await ctx.prisma.deviceInstance.findFirst({ where: bindRelation })
			}
		})
		t.nullable.field("eventGroup", {
			type: "EventGroup",
			args: {
				eventGroupWhere: nullable("EventGroupWhere"),
				eventGroupSkip: nullable("Int"),
				eventGroupTake: nullable("Int"),
				eventGroupOrderBy: nullable("EventGroupOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where } = prepareConditions < typeof args > (args, "EventGroup")
				// Regular relation
				const bindRelation = { id: Number(root.eventGroupId) }
				if (Object.keys(where).length) return await ctx.prisma.eventGroup.findFirst({ where: { ...where, ...bindRelation } })
				return await ctx.prisma.eventGroup.findFirst({ where: bindRelation })
			}
		})

	}
})

export const EventGroupDataHourAggregateModel = objectType({
	name: "EventGroupDataHourAggregateModel",
	definition(t) {
		t.field("data", {
			type: list("EventGroupDataHourAggregate"),
		})
		t.field("count", {
			type: "Int"
		})
	}
})

export const EventGroupDataHourAggregateConstant = objectType({
	name: "EventGroupDataHourAggregate",
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
		t.nullable.field("deviceInstance", {
			type: "DeviceInstance",
			args: {
				deviceInstanceWhere: nullable("DeviceInstanceWhere"),
				deviceInstanceSkip: nullable("Int"),
				deviceInstanceTake: nullable("Int"),
				deviceInstanceOrderBy: nullable("DeviceInstanceOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where } = prepareConditions < typeof args > (args, "DeviceInstance")
				// Regular relation
				const bindRelation = { id: Number(root.devId) }
				if (Object.keys(where).length) return await ctx.prisma.deviceInstance.findFirst({ where: { ...where, ...bindRelation } })
				return await ctx.prisma.deviceInstance.findFirst({ where: bindRelation })
			}
		})

	}
})

export const EventGroupValueModel = objectType({
	name: "EventGroupValueModel",
	definition(t) {
		t.field("data", {
			type: list("EventGroupValue"),
		})
		t.field("count", {
			type: "Int"
		})
	}
})

export const EventGroupValueConstant = objectType({
	name: "EventGroupValue",
	definition(t) {
		t.int("id")
		t.nullable.int("devId")
		t.string("eventGroupName")
		t.nullable.string("label")
		t.string("eventGroupValue")
		t.nullable.int("code")
		t.dateTime("timestamp")
		t.nullable.field("deviceInstance", {
			type: "DeviceInstance",
			args: {
				deviceInstanceWhere: nullable("DeviceInstanceWhere"),
				deviceInstanceSkip: nullable("Int"),
				deviceInstanceTake: nullable("Int"),
				deviceInstanceOrderBy: nullable("DeviceInstanceOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where } = prepareConditions < typeof args > (args, "DeviceInstance")
				// Regular relation
				const bindRelation = { id: Number(root.devId) }
				if (Object.keys(where).length) return await ctx.prisma.deviceInstance.findFirst({ where: { ...where, ...bindRelation } })
				return await ctx.prisma.deviceInstance.findFirst({ where: bindRelation })
			}
		})

	}
})

export const EventGroupModel = objectType({
	name: "EventGroupModel",
	definition(t) {
		t.field("data", {
			type: list("EventGroup"),
		})
		t.field("count", {
			type: "Int"
		})
	}
})

export const EventGroupConstant = objectType({
	name: "EventGroup",
	definition(t) {
		t.int("id")
		t.nullable.int("devId")
		t.nullable.string("groupName")
		t.nullable.json("computed")
		t.nullable.field("deviceInstance", {
			type: "DeviceInstance",
			args: {
				deviceInstanceWhere: nullable("DeviceInstanceWhere"),
				deviceInstanceSkip: nullable("Int"),
				deviceInstanceTake: nullable("Int"),
				deviceInstanceOrderBy: nullable("DeviceInstanceOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where } = prepareConditions < typeof args > (args, "DeviceInstance")
				// Regular relation
				const bindRelation = { id: Number(root.devId) }
				if (Object.keys(where).length) return await ctx.prisma.deviceInstance.findFirst({ where: { ...where, ...bindRelation } })
				return await ctx.prisma.deviceInstance.findFirst({ where: bindRelation })
			}
		})
		t.field("eventGroupCodes", {
			type: "EventGroupCodeModel",
			args: {
				eventGroupCodeWhere: nullable("EventGroupCodeWhere"),
				eventGroupCodeSkip: nullable("Int"),
				eventGroupCodeTake: nullable("Int"),
				eventGroupCodeOrderBy: nullable("EventGroupCodeOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "EventGroupCode")
				// Syntetic relation
				const bindRelation = { eventGroupId: Number(root.id) }
				if (Object.keys(where).length) {
					const [count, data] = await ctx.prisma.$transaction([
						ctx.prisma.eventGroupCode.count({ where: { ...where, ...bindRelation }, orderBy }),
						ctx.prisma.eventGroupCode.findMany({ where: { ...where, ...bindRelation }, skip, take, orderBy })
					])
					return { count, data }
				}
				const [count, data] = await ctx.prisma.$transaction([
					ctx.prisma.eventGroupCode.count({ where: bindRelation }),
					ctx.prisma.eventGroupCode.findMany({ where: bindRelation, orderBy, skip, take })
				])
				return { count, data }
			}
		})
		t.field("eventGroupData", {
			type: "EventGroupDataModel",
			args: {
				eventGroupDataWhere: nullable("EventGroupDataWhere"),
				eventGroupDataSkip: nullable("Int"),
				eventGroupDataTake: nullable("Int"),
				eventGroupDataOrderBy: nullable("EventGroupDataOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "EventGroupData")
				// Syntetic relation
				const bindRelation = { eventGroupId: Number(root.id) }
				if (Object.keys(where).length) {
					const [count, data] = await ctx.prisma.$transaction([
						ctx.prisma.eventGroupData.count({ where: { ...where, ...bindRelation }, orderBy }),
						ctx.prisma.eventGroupData.findMany({ where: { ...where, ...bindRelation }, skip, take, orderBy })
					])
					return { count, data }
				}
				const [count, data] = await ctx.prisma.$transaction([
					ctx.prisma.eventGroupData.count({ where: bindRelation }),
					ctx.prisma.eventGroupData.findMany({ where: bindRelation, orderBy, skip, take })
				])
				return { count, data }
			}
		})

	}
})

export const EventInstanceModel = objectType({
	name: "EventInstanceModel",
	definition(t) {
		t.field("data", {
			type: list("EventInstance"),
		})
		t.field("count", {
			type: "Int"
		})
	}
})

export const EventInstanceConstant = objectType({
	name: "EventInstance",
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
		t.nullable.field("deviceInstance", {
			type: "DeviceInstance",
			args: {
				deviceInstanceWhere: nullable("DeviceInstanceWhere"),
				deviceInstanceSkip: nullable("Int"),
				deviceInstanceTake: nullable("Int"),
				deviceInstanceOrderBy: nullable("DeviceInstanceOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where } = prepareConditions < typeof args > (args, "DeviceInstance")
				// Regular relation
				const bindRelation = { id: Number(root.devId) }
				if (Object.keys(where).length) return await ctx.prisma.deviceInstance.findFirst({ where: { ...where, ...bindRelation } })
				return await ctx.prisma.deviceInstance.findFirst({ where: bindRelation })
			}
		})
		t.nullable.field("eventClass", {
			type: "EventClass",
			args: {
				eventClassWhere: nullable("EventClassWhere"),
				eventClassSkip: nullable("Int"),
				eventClassTake: nullable("Int"),
				eventClassOrderBy: nullable("EventClassOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where } = prepareConditions < typeof args > (args, "EventClass")
				// Regular relation
				const bindRelation = { id: Number(root.eventClassId) }
				if (Object.keys(where).length) return await ctx.prisma.eventClass.findFirst({ where: { ...where, ...bindRelation } })
				return await ctx.prisma.eventClass.findFirst({ where: bindRelation })
			}
		})
		t.nullable.field("user", {
			type: "User",
			args: {
				userWhere: nullable("UserWhere"),
				userSkip: nullable("Int"),
				userTake: nullable("Int"),
				userOrderBy: nullable("UserOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where } = prepareConditions < typeof args > (args, "User")
				// Regular relation
				const bindRelation = { id: Number(root.userId) }
				if (Object.keys(where).length) return await ctx.prisma.user.findFirst({ where: { ...where, ...bindRelation } })
				return await ctx.prisma.user.findFirst({ where: bindRelation })
			}
		})

	}
})

export const EventTypeModel = objectType({
	name: "EventTypeModel",
	definition(t) {
		t.field("data", {
			type: list("EventType"),
		})
		t.field("count", {
			type: "Int"
		})
	}
})

export const EventTypeConstant = objectType({
	name: "EventType",
	definition(t) {
		t.int("id")
		t.nullable.string("type")
		t.nullable.int("deviceCondition")
		t.field("eventClasses", {
			type: "EventClassModel",
			args: {
				eventClassWhere: nullable("EventClassWhere"),
				eventClassSkip: nullable("Int"),
				eventClassTake: nullable("Int"),
				eventClassOrderBy: nullable("EventClassOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "EventClass")
				// Syntetic relation
				const bindRelation = { eventTypesId: Number(root.id) }
				if (Object.keys(where).length) {
					const [count, data] = await ctx.prisma.$transaction([
						ctx.prisma.eventClass.count({ where: { ...where, ...bindRelation }, orderBy }),
						ctx.prisma.eventClass.findMany({ where: { ...where, ...bindRelation }, skip, take, orderBy })
					])
					return { count, data }
				}
				const [count, data] = await ctx.prisma.$transaction([
					ctx.prisma.eventClass.count({ where: bindRelation }),
					ctx.prisma.eventClass.findMany({ where: bindRelation, orderBy, skip, take })
				])
				return { count, data }
			}
		})

	}
})

export const FloorPlanModel = objectType({
	name: "FloorPlanModel",
	definition(t) {
		t.field("data", {
			type: list("FloorPlan"),
		})
		t.field("count", {
			type: "Int"
		})
	}
})

export const FloorPlanConstant = objectType({
	name: "FloorPlan",
	definition(t) {
		t.int("id")
		t.nullable.string("name")
		t.string("file")
		t.field("mainDeviceInstances", {
			type: "MainDeviceInstanceModel",
			args: {
				mainDeviceInstanceWhere: nullable("MainDeviceInstanceWhere"),
				mainDeviceInstanceSkip: nullable("Int"),
				mainDeviceInstanceTake: nullable("Int"),
				mainDeviceInstanceOrderBy: nullable("MainDeviceInstanceOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "MainDeviceInstance")
				// Syntetic relation
				const bindRelation = { floorPlanId: Number(root.id) }
				if (Object.keys(where).length) {
					const [count, data] = await ctx.prisma.$transaction([
						ctx.prisma.mainDeviceInstance.count({ where: { ...where, ...bindRelation }, orderBy }),
						ctx.prisma.mainDeviceInstance.findMany({ where: { ...where, ...bindRelation }, skip, take, orderBy })
					])
					return { count, data }
				}
				const [count, data] = await ctx.prisma.$transaction([
					ctx.prisma.mainDeviceInstance.count({ where: bindRelation }),
					ctx.prisma.mainDeviceInstance.findMany({ where: bindRelation, orderBy, skip, take })
				])
				return { count, data }
			}
		})

	}
})

export const DeviceDataModel = objectType({
	name: "DeviceDataModel",
	definition(t) {
		t.field("data", {
			type: list("DeviceData"),
		})
		t.field("count", {
			type: "Int"
		})
	}
})

export const DeviceDataConstant = objectType({
	name: "DeviceData",
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
		t.nullable.field("deviceInstance", {
			type: "DeviceInstance",
			args: {
				deviceInstanceWhere: nullable("DeviceInstanceWhere"),
				deviceInstanceSkip: nullable("Int"),
				deviceInstanceTake: nullable("Int"),
				deviceInstanceOrderBy: nullable("DeviceInstanceOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where } = prepareConditions < typeof args > (args, "DeviceInstance")
				// Regular relation
				const bindRelation = { id: Number(root.devId) }
				if (Object.keys(where).length) return await ctx.prisma.deviceInstance.findFirst({ where: { ...where, ...bindRelation } })
				return await ctx.prisma.deviceInstance.findFirst({ where: bindRelation })
			}
		})

	}
})

export const MainDeviceClassModel = objectType({
	name: "MainDeviceClassModel",
	definition(t) {
		t.field("data", {
			type: list("MainDeviceClass"),
		})
		t.field("count", {
			type: "Int"
		})
	}
})

export const MainDeviceClassConstant = objectType({
	name: "MainDeviceClass",
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
		t.nullable.field("deviceClasses", {
			type: "DeviceClass",
			args: {
				deviceClassWhere: nullable("DeviceClassWhere"),
				deviceClassSkip: nullable("Int"),
				deviceClassTake: nullable("Int"),
				deviceClassOrderBy: nullable("DeviceClassOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where } = prepareConditions < typeof args > (args, "DeviceClass")
				// Regular relation
				const bindRelation = { id: Number(root.deviceClassId) }
				if (Object.keys(where).length) return await ctx.prisma.deviceClass.findFirst({ where: { ...where, ...bindRelation } })
				return await ctx.prisma.deviceClass.findFirst({ where: bindRelation })
			}
		})
		t.nullable.field("softwareAdapters", {
			type: "SoftwareAdapter",
			args: {
				softwareAdapterWhere: nullable("SoftwareAdapterWhere"),
				softwareAdapterSkip: nullable("Int"),
				softwareAdapterTake: nullable("Int"),
				softwareAdapterOrderBy: nullable("SoftwareAdapterOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where } = prepareConditions < typeof args > (args, "SoftwareAdapter")
				// Regular relation
				const bindRelation = { id: Number(root.softwareAdapterId) }
				if (Object.keys(where).length) return await ctx.prisma.softwareAdapter.findFirst({ where: { ...where, ...bindRelation } })
				return await ctx.prisma.softwareAdapter.findFirst({ where: bindRelation })
			}
		})
		t.field("mainDeviceInstances", {
			type: "MainDeviceInstanceModel",
			args: {
				mainDeviceInstanceWhere: nullable("MainDeviceInstanceWhere"),
				mainDeviceInstanceSkip: nullable("Int"),
				mainDeviceInstanceTake: nullable("Int"),
				mainDeviceInstanceOrderBy: nullable("MainDeviceInstanceOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "MainDeviceInstance")
				// Syntetic relation
				const bindRelation = { mainDeviceClassId: Number(root.id) }
				if (Object.keys(where).length) {
					const [count, data] = await ctx.prisma.$transaction([
						ctx.prisma.mainDeviceInstance.count({ where: { ...where, ...bindRelation }, orderBy }),
						ctx.prisma.mainDeviceInstance.findMany({ where: { ...where, ...bindRelation }, skip, take, orderBy })
					])
					return { count, data }
				}
				const [count, data] = await ctx.prisma.$transaction([
					ctx.prisma.mainDeviceInstance.count({ where: bindRelation }),
					ctx.prisma.mainDeviceInstance.findMany({ where: bindRelation, orderBy, skip, take })
				])
				return { count, data }
			}
		})

	}
})

export const MainDeviceInstanceModel = objectType({
	name: "MainDeviceInstanceModel",
	definition(t) {
		t.field("data", {
			type: list("MainDeviceInstance"),
		})
		t.field("count", {
			type: "Int"
		})
	}
})

export const MainDeviceInstanceConstant = objectType({
	name: "MainDeviceInstance",
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
		t.nullable.field("deviceInstance", {
			type: "DeviceInstance",
			args: {
				deviceInstanceWhere: nullable("DeviceInstanceWhere"),
				deviceInstanceSkip: nullable("Int"),
				deviceInstanceTake: nullable("Int"),
				deviceInstanceOrderBy: nullable("DeviceInstanceOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where } = prepareConditions < typeof args > (args, "DeviceInstance")
				// Regular relation
				const bindRelation = { id: Number(root.devId) }
				if (Object.keys(where).length) return await ctx.prisma.deviceInstance.findFirst({ where: { ...where, ...bindRelation } })
				return await ctx.prisma.deviceInstance.findFirst({ where: bindRelation })
			}
		})
		t.nullable.field("floorPlans", {
			type: "FloorPlan",
			args: {
				floorPlanWhere: nullable("FloorPlanWhere"),
				floorPlanSkip: nullable("Int"),
				floorPlanTake: nullable("Int"),
				floorPlanOrderBy: nullable("FloorPlanOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where } = prepareConditions < typeof args > (args, "FloorPlan")
				// Regular relation
				const bindRelation = { id: Number(root.floorPlanId) }
				if (Object.keys(where).length) return await ctx.prisma.floorPlan.findFirst({ where: { ...where, ...bindRelation } })
				return await ctx.prisma.floorPlan.findFirst({ where: bindRelation })
			}
		})
		t.nullable.field("mainDeviceClass", {
			type: "MainDeviceClass",
			args: {
				mainDeviceClassWhere: nullable("MainDeviceClassWhere"),
				mainDeviceClassSkip: nullable("Int"),
				mainDeviceClassTake: nullable("Int"),
				mainDeviceClassOrderBy: nullable("MainDeviceClassOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where } = prepareConditions < typeof args > (args, "MainDeviceClass")
				// Regular relation
				const bindRelation = { id: Number(root.mainDeviceClassId) }
				if (Object.keys(where).length) return await ctx.prisma.mainDeviceClass.findFirst({ where: { ...where, ...bindRelation } })
				return await ctx.prisma.mainDeviceClass.findFirst({ where: bindRelation })
			}
		})

	}
})

export const PerformanceIndicatorConfigModel = objectType({
	name: "PerformanceIndicatorConfigModel",
	definition(t) {
		t.field("data", {
			type: list("PerformanceIndicatorConfig"),
		})
		t.field("count", {
			type: "Int"
		})
	}
})

export const PerformanceIndicatorConfigConstant = objectType({
	name: "PerformanceIndicatorConfig",
	definition(t) {
		t.int("id")
		t.nullable.string("index")
		t.nullable.decimal("maxValue")
		t.nullable.int("devId")
		t.nullable.field("deviceInstance", {
			type: "DeviceInstance",
			args: {
				deviceInstanceWhere: nullable("DeviceInstanceWhere"),
				deviceInstanceSkip: nullable("Int"),
				deviceInstanceTake: nullable("Int"),
				deviceInstanceOrderBy: nullable("DeviceInstanceOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where } = prepareConditions < typeof args > (args, "DeviceInstance")
				// Regular relation
				const bindRelation = { id: Number(root.devId) }
				if (Object.keys(where).length) return await ctx.prisma.deviceInstance.findFirst({ where: { ...where, ...bindRelation } })
				return await ctx.prisma.deviceInstance.findFirst({ where: bindRelation })
			}
		})

	}
})

export const PrivilegeModel = objectType({
	name: "PrivilegeModel",
	definition(t) {
		t.field("data", {
			type: list("Privilege"),
		})
		t.field("count", {
			type: "Int"
		})
	}
})

export const PrivilegeConstant = objectType({
	name: "Privilege",
	definition(t) {
		t.int("id")
		t.nullable.string("privilege")
		t.nullable.string("description")
		t.field("rolePrivileges", {
			type: "RolePrivilegeModel",
			args: {
				rolePrivilegeWhere: nullable("RolePrivilegeWhere"),
				rolePrivilegeSkip: nullable("Int"),
				rolePrivilegeTake: nullable("Int"),
				rolePrivilegeOrderBy: nullable("RolePrivilegeOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "RolePrivilege")
				// Syntetic relation
				const bindRelation = { privilegeId: Number(root.id) }
				if (Object.keys(where).length) {
					const [count, data] = await ctx.prisma.$transaction([
						ctx.prisma.rolePrivilege.count({ where: { ...where, ...bindRelation }, orderBy }),
						ctx.prisma.rolePrivilege.findMany({ where: { ...where, ...bindRelation }, skip, take, orderBy })
					])
					return { count, data }
				}
				const [count, data] = await ctx.prisma.$transaction([
					ctx.prisma.rolePrivilege.count({ where: bindRelation }),
					ctx.prisma.rolePrivilege.findMany({ where: bindRelation, orderBy, skip, take })
				])
				return { count, data }
			}
		})

	}
})

export const ProcessDataModel = objectType({
	name: "ProcessDataModel",
	definition(t) {
		t.field("data", {
			type: list("ProcessData"),
		})
		t.field("count", {
			type: "Int"
		})
	}
})

export const ProcessDataConstant = objectType({
	name: "ProcessData",
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
		t.nullable.field("processDataCondition", {
			type: "ProcessDataCondition",
			args: {
				processDataConditionWhere: nullable("ProcessDataConditionWhere"),
				processDataConditionSkip: nullable("Int"),
				processDataConditionTake: nullable("Int"),
				processDataConditionOrderBy: nullable("ProcessDataConditionOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where } = prepareConditions < typeof args > (args, "ProcessDataCondition")
				// Regular relation
				const bindRelation = { id: Number(root.conditionId) }
				if (Object.keys(where).length) return await ctx.prisma.processDataCondition.findFirst({ where: { ...where, ...bindRelation } })
				return await ctx.prisma.processDataCondition.findFirst({ where: bindRelation })
			}
		})
		t.nullable.field("deviceInstance", {
			type: "DeviceInstance",
			args: {
				deviceInstanceWhere: nullable("DeviceInstanceWhere"),
				deviceInstanceSkip: nullable("Int"),
				deviceInstanceTake: nullable("Int"),
				deviceInstanceOrderBy: nullable("DeviceInstanceOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where } = prepareConditions < typeof args > (args, "DeviceInstance")
				// Regular relation
				const bindRelation = { id: Number(root.devId) }
				if (Object.keys(where).length) return await ctx.prisma.deviceInstance.findFirst({ where: { ...where, ...bindRelation } })
				return await ctx.prisma.deviceInstance.findFirst({ where: bindRelation })
			}
		})

	}
})

export const ProcessDataConditionModel = objectType({
	name: "ProcessDataConditionModel",
	definition(t) {
		t.field("data", {
			type: list("ProcessDataCondition"),
		})
		t.field("count", {
			type: "Int"
		})
	}
})

export const ProcessDataConditionConstant = objectType({
	name: "ProcessDataCondition",
	definition(t) {
		t.int("id")
		t.nullable.int("index")
		t.nullable.int("subindex")
		t.nullable.string("value")
		t.field("processData", {
			type: "ProcessDataModel",
			args: {
				processDataWhere: nullable("ProcessDataWhere"),
				processDataSkip: nullable("Int"),
				processDataTake: nullable("Int"),
				processDataOrderBy: nullable("ProcessDataOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "ProcessData")
				// Syntetic relation
				const bindRelation = { conditionId: Number(root.id) }
				if (Object.keys(where).length) {
					const [count, data] = await ctx.prisma.$transaction([
						ctx.prisma.processData.count({ where: { ...where, ...bindRelation }, orderBy }),
						ctx.prisma.processData.findMany({ where: { ...where, ...bindRelation }, skip, take, orderBy })
					])
					return { count, data }
				}
				const [count, data] = await ctx.prisma.$transaction([
					ctx.prisma.processData.count({ where: bindRelation }),
					ctx.prisma.processData.findMany({ where: bindRelation, orderBy, skip, take })
				])
				return { count, data }
			}
		})

	}
})

export const ProcessDataModeModel = objectType({
	name: "ProcessDataModeModel",
	definition(t) {
		t.field("data", {
			type: list("ProcessDataMode"),
		})
		t.field("count", {
			type: "Int"
		})
	}
})

export const ProcessDataModeConstant = objectType({
	name: "ProcessDataMode",
	definition(t) {
		t.int("id")
		t.nullable.string("name")
		t.nullable.int("messageSize")
		t.nullable.int("minimalSamplingTime")
		t.nullable.string("samplingTimeUnit")
		t.nullable.int("devId")
		t.nullable.field("deviceInstance", {
			type: "DeviceInstance",
			args: {
				deviceInstanceWhere: nullable("DeviceInstanceWhere"),
				deviceInstanceSkip: nullable("Int"),
				deviceInstanceTake: nullable("Int"),
				deviceInstanceOrderBy: nullable("DeviceInstanceOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where } = prepareConditions < typeof args > (args, "DeviceInstance")
				// Regular relation
				const bindRelation = { id: Number(root.devId) }
				if (Object.keys(where).length) return await ctx.prisma.deviceInstance.findFirst({ where: { ...where, ...bindRelation } })
				return await ctx.prisma.deviceInstance.findFirst({ where: bindRelation })
			}
		})

	}
})

export const RegistrationStatusModel = objectType({
	name: "RegistrationStatusModel",
	definition(t) {
		t.field("data", {
			type: list("RegistrationStatus"),
		})
		t.field("count", {
			type: "Int"
		})
	}
})

export const RegistrationStatusConstant = objectType({
	name: "RegistrationStatus",
	definition(t) {
		t.int("id")
		t.nullable.string("status")
		t.field("deviceInstances", {
			type: "DeviceInstanceModel",
			args: {
				deviceInstanceWhere: nullable("DeviceInstanceWhere"),
				deviceInstanceSkip: nullable("Int"),
				deviceInstanceTake: nullable("Int"),
				deviceInstanceOrderBy: nullable("DeviceInstanceOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "DeviceInstance")
				// Syntetic relation
				const bindRelation = { regStatusId: Number(root.id) }
				if (Object.keys(where).length) {
					const [count, data] = await ctx.prisma.$transaction([
						ctx.prisma.deviceInstance.count({ where: { ...where, ...bindRelation }, orderBy }),
						ctx.prisma.deviceInstance.findMany({ where: { ...where, ...bindRelation }, skip, take, orderBy })
					])
					return { count, data }
				}
				const [count, data] = await ctx.prisma.$transaction([
					ctx.prisma.deviceInstance.count({ where: bindRelation }),
					ctx.prisma.deviceInstance.findMany({ where: bindRelation, orderBy, skip, take })
				])
				return { count, data }
			}
		})

	}
})

export const ReplayConfigModel = objectType({
	name: "ReplayConfigModel",
	definition(t) {
		t.field("data", {
			type: list("ReplayConfig"),
		})
		t.field("count", {
			type: "Int"
		})
	}
})

export const ReplayConfigConstant = objectType({
	name: "ReplayConfig",
	definition(t) {
		t.int("id")
		t.nullable.json("triggers")
		t.nullable.json("valueMap")
		t.nullable.int("devId")
		t.nullable.field("deviceInstance", {
			type: "DeviceInstance",
			args: {
				deviceInstanceWhere: nullable("DeviceInstanceWhere"),
				deviceInstanceSkip: nullable("Int"),
				deviceInstanceTake: nullable("Int"),
				deviceInstanceOrderBy: nullable("DeviceInstanceOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where } = prepareConditions < typeof args > (args, "DeviceInstance")
				// Regular relation
				const bindRelation = { id: Number(root.devId) }
				if (Object.keys(where).length) return await ctx.prisma.deviceInstance.findFirst({ where: { ...where, ...bindRelation } })
				return await ctx.prisma.deviceInstance.findFirst({ where: bindRelation })
			}
		})

	}
})

export const ReplayDataModel = objectType({
	name: "ReplayDataModel",
	definition(t) {
		t.field("data", {
			type: list("ReplayData"),
		})
		t.field("count", {
			type: "Int"
		})
	}
})

export const ReplayDataConstant = objectType({
	name: "ReplayData",
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
		t.nullable.field("replaySet", {
			type: "ReplaySet",
			args: {
				replaySetWhere: nullable("ReplaySetWhere"),
				replaySetSkip: nullable("Int"),
				replaySetTake: nullable("Int"),
				replaySetOrderBy: nullable("ReplaySetOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where } = prepareConditions < typeof args > (args, "ReplaySet")
				// Regular relation
				const bindRelation = { id: Number(root.replaySetId) }
				if (Object.keys(where).length) return await ctx.prisma.replaySet.findFirst({ where: { ...where, ...bindRelation } })
				return await ctx.prisma.replaySet.findFirst({ where: bindRelation })
			}
		})

	}
})

export const ReplaySetModel = objectType({
	name: "ReplaySetModel",
	definition(t) {
		t.field("data", {
			type: list("ReplaySet"),
		})
		t.field("count", {
			type: "Int"
		})
	}
})

export const ReplaySetConstant = objectType({
	name: "ReplaySet",
	definition(t) {
		t.int("id")
		t.dateTime("timestamp")
		t.nullable.int("eventClassId")
		t.nullable.string("label")
		t.nullable.int("devId")
		t.nullable.field("deviceInstance", {
			type: "DeviceInstance",
			args: {
				deviceInstanceWhere: nullable("DeviceInstanceWhere"),
				deviceInstanceSkip: nullable("Int"),
				deviceInstanceTake: nullable("Int"),
				deviceInstanceOrderBy: nullable("DeviceInstanceOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where } = prepareConditions < typeof args > (args, "DeviceInstance")
				// Regular relation
				const bindRelation = { id: Number(root.devId) }
				if (Object.keys(where).length) return await ctx.prisma.deviceInstance.findFirst({ where: { ...where, ...bindRelation } })
				return await ctx.prisma.deviceInstance.findFirst({ where: bindRelation })
			}
		})
		t.nullable.field("eventClass", {
			type: "EventClass",
			args: {
				eventClassWhere: nullable("EventClassWhere"),
				eventClassSkip: nullable("Int"),
				eventClassTake: nullable("Int"),
				eventClassOrderBy: nullable("EventClassOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where } = prepareConditions < typeof args > (args, "EventClass")
				// Regular relation
				const bindRelation = { id: Number(root.eventClassId) }
				if (Object.keys(where).length) return await ctx.prisma.eventClass.findFirst({ where: { ...where, ...bindRelation } })
				return await ctx.prisma.eventClass.findFirst({ where: bindRelation })
			}
		})
		t.field("replayData", {
			type: "ReplayDataModel",
			args: {
				replayDataWhere: nullable("ReplayDataWhere"),
				replayDataSkip: nullable("Int"),
				replayDataTake: nullable("Int"),
				replayDataOrderBy: nullable("ReplayDataOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "ReplayData")
				// Syntetic relation
				const bindRelation = { replaySetId: Number(root.id) }
				if (Object.keys(where).length) {
					const [count, data] = await ctx.prisma.$transaction([
						ctx.prisma.replayData.count({ where: { ...where, ...bindRelation }, orderBy }),
						ctx.prisma.replayData.findMany({ where: { ...where, ...bindRelation }, skip, take, orderBy })
					])
					return { count, data }
				}
				const [count, data] = await ctx.prisma.$transaction([
					ctx.prisma.replayData.count({ where: bindRelation }),
					ctx.prisma.replayData.findMany({ where: bindRelation, orderBy, skip, take })
				])
				return { count, data }
			}
		})

	}
})

export const ReportingModel = objectType({
	name: "ReportingModel",
	definition(t) {
		t.field("data", {
			type: list("Reporting"),
		})
		t.field("count", {
			type: "Int"
		})
	}
})

export const ReportingConstant = objectType({
	name: "Reporting",
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
		t.nullable.field("deviceInstance", {
			type: "DeviceInstance",
			args: {
				deviceInstanceWhere: nullable("DeviceInstanceWhere"),
				deviceInstanceSkip: nullable("Int"),
				deviceInstanceTake: nullable("Int"),
				deviceInstanceOrderBy: nullable("DeviceInstanceOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where } = prepareConditions < typeof args > (args, "DeviceInstance")
				// Regular relation
				const bindRelation = { id: Number(root.devId) }
				if (Object.keys(where).length) return await ctx.prisma.deviceInstance.findFirst({ where: { ...where, ...bindRelation } })
				return await ctx.prisma.deviceInstance.findFirst({ where: bindRelation })
			}
		})

	}
})

export const ReportingConfigModel = objectType({
	name: "ReportingConfigModel",
	definition(t) {
		t.field("data", {
			type: list("ReportingConfig"),
		})
		t.field("count", {
			type: "Int"
		})
	}
})

export const ReportingConfigConstant = objectType({
	name: "ReportingConfig",
	definition(t) {
		t.int("id")
		t.nullable.json("trigger")
		t.nullable.json("valueMap")
		t.nullable.json("summaryAccess")
		t.nullable.int("devId")
		t.nullable.field("deviceInstance", {
			type: "DeviceInstance",
			args: {
				deviceInstanceWhere: nullable("DeviceInstanceWhere"),
				deviceInstanceSkip: nullable("Int"),
				deviceInstanceTake: nullable("Int"),
				deviceInstanceOrderBy: nullable("DeviceInstanceOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where } = prepareConditions < typeof args > (args, "DeviceInstance")
				// Regular relation
				const bindRelation = { id: Number(root.devId) }
				if (Object.keys(where).length) return await ctx.prisma.deviceInstance.findFirst({ where: { ...where, ...bindRelation } })
				return await ctx.prisma.deviceInstance.findFirst({ where: bindRelation })
			}
		})

	}
})

export const RepresentationModel = objectType({
	name: "RepresentationModel",
	definition(t) {
		t.field("data", {
			type: list("Representation"),
		})
		t.field("count", {
			type: "Int"
		})
	}
})

export const RepresentationConstant = objectType({
	name: "Representation",
	definition(t) {
		t.int("id")
		t.nullable.string("name")
		t.nullable.string("description")

	}
})

export const RolePrivilegeModel = objectType({
	name: "RolePrivilegeModel",
	definition(t) {
		t.field("data", {
			type: list("RolePrivilege"),
		})
		t.field("count", {
			type: "Int"
		})
	}
})

export const RolePrivilegeConstant = objectType({
	name: "RolePrivilege",
	definition(t) {
		t.int("id")
		t.nullable.int("roleId")
		t.nullable.int("privilegeId")
		t.nullable.field("privilege", {
			type: "Privilege",
			args: {
				privilegeWhere: nullable("PrivilegeWhere"),
				privilegeSkip: nullable("Int"),
				privilegeTake: nullable("Int"),
				privilegeOrderBy: nullable("PrivilegeOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where } = prepareConditions < typeof args > (args, "Privilege")
				// Regular relation
				const bindRelation = { id: Number(root.privilegeId) }
				if (Object.keys(where).length) return await ctx.prisma.privilege.findFirst({ where: { ...where, ...bindRelation } })
				return await ctx.prisma.privilege.findFirst({ where: bindRelation })
			}
		})
		t.nullable.field("role", {
			type: "Role",
			args: {
				roleWhere: nullable("RoleWhere"),
				roleSkip: nullable("Int"),
				roleTake: nullable("Int"),
				roleOrderBy: nullable("RoleOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where } = prepareConditions < typeof args > (args, "Role")
				// Regular relation
				const bindRelation = { id: Number(root.roleId) }
				if (Object.keys(where).length) return await ctx.prisma.role.findFirst({ where: { ...where, ...bindRelation } })
				return await ctx.prisma.role.findFirst({ where: bindRelation })
			}
		})

	}
})

export const RoleModel = objectType({
	name: "RoleModel",
	definition(t) {
		t.field("data", {
			type: list("Role"),
		})
		t.field("count", {
			type: "Int"
		})
	}
})

export const RoleConstant = objectType({
	name: "Role",
	definition(t) {
		t.int("id")
		t.nullable.string("name")
		t.nullable.boolean("system")
		t.nullable.string("description")
		t.field("rolePrivileges", {
			type: "RolePrivilegeModel",
			args: {
				rolePrivilegeWhere: nullable("RolePrivilegeWhere"),
				rolePrivilegeSkip: nullable("Int"),
				rolePrivilegeTake: nullable("Int"),
				rolePrivilegeOrderBy: nullable("RolePrivilegeOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "RolePrivilege")
				// Syntetic relation
				const bindRelation = { roleId: Number(root.id) }
				if (Object.keys(where).length) {
					const [count, data] = await ctx.prisma.$transaction([
						ctx.prisma.rolePrivilege.count({ where: { ...where, ...bindRelation }, orderBy }),
						ctx.prisma.rolePrivilege.findMany({ where: { ...where, ...bindRelation }, skip, take, orderBy })
					])
					return { count, data }
				}
				const [count, data] = await ctx.prisma.$transaction([
					ctx.prisma.rolePrivilege.count({ where: bindRelation }),
					ctx.prisma.rolePrivilege.findMany({ where: bindRelation, orderBy, skip, take })
				])
				return { count, data }
			}
		})
		t.field("userRoles", {
			type: "UserRoleModel",
			args: {
				userRoleWhere: nullable("UserRoleWhere"),
				userRoleSkip: nullable("Int"),
				userRoleTake: nullable("Int"),
				userRoleOrderBy: nullable("UserRoleOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "UserRole")
				// Syntetic relation
				const bindRelation = { roleId: Number(root.id) }
				if (Object.keys(where).length) {
					const [count, data] = await ctx.prisma.$transaction([
						ctx.prisma.userRole.count({ where: { ...where, ...bindRelation }, orderBy }),
						ctx.prisma.userRole.findMany({ where: { ...where, ...bindRelation }, skip, take, orderBy })
					])
					return { count, data }
				}
				const [count, data] = await ctx.prisma.$transaction([
					ctx.prisma.userRole.count({ where: bindRelation }),
					ctx.prisma.userRole.findMany({ where: bindRelation, orderBy, skip, take })
				])
				return { count, data }
			}
		})
		t.field("tasks", {
			type: "TaskModel",
			args: {
				taskWhere: nullable("TaskWhere"),
				taskSkip: nullable("Int"),
				taskTake: nullable("Int"),
				taskOrderBy: nullable("TaskOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "Task")
				// Syntetic relation
				const bindRelation = { roleId: Number(root.id) }
				if (Object.keys(where).length) {
					const [count, data] = await ctx.prisma.$transaction([
						ctx.prisma.task.count({ where: { ...where, ...bindRelation }, orderBy }),
						ctx.prisma.task.findMany({ where: { ...where, ...bindRelation }, skip, take, orderBy })
					])
					return { count, data }
				}
				const [count, data] = await ctx.prisma.$transaction([
					ctx.prisma.task.count({ where: bindRelation }),
					ctx.prisma.task.findMany({ where: bindRelation, orderBy, skip, take })
				])
				return { count, data }
			}
		})

	}
})

export const SoftwareAdapterModel = objectType({
	name: "SoftwareAdapterModel",
	definition(t) {
		t.field("data", {
			type: list("SoftwareAdapter"),
		})
		t.field("count", {
			type: "Int"
		})
	}
})

export const SoftwareAdapterConstant = objectType({
	name: "SoftwareAdapter",
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
		t.field("vendors", {
			type: "Vendor",
			args: {
				vendorWhere: nullable("VendorWhere"),
				vendorSkip: nullable("Int"),
				vendorTake: nullable("Int"),
				vendorOrderBy: nullable("VendorOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where } = prepareConditions < typeof args > (args, "Vendor")
				// Regular relation
				const bindRelation = { id: Number(root.vendorId) }
				if (Object.keys(where).length) return await ctx.prisma.vendor.findFirst({ where: { ...where, ...bindRelation } })
				return await ctx.prisma.vendor.findFirst({ where: bindRelation })
			}
		})
		t.field("mainDeviceClasses", {
			type: "MainDeviceClassModel",
			args: {
				mainDeviceClassWhere: nullable("MainDeviceClassWhere"),
				mainDeviceClassSkip: nullable("Int"),
				mainDeviceClassTake: nullable("Int"),
				mainDeviceClassOrderBy: nullable("MainDeviceClassOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "MainDeviceClass")
				// Syntetic relation
				const bindRelation = { softwareAdapterId: Number(root.id) }
				if (Object.keys(where).length) {
					const [count, data] = await ctx.prisma.$transaction([
						ctx.prisma.mainDeviceClass.count({ where: { ...where, ...bindRelation }, orderBy }),
						ctx.prisma.mainDeviceClass.findMany({ where: { ...where, ...bindRelation }, skip, take, orderBy })
					])
					return { count, data }
				}
				const [count, data] = await ctx.prisma.$transaction([
					ctx.prisma.mainDeviceClass.count({ where: bindRelation }),
					ctx.prisma.mainDeviceClass.findMany({ where: bindRelation, orderBy, skip, take })
				])
				return { count, data }
			}
		})

	}
})

export const TimeseriesModel = objectType({
	name: "TimeseriesModel",
	definition(t) {
		t.field("data", {
			type: list("Timeseries"),
		})
		t.field("count", {
			type: "Int"
		})
	}
})

export const TimeseriesConstant = objectType({
	name: "Timeseries",
	definition(t) {
		t.int("id")
		t.nullable.int("devId")
		t.nullable.string("name")
		t.nullable.field("deviceInstance", {
			type: "DeviceInstance",
			args: {
				deviceInstanceWhere: nullable("DeviceInstanceWhere"),
				deviceInstanceSkip: nullable("Int"),
				deviceInstanceTake: nullable("Int"),
				deviceInstanceOrderBy: nullable("DeviceInstanceOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where } = prepareConditions < typeof args > (args, "DeviceInstance")
				// Regular relation
				const bindRelation = { id: Number(root.devId) }
				if (Object.keys(where).length) return await ctx.prisma.deviceInstance.findFirst({ where: { ...where, ...bindRelation } })
				return await ctx.prisma.deviceInstance.findFirst({ where: bindRelation })
			}
		})
		t.field("timeseriesData", {
			type: "TimeseriesDataModel",
			args: {
				timeseriesDataWhere: nullable("TimeseriesDataWhere"),
				timeseriesDataSkip: nullable("Int"),
				timeseriesDataTake: nullable("Int"),
				timeseriesDataOrderBy: nullable("TimeseriesDataOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "TimeseriesData")
				// Syntetic relation
				const bindRelation = { timeseriesId: Number(root.id) }
				if (Object.keys(where).length) {
					const [count, data] = await ctx.prisma.$transaction([
						ctx.prisma.timeseriesData.count({ where: { ...where, ...bindRelation }, orderBy }),
						ctx.prisma.timeseriesData.findMany({ where: { ...where, ...bindRelation }, skip, take, orderBy })
					])
					return { count, data }
				}
				const [count, data] = await ctx.prisma.$transaction([
					ctx.prisma.timeseriesData.count({ where: bindRelation }),
					ctx.prisma.timeseriesData.findMany({ where: bindRelation, orderBy, skip, take })
				])
				return { count, data }
			}
		})

	}
})

export const TimeseriesDataModel = objectType({
	name: "TimeseriesDataModel",
	definition(t) {
		t.field("data", {
			type: list("TimeseriesData"),
		})
		t.field("count", {
			type: "Int"
		})
	}
})

export const TimeseriesDataConstant = objectType({
	name: "TimeseriesData",
	definition(t) {
		t.int("id")
		t.nullable.int("timeseriesId")
		t.nullable.int("devId")
		t.dateTime("timestampStart")
		t.nullable.decimal("value")
		t.nullable.field("deviceInstance", {
			type: "DeviceInstance",
			args: {
				deviceInstanceWhere: nullable("DeviceInstanceWhere"),
				deviceInstanceSkip: nullable("Int"),
				deviceInstanceTake: nullable("Int"),
				deviceInstanceOrderBy: nullable("DeviceInstanceOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where } = prepareConditions < typeof args > (args, "DeviceInstance")
				// Regular relation
				const bindRelation = { id: Number(root.devId) }
				if (Object.keys(where).length) return await ctx.prisma.deviceInstance.findFirst({ where: { ...where, ...bindRelation } })
				return await ctx.prisma.deviceInstance.findFirst({ where: bindRelation })
			}
		})
		t.nullable.field("timeseries", {
			type: "Timeseries",
			args: {
				timeseriesWhere: nullable("TimeseriesWhere"),
				timeseriesSkip: nullable("Int"),
				timeseriesTake: nullable("Int"),
				timeseriesOrderBy: nullable("TimeseriesOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where } = prepareConditions < typeof args > (args, "Timeseries")
				// Regular relation
				const bindRelation = { id: Number(root.timeseriesId) }
				if (Object.keys(where).length) return await ctx.prisma.timeseries.findFirst({ where: { ...where, ...bindRelation } })
				return await ctx.prisma.timeseries.findFirst({ where: bindRelation })
			}
		})

	}
})

export const TimeseriesDataHourAggregateModel = objectType({
	name: "TimeseriesDataHourAggregateModel",
	definition(t) {
		t.field("data", {
			type: list("TimeseriesDataHourAggregate"),
		})
		t.field("count", {
			type: "Int"
		})
	}
})

export const TimeseriesDataHourAggregateConstant = objectType({
	name: "TimeseriesDataHourAggregate",
	definition(t) {
		t.int("id")
		t.dateTime("timestamp")
		t.nullable.int("devId")
		t.nullable.int("timeseriesId")
		t.nullable.int("value")
		t.nullable.field("deviceInstance", {
			type: "DeviceInstance",
			args: {
				deviceInstanceWhere: nullable("DeviceInstanceWhere"),
				deviceInstanceSkip: nullable("Int"),
				deviceInstanceTake: nullable("Int"),
				deviceInstanceOrderBy: nullable("DeviceInstanceOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where } = prepareConditions < typeof args > (args, "DeviceInstance")
				// Regular relation
				const bindRelation = { id: Number(root.devId) }
				if (Object.keys(where).length) return await ctx.prisma.deviceInstance.findFirst({ where: { ...where, ...bindRelation } })
				return await ctx.prisma.deviceInstance.findFirst({ where: bindRelation })
			}
		})

	}
})

export const UpdaterConfigModel = objectType({
	name: "UpdaterConfigModel",
	definition(t) {
		t.field("data", {
			type: list("UpdaterConfig"),
		})
		t.field("count", {
			type: "Int"
		})
	}
})

export const UpdaterConfigConstant = objectType({
	name: "UpdaterConfig",
	definition(t) {
		t.int("id")
		t.nullable.int("interval")
		t.nullable.string("indices")
		t.nullable.int("devId")
		t.nullable.field("deviceInstance", {
			type: "DeviceInstance",
			args: {
				deviceInstanceWhere: nullable("DeviceInstanceWhere"),
				deviceInstanceSkip: nullable("Int"),
				deviceInstanceTake: nullable("Int"),
				deviceInstanceOrderBy: nullable("DeviceInstanceOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where } = prepareConditions < typeof args > (args, "DeviceInstance")
				// Regular relation
				const bindRelation = { id: Number(root.devId) }
				if (Object.keys(where).length) return await ctx.prisma.deviceInstance.findFirst({ where: { ...where, ...bindRelation } })
				return await ctx.prisma.deviceInstance.findFirst({ where: bindRelation })
			}
		})

	}
})

export const UserRoleModel = objectType({
	name: "UserRoleModel",
	definition(t) {
		t.field("data", {
			type: list("UserRole"),
		})
		t.field("count", {
			type: "Int"
		})
	}
})

export const UserRoleConstant = objectType({
	name: "UserRole",
	definition(t) {
		t.int("id")
		t.nullable.int("userId")
		t.nullable.int("roleId")
		t.nullable.field("roles", {
			type: "Role",
			args: {
				roleWhere: nullable("RoleWhere"),
				roleSkip: nullable("Int"),
				roleTake: nullable("Int"),
				roleOrderBy: nullable("RoleOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where } = prepareConditions < typeof args > (args, "Role")
				// Regular relation
				const bindRelation = { id: Number(root.roleId) }
				if (Object.keys(where).length) return await ctx.prisma.role.findFirst({ where: { ...where, ...bindRelation } })
				return await ctx.prisma.role.findFirst({ where: bindRelation })
			}
		})
		t.nullable.field("user", {
			type: "User",
			args: {
				userWhere: nullable("UserWhere"),
				userSkip: nullable("Int"),
				userTake: nullable("Int"),
				userOrderBy: nullable("UserOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where } = prepareConditions < typeof args > (args, "User")
				// Regular relation
				const bindRelation = { id: Number(root.userId) }
				if (Object.keys(where).length) return await ctx.prisma.user.findFirst({ where: { ...where, ...bindRelation } })
				return await ctx.prisma.user.findFirst({ where: bindRelation })
			}
		})

	}
})

export const UserModel = objectType({
	name: "UserModel",
	definition(t) {
		t.field("data", {
			type: list("User"),
		})
		t.field("count", {
			type: "Int"
		})
	}
})

export const UserConstant = objectType({
	name: "User",
	definition(t) {
		t.int("id")
		t.nullable.string("user")
		t.nullable.string("firstname")
		t.nullable.string("lastname")
		t.nullable.string("email")
		t.nullable.boolean("system")
		t.field("activeEventInstances", {
			type: "ActiveEventInstanceModel",
			args: {
				activeEventInstanceWhere: nullable("ActiveEventInstanceWhere"),
				activeEventInstanceSkip: nullable("Int"),
				activeEventInstanceTake: nullable("Int"),
				activeEventInstanceOrderBy: nullable("ActiveEventInstanceOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "ActiveEventInstance")
				// Syntetic relation
				const bindRelation = { userId: Number(root.id) }
				if (Object.keys(where).length) {
					const [count, data] = await ctx.prisma.$transaction([
						ctx.prisma.activeEventInstance.count({ where: { ...where, ...bindRelation }, orderBy }),
						ctx.prisma.activeEventInstance.findMany({ where: { ...where, ...bindRelation }, skip, take, orderBy })
					])
					return { count, data }
				}
				const [count, data] = await ctx.prisma.$transaction([
					ctx.prisma.activeEventInstance.count({ where: bindRelation }),
					ctx.prisma.activeEventInstance.findMany({ where: bindRelation, orderBy, skip, take })
				])
				return { count, data }
			}
		})
		t.field("deviceInstances", {
			type: "DeviceInstanceModel",
			args: {
				deviceInstanceWhere: nullable("DeviceInstanceWhere"),
				deviceInstanceSkip: nullable("Int"),
				deviceInstanceTake: nullable("Int"),
				deviceInstanceOrderBy: nullable("DeviceInstanceOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "DeviceInstance")
				// Syntetic relation
				const bindRelation = { userId: Number(root.id) }
				if (Object.keys(where).length) {
					const [count, data] = await ctx.prisma.$transaction([
						ctx.prisma.deviceInstance.count({ where: { ...where, ...bindRelation }, orderBy }),
						ctx.prisma.deviceInstance.findMany({ where: { ...where, ...bindRelation }, skip, take, orderBy })
					])
					return { count, data }
				}
				const [count, data] = await ctx.prisma.$transaction([
					ctx.prisma.deviceInstance.count({ where: bindRelation }),
					ctx.prisma.deviceInstance.findMany({ where: bindRelation, orderBy, skip, take })
				])
				return { count, data }
			}
		})
		t.field("eventInstances", {
			type: "EventInstanceModel",
			args: {
				eventInstanceWhere: nullable("EventInstanceWhere"),
				eventInstanceSkip: nullable("Int"),
				eventInstanceTake: nullable("Int"),
				eventInstanceOrderBy: nullable("EventInstanceOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "EventInstance")
				// Syntetic relation
				const bindRelation = { userId: Number(root.id) }
				if (Object.keys(where).length) {
					const [count, data] = await ctx.prisma.$transaction([
						ctx.prisma.eventInstance.count({ where: { ...where, ...bindRelation }, orderBy }),
						ctx.prisma.eventInstance.findMany({ where: { ...where, ...bindRelation }, skip, take, orderBy })
					])
					return { count, data }
				}
				const [count, data] = await ctx.prisma.$transaction([
					ctx.prisma.eventInstance.count({ where: bindRelation }),
					ctx.prisma.eventInstance.findMany({ where: bindRelation, orderBy, skip, take })
				])
				return { count, data }
			}
		})
		t.field("assignedMaintenances", {
			type: "MaintenanceModel",
			args: {
				maintenanceWhere: nullable("MaintenanceWhere"),
				maintenanceSkip: nullable("Int"),
				maintenanceTake: nullable("Int"),
				maintenanceOrderBy: nullable("MaintenanceOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "Maintenance")
				// Syntetic relation
				const bindRelation = { assigneeId: Number(root.id) }
				if (Object.keys(where).length) {
					const [count, data] = await ctx.prisma.$transaction([
						ctx.prisma.maintenance.count({ where: { ...where, ...bindRelation }, orderBy }),
						ctx.prisma.maintenance.findMany({ where: { ...where, ...bindRelation }, skip, take, orderBy })
					])
					return { count, data }
				}
				const [count, data] = await ctx.prisma.$transaction([
					ctx.prisma.maintenance.count({ where: bindRelation }),
					ctx.prisma.maintenance.findMany({ where: bindRelation, orderBy, skip, take })
				])
				return { count, data }
			}
		})
		t.field("fixedMaintenances", {
			type: "MaintenanceModel",
			args: {
				maintenanceWhere: nullable("MaintenanceWhere"),
				maintenanceSkip: nullable("Int"),
				maintenanceTake: nullable("Int"),
				maintenanceOrderBy: nullable("MaintenanceOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "Maintenance")
				// Syntetic relation
				const bindRelation = { assigneeId: Number(root.id) }
				if (Object.keys(where).length) {
					const [count, data] = await ctx.prisma.$transaction([
						ctx.prisma.maintenance.count({ where: { ...where, ...bindRelation }, orderBy }),
						ctx.prisma.maintenance.findMany({ where: { ...where, ...bindRelation }, skip, take, orderBy })
					])
					return { count, data }
				}
				const [count, data] = await ctx.prisma.$transaction([
					ctx.prisma.maintenance.count({ where: bindRelation }),
					ctx.prisma.maintenance.findMany({ where: bindRelation, orderBy, skip, take })
				])
				return { count, data }
			}
		})
		t.field("userRoles", {
			type: "UserRoleModel",
			args: {
				userRoleWhere: nullable("UserRoleWhere"),
				userRoleSkip: nullable("Int"),
				userRoleTake: nullable("Int"),
				userRoleOrderBy: nullable("UserRoleOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "UserRole")
				// Syntetic relation
				const bindRelation = { userId: Number(root.id) }
				if (Object.keys(where).length) {
					const [count, data] = await ctx.prisma.$transaction([
						ctx.prisma.userRole.count({ where: { ...where, ...bindRelation }, orderBy }),
						ctx.prisma.userRole.findMany({ where: { ...where, ...bindRelation }, skip, take, orderBy })
					])
					return { count, data }
				}
				const [count, data] = await ctx.prisma.$transaction([
					ctx.prisma.userRole.count({ where: bindRelation }),
					ctx.prisma.userRole.findMany({ where: bindRelation, orderBy, skip, take })
				])
				return { count, data }
			}
		})

	}
})

export const VendorModel = objectType({
	name: "VendorModel",
	definition(t) {
		t.field("data", {
			type: list("Vendor"),
		})
		t.field("count", {
			type: "Int"
		})
	}
})

export const VendorConstant = objectType({
	name: "Vendor",
	definition(t) {
		t.bigInt("id")
		t.nullable.string("name")
		t.nullable.string("text")
		t.nullable.string("url")
		t.nullable.string("logo")
		t.field("deviceClasses", {
			type: "DeviceClassModel",
			args: {
				deviceClassWhere: nullable("DeviceClassWhere"),
				deviceClassSkip: nullable("Int"),
				deviceClassTake: nullable("Int"),
				deviceClassOrderBy: nullable("DeviceClassOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "DeviceClass")
				// Syntetic relation
				const bindRelation = { vendorId: Number(root.id) }
				if (Object.keys(where).length) {
					const [count, data] = await ctx.prisma.$transaction([
						ctx.prisma.deviceClass.count({ where: { ...where, ...bindRelation }, orderBy }),
						ctx.prisma.deviceClass.findMany({ where: { ...where, ...bindRelation }, skip, take, orderBy })
					])
					return { count, data }
				}
				const [count, data] = await ctx.prisma.$transaction([
					ctx.prisma.deviceClass.count({ where: bindRelation }),
					ctx.prisma.deviceClass.findMany({ where: bindRelation, orderBy, skip, take })
				])
				return { count, data }
			}
		})
		t.field("softwareAdapters", {
			type: "SoftwareAdapterModel",
			args: {
				softwareAdapterWhere: nullable("SoftwareAdapterWhere"),
				softwareAdapterSkip: nullable("Int"),
				softwareAdapterTake: nullable("Int"),
				softwareAdapterOrderBy: nullable("SoftwareAdapterOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "SoftwareAdapter")
				// Syntetic relation
				const bindRelation = { vendorId: Number(root.id) }
				if (Object.keys(where).length) {
					const [count, data] = await ctx.prisma.$transaction([
						ctx.prisma.softwareAdapter.count({ where: { ...where, ...bindRelation }, orderBy }),
						ctx.prisma.softwareAdapter.findMany({ where: { ...where, ...bindRelation }, skip, take, orderBy })
					])
					return { count, data }
				}
				const [count, data] = await ctx.prisma.$transaction([
					ctx.prisma.softwareAdapter.count({ where: bindRelation }),
					ctx.prisma.softwareAdapter.findMany({ where: bindRelation, orderBy, skip, take })
				])
				return { count, data }
			}
		})

	}
})

export const XConfigModel = objectType({
	name: "XConfigModel",
	definition(t) {
		t.field("data", {
			type: list("XConfig"),
		})
		t.field("count", {
			type: "Int"
		})
	}
})

export const XConfigConstant = objectType({
	name: "XConfig",
	definition(t) {
		t.int("id")
		t.nullable.json("valueMap")
		t.nullable.boolean("automaticReadForEvents")
		t.nullable.boolean("automaticReadForReporting")
		t.nullable.int("devId")
		t.nullable.field("deviceInstances", {
			type: "DeviceInstance",
			args: {
				deviceInstanceWhere: nullable("DeviceInstanceWhere"),
				deviceInstanceSkip: nullable("Int"),
				deviceInstanceTake: nullable("Int"),
				deviceInstanceOrderBy: nullable("DeviceInstanceOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where } = prepareConditions < typeof args > (args, "DeviceInstance")
				// Regular relation
				const bindRelation = { id: Number(root.devId) }
				if (Object.keys(where).length) return await ctx.prisma.deviceInstance.findFirst({ where: { ...where, ...bindRelation } })
				return await ctx.prisma.deviceInstance.findFirst({ where: bindRelation })
			}
		})

	}
})

export const ExtrapolationFunctionModel = objectType({
	name: "ExtrapolationFunctionModel",
	definition(t) {
		t.field("data", {
			type: list("ExtrapolationFunction"),
		})
		t.field("count", {
			type: "Int"
		})
	}
})

export const ExtrapolationFunctionConstant = objectType({
	name: "ExtrapolationFunction",
	definition(t) {
		t.int("id")
		t.nullable.string("name")
		t.field("predictionConfigs", {
			type: "PredictionConfigModel",
			args: {
				predictionConfigWhere: nullable("PredictionConfigWhere"),
				predictionConfigSkip: nullable("Int"),
				predictionConfigTake: nullable("Int"),
				predictionConfigOrderBy: nullable("PredictionConfigOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "PredictionConfig")
				// Syntetic relation
				const bindRelation = { extrapolationFunctionId: Number(root.id) }
				if (Object.keys(where).length) {
					const [count, data] = await ctx.prisma.$transaction([
						ctx.prisma.predictionConfig.count({ where: { ...where, ...bindRelation }, orderBy }),
						ctx.prisma.predictionConfig.findMany({ where: { ...where, ...bindRelation }, skip, take, orderBy })
					])
					return { count, data }
				}
				const [count, data] = await ctx.prisma.$transaction([
					ctx.prisma.predictionConfig.count({ where: bindRelation }),
					ctx.prisma.predictionConfig.findMany({ where: bindRelation, orderBy, skip, take })
				])
				return { count, data }
			}
		})

	}
})

export const PredictionConfigModel = objectType({
	name: "PredictionConfigModel",
	definition(t) {
		t.field("data", {
			type: list("PredictionConfig"),
		})
		t.field("count", {
			type: "Int"
		})
	}
})

export const PredictionConfigConstant = objectType({
	name: "PredictionConfig",
	definition(t) {
		t.int("id", {
			description: `@zod.nullable()`
		})
		t.int("identifier")
		t.nullable.string("rangeAttribute")
		t.nullable.dateTime("rangeStart")
		t.nullable.dateTime("rangeEnd")
		t.json("indexPreviousMaintenanceDate")
		t.nullable.json("indexMaxTimeBetweenMaintenances")
		t.json("indexPerformMaintenance")
		t.nullable.json("maxValue", {
			description: "@zod.custom(z.object({}).nullish())"
		})
		t.nullable.json("currentValue", {
			description: "@zod.custom(z.object({}).nullish())"
		})
		t.nullable.string("type")
		t.int("deviceClassId")
		t.int("extrapolationFunctionId")
		t.int("maintenanceTypeId")
		t.field("deviceClass", {
			type: "DeviceClass",
			args: {
				deviceClassWhere: nullable("DeviceClassWhere"),
				deviceClassSkip: nullable("Int"),
				deviceClassTake: nullable("Int"),
				deviceClassOrderBy: nullable("DeviceClassOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where } = prepareConditions < typeof args > (args, "DeviceClass")
				// Regular relation
				const bindRelation = { id: Number(root.deviceClassId) }
				if (Object.keys(where).length) return await ctx.prisma.deviceClass.findFirst({ where: { ...where, ...bindRelation } })
				return await ctx.prisma.deviceClass.findFirst({ where: bindRelation })
			}
		})
		t.field("extrapolationFunction", {
			type: "ExtrapolationFunction",
			args: {
				extrapolationFunctionWhere: nullable("ExtrapolationFunctionWhere"),
				extrapolationFunctionSkip: nullable("Int"),
				extrapolationFunctionTake: nullable("Int"),
				extrapolationFunctionOrderBy: nullable("ExtrapolationFunctionOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where } = prepareConditions < typeof args > (args, "ExtrapolationFunction")
				// Regular relation
				const bindRelation = { id: Number(root.extrapolationFunctionId) }
				if (Object.keys(where).length) return await ctx.prisma.extrapolationFunction.findFirst({ where: { ...where, ...bindRelation } })
				return await ctx.prisma.extrapolationFunction.findFirst({ where: bindRelation })
			}
		})
		t.field("maintenanceType", {
			type: "MaintenanceType",
			args: {
				maintenanceTypeWhere: nullable("MaintenanceTypeWhere"),
				maintenanceTypeSkip: nullable("Int"),
				maintenanceTypeTake: nullable("Int"),
				maintenanceTypeOrderBy: nullable("MaintenanceTypeOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where } = prepareConditions < typeof args > (args, "MaintenanceType")
				// Regular relation
				const bindRelation = { id: Number(root.maintenanceTypeId) }
				if (Object.keys(where).length) return await ctx.prisma.maintenanceType.findFirst({ where: { ...where, ...bindRelation } })
				return await ctx.prisma.maintenanceType.findFirst({ where: bindRelation })
			}
		})
		t.field("maintenances", {
			type: "MaintenanceModel",
			args: {
				maintenanceWhere: nullable("MaintenanceWhere"),
				maintenanceSkip: nullable("Int"),
				maintenanceTake: nullable("Int"),
				maintenanceOrderBy: nullable("MaintenanceOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "Maintenance")
				// Syntetic relation
				const bindRelation = { predictionConfigId: Number(root.id) }
				if (Object.keys(where).length) {
					const [count, data] = await ctx.prisma.$transaction([
						ctx.prisma.maintenance.count({ where: { ...where, ...bindRelation }, orderBy }),
						ctx.prisma.maintenance.findMany({ where: { ...where, ...bindRelation }, skip, take, orderBy })
					])
					return { count, data }
				}
				const [count, data] = await ctx.prisma.$transaction([
					ctx.prisma.maintenance.count({ where: bindRelation }),
					ctx.prisma.maintenance.findMany({ where: bindRelation, orderBy, skip, take })
				])
				return { count, data }
			}
		})

	}
})

export const MaintenanceModel = objectType({
	name: "MaintenanceModel",
	definition(t) {
		t.field("data", {
			type: list("Maintenance"),
		})
		t.field("count", {
			type: "Int"
		})
	}
})

export const MaintenanceConstant = objectType({
	name: "Maintenance",
	definition(t) {
		t.int("id")
		t.nullable.string("action", {
			description: `the action the user has taken to fix the problem`
		})
		t.dateTime("dueDate")
		t.nullable.dateTime("maintenanceStartDate")
		t.nullable.dateTime("maintenanceEndDate")
		t.dateTime("createdAt")
		t.nullable.dateTime("updatedAt")
		t.nullable.int("assigneeId")
		t.nullable.field("assignee", {
			type: "User",
			args: {
				userWhere: nullable("UserWhere"),
				userSkip: nullable("Int"),
				userTake: nullable("Int"),
				userOrderBy: nullable("UserOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where } = prepareConditions < typeof args > (args, "User")
				// Regular relation
				const bindRelation = { id: Number(root.assigneeId) }
				if (Object.keys(where).length) return await ctx.prisma.user.findFirst({ where: { ...where, ...bindRelation } })
				return await ctx.prisma.user.findFirst({ where: bindRelation })
			}
		})
		t.nullable.int("deviceInstanceId")
		t.nullable.field("deviceInstance", {
			type: "DeviceInstance",
			args: {
				deviceInstanceWhere: nullable("DeviceInstanceWhere"),
				deviceInstanceSkip: nullable("Int"),
				deviceInstanceTake: nullable("Int"),
				deviceInstanceOrderBy: nullable("DeviceInstanceOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where } = prepareConditions < typeof args > (args, "DeviceInstance")
				// Regular relation
				const bindRelation = { id: Number(root.deviceInstanceId) }
				if (Object.keys(where).length) return await ctx.prisma.deviceInstance.findFirst({ where: { ...where, ...bindRelation } })
				return await ctx.prisma.deviceInstance.findFirst({ where: bindRelation })
			}
		})
		t.nullable.int("fixedByUserId")
		t.nullable.field("fixedByUser", {
			type: "User",
			args: {
				userWhere: nullable("UserWhere"),
				userSkip: nullable("Int"),
				userTake: nullable("Int"),
				userOrderBy: nullable("UserOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where } = prepareConditions < typeof args > (args, "User")
				// Regular relation
				const bindRelation = { id: Number(root.fixedByUserId) }
				if (Object.keys(where).length) return await ctx.prisma.user.findFirst({ where: { ...where, ...bindRelation } })
				return await ctx.prisma.user.findFirst({ where: bindRelation })
			}
		})
		t.nullable.int("predictionConfigId")
		t.nullable.field("predictionConfig", {
			type: "PredictionConfig",
			args: {
				predictionConfigWhere: nullable("PredictionConfigWhere"),
				predictionConfigSkip: nullable("Int"),
				predictionConfigTake: nullable("Int"),
				predictionConfigOrderBy: nullable("PredictionConfigOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where } = prepareConditions < typeof args > (args, "PredictionConfig")
				// Regular relation
				const bindRelation = { id: Number(root.predictionConfigId) }
				if (Object.keys(where).length) return await ctx.prisma.predictionConfig.findFirst({ where: { ...where, ...bindRelation } })
				return await ctx.prisma.predictionConfig.findFirst({ where: bindRelation })
			}
		})
		t.nullable.int("maintenanceTypeId")
		t.nullable.field("maintenanceType", {
			type: "MaintenanceType",
			args: {
				maintenanceTypeWhere: nullable("MaintenanceTypeWhere"),
				maintenanceTypeSkip: nullable("Int"),
				maintenanceTypeTake: nullable("Int"),
				maintenanceTypeOrderBy: nullable("MaintenanceTypeOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where } = prepareConditions < typeof args > (args, "MaintenanceType")
				// Regular relation
				const bindRelation = { id: Number(root.maintenanceTypeId) }
				if (Object.keys(where).length) return await ctx.prisma.maintenanceType.findFirst({ where: { ...where, ...bindRelation } })
				return await ctx.prisma.maintenanceType.findFirst({ where: bindRelation })
			}
		})

	}
})

export const MaintenanceTypeModel = objectType({
	name: "MaintenanceTypeModel",
	definition(t) {
		t.field("data", {
			type: list("MaintenanceType"),
		})
		t.field("count", {
			type: "Int"
		})
	}
})

export const MaintenanceTypeConstant = objectType({
	name: "MaintenanceType",
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
		t.nullable.field("deviceClass", {
			type: "DeviceClass",
			args: {
				deviceClassWhere: nullable("DeviceClassWhere"),
				deviceClassSkip: nullable("Int"),
				deviceClassTake: nullable("Int"),
				deviceClassOrderBy: nullable("DeviceClassOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where } = prepareConditions < typeof args > (args, "DeviceClass")
				// Regular relation
				const bindRelation = { id: Number(root.deviceClassId) }
				if (Object.keys(where).length) return await ctx.prisma.deviceClass.findFirst({ where: { ...where, ...bindRelation } })
				return await ctx.prisma.deviceClass.findFirst({ where: bindRelation })
			}
		})
		t.nullable.field("maintenanceConfig", {
			type: "MaintenanceConfig",
			args: {
				maintenanceConfigWhere: nullable("MaintenanceConfigWhere"),
				maintenanceConfigSkip: nullable("Int"),
				maintenanceConfigTake: nullable("Int"),
				maintenanceConfigOrderBy: nullable("MaintenanceConfigOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where } = prepareConditions < typeof args > (args, "MaintenanceConfig")
				// Syntetic relation
				const bindRelation = { maintenanceTypeId: Number(root.id) }
				if (Object.keys(where).length) return await ctx.prisma.maintenanceConfig.findFirst({ where: { ...where, ...bindRelation } })
				return await ctx.prisma.maintenanceConfig.findFirst({ where: bindRelation })
			}
		})
		t.nullable.field("predictionConfig", {
			type: "PredictionConfig",
			args: {
				predictionConfigWhere: nullable("PredictionConfigWhere"),
				predictionConfigSkip: nullable("Int"),
				predictionConfigTake: nullable("Int"),
				predictionConfigOrderBy: nullable("PredictionConfigOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where } = prepareConditions < typeof args > (args, "PredictionConfig")
				// Syntetic relation
				const bindRelation = { maintenanceTypeId: Number(root.id) }
				if (Object.keys(where).length) return await ctx.prisma.predictionConfig.findFirst({ where: { ...where, ...bindRelation } })
				return await ctx.prisma.predictionConfig.findFirst({ where: bindRelation })
			}
		})
		t.field("maintenanceAlarmConfigs", {
			type: "MaintenanceAlarmConfigModel",
			args: {
				maintenanceAlarmConfigWhere: nullable("MaintenanceAlarmConfigWhere"),
				maintenanceAlarmConfigSkip: nullable("Int"),
				maintenanceAlarmConfigTake: nullable("Int"),
				maintenanceAlarmConfigOrderBy: nullable("MaintenanceAlarmConfigOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "MaintenanceAlarmConfig")
				// Syntetic relation
				const bindRelation = { maintenanceTypeId: Number(root.id) }
				if (Object.keys(where).length) {
					const [count, data] = await ctx.prisma.$transaction([
						ctx.prisma.maintenanceAlarmConfig.count({ where: { ...where, ...bindRelation }, orderBy }),
						ctx.prisma.maintenanceAlarmConfig.findMany({ where: { ...where, ...bindRelation }, skip, take, orderBy })
					])
					return { count, data }
				}
				const [count, data] = await ctx.prisma.$transaction([
					ctx.prisma.maintenanceAlarmConfig.count({ where: bindRelation }),
					ctx.prisma.maintenanceAlarmConfig.findMany({ where: bindRelation, orderBy, skip, take })
				])
				return { count, data }
			}
		})
		t.field("maintenances", {
			type: "MaintenanceModel",
			args: {
				maintenanceWhere: nullable("MaintenanceWhere"),
				maintenanceSkip: nullable("Int"),
				maintenanceTake: nullable("Int"),
				maintenanceOrderBy: nullable("MaintenanceOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "Maintenance")
				// Syntetic relation
				const bindRelation = { maintenanceTypeId: Number(root.id) }
				if (Object.keys(where).length) {
					const [count, data] = await ctx.prisma.$transaction([
						ctx.prisma.maintenance.count({ where: { ...where, ...bindRelation }, orderBy }),
						ctx.prisma.maintenance.findMany({ where: { ...where, ...bindRelation }, skip, take, orderBy })
					])
					return { count, data }
				}
				const [count, data] = await ctx.prisma.$transaction([
					ctx.prisma.maintenance.count({ where: bindRelation }),
					ctx.prisma.maintenance.findMany({ where: bindRelation, orderBy, skip, take })
				])
				return { count, data }
			}
		})

	}
})

export const MaintenanceAlarmConfigModel = objectType({
	name: "MaintenanceAlarmConfigModel",
	definition(t) {
		t.field("data", {
			type: list("MaintenanceAlarmConfig"),
		})
		t.field("count", {
			type: "Int"
		})
	}
})

export const MaintenanceAlarmConfigConstant = objectType({
	name: "MaintenanceAlarmConfig",
	definition(t) {
		t.int("id")
		t.bigInt("offset", {
			description: `timestamp in ms`
		})
		t.int("maintenanceTypeId")
		t.field("maintenanceType", {
			type: "MaintenanceType",
			args: {
				maintenanceTypeWhere: nullable("MaintenanceTypeWhere"),
				maintenanceTypeSkip: nullable("Int"),
				maintenanceTypeTake: nullable("Int"),
				maintenanceTypeOrderBy: nullable("MaintenanceTypeOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where } = prepareConditions < typeof args > (args, "MaintenanceType")
				// Regular relation
				const bindRelation = { id: Number(root.maintenanceTypeId) }
				if (Object.keys(where).length) return await ctx.prisma.maintenanceType.findFirst({ where: { ...where, ...bindRelation } })
				return await ctx.prisma.maintenanceType.findFirst({ where: bindRelation })
			}
		})
		t.int("deviceClassId")
		t.field("deviceClass", {
			type: "DeviceClass",
			args: {
				deviceClassWhere: nullable("DeviceClassWhere"),
				deviceClassSkip: nullable("Int"),
				deviceClassTake: nullable("Int"),
				deviceClassOrderBy: nullable("DeviceClassOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where } = prepareConditions < typeof args > (args, "DeviceClass")
				// Regular relation
				const bindRelation = { id: Number(root.deviceClassId) }
				if (Object.keys(where).length) return await ctx.prisma.deviceClass.findFirst({ where: { ...where, ...bindRelation } })
				return await ctx.prisma.deviceClass.findFirst({ where: bindRelation })
			}
		})
		t.int("eventClassId")
		t.field("eventClass", {
			type: "EventClass",
			args: {
				eventClassWhere: nullable("EventClassWhere"),
				eventClassSkip: nullable("Int"),
				eventClassTake: nullable("Int"),
				eventClassOrderBy: nullable("EventClassOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where } = prepareConditions < typeof args > (args, "EventClass")
				// Regular relation
				const bindRelation = { id: Number(root.eventClassId) }
				if (Object.keys(where).length) return await ctx.prisma.eventClass.findFirst({ where: { ...where, ...bindRelation } })
				return await ctx.prisma.eventClass.findFirst({ where: bindRelation })
			}
		})

	}
})

export const MaintenanceConfigModel = objectType({
	name: "MaintenanceConfigModel",
	definition(t) {
		t.field("data", {
			type: list("MaintenanceConfig"),
		})
		t.field("count", {
			type: "Int"
		})
	}
})

export const MaintenanceConfigConstant = objectType({
	name: "MaintenanceConfig",
	definition(t) {
		t.int("id")
		t.json("indexPreviousMaintenanceDate")
		t.json("indexMaxTimeBetweenMaintenances")
		t.json("indexPerformMaintenance")
		t.nullable.string("format")
		t.dateTime("createdAt")
		t.nullable.dateTime("updatedAt")
		t.nullable.int("deviceClassId")
		t.nullable.field("deviceClass", {
			type: "DeviceClass",
			args: {
				deviceClassWhere: nullable("DeviceClassWhere"),
				deviceClassSkip: nullable("Int"),
				deviceClassTake: nullable("Int"),
				deviceClassOrderBy: nullable("DeviceClassOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where } = prepareConditions < typeof args > (args, "DeviceClass")
				// Regular relation
				const bindRelation = { id: Number(root.deviceClassId) }
				if (Object.keys(where).length) return await ctx.prisma.deviceClass.findFirst({ where: { ...where, ...bindRelation } })
				return await ctx.prisma.deviceClass.findFirst({ where: bindRelation })
			}
		})
		t.int("maintenanceTypeId")
		t.nullable.field("maintenanceType", {
			type: "MaintenanceType",
			args: {
				maintenanceTypeWhere: nullable("MaintenanceTypeWhere"),
				maintenanceTypeSkip: nullable("Int"),
				maintenanceTypeTake: nullable("Int"),
				maintenanceTypeOrderBy: nullable("MaintenanceTypeOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where } = prepareConditions < typeof args > (args, "MaintenanceType")
				// Regular relation
				const bindRelation = { id: Number(root.maintenanceTypeId) }
				if (Object.keys(where).length) return await ctx.prisma.maintenanceType.findFirst({ where: { ...where, ...bindRelation } })
				return await ctx.prisma.maintenanceType.findFirst({ where: bindRelation })
			}
		})

	}
})

export const ReportTypeModel = objectType({
	name: "ReportTypeModel",
	definition(t) {
		t.field("data", {
			type: list("ReportType"),
		})
		t.field("count", {
			type: "Int"
		})
	}
})

export const ReportTypeConstant = objectType({
	name: "ReportType",
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
		t.field("tasks", {
			type: "TaskModel",
			args: {
				taskWhere: nullable("TaskWhere"),
				taskSkip: nullable("Int"),
				taskTake: nullable("Int"),
				taskOrderBy: nullable("TaskOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where, skip, take, orderBy } = prepareConditions < typeof args > (args, "Task")
				// Syntetic relation
				const bindRelation = { reportTypeId: Number(root.id) }
				if (Object.keys(where).length) {
					const [count, data] = await ctx.prisma.$transaction([
						ctx.prisma.task.count({ where: { ...where, ...bindRelation }, orderBy }),
						ctx.prisma.task.findMany({ where: { ...where, ...bindRelation }, skip, take, orderBy })
					])
					return { count, data }
				}
				const [count, data] = await ctx.prisma.$transaction([
					ctx.prisma.task.count({ where: bindRelation }),
					ctx.prisma.task.findMany({ where: bindRelation, orderBy, skip, take })
				])
				return { count, data }
			}
		})

	}
})

export const TaskModel = objectType({
	name: "TaskModel",
	definition(t) {
		t.field("data", {
			type: list("Task"),
		})
		t.field("count", {
			type: "Int"
		})
	}
})

export const TaskConstant = objectType({
	name: "Task",
	definition(t) {
		t.int("id")
		t.nullable.int("devId")
		t.nullable.int("reportTypeId")
		t.nullable.int("roleId")
		t.dateTime("firstSendDate")
		t.nullable.string("frequency")
		t.nullable.string("reportOptions")
		t.nullable.field("deviceInstance", {
			type: "DeviceInstance",
			args: {
				deviceInstanceWhere: nullable("DeviceInstanceWhere"),
				deviceInstanceSkip: nullable("Int"),
				deviceInstanceTake: nullable("Int"),
				deviceInstanceOrderBy: nullable("DeviceInstanceOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where } = prepareConditions < typeof args > (args, "DeviceInstance")
				// Regular relation
				const bindRelation = { id: Number(root.devId) }
				if (Object.keys(where).length) return await ctx.prisma.deviceInstance.findFirst({ where: { ...where, ...bindRelation } })
				return await ctx.prisma.deviceInstance.findFirst({ where: bindRelation })
			}
		})
		t.nullable.field("reportType", {
			type: "ReportType",
			args: {
				reportTypeWhere: nullable("ReportTypeWhere"),
				reportTypeSkip: nullable("Int"),
				reportTypeTake: nullable("Int"),
				reportTypeOrderBy: nullable("ReportTypeOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where } = prepareConditions < typeof args > (args, "ReportType")
				// Regular relation
				const bindRelation = { id: Number(root.reportTypeId) }
				if (Object.keys(where).length) return await ctx.prisma.reportType.findFirst({ where: { ...where, ...bindRelation } })
				return await ctx.prisma.reportType.findFirst({ where: bindRelation })
			}
		})
		t.nullable.field("role", {
			type: "Role",
			args: {
				roleWhere: nullable("RoleWhere"),
				roleSkip: nullable("Int"),
				roleTake: nullable("Int"),
				roleOrderBy: nullable("RoleOrderBy"),
			},
			resolve: async (root, args, ctx) => {
				const { where } = prepareConditions < typeof args > (args, "Role")
				// Regular relation
				const bindRelation = { id: Number(root.roleId) }
				if (Object.keys(where).length) return await ctx.prisma.role.findFirst({ where: { ...where, ...bindRelation } })
				return await ctx.prisma.role.findFirst({ where: bindRelation })
			}
		})

	}
})
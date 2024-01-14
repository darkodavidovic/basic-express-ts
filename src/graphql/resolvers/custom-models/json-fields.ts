// Specify JSON Models for Json fileds in the database tables

import { unionType } from "nexus"
import { resolveType } from "../../utils/resolve-type-discriminator"

// export const DeviceDescription = unionType({
// 	name: 'DeviceDescription',
// 	description: 'Contains SDDDeviceDescription or IODDDeviceDescription',
// 	definition(t) {
// 		t.members('SDDDeviceDescription', 'IODDDeviceDescription')
// 	},
// 	resolveType: (jsonField) => {
// 		type TResolve = 'SDDDeviceDescription' | 'IODDDeviceDescription'
// 		return resolveType<TResolve>(jsonField, [
// 			{ member: "SDDDeviceDescription", hasKeys: ["sdd"] },
// 			{ member: "IODDDeviceDescription", hasKeys: ["iodd"] }
// 		])
// 	}
// })
export const placeholderJsonFields = ""

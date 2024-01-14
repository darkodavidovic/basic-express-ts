import { nonNull, objectType } from "nexus";

export const AuthPayload = objectType({
	name: "AuthPayload",
	definition(t) {
		t.nonNull.field("user", {
			type: nonNull("User"),
		});
		t.string("accessToken");
	},
});

export const DevicePayloadSub = objectType({
	name: "DevicePayloadSub",
	definition(t) {
		t.nonNull.string("deviceID")
		t.nonNull.float("operatingTemperature")
		t.nonNull.string("temperatureUnit")
		t.nonNull.float("vacuumPreasure")
		t.nullable.string("preasureUnit")
	},
});

export const DeletePayload = objectType({
	name: "DeletePayload",
	definition(t) {
		t.nonNull.field("count", {
			type: nonNull("User"),
		});
	},
});

// used in deleteMany and updateMany Mutation
export const RowsAffectedPayload = objectType({
	name: "RowsAffectedPayload",
	definition(t) {
		t.nonNull.int("count")
	}
});

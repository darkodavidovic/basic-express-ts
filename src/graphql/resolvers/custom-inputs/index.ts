import { extendInputType, inputObjectType } from "nexus"

// Internal GraphQL types =========================================================

// Where scalar Inputs
export const WhereInt = extendInputType({
	type: 'WhereInt',
	definition(t) {
		t.nullable.int("equals")
		t.nullable.int("gt")
		t.nullable.int("gte")
		t.nullable.list.int("in")
		t.nullable.int("lt")
		t.nullable.int("lte")
		t.nullable.int("not")
		t.nullable.list.int("notIn")
	}
})

export const WhereString = extendInputType({
	type: 'WhereString',
	definition(t) {
		t.nullable.string("contains")
		t.nullable.string("endsWith")
		t.nullable.string("equals")
		t.nullable.string("gt")
		t.nullable.string("gte")
		t.nullable.list.string("in")
		t.nullable.string("lt")
		t.nullable.string("lte")
		t.nullable.string("not")
		t.nullable.list.string("notIn")
		t.nullable.string("startsWith")
	}
})

export const WhereDateTime = extendInputType({
	type: 'WhereDateTime',
	definition(t) {
		t.nullable.dateTime("equals")
		t.nullable.dateTime("gt")
		t.nullable.dateTime("gte")
		t.nullable.list.dateTime("in")
		t.nullable.dateTime("lt")
		t.nullable.dateTime("lte")
		t.nullable.dateTime("not")
		t.nullable.list.dateTime("notIn")
	}
})
// End Internal GraphQL types ====================================================

// Custom inputs for Queries and Mutations
// Mutations
export const LoginInput = inputObjectType({
	name: "LoginInput",
	definition(t) {
		t.nonNull.string("user");
		t.nonNull.string("password");
	}
})

export const SignupInput = inputObjectType({
	name: "SignupInput",
	definition(t) {
		t.nonNull.string("user");
		t.nonNull.string("pass");
		t.nonNull.string("firstname");
		t.nonNull.string("lastname");
		t.nonNull.string("email");
		t.nonNull.boolean("system");
	}
})
// End Mutations

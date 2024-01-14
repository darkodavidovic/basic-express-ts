import { GraphQLScalarType, Kind } from 'graphql'
import { JSONResolver, GraphQLDate, GraphQLDateTime, GraphQLBigInt } from 'graphql-scalars'
import { asNexusMethod } from 'nexus'
import Big from "big.js";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: Unreachable code error
BigInt.prototype.toJSON = function (): number {
	// @ts-ignore
	return this.toString();
};

const GraphQLDecimal = new GraphQLScalarType({
	name: "Decimal",
	description: "The `Decimal` scalar type to represent currency values",

	serialize(value: any) {
		return new Big(value);
	},

	parseLiteral(ast) {
		if (ast.kind !== Kind.STRING) {
			// @ts-ignore | TS2339
			throw new TypeError(`${String(ast.value)} is not a valid decimal value.`);
		}

		return Big(ast.value);
	},

	parseValue(value: any) {
		return Big(value);
	}
});

const GraphQLBigIntString = new GraphQLScalarType({
	name: "BigIntString",
	description: "The `BigInt` scalar type to represent large integer values",

	serialize(value: any) {
		return value.toString()
	},

	parseLiteral(ast) {
		if (ast.kind !== Kind.INT) {
			// @ts-ignore | TS2339
			throw new TypeError(`${String(ast.value)} is not a valid BigInt value.`);
		}

		return String(ast.value)
	},

	parseValue(value: any) {
		return value.toString()
	}
});

export const JSONScalar = asNexusMethod(JSONResolver, "json")
export const DateScalar = asNexusMethod(GraphQLDate, "date")
export const DateTimeScalar = asNexusMethod(GraphQLDateTime, "dateTime")
export const BigIntScalar = asNexusMethod(GraphQLBigIntString, "bigInt")
export const DecimalScalar = asNexusMethod(GraphQLDecimal, "decimal")

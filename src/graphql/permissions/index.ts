/* eslint-disable no-prototype-builtins */
/* eslint-disable editorconfig/indent */
import { GraphQLError } from 'graphql';
import { allow, deny, rule, shield, } from "graphql-shield";
import { Rule } from "graphql-shield/typings/rules";
import { IExtendedUser } from "../context";
import { queryPermissions } from "./query-permissions";
import { subscriptionPermissions } from "./subscription-permissions";

interface IMapped {
	[key: string]: Rule
}

const isAuthenticated = rule()(
	async (_parent, _args, ctx) => {
		// console.log("permission query/sub user:", ctx.user)
		if (ctx.user !== null) return true
		return false
	}
);

function userPermission(permissions: string[]) {
	return rule()(
		async (_parent, _args, ctx) => {
			// console.log("userPermission user:", ctx.user)
			// return true
			const user: IExtendedUser | null = ctx.user
			if (user === null) return false
			return true; //permissions.every(permission => user?.privileges.includes(permission))
		}
	);
}

function permissionMapper(type: string) {
	const map: IMapped = { "*": isAuthenticated }
	switch (type) {
		case "Query":
			for (const [name, permissions] of Object.entries(queryPermissions)) {
				map[name as keyof typeof queryPermissions] = userPermission(permissions)
			}
			break;
		case "Subscription":
			for (const [name, permissions] of Object.entries(subscriptionPermissions)) {
				map[name as keyof typeof subscriptionPermissions] = userPermission(permissions)
			}
			break;
		default:
			break;
	}
	return map
}

const permissions = shield({
	Query: permissionMapper("Query"),
	Subscription: permissionMapper("Subscription"),
	Mutation: {
		"*": deny,
		login: allow,
		signup: allow,
		refreshAuth: allow,
		logout: allow
	},
},
	{
		async fallbackError(error) {
			console.log("GraphQL FallbackError error:", error)
			if (error instanceof GraphQLError) {
				return error
			}
			if (error instanceof Error) {
				return new GraphQLError(error.message)
			}
			return new GraphQLError('Internal server error fallback - Not Authorized or Bad GraphQL input')
		}
	});

export default permissions;

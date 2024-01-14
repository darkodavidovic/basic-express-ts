import { applyMiddleware } from "graphql-middleware";
import { declarativeWrappingPlugin, makeSchema, fieldAuthorizePlugin } from "nexus";
import path from "path";
import permissions from "./permissions";
import * as types from "./resolvers";

export const schema = applyMiddleware(
	makeSchema({
		types,
		plugins: [declarativeWrappingPlugin({ disable: false }), fieldAuthorizePlugin()],
		outputs: {
			schema: path.join(__dirname, "/generated/schema.graphql"),
			typegen: path.join(__dirname, "/generated/types.ts"),
		},
		contextType: {
			module: require.resolve("./context"),
			alias: "Context",
			export: "Context",
		},
		nonNullDefaults: {
			output: true,
		}
	}),
	permissions
)

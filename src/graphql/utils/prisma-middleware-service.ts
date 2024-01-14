import { pubsub } from "../libs/pubsub"
import { EMiddlewareActions } from "../interfaces/graphql"

export function errorReporting(error: any, location: string) {
	console.log(`======== GraphQL prismaMiddlewareService Catch block (${location}) ========`);
	console.log("Prisma Middleware Service error: ", error);
	console.log("Error description: This prisma middleware intercept all SICON-s GraphQL and REST API traffic of prisma. If some error is coused by REST API or GraphQL, this service will notify the error.");
	console.log("======== End GraphQL prismaMiddlewareService Catch block ========");
}

export async function prismaMiddlewareService(model: string, operation: string) {
	try {
		const middlewareAction = EMiddlewareActions[operation as keyof typeof EMiddlewareActions]
		if (!middlewareAction) return true
		if (model) pubsub.publish(model, { dataChanged: true })
		// console.log("Model", operation, "is happend on the", model, "model")
		// console.log("Signal is sent to Subscription", model)
		return true
	} catch (error) {
		errorReporting(error, "utils/prisma-middleware-service.ts, line: 20")
	}
}

import { PrismaClient } from '@prisma/client'
import { errorReporting, prismaMiddlewareService } from '@src/graphql/utils/prisma-middleware-service'

export const prisma = new PrismaClient().$extends({
	query: {
		// see prisma docks: https://www.prisma.io/docs/concepts/components/prisma-client/client-extensions/query
		async $allOperations({ model, operation, args, query }) {
			// console.log("Query", operation, "done over", model, "model")
			try {
				const queryResult = await query(args)
				// if any action is success, call prisma middleware service to check whats happend
				if (queryResult) await prismaMiddlewareService(model || "", operation)
				// console.log("Prisma middleware findMany", queryResult)
				// end middleware session
				return queryResult
			} catch (error) {
				errorReporting(error, 'prisma-client/index.ts, line: 16')
				return query(args)
			}
		},
	}
})

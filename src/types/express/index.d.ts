import { PrismaExtended } from "@src/interfaces/TPrisma"
declare global {
	namespace Express {
		interface Request {
			// Uncomment this if you want prisma in each request context
			prisma: PrismaExtended
			accessToken: string
		}
	}
}

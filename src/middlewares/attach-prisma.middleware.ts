import { NextFunction, Request, Response } from "express"
import { prisma } from "../prisma-client"

export const attachPrismaMiddleware = (req: Request, _res: Response, next: NextFunction) => {
	req.prisma = prisma;
	next();
}

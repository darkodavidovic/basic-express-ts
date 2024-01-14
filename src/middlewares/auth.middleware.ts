import { NextFunction, Request, Response } from "express";
import { verifyJWT } from "../auth";
import constants from "@src/config/constants";

export const authorizationMiddleware = (req: Request, res: Response, next: NextFunction) => {

    const authHeader = req.get("Authorization")

    if(!authHeader) return res.sendStatus(401);

    if (authHeader) {
        const token = authHeader.replace('Bearer ', "")
        const verified = verifyJWT(token, constants.JWT_ACCESS_SECRET)

        if (!verified.user) {
            // console.log("User is not verified!");
            return res.sendStatus(403)
        }

        const isExpired = verified.exp && Date.now() >= verified.exp * 1000
        const expiredSeconds = verified.iat && verified.exp && verified.exp - verified.iat
        // console.log("Token is Expired:", "difference:", expiredSeconds, isExpired);
        if (isExpired) {
            // console.log("Expired for sure", isExpired);
            return res.sendStatus(403);
        }
    }
    next()
}

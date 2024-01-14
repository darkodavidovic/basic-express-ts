import { addMilliseconds } from "date-fns";
import { CookieOptions, Request } from "express";
import { sign, verify } from "jsonwebtoken";
import ms from "ms";
import { IGraphQLQueryContext } from "../context";
import { PrismaExtended } from "@src/interfaces/TPrisma";
import constants from "@src/config/constants";

export type JwtPayload = {
	ID: number
	id: number
	user: string | null
	firstname: string | null
	lastname: string | null
	email: string | null
	system: boolean | null
}

type GetUserIdContext = {
	request: Request;
	connection?: any;
};

const secret = constants.JWT_ACCESS_SECRET

export const createAccessToken = async (payload: JwtPayload) => {
	
	return sign(payload, secret, {
		// expiresIn: gqlConstants.JWT_ACCESS_EXPIRATION,
	});
};

export const createRefreshToken = async (payload: JwtPayload) => {
	return sign(payload, secret, {
		// expiresIn: gqlConstants.JWT_REFRESH_EXPIRATION,
	});
};

export const createRefreshCookie = (jwt: string): [string, string, CookieOptions] => {
	const isProd = process.env.NODE_ENV === "production";
	const cookieOptions: CookieOptions = {
		secure: isProd ? true : false,
		httpOnly: true,
		expires: addMilliseconds(Date.now(), ms(constants.JWT_REFRESH_EXPIRATION)),
		// Same site if frontend and backend are not separate
		// sameSite: true
	};
	return ["refresh", jwt, cookieOptions];
};

export const removeRefreshCookie = (context: any) => {
	context.response.cookie("refresh", "", { expires: new Date() });
};

export const createTokens = async (payload: JwtPayload, context?: IGraphQLQueryContext) => {
	const accessToken = await createAccessToken(payload);
	const refreshToken = await createRefreshToken(payload);
	if (context) {
		const refreshCookie = createRefreshCookie(refreshToken);
		context.response.cookie(...refreshCookie);
	}
	return {
		accessToken,
		refreshToken,
	};
};

export async function verifySubscribedUser(prisma: PrismaExtended, ctx: any) {
	try {
		const tokenString = ctx.connectionParams.Authorization
		if (tokenString) {
			const token = tokenString.replace("Bearer ", "")
			const verified = verify(token, secret) as any
			if (verified.hasOwnProperty("id") || verified.hasOwnProperty("ID")) {
				const user = await prisma.user.findFirst({
					where: {
						id: verified.id || verified.ID
					}
				})
				if (user) return user
				return null
			}
			return null
		}
		return null

	} catch (error) {
		console.log("graphql.utils.auth.verifySubscribedUser error: ", error)
		return null
	}
}

export async function getUserIdFromAuthToken({ request, connection }: GetUserIdContext) {
	try {
		const Authorization = connection ? connection.context.authorization : request.get("Authorization");
		if (Authorization) {
			const token = Authorization.replace("Bearer ", "");
			const verifiedToken = verify(token, secret) as JwtPayload;
			if (verifiedToken) {
				// getting graphQL Payload id first
				if (verifiedToken.hasOwnProperty("id")) return verifiedToken.id
				// try with device cloud payload ID
				if (verifiedToken.hasOwnProperty("ID")) return verifiedToken.ID
			}
			return -1
		}
		return -1
	} catch (error) {
		console.log("graphql.utils.auth.getUserIdFromAuthToken error: ", error)
		return -1
	}
}

export async function getUserPrivileges(prisma: PrismaExtended, userId: number | null) {
	return []
}

export async function getRefreshCookie({ request }: Pick<GetUserIdContext, "request">) {
	const refreshToken = request.cookies["refresh"];
	if (refreshToken) {
		const payload = verify(refreshToken, secret) as JwtPayload;
		return payload
	}
}

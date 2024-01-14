import constants from "@src/config/constants";
import { addMilliseconds } from "date-fns";
import { CookieOptions, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken"
import ms from "ms";

export interface IUserJWTPayload extends JwtPayload {
    user?: string
    id?: string | number,
    roleID?: string | number,
    expiresIn?: number | string
}

export const createAccessToken = (payload: IUserJWTPayload) => {
    return jwt.sign(payload, constants.JWT_ACCESS_SECRET, {
        expiresIn: constants.JWT_ACCESS_EXPIRATION,
    });
};

export const createRefreshToken = (payload: IUserJWTPayload) => {
    return jwt.sign(payload, constants.JWT_REFRESH_SECRET, {
        expiresIn: constants.JWT_REFRESH_EXPIRATION,
    });
};

export const createRefreshCookie = (jwt: string): [string, string, CookieOptions] => {
    const isProd = process.env.NODE_ENV === "production";
    const cookieOptions: CookieOptions = {
        secure: false,//isProd ? true : false,
        httpOnly: false,
        expires: addMilliseconds(Date.now(), ms(constants.JWT_REFRESH_EXPIRATION)),
        // Same site if frontend and backend are not separate (lax for local)
        sameSite: true,
        domain: "local.com"
    };

    return ["refreshToken", jwt, cookieOptions];
};

export const verifyJWT = (authToken: string, secret: string): IUserJWTPayload => {
    try {
        return jwt.verify(authToken, secret) as IUserJWTPayload
    } catch (error) {
        return {}
    }
}

export const loggedUser = (authToken: string): IUserJWTPayload => {
    try {
        return verifyJWT(authToken, constants.JWT_ACCESS_SECRET) as IUserJWTPayload
    } catch (error) {
        return {}
    }
}

export const createTokens = async (payload: IUserJWTPayload, res?: Response) => {
    const accessToken = createAccessToken(payload);
    const refreshToken = createRefreshToken(payload);

    if (!!res) {
        const refreshCookie = createRefreshCookie(refreshToken);
        res.cookie(...refreshCookie);
    }

    return {
        accessToken,
        refreshToken,
    };
};

export function getRefreshCookie(request: Request) {
    // this part need to count header also
    const refreshToken = request.cookies.refreshToken || request.get("refreshToken")
    // const refreshToken = request.get("refreshToken");

    if (refreshToken) {
        const jwtContent = verifyJWT(
            refreshToken,
            constants.JWT_REFRESH_SECRET
        ) as IUserJWTPayload;
        return jwtContent;
    }
}

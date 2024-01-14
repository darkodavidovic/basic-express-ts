import { Request, Response } from "express"
import { createTokens, getRefreshCookie, IUserJWTPayload } from "../auth"
import bcrypt from "bcryptjs"

const login = async (req: Request, res: Response) => {
	const { user, pass } = req.body

	try {
		const result = await req.prisma.user.findUnique({
			where: {
				user
			}
		})

		if (result) {
			const matches = await bcrypt.compare(pass, result.pass);

			if (matches) {
				const payload: IUserJWTPayload = { user: result.user, id: result.id, roleID: result.roleId, expiresIn: "24h" }
				const { accessToken } = await createTokens(payload, res)
				return res.status(200).json({
					accessToken,
					authenticated: true,
					loggedUser: user
				})
			}
		}
		return res.status(401).json({
			accessToken: "",
			authenticated: false,
			loggedUser: "Guest"
		})

	} catch (error) {
		console.log(error)
		res.status(401).json({
			accessToken: "",
			authenticated: false,
			loggedUser: "Guest"
		})
	}
}

const refreshToken = async (req: Request, res: Response) => {
	try {
		const refreshUser = getRefreshCookie(req)

		if (!refreshUser) return res.status(200).json({
			authenticated: false,
			message: "Invalid Cookie"
		})

		const result = await req.prisma.user.findFirst({
			where: {
				id: Number(refreshUser.id),
			}
		})

		if (!result) return res.status(200).json({
			authenticated: false,
			message: "Invalid Cookie"
		})

		const payload: IUserJWTPayload = { user: result.user, id: result.id, roleID: result.roleId, expiresIn: "24h" }
		const { accessToken } = await createTokens(payload)

		res.status(200).json({
			authenticated: true,
			loggedUser: result.user,
			accessToken
		})

	} catch (error) {
		res.status(500).json({
			authenticated: false,
			loggedUser: "",
			accessToken: "",
			error
		})
	}
}

export default { login, refreshToken }

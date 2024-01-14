import { Request } from "express";

const getUsers = async (req: Request) => {
	try {
		const users = await req.prisma.user.findMany({
			include: {
				role: {
					select: {
						name: true
					}
				},
				fcmToken: {
					select: {
						token: true
					}
				}
			}
		})
		return users
	} catch (error) {
		return { message: "Error", error }
	}
}

export default { getUsers }

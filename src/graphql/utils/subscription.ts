import { PrismaClient } from "@prisma/client";

export const findUserById = async (prisma: PrismaClient, id: number) => {
	// return {
	// 	id: 1,
	// 	username: "admin",
	// 	system: true
	// }
	const user = await prisma.user.findFirstOrThrow({
		where: {
			id
		},
	})
	if (user) return user
	return null
}

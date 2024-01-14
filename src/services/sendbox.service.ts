import { Request, Response } from "express"

export const sandbox = async (req: Request, res: Response) => {
	// const users = await req.prisma.user.findMany()
	// const create = await req.prisma.gpsHistory.create({
	// 	data: {
	// 		deviceSerialNumber: 100,
	// 		latitude: 0,
	// 		longitude: 0,
	// 		altitude: 0,
	// 		speed: 0
	// 	}
	// })
	const history = await req.prisma.gpsHistory.findMany()
	const historyMap = history.map((item) => {
		return {
			...item,
			timestamp: new Date(item.timestamp).getTime()
		}
	})
	res.json({ historyMap })
}

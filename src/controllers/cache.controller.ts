import { getNodeCache, setNodeCache } from "@src/utils/cache"
import { Request, Response } from "express"

export const setCache = async (req: Request, res: Response) => {
	try {
		const device = {
			name: "Device 123",
			partNo: 123,
			temp: "30.20"
		}
		const set = setNodeCache("device", device)
		return res.json({ cached: set })
	} catch (error) {
		console.log("controllers > test.controller > test:", error)
		res.status(500).json({
			success: false,
			message: "Something went wrong.",
			error
		})
	}
}

export const getCache = async (req: Request, res: Response) => {
	try {
		const device = getNodeCache("device")
		return res.json({ device: device ? device : "No cache" })
	} catch (error) {
		console.log("controllers > test.controller > test:", error)
		res.status(500).json({
			success: false,
			message: "Something went wrong.",
			error
		})
	}
}
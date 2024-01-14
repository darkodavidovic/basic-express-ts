import { Request, Response } from "express"

export const sandbox = async (req: Request, res: Response) => {

	return res.json({ done: true })
}

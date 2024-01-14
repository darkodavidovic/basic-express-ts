import { pdfService } from "@src/services/pdf.service"
import { Request, Response } from "express"

export const pdfController = async (req: Request, res: Response) => {
	try {
		await pdfService(req, res)
	} catch (error) {
        res.status(500).json({ done: false, message: error })
    }
}
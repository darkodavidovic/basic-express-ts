import { pdfController } from '@src/controllers/pdf.controller'
import { Router } from 'express'

const publicRouter: Router = Router()

publicRouter.get("/", (_req, res) => {
	res.json({ online: true })
})

publicRouter.post("/pdf-xml", pdfController)

export default publicRouter

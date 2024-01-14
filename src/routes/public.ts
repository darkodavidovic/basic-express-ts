import { pdfController } from '@src/controllers/pdf.controller'
import { Router } from 'express'

const publicRouter: Router = Router()

publicRouter.post("/pdf-xml", pdfController)

export default publicRouter

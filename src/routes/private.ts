import { Router } from 'express'

const privateRouter: Router = Router()

privateRouter.post("/", () => {
	console.log("private")
})

export default privateRouter
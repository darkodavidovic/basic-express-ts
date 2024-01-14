import { Request, Response, Router } from 'express'
import authService from '@src/services/auth.service';
import { sandbox } from '@src/services/sendbox.service';
import seedService from '@src/services/seed.service';

const publicRouter: Router = Router()

// Auth
publicRouter.post("/login", authService.login)
publicRouter.get("/refresh-token", authService.refreshToken)

// Seed routes
publicRouter.get("/seed-roles", seedService.seedRoles)
publicRouter.get("/seed-users", seedService.seedUsers)
publicRouter.get("/seed-devices", seedService.seedDevices)
publicRouter.get("/seed-config", seedService.seedConfig)
publicRouter.get("/seed-shortcuts", seedService.seedShortcuts)
publicRouter.get("/seed-commands", seedService.seedCommands)
publicRouter.get("/seed-gps-history", seedService.seedGPSHistory)

// test routes
publicRouter.get("/sandbox", sandbox)

// publicRouter.get('/testGroupBy', async (req: Request, res: Response) => {
// 	const fields = req.prisma.user.fields
// 	const fields2 = await req.prisma.user.groupBy({
// 		by: ['roleId'],
// 		where: {
// 			system: false
// 		}
// 	})
// 	res.json({
// 		// fields,
// 		fields2
// 	})
// });

// publicRouter.get('/ssr', async (req: Request, res: Response) => {
// 	const articles = [
// 		{
// 			title: "Title 1",
// 			content: "Content 1",
// 			image: "https://www.dd-link.com/react/webshop/images/24km11jxskt0hlw63.jpg"
// 		},
// 		{
// 			title: "Title 2",
// 			content: "Content 2",
// 			image: "https://www.dd-link.com/react/webshop/images/24km17rwdktrc641i.jpg"
// 		}
// 	]
// 	res.json(articles)
// });

// publicRouter.post('/test', async (req: Request, res: Response) => {
// 	// console.log("react native body", req.body)
// 	// expand to infinity
// 	console.dir(req.body, { depth: null })
// 	res.json({
// 		message: "Test"
// 	})
// });

// publicRouter.post('/location', async (req: Request, res: Response) => {
// 	const createdHistory = await req.prisma.gpsHistory.create({
// 		data: {
// 			deviceSerialNumber: 100,
// 			lat: req.body.coords.latitude,
// 			lng: req.body.coords.longitude,
// 			alt: req.body.coords.altitude,
// 			speed: req.body.coords.speed
// 		}
// 	})
// 	console.log("createdHistory", createdHistory)
// 	res.json(createdHistory)
// });

export default publicRouter

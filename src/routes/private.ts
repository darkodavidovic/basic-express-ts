import { getCache, setCache } from '@src/controllers/cache.controller';
import { getAllFCMTokens, getFCMTokens, createFCMToken } from '@src/controllers/fcm.controller';
import { createGPSHistory, getGPSHistory, deleteGPSHistory } from '@src/controllers/history.controller';
import { getDevice } from '@src/controllers/device.controller';
import { Router } from 'express'
import { getUsers } from '@src/controllers/user.controller';

const privateRouter: Router = Router()

// FCM Token
privateRouter.post("/fcm-token", createFCMToken)
privateRouter.get("/fcm-tokens", getAllFCMTokens)
privateRouter.get("/fcm-token/:user", getFCMTokens)

// history
privateRouter.get("/gps-history/:serialNumber", getGPSHistory)
privateRouter.post("/gps-history", createGPSHistory)
privateRouter.delete("/gps-history", deleteGPSHistory)

// Config
privateRouter.get("/device", getDevice)

// Users
privateRouter.get("/users", getUsers)

// Test Routes
privateRouter.get('/get-cache', getCache);
privateRouter.get('/set-cache', setCache);

export default privateRouter
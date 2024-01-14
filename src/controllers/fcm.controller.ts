import { Request, Response } from "express"
import fcmService from "@src/services/fcm.service"

export const createFCMToken = async (req: Request, res: Response) => {
    try {
        const created = await fcmService.createFCMToken(req)
        res.status(200).json({ done: created ? true : false })
    } catch (error) {
        res.status(401).json({ done: false, message: error })
    }
}

export const getFCMTokens = async (req: Request, res: Response) => {
    const fcms = await fcmService.getFCMTokens(req)
    res.status(200).json(fcms)
}

export const getAllFCMTokens = async (req: Request, res: Response) => {
    const fcms = await fcmService.getAllFCMTokens(req)
    res.status(200).json(fcms)
}

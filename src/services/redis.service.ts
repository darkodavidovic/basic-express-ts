// import { redisClient } from "@src/redis-client"
// import { SetOptions } from "redis"

// export const getRedisData = async (keyName: string): Promise<any> => {
// 	const data = await redisClient.get(keyName) as string
// 	return JSON.parse(data)
// }

// export const setRedisData = async (keyName: string, data: any): Promise<SetOptions> => {
// 	return await redisClient.set(keyName, JSON.stringify(data)) as SetOptions
// }

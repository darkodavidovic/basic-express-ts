// import constants from '@src/config/constants';
// import { createClient, RedisClientType } from 'redis';

// export let redisClient: RedisClientType;

// (async () => {
// 	redisClient = createClient({ url: constants.REDIS_URL });
// 	redisClient.on("connect", () => {
// 		console.log("\n## Redis connection state ##")
// 		console.log("Redis connected successfully \n" )
// 	})
// 	redisClient.on("error", err => console.log('Redis Client Error: ', err));
// 	await redisClient.connect();
// })()

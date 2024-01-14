import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default'
import { ApolloServer } from '@apollo/server'
import { expressMiddleware } from '@apollo/server/express4'
import express, { Application } from 'express'
import cookieParser from "cookie-parser"
import http, { createServer } from 'http'
import { Server } from "socket.io";
import { schema } from './graphql/schema'
import { createContext, IExtendedUser } from './graphql/context'
import { WebSocketServer } from 'ws'
import { prisma } from './prisma-client'
import { PubSub } from 'graphql-subscriptions'
import { MQTTPubSub } from 'graphql-mqtt-subscriptions'
import { useServer } from 'graphql-ws/lib/use/ws'
import { pubsub, mqttPubSub } from './graphql/libs/pubsub'
import cors from 'cors'
import { getUserPrivileges, verifySubscribedUser } from './graphql/utils/auth'
import { json } from 'body-parser'
import privateRouter from './routes/private'
import publicRouter from './routes/public'
import { attachPrismaMiddleware } from './middlewares/attach-prisma.middleware'
import { PrismaExtended } from './interfaces/TPrisma'
import { socketHandler } from './socket.io/events'
import constants from './config/constants'
import chalk from 'chalk';
import { authorizationMiddleware } from './middlewares/auth.middleware'

const app: Application = express()

export interface IGraphQLSubscriptionContext {
	prisma: PrismaExtended
	mqttPubSub: MQTTPubSub
	pubsub: PubSub
	user: IExtendedUser | null
}

const server = createServer(app)

// Create socket io server
export const io = new Server(server, {
	path: '/blackbox/socket/socket.io',
	cors: {
		origin: "*"
	}
});

// Connect socket io handlers
io.on('connection', socketHandler)

// This function is called from main module
export async function startServer() {
	const httpServer: http.Server = http.createServer(app)

	const PORT = constants.PORT

	// const isDevelopment = process.env.NODE_ENV === 'dev';

	const wsServer = new WebSocketServer({
		server: httpServer,
		path: '/blackbox/api/graphql'
	})

	// This server is used only for Subscriptions
	const subscriptionServer = useServer(
		{
			schema,
			context: async (ctx, _msg, _args): Promise<IGraphQLSubscriptionContext> => {
				const userData = await verifySubscribedUser(
					prisma,
					ctx
				)
				const privileges = userData ? await getUserPrivileges(prisma, userData.id) : []
				const user: IExtendedUser | null = userData ? { ...userData, privileges } : null
				return {
					...ctx,
					mqttPubSub,
					pubsub,
					prisma,
					user,
				}
			},
		},
		wsServer
	)

	const server = new ApolloServer({
		schema,
		cache: 'bounded',
		plugins: [
			ApolloServerPluginDrainHttpServer({ httpServer }),
			ApolloServerPluginLandingPageLocalDefault({ embed: true }),
			{
				async serverWillStart() {
					return {
						async drainServer() {
							await subscriptionServer.dispose()
						},
					}
				},
			},
		],
		csrfPrevention: true,
		introspection: true,
	})

	await server.start()

	app.use(
		'/blackbox/api/graphql',
		cors({
			origin: '*',
			methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
			credentials: true,
		}),
		json(),
		expressMiddleware(server, {
			context: createContext(),
		})
	)

	app.use(cors({
		origin: 'http://local.com:5173',
		// origin: true,
		credentials: true
	}))
	app.use(express.json())
	app.use(cookieParser())
	app.use(express.urlencoded({ extended: true }));
	app.use('/blackbox/api', attachPrismaMiddleware)
	app.use('/blackbox/api', publicRouter)
	app.use('/blackbox/api', privateRouter)

	await new Promise<void>((resolve) => {
		httpServer.listen({ port: PORT }, () => {
			console.log(
				chalk.white.bold.bgBlue(`GraphQL http://localhost:${PORT}/blackbox/api/graphql'`) + chalk.black.bgGreenBright(' Started!')
			)
			console.log(
				chalk.white.bold.bgBlue(`API http://localhost:${PORT}/blackbox/api/'`) + chalk.black.bgGreenBright(' Started!')
			)
		})
		resolve()
	})
}
startServer()


import { User } from '@prisma/client'
import { prisma } from '../prisma-client'
import { ExpressContextFunctionArgument } from '@apollo/server/express4'
import { Request, Response } from "express";
import { getUserIdFromAuthToken, getUserPrivileges } from "./utils/auth";
import { MQTTPubSub } from 'graphql-mqtt-subscriptions';
import { PubSub } from "graphql-subscriptions";
import { pubsub, mqttPubSub } from "./libs/pubsub";
import { PrismaExtended } from '@src/interfaces/TPrisma';

export interface IExtendedUser extends User {
	privileges: string[]
}

export interface IGraphQLQueryContext {
	request: Request
	response: Response
	prisma: PrismaExtended
	mqttPubSub: MQTTPubSub
	pubsub: PubSub
	user: IExtendedUser | null
}

export const createContext = () => async (request: ExpressContextFunctionArgument): Promise<Partial<IGraphQLQueryContext>> => {

	const context: IGraphQLQueryContext = {
		...request,
		response: request.res,
		request: request.req,
		prisma,
		mqttPubSub,
		pubsub,
		user: null
	}

	const userId = await getUserIdFromAuthToken(context)

	if (userId >= 0) {
		const privileges = await getUserPrivileges(prisma, userId)
		const user = await prisma.user.findFirst({
			where: {
				id: userId
			}
		})
		context.user = user ? { ...user, privileges } : user
	}
	return context
}

/* eslint-disable @typescript-eslint/no-explicit-any */
import { z, ZodError } from "zod"
import { GraphQLError } from 'graphql';

const filter = {
	signup: z.object({
		user: z.string().min(5).max(15),
		firstname: z.string().min(3),
		lastname: z.string().min(3),
		email: z.string().email(),
		password: z.string().min(8),
		system: z.boolean()
	})
}

export function useZod(payload: any, model: string) {
	try {
		return filter[model as keyof typeof filter].parse(payload)
	} catch (error) {
		if (error instanceof ZodError) {
			throw new GraphQLError("Validation Error" );
		}
		return payload
	}
}

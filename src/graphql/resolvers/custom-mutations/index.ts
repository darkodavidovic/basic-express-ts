import { GraphQLError } from 'graphql';
import bcrypt from "bcryptjs";
import { mutationField, nonNull, nullable } from "nexus";
import { createTokens, getRefreshCookie, removeRefreshCookie } from "../../utils/auth";
import { AuthPayload } from "../custom-payloads";
import { useZod } from '../../utils/use-zod';

export const login = mutationField("login", {
	type: nonNull("AuthPayload"),
	args: {
		input: nonNull("LoginInput"),
	},
	resolve: async (_root, args, ctx) => {
		const user = await ctx.prisma.user.findFirstOrThrow({
			where: {
				user: args.input.user
			},
		})
		const matches = await bcrypt.compare(args.input.password, user?.password);
		if (!matches) {
			throw new GraphQLError("Invalid credentials!");
		}
		const { accessToken } = await createTokens({ ...user }, ctx);
		return {
			user,
			accessToken
		};
	}
});

export const signup = mutationField("signup", {
	type: nullable(AuthPayload),
	args: {
		input: nonNull("SignupInput"),
	},
	resolve: async (_root, args, ctx) => {
		const input = useZod(args.input, "signup")
		const user = await ctx.prisma.user.create({
			data: {
				...input,
				email: input.email.toLowerCase(),
				pass: await bcrypt.hash(input.pass, 10),
			}
		});
		const { accessToken } = await createTokens({ ...user }, ctx);
		return {
			user,
			accessToken
		};
	}
});

export const refreshAuth = mutationField("refreshAuth", {
	type: nonNull(AuthPayload),
	resolve: async (_root, _args, ctx) => {
		const refreshCookie = await getRefreshCookie(ctx)
		if (!refreshCookie) throw new Error("Invalid cookie");
		const user = await ctx.prisma.user.findFirstOrThrow({
			where: {
				id: Number(refreshCookie.id),
			},
		})
		if (!user) throw new GraphQLError("Invalid user");
		const { accessToken } = await createTokens({ ...user }, ctx);
		return {
			user,
			accessToken,
		};
	}
});

export const logout = mutationField("logout", {
	type: nonNull("User"),
	resolve: async (_root, _args, ctx) => {
		const refreshCookie = await getRefreshCookie(ctx)
		if (!refreshCookie) throw new Error("Invalid cookie");
		removeRefreshCookie(ctx)
		return await ctx.prisma.user.findFirstOrThrow({
			where: {
				id: Number(refreshCookie.id),
			},
		})
	}
});

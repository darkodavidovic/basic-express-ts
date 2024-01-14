import { list, nonNull, nullable, subscriptionField } from "nexus"
// import { NexusGenFieldTypes } from "../generated/types"
import merge from "fast-merge-async-iterators";
import { prepareConditions } from "../../utils/prepare-conditions";

// export const activeEventInstanceSubscription = subscriptionField("activeEventInstanceSubscription", {
// 	type: nonNull(list(nonNull("ActiveEventInstanceData"))),
// 	args: {
// 		activeEventInstanceWhere: nullable("ActiveEventInstanceWhere"),
// 		activeEventInstanceSkip: nullable("Int"),
// 		activeEventInstanceTake: nullable("Int"),
// 		activeEventInstanceOrderBy: nullable("ActiveEventInstanceOrderBy")
// 	},
// 	subscribe: (_root, args, ctx) => {
// 		const devId = args?.activeEventInstanceWhere?.devId
// 		setTimeout(() => ctx.pubsub.publish("ActiveEventInstance", { dataChanged: true }), 500);
// 		const iterator1 = ctx.pubsub.asyncIterator("ActiveEventInstance");
// 		const iterator2 = ctx.mqttPubSub.asyncIterator([`device/${devId}/event`])
// 		return merge(iterator1, iterator2);
// 	},
// 	resolve: async (_payload, args, ctx) => {
// 		const { where, skip, take, orderBy } = prepareConditions(args, "ActiveEventInstance")
// 		return await ctx.prisma.activeEventInstance.findMany({ where, skip, take, orderBy })
// 	}
// })

export const customSubscriptionsPlaceholder = ""

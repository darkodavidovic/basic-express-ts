import { generatorHandler, GeneratorOptions } from '@prisma/generator-helper'
import { fileWrite } from './utils/fileWrite'
import { logger } from "@prisma/internals"
import { generateNexusModels } from './model-generator'
import { generateWhereInputs } from './where-input-generator'
import { generateQueries } from './query-generator'
import { generateSubscriptions } from './subscription-generator'
import { generateOrderByInputs } from './query-orderby-input-generator'
import { generateMutationPayloads } from './mutation-payload-generator'
import { generateMutationInputs } from './mutation-input-generator'
import { generateUpdateMutations } from './mutation-update-generator'
import { generateUpdateManyMutations } from './mutation-update-many-generator'
import { generateCreateMutations } from './mutation-create-generator'
import { generateDeleteMutations } from './mutation-delete-generator'
import { generateDeleteManyMutations } from './mutation-deleteMany-generator'
import { generateCreateManyMutations } from './mutation-create-many-generator'
import { generateGroupByEnums } from './query-groupby-enum-generator'

generatorHandler({
	onManifest() {
		return {
			defaultOutput: './generated-json',
			prettyName: "prisma-generator-nexus",
		}
	},
	onGenerate: async (options: GeneratorOptions) => {
		const models = options.dmmf.datamodel.models
		const enums = options.dmmf.datamodel.enums

		const outputPath = options.generator.output?.value
		fileWrite(`${outputPath}/prisma-models.json`, JSON.stringify(models, null, 2))
		fileWrite(`${outputPath}/prisma-enums.json`, JSON.stringify(enums, null, 2))

		await generateNexusModels(models, enums)
		logger.info("Nexus Models for GraphQL successfully generated.")
		await generateWhereInputs(models)
		logger.info("Nexus Where Inputs for GraphQL successfully generated.")
		await generateQueries(models)
		logger.info("Nexus Queries for GraphQL successfully generated.")
		await generateSubscriptions(models)
		logger.info("Nexus Subscriptions for GraphQL successfully generated.")
		await generateOrderByInputs(models)
		logger.info("Nexus OrderBy Inputs for GraphQL successfully generated.")
		await generateGroupByEnums(models)
		logger.info("Nexus GroupBy Enums for GraphQL successfully generated.")
		
		await generateMutationPayloads(models)
		logger.info("Nexus Mutation Payloads for GraphQL successfully generated.")
		await generateMutationInputs(models)
		logger.info("Nexus Mutation Inputs for GraphQL successfully generated.")

		await generateCreateMutations(models)
		logger.info("Nexus Create Mutations for GraphQL successfully generated.")
		await generateCreateManyMutations(models)
		logger.info("Nexus Create many Mutations for GraphQL successfully generated.")
		await generateUpdateMutations(models)
		logger.info("Nexus Update Mutations for GraphQL successfully generated.")
		await generateUpdateManyMutations(models)
		logger.info("Nexus Update Many Mutations for GraphQL successfully generated.")
		await generateDeleteMutations(models)
		logger.info("Nexus Delete Mutations for GraphQL successfully generated.")
		await generateDeleteManyMutations(models)
		logger.info("Nexus Delete Many Mutations for GraphQL successfully generated.")

	}
})

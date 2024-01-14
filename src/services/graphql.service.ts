import { Request } from "express";
import { GraphQLClient } from "graphql-request";
import constants from "@src/config/constants";

const deviceInstanceQuery = `query DeviceInstanceQuery($deviceInstanceWhere: DeviceInstanceWhere) {
								deviceInstanceQuery(deviceInstanceWhere: $deviceInstanceWhere) {
								data {
									connectionState
									deviceCondition
									deviceStatus
									name
									subinterface
									parentDevId
									uniqueId
									serialNumber
									shortName
									locationAssetId
									locationPos
									locationTag
									deviceClasses {
									pictureFileName
									productName
									vendor {
										name
									}
									}
								}
								}
							}`

const queries = {
	deviceInstanceQuery
}

type QueryType = keyof typeof queries

export const graphqlRequest = async (req: Request, queryModel: QueryType, variables = {}) => {
	try {
		
		// Using default configuration
		let URL = constants.DEFAULT_GRAPHQL_BASE_URL
		let PATH = constants.DEFAULT_GRAPHQL_PATH
		let TOKEN = req.accessToken

		const client = new GraphQLClient(`${URL}${PATH}`)

		const requestHeaders = {
			Authorization: TOKEN
		}
		const results = await client.request(
			queries[queryModel],
			variables,
			requestHeaders
		)
		return results
	} catch (error) {
		console.log("graphql.service.graphqlRequest error:", error);
		return false
	}
}

// usage
export const getSiconDeviceInstances = async (req: Request) => {
	const response = await graphqlRequest(req, "deviceInstanceQuery", {
		"deviceInstanceWhere": {
			"parentDevId": {
				"gt": 0
			}
		}
	}) as any
	if (response && Object.keys(response).length) return response?.deviceInstanceQuery?.data
	return false
}

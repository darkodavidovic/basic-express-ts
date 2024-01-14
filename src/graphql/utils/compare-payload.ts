/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-prototype-builtins */
export function comparePayload(payload: any, where: any) {
	const data = Object.entries(where)
	const report: { [key: string]: any } = {}
	for (const [key, value] of data) {
		report[key as keyof typeof report] = payload.hasOwnProperty(key) && payload[key as keyof typeof payload] === value
	}
	return Object.values(report).every(Boolean)
}

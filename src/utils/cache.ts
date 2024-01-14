const cache: any = {}

export const getNodeCache = (key: string) => {
	return cache[key as keyof typeof cache]
}

export const setNodeCache = (key: string, data: any) => {
	cache[key as keyof typeof cache] = data
	return "ok"
}

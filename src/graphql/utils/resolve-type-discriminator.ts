interface IMember {
	member: string,
	hasKeys: string[]
}

export function resolveType<T>(jsonField: object, members: IMember[]): T {
	// If jsonField is empty, return the first member as default.
	const firstMember = members[0].member as unknown as T;
	if (!Object.keys(jsonField).length) return firstMember
	let maxSimilarity = 0;
	let bestMatch: IMember | undefined;
	for (const member of members) {
		const similarity = member.hasKeys.filter(key => Object.keys(jsonField).includes(key)).length;
		if (similarity > maxSimilarity) {
			maxSimilarity = similarity;
			bestMatch = member;
		}
	}
	if (bestMatch) return bestMatch.member as unknown as T;
	// If no match found, return the first member as default.
	return firstMember
}

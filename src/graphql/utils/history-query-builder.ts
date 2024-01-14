export function historyQueryBuilder(devId: number, rangeStart: Date, rangeEnd: Date, samples: number, xCount: number, yCount: number, totalRecords: number) {

	function buildAVGValues(type1: string, type2: string, length: number) {
		let avg = ""
		for (let i = 0; i < length; i++) {
			avg += `, AVG( ${type1}_${i + 1} ) AS '${type2}${i + 1}'`
		}
		return avg
	}

	const xAVG = buildAVGValues("X", "x", xCount)
	const yAVG = buildAVGValues("Y", "y", yCount)
	return `SELECT @reporting_row_num := @reporting_row_num + 1 as 'rowNo', CEIL( @reporting_row_num * ( ${samples} - 2 ) / ( ${totalRecords} - 2 ) ) AS 'GroupingAttribute', Timestamp as 'timestamp'${xAVG}${yAVG} FROM Reporting WHERE DevID = ${devId} ${rangeStart ? `AND Timestamp >= '${rangeStart.toISOString()}'` : ''} ${rangeEnd ? `AND Timestamp <= '${rangeEnd.toISOString()}'` : ''} GROUP BY GroupingAttribute WITH ROLLUP;`
}

// USAGE in debug mode
// const result = historyQueryBuilder(67, "2023-02-08T17:58:34.730Z", "2023-02-08T19:58:34.730Z", 10, 1, 7, 505 )


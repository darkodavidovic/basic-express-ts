import fse from "fs-extra"
export async function fileWrite(filename: string, data: string) {
	return fse.outputFile(filename, data)
}

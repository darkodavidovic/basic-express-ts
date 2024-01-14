import { Response } from "express";

const errorHandler = (res: Response, error: any, statusCode: number = 500) => {
	res.status(statusCode)
	return { error: error.message || "Something went wrong." }
};
export default errorHandler
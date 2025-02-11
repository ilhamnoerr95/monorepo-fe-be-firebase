import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import { CustomError } from "../utils/customError";

export const errorHandler = (
	err: ErrorRequestHandler,
	req: Request,
	res: Response,
	// eslint-disable-next-line
	next: NextFunction
): any => {
	if (err instanceof CustomError) {
		return res.status(err.status).json({
			error: { status: err.status, message: err.message },
		});
	}

	return res
		.status(500)
		.json({ error: { status: 500, message: "Something went wrong" } });
};

export default errorHandler;

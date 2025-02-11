import chalk from "chalk";
import { Request, Response } from "express";

export const notFound = (req: Request, res: Response) => {
	const message = chalk.hex("FD4D00")(
		`404 Route Not Found ${req.method} ${req.url}`
	);

	console.warn(message);

	res.status(404).json({ error: { status: 404, message: "Route not found" } });
};

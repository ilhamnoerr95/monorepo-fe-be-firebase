import { dbfs } from "../config/firebaseConfig";
import { UserCollections } from "../repository/index";
import { NextFunction, Request, Response } from "express";

// type
import { IUsers, IRequest } from "../entities/user";

// utils
import { customApiError } from "../utils/customError";

export class UserController {
	// for generate token custom
	static async generateTokenCustom(req: Request, res: Response): Promise<void> {
		try {
			const { id } = req.params;
			const checkId = await dbfs.collection("users").doc(id).get();

			if (!checkId.exists)
				res
					.status(404)
					.json({ error: { status: 404, message: "user does not exist" } });

			const token = await UserCollections.generateTokenCustom(id);

			res.status(200).json({ status: 200, data: { token } });
		} catch (error) {
			console.error(error);
			throw new Error("Failed to generate token");
		}
	}

	static async fetchUserData(
		req: IRequest,
		res: Response,
		next: NextFunction
	): Promise<void> {
		try {
			const snapshot = await UserCollections.fetchUserData();

			if (snapshot.empty) next(customApiError("Data is empty", 404));

			const data: IUsers[] = [];

			snapshot.forEach((doc: any) => {
				data.push({ id: doc.id, ...doc.data() });
			});

			res.status(200).json({ status: 200, data });
		} catch (error) {
			console.error(error);
			next();
		}
	}

	static async updateUserData(
		req: IRequest,
		res: Response,
		next: NextFunction
	) {
		try {
			const { id } = req.params;
			const checkId = await dbfs.collection("users").doc(id).get();

			// check id first
			if (!checkId.exists) next(customApiError("User does not exist", 404));

			const { username, email } = req.body;

			// check username and email
			if (!username || !email)
				next(customApiError("Missing required fields", 400));

			// update data
			await UserCollections.updateUserData(id, {
				username,
				email,
			});

			res.status(200).json({ status: 200, message: id });
		} catch (error) {
			console.error("error", error);
			next();
		}
	}
}

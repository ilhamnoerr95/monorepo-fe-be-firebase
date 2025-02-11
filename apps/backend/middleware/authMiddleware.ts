import { NextFunction, Response } from "express";
import Admin, { dbfs } from "../config/firebaseConfig";

import { IRequest, IDecoded } from "../entities/user";

// utils
import { customApiError } from "../utils/customError";

export const authMiddleware = async (
	req: IRequest,
	res: Response,
	next: NextFunction
): Promise<any> => {
	const Auth = req.headers.authorization;

	if (!Auth)
		return next(customApiError("Unauthorized: token not provided", 401));

	const token = Auth?.split(" ")[1] || Auth;

	try {
		// decode token that from id Token
		const decodedToken: IDecoded = await Admin.auth().verifyIdToken(
			token as any
		);

		// gettoken
		const getUser = await dbfs
			.collection("users")
			.doc(decodedToken?.user_id as string)
			.get();

		req.user = {
			id: decodedToken.user_id,
			username: getUser.data()?.username,
			email: getUser.data()?.email,
		};

		next();
	} catch (error) {
		console.error(error);
		next();
	}
};

import Admin, { dbfs } from "../config/firebaseConfig";

import { IUsers } from "../entities/user";

// const auth = getAuth();

export class UserCollections {
	static async generateTokenCustom(uid: string): Promise<string> {
		try {
			const token = await Admin.auth().createCustomToken(uid);
			return token;
		} catch (error) {
			console.error(error);
			throw new Error("Failed to generate token");
		}
	}

	static async fetchUserData() {
		try {
			return await dbfs.collection("users").get();
		} catch (error) {
			console.error(error);
			throw new Error("internal server error");
		}
	}

	static async updateUserData(uid: string, body: Partial<IUsers>) {
		try {
			return await dbfs.collection("users").doc(uid).update(body);
		} catch (error) {
			console.error(error);
			throw new Error("internal server error");
		}
	}
}

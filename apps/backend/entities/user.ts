import { Request } from "express";

export interface IUsers {
	id?: string;
	email: string;
	username: string;
}

export interface IRequest extends Request {
	user?: { id?: string; email: string; username: string };
}

export interface IDecoded {
	iss: string;
	aud: string;
	auth_time: number;
	user_id?: string;
	sub: string;
	iat: number;
	exp: number;
	firebase: { identities: object; sign_in_provider: string };
	uid: string;
}

export class CustomError extends Error {
	public status: number;

	constructor(message: string, public statusCode: number) {
		super(message);
		this.status = statusCode;
	}
}

export const customApiError = (msg: string, status: number): CustomError => {
	return new CustomError(msg, status);
};

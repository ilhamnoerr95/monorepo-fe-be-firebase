// app/api/hello/route.ts
import { NextResponse } from "next/server";
import { headers } from "next/headers";
const baseUrl = {
	v1: process.env.NEXT_PUBLIC_BE_URL,
};

export async function GET() {
	try {
		const headerList = headers();
		const Auth = headerList.get("Authorization") as string;

		const options: {
			method: string;
			headers: {
				Authorization: string;
			};
		} = {
			method: "GET",
			headers: { Authorization: Auth },
		};
		const res = await fetch(
			`${baseUrl.v1}${process.env.NEXT_PUBLIC_USER}`,
			options
		);
		// Periksa status respons
		if (!res.ok) {
			// Jika respons tidak ok (status bukan 2xx), kembalikan respons dengan status yang sesuai
			return NextResponse.json(
				{ error: "Failed to fetch data" },
				{ status: res.status }
			);
		}

		const data = await res.json();
		console.log(data);
		return NextResponse.json(data);
	} catch (error) {
		console.error("Fetch error:", error);
		return NextResponse.json(
			{ error: "Internal Server Error" },
			{ status: 500 }
		);
	}
}

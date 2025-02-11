import {
	createApi,
	fetchBaseQuery,
	BaseQueryFn,
} from "@reduxjs/toolkit/query/react";
import type { FetchArgs, FetchBaseQueryError } from "@reduxjs/toolkit/query";
import Cookies from "js-cookie";

const baseQuery: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> =
	fetchBaseQuery({
		baseUrl: process.env.NEXT_PUBLIC_ROOT_DOMAIN,
		prepareHeaders: (headers) => {
			const token = Cookies.get("token") as string;

			if (token) {
				headers.set("Authorization", `${token}`);
			}
			return headers;
		},
	});

export const apiSlice = createApi({
	baseQuery,
	endpoints: () => ({}),
});

export const { endpoints, reducerPath, reducer, middleware } = apiSlice;
export type ApiType = typeof apiSlice;

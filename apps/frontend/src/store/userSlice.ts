import { apiSlice } from "./api/apiSlice";

export const userApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getUser: builder.query({
			query: () => ({ url: "/api/users", method: "get" }),
		}),
	}),
	overrideExisting: false,
});

export const { useGetUserQuery } = userApiSlice;

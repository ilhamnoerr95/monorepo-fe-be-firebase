import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./loginSlice";
import { apiSlice } from "./api/apiSlice";
import { userApiSlice } from "./userSlice";

export const store = configureStore({
	reducer: {
		auth: authReducer,
		[apiSlice.reducerPath]: apiSlice.reducer,
		userApiSlice: userApiSlice.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(apiSlice.middleware),
});

// type
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

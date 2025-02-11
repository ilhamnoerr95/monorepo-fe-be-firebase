import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/config/firebase";
import Cookies from "js-cookie";

interface IAuthState {
	user: {
		uid?: string;
		email: string;
	} | null;
	loading: boolean;
	error: string | null;
}

const initialState: IAuthState = {
	user: null,
	loading: false,
	error: null,
};

export const loginUser = createAsyncThunk(
	"auth/login-users",
	async (
		{ email, password }: { email: string; password: string },
		{ rejectWithValue }
	) => {
		try {
			const userCredentials = await signInWithEmailAndPassword(
				auth,
				email,
				password
			);
			const token = await userCredentials.user.getIdToken();

			Cookies.set("token", token, { expires: 1 / 24 });

			return userCredentials.user;
		} catch (error: any) {
			return rejectWithValue(error?.message);
		}
	}
);

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(loginUser.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(loginUser.fulfilled, (state, action) => {
				state.loading = false;
				state.user = action.payload as any;
			})
			.addCase(loginUser.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload as string;
			});
	},
});

export default authSlice.reducer;

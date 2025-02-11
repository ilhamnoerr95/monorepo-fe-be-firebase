"use client";

import React from "react";
import { Provider } from "react-redux";
import { store } from "@/store/index";

const Index = ({ children }: { children: React.ReactNode }) => {
	return (
		<Provider store={store}>
			<div>{children}</div>
		</Provider>
	);
};

export default Index;

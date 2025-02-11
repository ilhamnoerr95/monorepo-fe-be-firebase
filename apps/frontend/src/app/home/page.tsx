import React from "react";
import styles from "./page.module.css";

import { cookies } from "next/headers";

import { redirect } from "next/navigation";
// components
import Card from "@/components/template/Home";

const Index = () => {
	const cookieStore = cookies();
	const token = cookieStore.get("token");

	if (!token) {
		redirect("/");
	}
	return (
		<div className={styles.page}>
			<Card />
		</div>
	);
};

export default Index;

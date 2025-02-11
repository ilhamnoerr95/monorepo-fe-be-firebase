import styles from "./page.module.css";
import { cookies } from "next/headers";

import { redirect } from "next/navigation";
// components
import Login from "@/components/template/Login";

export default function Home() {
	const cookieStore = cookies();
	const token = cookieStore.get("token");

	if (token) {
		redirect("/home");
	}

	return (
		<div className={styles.page}>
			<Login />
		</div>
	);
}

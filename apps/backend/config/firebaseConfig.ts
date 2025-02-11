import { initializeApp } from "firebase-admin/app";
import admin from "firebase-admin";
import chalk from "chalk";

const serviceAccount = require("./serviceAccount.json");

initializeApp({
	credential: admin.credential.cert(serviceAccount),
});

console.info(chalk.bgCyan("Firestore connected!"));
export const dbfs = admin.firestore();
// admin.
export default admin;

import type { Metadata } from "next";
import localFont from "next/font/local";
import Layout from "@/themes/Layout";
import "./globals.css";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<meta
					name="viewport"
					content="initial-scale=1, width=device-width"
				/>
			</head>

			<body className={`${geistSans.variable} ${geistMono.variable}`}>
				<Layout>{children}</Layout>
			</body>
		</html>
	);
}

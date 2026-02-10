import type { Metadata, Viewport } from "next"
import { Inter, Lora } from "next/font/google"
import type React from "react"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

import "./globals.css"

const lora = Lora({
	subsets: ["latin"],
	variable: "--font-lora",
	display: "swap",
})

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
	display: "swap",
})

export const metadata: Metadata = {
	title: {
		default: "Riverhouse at Lindehof | A Riverside Retreat",
		template: "%s | Riverhouse at Lindehof",
	},
	description:
		"Escape to Riverhouse at Lindehof, a charming riverside retreat nestled in the heart of the countryside. Unwind, explore, and reconnect with nature.",
}

export const viewport: Viewport = {
	themeColor: "#5C3D2E",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" className={`${lora.variable} ${inter.variable}`}>
			<body className="font-sans antialiased">
				<SiteHeader />
				<main>{children}</main>
				<SiteFooter />
			</body>
		</html>
	)
}

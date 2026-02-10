"use client"

import { Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { cn } from "@/lib/utils"

const navItems = [
	{ label: "Home", href: "/" },
	{ label: "About", href: "/about" },
	{ label: "Gallery", href: "/gallery" },
	{ label: "Accommodation", href: "/accommodation" },
	{ label: "Contact", href: "/contact" },
]

export function SiteHeader() {
	const pathname = usePathname()
	const [mobileOpen, setMobileOpen] = useState(false)

	return (
		<header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
			<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
				<Link href="/" className="flex flex-col leading-tight">
					<span className="text-lg font-semibold tracking-wide text-foreground">Riverhouse</span>
					<span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
						at Lindehof
					</span>
				</Link>

				<nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
					{navItems.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className={cn(
								"text-sm tracking-wide transition-colors hover:text-primary",
								pathname === item.href ? "text-primary font-medium" : "text-muted-foreground",
							)}
						>
							{item.label}
						</Link>
					))}
				</nav>

				<a
					href="https://www.booking.com"
					target="_blank"
					rel="noopener noreferrer"
					className="hidden rounded-sm bg-primary px-5 py-2.5 text-sm font-medium tracking-wide text-primary-foreground transition-colors hover:bg-primary/90 md:inline-flex"
				>
					Book Now
				</a>

				<button
					type="button"
					className="inline-flex items-center justify-center text-foreground md:hidden"
					onClick={() => setMobileOpen(!mobileOpen)}
					aria-label={mobileOpen ? "Close menu" : "Open menu"}
				>
					{mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
				</button>
			</div>

			{mobileOpen && (
				<div className="border-t border-border bg-background px-6 py-6 md:hidden">
					<nav className="flex flex-col gap-4" aria-label="Mobile navigation">
						{navItems.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								onClick={() => setMobileOpen(false)}
								className={cn(
									"text-base tracking-wide transition-colors",
									pathname === item.href
										? "text-primary font-medium"
										: "text-muted-foreground hover:text-primary",
								)}
							>
								{item.label}
							</Link>
						))}
						<a
							href="https://www.booking.com"
							target="_blank"
							rel="noopener noreferrer"
							className="mt-2 inline-flex items-center justify-center rounded-sm bg-primary px-5 py-2.5 text-sm font-medium tracking-wide text-primary-foreground transition-colors hover:bg-primary/90"
						>
							Book Now
						</a>
					</nav>
				</div>
			)}
		</header>
	)
}

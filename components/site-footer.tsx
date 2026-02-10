import { Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"

export function SiteFooter() {
	return (
		<footer className="border-t border-border bg-primary text-primary-foreground">
			<div className="mx-auto max-w-7xl px-6 py-16">
				<div className="grid gap-12 md:grid-cols-3">
					<div>
						<Link href="/" className="flex flex-col leading-tight">
							<span className="text-xl font-semibold tracking-wide">Riverhouse</span>
							<span className="text-xs tracking-[0.2em] uppercase opacity-70">at Lindehof</span>
						</Link>
						<p
							className="mt-4 text-sm leading-relaxed opacity-80 font-[var(--font-inter)]"
							style={{ fontFamily: "var(--font-inter), sans-serif" }}
						>
							A tranquil riverside retreat where nature meets comfort. Escape the everyday and find
							yourself at home.
						</p>
					</div>

					<div>
						<h3 className="text-sm font-semibold tracking-[0.15em] uppercase mb-4">Explore</h3>
						<nav className="flex flex-col gap-2.5" aria-label="Footer navigation">
							{[
								{ label: "Home", href: "/" },
								{ label: "About", href: "/about" },
								{ label: "Gallery", href: "/gallery" },
								{ label: "Accommodation", href: "/accommodation" },
								{ label: "Contact", href: "/contact" },
							].map((item) => (
								<Link
									key={item.href}
									href={item.href}
									className="text-sm opacity-70 transition-opacity hover:opacity-100"
								>
									{item.label}
								</Link>
							))}
						</nav>
					</div>

					<div>
						<h3 className="text-sm font-semibold tracking-[0.15em] uppercase mb-4">Get in Touch</h3>
						<div className="flex flex-col gap-3">
							<div className="flex items-start gap-3 text-sm opacity-80">
								<MapPin className="mt-0.5 h-4 w-4 shrink-0" />
								<span>Lindehof Estate, Riverside Lane, Netherlands</span>
							</div>
							<div className="flex items-center gap-3 text-sm opacity-80">
								<Phone className="h-4 w-4 shrink-0" />
								<span>+31 (0) 123 456 789</span>
							</div>
							<div className="flex items-center gap-3 text-sm opacity-80">
								<Mail className="h-4 w-4 shrink-0" />
								<span>hello@riverhouselindehof.com</span>
							</div>
						</div>

						<a
							href="https://www.booking.com"
							target="_blank"
							rel="noopener noreferrer"
							className="mt-6 inline-flex items-center rounded-sm border border-primary-foreground/30 px-5 py-2.5 text-sm font-medium tracking-wide text-primary-foreground transition-colors hover:bg-primary-foreground/10"
						>
							Book Your Stay
						</a>
					</div>
				</div>

				<div className="mt-12 border-t border-primary-foreground/20 pt-8 text-center text-xs opacity-60">
					<p>{"Riverhouse at Lindehof. All rights reserved."}</p>
				</div>
			</div>
		</footer>
	)
}

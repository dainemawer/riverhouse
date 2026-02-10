import { Check } from "lucide-react"
import Image from "next/image"

const included = [
	"Fresh welcome package on arrival",
	"Bed linen and towels provided",
	"Firewood and kindling stocked",
	"Complimentary bicycles",
	"Garden access and outdoor furniture",
	"Local guidebook and recommendations",
	"Private parking for 2 cars",
	"Pet-friendly (by arrangement)",
]

export function AccommodationPricing() {
	return (
		<section className="relative py-32 lg:py-40">
			<div className="absolute inset-0">
				<Image
					src="/images/kitchen.jpg"
					alt="Fully equipped farmhouse kitchen"
					fill
					className="object-cover"
					sizes="100vw"
				/>
				<div className="absolute inset-0 bg-foreground/60" />
			</div>

			<div className="relative mx-auto max-w-4xl px-6">
				<div className="rounded-sm bg-background/95 p-10 md:p-14 backdrop-blur-sm">
					<div className="text-center">
						<p
							className="text-sm tracking-[0.2em] uppercase text-accent"
							style={{ fontFamily: "var(--font-inter), sans-serif" }}
						>
							Pricing
						</p>
						<h2 className="mt-3 text-3xl font-semibold tracking-wide text-foreground md:text-4xl text-balance">
							What Is Included
						</h2>
						<p
							className="mt-4 text-base leading-relaxed text-muted-foreground"
							style={{ fontFamily: "var(--font-inter), sans-serif" }}
						>
							Rates vary by season. Visit our booking page for current availability and pricing.
							Every stay includes:
						</p>
					</div>

					<div
						className="mt-10 grid gap-3 sm:grid-cols-2"
						style={{ fontFamily: "var(--font-inter), sans-serif" }}
					>
						{included.map((item) => (
							<div key={item} className="flex items-center gap-3">
								<Check className="h-4 w-4 shrink-0 text-accent" />
								<span className="text-sm text-foreground">{item}</span>
							</div>
						))}
					</div>

					<div className="mt-10 text-center">
						<a
							href="https://www.booking.com"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex rounded-sm bg-primary px-10 py-4 text-sm font-medium tracking-wide text-primary-foreground transition-colors hover:bg-primary/90"
						>
							Check Availability & Pricing
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}

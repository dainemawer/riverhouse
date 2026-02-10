import Image from "next/image"

export function HomeCta() {
	return (
		<section className="relative py-32 lg:py-40">
			<div className="absolute inset-0">
				<Image
					src="/images/terrace.jpg"
					alt="Riverside terrace at golden hour"
					fill
					className="object-cover"
					sizes="100vw"
				/>
				<div className="absolute inset-0 bg-foreground/50" />
			</div>

			<div className="relative mx-auto max-w-3xl px-6 text-center">
				<h2 className="text-3xl font-semibold tracking-wide text-background md:text-5xl text-balance">
					Ready to Escape?
				</h2>
				<p
					className="mt-6 text-base leading-relaxed text-background/85 md:text-lg"
					style={{ fontFamily: "var(--font-inter), sans-serif" }}
				>
					Book your stay at Riverhouse and let the rhythm of the river set the pace for your perfect
					getaway.
				</p>
				<a
					href="https://www.booking.com"
					target="_blank"
					rel="noopener noreferrer"
					className="mt-10 inline-flex rounded-sm bg-background px-10 py-4 text-sm font-medium tracking-wide text-foreground transition-colors hover:bg-background/90"
				>
					Check Availability
				</a>
			</div>
		</section>
	)
}

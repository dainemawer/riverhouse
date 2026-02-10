export function GalleryCta() {
	return (
		<section className="bg-secondary py-20 lg:py-24">
			<div className="mx-auto max-w-3xl px-6 text-center">
				<h2 className="text-3xl font-semibold tracking-wide text-foreground md:text-4xl text-balance">
					See It for Yourself
				</h2>
				<p
					className="mt-4 text-base leading-relaxed text-muted-foreground"
					style={{ fontFamily: "var(--font-inter), sans-serif" }}
				>
					Photos capture a moment, but the feeling of being here is something you have to experience
					firsthand.
				</p>
				<a
					href="https://www.booking.com"
					target="_blank"
					rel="noopener noreferrer"
					className="mt-8 inline-flex rounded-sm bg-primary px-8 py-3.5 text-sm font-medium tracking-wide text-primary-foreground transition-colors hover:bg-primary/90"
				>
					Book Your Stay
				</a>
			</div>
		</section>
	)
}

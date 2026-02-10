import { Quote } from "lucide-react"

const testimonials = [
	{
		quote:
			"The most peaceful place we have ever stayed. Waking up to the river each morning was pure magic. We did not want to leave.",
		author: "Sophie & Marc",
		origin: "Amsterdam, Netherlands",
	},
	{
		quote:
			"Beautifully appointed, surrounded by nature, and the hosts thought of everything. A true hidden gem.",
		author: "Elena Hartmann",
		origin: "Munich, Germany",
	},
	{
		quote:
			"Our family has visited three times now. The children love the river and we love the tranquility. Already planning our next trip.",
		author: "The Williams Family",
		origin: "London, United Kingdom",
	},
]

export function HomeTestimonials() {
	return (
		<section className="py-24 lg:py-32">
			<div className="mx-auto max-w-7xl px-6">
				<div className="text-center">
					<p
						className="text-sm tracking-[0.2em] uppercase text-accent"
						style={{ fontFamily: "var(--font-inter), sans-serif" }}
					>
						Guest Stories
					</p>
					<h2 className="mt-3 text-3xl font-semibold tracking-wide text-foreground md:text-4xl text-balance">
						What Our Guests Say
					</h2>
				</div>

				<div className="mt-16 grid gap-8 md:grid-cols-3">
					{testimonials.map((item) => (
						<div
							key={item.author}
							className="flex flex-col rounded-sm border border-border bg-card p-8"
						>
							<Quote className="h-8 w-8 text-primary/30" />
							<p className="mt-4 flex-1 text-base leading-relaxed text-foreground italic">
								{`"${item.quote}"`}
							</p>
							<div className="mt-6 border-t border-border pt-4">
								<p className="text-sm font-semibold text-foreground">{item.author}</p>
								<p
									className="text-xs text-muted-foreground"
									style={{ fontFamily: "var(--font-inter), sans-serif" }}
								>
									{item.origin}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

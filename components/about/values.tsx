import { Heart, Home, Leaf, Sun } from "lucide-react"

const values = [
	{
		icon: Heart,
		title: "Warmth & Welcome",
		description:
			"Every guest is treated like family. From a personal welcome to thoughtful details in every room, we ensure you feel at home from the moment you arrive.",
	},
	{
		icon: Leaf,
		title: "Sustainable Living",
		description:
			"We care deeply about this land. Organic gardens, renewable energy, and locally sourced materials are woven into everything we do.",
	},
	{
		icon: Home,
		title: "Heritage & Craft",
		description:
			"The Riverhouse is a living piece of history. We have preserved its soul while creating a space that feels fresh, comfortable, and timeless.",
	},
	{
		icon: Sun,
		title: "Nature First",
		description:
			"The river, the meadows, the changing seasons. Nature is our greatest amenity, and we have designed every experience around it.",
	},
]

export function AboutValues() {
	return (
		<section className="bg-secondary py-24 lg:py-32">
			<div className="mx-auto max-w-7xl px-6">
				<div className="text-center">
					<p
						className="text-sm tracking-[0.2em] uppercase text-accent"
						style={{ fontFamily: "var(--font-inter), sans-serif" }}
					>
						What We Stand For
					</p>
					<h2 className="mt-3 text-3xl font-semibold tracking-wide text-foreground md:text-4xl text-balance">
						Our Values
					</h2>
				</div>

				<div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
					{values.map((value) => (
						<div key={value.title} className="rounded-sm border border-border bg-card p-8">
							<value.icon className="h-8 w-8 text-primary" />
							<h3 className="mt-4 text-lg font-semibold text-foreground">{value.title}</h3>
							<p
								className="mt-2 text-sm leading-relaxed text-muted-foreground"
								style={{ fontFamily: "var(--font-inter), sans-serif" }}
							>
								{value.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

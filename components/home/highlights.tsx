import { Flame, Trees, UtensilsCrossed, Waves } from "lucide-react"
import Image from "next/image"

const highlights = [
	{
		icon: Waves,
		title: "Riverside Location",
		description: "Wake up to the gentle sounds of the river just steps from your door.",
	},
	{
		icon: Trees,
		title: "Nature at Your Door",
		description: "Surrounded by meadows, forests, and walking trails for every season.",
	},
	{
		icon: Flame,
		title: "Cozy Interiors",
		description:
			"Warm natural materials, a crackling fireplace, and thoughtful touches throughout.",
	},
	{
		icon: UtensilsCrossed,
		title: "Fully Equipped",
		description:
			"A well-appointed kitchen, outdoor dining, and everything you need to feel at home.",
	},
]

const featureImages = [
	{
		src: "/images/river.jpg",
		alt: "Serene river flowing beside the property",
	},
	{
		src: "/images/garden.jpg",
		alt: "Beautiful cottage garden with outdoor dining",
	},
	{
		src: "/images/fireplace.jpg",
		alt: "Cozy stone fireplace in the living room",
	},
]

export function HomeHighlights() {
	return (
		<section className="bg-secondary py-24 lg:py-32">
			<div className="mx-auto max-w-7xl px-6">
				<div className="text-center">
					<p
						className="text-sm tracking-[0.2em] uppercase text-accent"
						style={{ fontFamily: "var(--font-inter), sans-serif" }}
					>
						What Awaits You
					</p>
					<h2 className="mt-3 text-3xl font-semibold tracking-wide text-foreground md:text-4xl text-balance">
						The Riverhouse Experience
					</h2>
				</div>

				<div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
					{highlights.map((item) => (
						<div key={item.title} className="text-center">
							<div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
								<item.icon className="h-5 w-5 text-primary" />
							</div>
							<h3 className="mt-4 text-lg font-semibold text-foreground">{item.title}</h3>
							<p
								className="mt-2 text-sm leading-relaxed text-muted-foreground"
								style={{ fontFamily: "var(--font-inter), sans-serif" }}
							>
								{item.description}
							</p>
						</div>
					))}
				</div>

				<div className="mt-20 grid gap-4 md:grid-cols-3">
					{featureImages.map((img) => (
						<div key={img.src} className="relative aspect-[4/3] overflow-hidden rounded-sm">
							<Image
								src={img.src || "/placeholder.svg"}
								alt={img.alt}
								fill
								className="object-cover transition-transform duration-500 hover:scale-105"
								sizes="(max-width: 768px) 100vw, 33vw"
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

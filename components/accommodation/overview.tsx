import { Bath, BedDouble, Ruler, Users } from "lucide-react"
import Image from "next/image"

const stats = [
	{ icon: Users, label: "Sleeps", value: "6 Guests" },
	{ icon: BedDouble, label: "Bedrooms", value: "3 Rooms" },
	{ icon: Bath, label: "Bathrooms", value: "2 Full" },
	{ icon: Ruler, label: "Living Space", value: "140 m\u00B2" },
]

export function AccommodationOverview() {
	return (
		<section className="py-24 lg:py-32">
			<div className="mx-auto max-w-7xl px-6">
				<div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
					<div>
						<p
							className="text-sm tracking-[0.2em] uppercase text-accent"
							style={{ fontFamily: "var(--font-inter), sans-serif" }}
						>
							The Property
						</p>
						<h2 className="mt-3 text-3xl font-semibold leading-snug tracking-wide text-foreground md:text-4xl text-balance">
							A Retreat Designed for Comfort
						</h2>
						<p
							className="mt-6 text-base leading-relaxed text-muted-foreground"
							style={{ fontFamily: "var(--font-inter), sans-serif" }}
						>
							Riverhouse at Lindehof offers a generously proportioned living space that feels both
							grand and intimate. The open-plan ground floor flows from a welcoming living room with
							stone fireplace into a fully equipped farmhouse kitchen, with large doors opening onto
							the garden terrace and river beyond.
						</p>
						<p
							className="mt-4 text-base leading-relaxed text-muted-foreground"
							style={{ fontFamily: "var(--font-inter), sans-serif" }}
						>
							Upstairs, three beautifully appointed bedrooms offer peaceful views over the estate,
							while two luxurious bathrooms provide a spa-like retreat after a day of exploring.
						</p>

						<div
							className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4"
							style={{ fontFamily: "var(--font-inter), sans-serif" }}
						>
							{stats.map((stat) => (
								<div key={stat.label} className="flex flex-col items-center text-center">
									<div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
										<stat.icon className="h-4 w-4 text-primary" />
									</div>
									<p className="mt-2 text-lg font-semibold text-foreground font-serif">
										{stat.value}
									</p>
									<p className="text-xs text-muted-foreground">{stat.label}</p>
								</div>
							))}
						</div>
					</div>

					<div className="relative aspect-[4/5] overflow-hidden rounded-sm">
						<Image
							src="/images/interior-living.jpg"
							alt="Open-plan living area with natural light"
							fill
							className="object-cover"
							sizes="(max-width: 1024px) 100vw, 50vw"
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

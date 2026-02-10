import Image from "next/image"

export function AboutLocation() {
	return (
		<section className="py-24 lg:py-32">
			<div className="mx-auto max-w-7xl px-6">
				<div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
					<div>
						<p
							className="text-sm tracking-[0.2em] uppercase text-accent"
							style={{ fontFamily: "var(--font-inter), sans-serif" }}
						>
							The Setting
						</p>
						<h2 className="mt-3 text-3xl font-semibold leading-snug tracking-wide text-foreground md:text-4xl text-balance">
							Discover the Surroundings
						</h2>
						<p
							className="mt-6 text-base leading-relaxed text-muted-foreground"
							style={{ fontFamily: "var(--font-inter), sans-serif" }}
						>
							The Lindehof estate sits within a landscape of quiet beauty. Rolling countryside,
							historic villages, and winding waterways invite exploration at every turn. Cycle along
							the river, visit local farmers markets, or simply take in the panoramic views from the
							property.
						</p>
						<div
							className="mt-8 grid grid-cols-2 gap-6"
							style={{ fontFamily: "var(--font-inter), sans-serif" }}
						>
							{[
								{ label: "Nearest village", value: "2 km" },
								{ label: "Nearest city", value: "25 km" },
								{ label: "Walking trails", value: "On-site" },
								{ label: "Cycling routes", value: "At the door" },
							].map((stat) => (
								<div key={stat.label}>
									<p className="text-2xl font-semibold text-primary font-serif">{stat.value}</p>
									<p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
								</div>
							))}
						</div>
					</div>

					<div className="relative aspect-[4/3] overflow-hidden rounded-sm">
						<Image
							src="/images/local-area.jpg"
							alt="Picturesque countryside surrounding the property"
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

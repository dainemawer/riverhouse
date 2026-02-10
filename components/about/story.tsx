import Image from "next/image"

export function AboutStory() {
	return (
		<section className="py-24 lg:py-32">
			<div className="mx-auto max-w-7xl px-6">
				<div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
					<div className="order-2 lg:order-1">
						<p
							className="text-sm tracking-[0.2em] uppercase text-accent"
							style={{ fontFamily: "var(--font-inter), sans-serif" }}
						>
							The Beginning
						</p>
						<h2 className="mt-3 text-3xl font-semibold leading-snug tracking-wide text-foreground md:text-4xl text-balance">
							Born from a Love of the Land
						</h2>
						<p
							className="mt-6 text-base leading-relaxed text-muted-foreground"
							style={{ fontFamily: "var(--font-inter), sans-serif" }}
						>
							The Riverhouse began as a dream, one shared by a family who believed that the most
							beautiful places deserve to be experienced, not just admired from afar. Set on the
							historic Lindehof estate, the property was lovingly restored over two years,
							preserving its original character while introducing the comforts of modern living.
						</p>
						<p
							className="mt-4 text-base leading-relaxed text-muted-foreground"
							style={{ fontFamily: "var(--font-inter), sans-serif" }}
						>
							Every beam, every stone, and every carefully chosen piece of furniture tells a story.
							From the reclaimed oak floors to the handmade ceramic tiles, the Riverhouse is a
							celebration of craftsmanship and the quiet beauty of the Dutch countryside.
						</p>
					</div>

					<div className="relative order-1 aspect-[3/4] overflow-hidden rounded-sm lg:order-2">
						<Image
							src="/images/reading-nook.jpg"
							alt="A cozy reading nook by the window"
							fill
							className="object-cover"
							sizes="(max-width: 1024px) 100vw, 50vw"
						/>
					</div>
				</div>

				<div className="mt-24 grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
					<div className="relative aspect-[3/4] overflow-hidden rounded-sm">
						<Image
							src="/images/garden.jpg"
							alt="The cottage garden with seasonal blooms"
							fill
							className="object-cover"
							sizes="(max-width: 1024px) 100vw, 50vw"
						/>
					</div>

					<div>
						<p
							className="text-sm tracking-[0.2em] uppercase text-accent"
							style={{ fontFamily: "var(--font-inter), sans-serif" }}
						>
							Our Philosophy
						</p>
						<h2 className="mt-3 text-3xl font-semibold leading-snug tracking-wide text-foreground md:text-4xl text-balance">
							Slow Living, Thoughtful Hosting
						</h2>
						<p
							className="mt-6 text-base leading-relaxed text-muted-foreground"
							style={{ fontFamily: "var(--font-inter), sans-serif" }}
						>
							We believe the best holidays are the ones that let you slow down. No rush, no agenda,
							just the freedom to be. That is why we have created a space where comfort meets
							nature, where you can sip your morning coffee on the terrace while watching the river
							drift by, or spend the afternoon exploring hidden trails through the estate.
						</p>
						<p
							className="mt-4 text-base leading-relaxed text-muted-foreground"
							style={{ fontFamily: "var(--font-inter), sans-serif" }}
						>
							Sustainability is at the heart of everything we do. The gardens are managed
							organically, the energy comes from renewable sources, and we partner with local
							artisans and producers to bring you the very best of the region.
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

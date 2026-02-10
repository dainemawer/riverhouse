import Image from "next/image"

export function HomeIntro() {
	return (
		<section id="discover" className="py-24 lg:py-32">
			<div className="mx-auto max-w-7xl px-6">
				<div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
					<div>
						<p
							className="text-sm tracking-[0.2em] uppercase text-accent"
							style={{ fontFamily: "var(--font-inter), sans-serif" }}
						>
							Welcome
						</p>
						<h2 className="mt-3 text-3xl font-semibold leading-snug tracking-wide text-foreground md:text-4xl text-balance">
							A Place to Pause, Breathe & Reconnect
						</h2>
						<p
							className="mt-6 text-base leading-relaxed text-muted-foreground"
							style={{ fontFamily: "var(--font-inter), sans-serif" }}
						>
							Tucked along the banks of a gentle river and surrounded by sprawling meadows,
							Riverhouse at Lindehof is more than just a place to stay. It is a retreat for the
							soul. Whether you seek quiet mornings by the water or long walks through the
							countryside, this is where memories are made.
						</p>
						<p
							className="mt-4 text-base leading-relaxed text-muted-foreground"
							style={{ fontFamily: "var(--font-inter), sans-serif" }}
						>
							Every detail has been considered with care, from the locally sourced furnishings to
							the seasonal gardens that greet you at the door. Come as a guest, leave as family.
						</p>
						<a
							href="/about"
							className="mt-8 inline-flex items-center text-sm font-medium tracking-wide text-primary transition-colors hover:text-primary/80"
						>
							Learn Our Story
							<span className="ml-2" aria-hidden="true">
								&rarr;
							</span>
						</a>
					</div>

					<div className="relative aspect-[4/5] overflow-hidden rounded-sm">
						<Image
							src="/images/interior-living.jpg"
							alt="Warm and inviting living space with natural light"
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

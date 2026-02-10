import { ArrowDown } from "lucide-react"
import Image from "next/image"

export function HomeHero() {
	return (
		<section className="relative h-screen min-h-[600px] w-full overflow-hidden">
			<Image
				src="/images/hero.jpg"
				alt="Riverhouse at Lindehof - a charming riverside retreat surrounded by nature"
				fill
				className="object-cover"
				priority
				sizes="100vw"
			/>
			<div className="absolute inset-0 bg-foreground/40" />

			<div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
				<p
					className="mb-4 text-sm tracking-[0.3em] uppercase text-background/80"
					style={{ fontFamily: "var(--font-inter), sans-serif" }}
				>
					A Riverside Retreat
				</p>
				<h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-wide text-background md:text-6xl lg:text-7xl text-balance">
					Riverhouse at Lindehof
				</h1>
				<p
					className="mt-6 max-w-xl text-base leading-relaxed text-background/85 md:text-lg"
					style={{ fontFamily: "var(--font-inter), sans-serif" }}
				>
					Where the river whispers and time stands still. Your escape into nature awaits.
				</p>
				<div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
					<a
						href="https://www.booking.com"
						target="_blank"
						rel="noopener noreferrer"
						className="rounded-sm bg-background px-8 py-3.5 text-sm font-medium tracking-wide text-foreground transition-colors hover:bg-background/90"
					>
						Book Your Stay
					</a>
					<a
						href="#discover"
						className="rounded-sm border border-background/40 px-8 py-3.5 text-sm tracking-wide text-background transition-colors hover:bg-background/10"
					>
						Discover More
					</a>
				</div>
			</div>

			<div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
				<ArrowDown className="h-5 w-5 text-background/60" />
			</div>
		</section>
	)
}

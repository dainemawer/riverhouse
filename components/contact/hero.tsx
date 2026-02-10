import Image from "next/image"

export function ContactHero() {
	return (
		<section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
			<Image
				src="/images/river.jpg"
				alt="Peaceful river scene near Riverhouse at Lindehof"
				fill
				className="object-cover"
				priority
				sizes="100vw"
			/>
			<div className="absolute inset-0 bg-foreground/40" />

			<div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
				<p
					className="mb-3 text-sm tracking-[0.3em] uppercase text-background/80"
					style={{ fontFamily: "var(--font-inter), sans-serif" }}
				>
					Get in Touch
				</p>
				<h1 className="max-w-2xl text-4xl font-semibold tracking-wide text-background md:text-5xl lg:text-6xl text-balance">
					Contact Us
				</h1>
			</div>
		</section>
	)
}

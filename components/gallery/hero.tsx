import Image from "next/image"

export function GalleryHero() {
	return (
		<section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
			<Image
				src="/images/garden.jpg"
				alt="The beautiful gardens at Riverhouse at Lindehof"
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
					Take a Look
				</p>
				<h1 className="max-w-2xl text-4xl font-semibold tracking-wide text-background md:text-5xl lg:text-6xl text-balance">
					Gallery
				</h1>
			</div>
		</section>
	)
}

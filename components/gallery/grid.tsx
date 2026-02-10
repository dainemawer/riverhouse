"use client"

import { ChevronLeft, ChevronRight, X } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

const galleryImages = [
	{
		src: "/images/hero.jpg",
		alt: "Riverhouse exterior at golden hour",
		category: "Exterior",
		span: "md:col-span-2 md:row-span-2",
		aspect: "aspect-square",
	},
	{
		src: "/images/interior-living.jpg",
		alt: "Warm and inviting living room",
		category: "Interior",
		span: "",
		aspect: "aspect-[4/3]",
	},
	{
		src: "/images/bedroom.jpg",
		alt: "Comfortable bedroom with natural light",
		category: "Interior",
		span: "",
		aspect: "aspect-[4/3]",
	},
	{
		src: "/images/kitchen.jpg",
		alt: "Rustic-modern kitchen with all amenities",
		category: "Interior",
		span: "md:col-span-2",
		aspect: "aspect-[16/9]",
	},
	{
		src: "/images/bathroom.jpg",
		alt: "Spa-like bathroom with freestanding tub",
		category: "Interior",
		span: "",
		aspect: "aspect-[4/3]",
	},
	{
		src: "/images/river.jpg",
		alt: "Serene river flowing beside the property",
		category: "Surroundings",
		span: "",
		aspect: "aspect-[4/3]",
	},
	{
		src: "/images/garden.jpg",
		alt: "Cottage garden with outdoor dining",
		category: "Exterior",
		span: "",
		aspect: "aspect-[4/3]",
	},
	{
		src: "/images/fireplace.jpg",
		alt: "Stone fireplace on a cozy evening",
		category: "Interior",
		span: "",
		aspect: "aspect-[4/3]",
	},
	{
		src: "/images/terrace.jpg",
		alt: "Riverside terrace with morning coffee",
		category: "Exterior",
		span: "md:col-span-2",
		aspect: "aspect-[16/9]",
	},
	{
		src: "/images/reading-nook.jpg",
		alt: "Reading nook by the window",
		category: "Interior",
		span: "",
		aspect: "aspect-[4/3]",
	},
	{
		src: "/images/local-area.jpg",
		alt: "The picturesque local countryside village",
		category: "Surroundings",
		span: "",
		aspect: "aspect-[4/3]",
	},
	{
		src: "/images/about-aerial.jpg",
		alt: "Aerial view of the estate",
		category: "Surroundings",
		span: "md:col-span-2",
		aspect: "aspect-[16/9]",
	},
]

const categories = ["All", "Interior", "Exterior", "Surroundings"]

export function GalleryGrid() {
	const [activeCategory, setActiveCategory] = useState("All")
	const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

	const filteredImages =
		activeCategory === "All"
			? galleryImages
			: galleryImages.filter((img) => img.category === activeCategory)

	const openLightbox = (index: number) => setLightboxIndex(index)
	const closeLightbox = () => setLightboxIndex(null)

	const goNext = () => {
		if (lightboxIndex !== null) {
			setLightboxIndex((lightboxIndex + 1) % filteredImages.length)
		}
	}

	const goPrev = () => {
		if (lightboxIndex !== null) {
			setLightboxIndex((lightboxIndex - 1 + filteredImages.length) % filteredImages.length)
		}
	}

	return (
		<section className="py-24 lg:py-32">
			<div className="mx-auto max-w-7xl px-6">
				<div
					className="flex flex-wrap items-center justify-center gap-3 mb-16"
					style={{ fontFamily: "var(--font-inter), sans-serif" }}
				>
					{categories.map((cat) => (
						<button
							key={cat}
							type="button"
							onClick={() => setActiveCategory(cat)}
							className={`rounded-sm px-5 py-2 text-sm tracking-wide transition-colors ${
								activeCategory === cat
									? "bg-primary text-primary-foreground"
									: "border border-border text-muted-foreground hover:text-foreground hover:border-foreground"
							}`}
						>
							{cat}
						</button>
					))}
				</div>

				<div className="grid gap-4 md:grid-cols-4">
					{filteredImages.map((img, i) => (
						<button
							key={img.src}
							type="button"
							onClick={() => openLightbox(i)}
							className={`group relative overflow-hidden rounded-sm ${img.span} ${img.aspect}`}
						>
							<Image
								src={img.src || "/placeholder.svg"}
								alt={img.alt}
								fill
								className="object-cover transition-transform duration-500 group-hover:scale-105"
								sizes="(max-width: 768px) 100vw, 25vw"
							/>
							<div className="absolute inset-0 bg-foreground/0 transition-colors group-hover:bg-foreground/20" />
							<div className="absolute bottom-0 left-0 right-0 translate-y-full bg-foreground/60 p-3 text-left transition-transform duration-300 group-hover:translate-y-0">
								<p
									className="text-xs text-background/90"
									style={{ fontFamily: "var(--font-inter), sans-serif" }}
								>
									{img.category}
								</p>
								<p className="text-sm text-background font-medium">{img.alt}</p>
							</div>
						</button>
					))}
				</div>
			</div>

			{lightboxIndex !== null && (
				<div
					className="fixed inset-0 z-[60] flex items-center justify-center bg-foreground/90 p-4"
					role="dialog"
					aria-modal="true"
					aria-label="Image lightbox"
				>
					<button
						type="button"
						onClick={closeLightbox}
						className="absolute top-6 right-6 text-background/80 hover:text-background"
						aria-label="Close lightbox"
					>
						<X className="h-6 w-6" />
					</button>

					<button
						type="button"
						onClick={goPrev}
						className="absolute left-4 text-background/60 hover:text-background md:left-8"
						aria-label="Previous image"
					>
						<ChevronLeft className="h-8 w-8" />
					</button>

					<div className="relative h-[80vh] w-full max-w-5xl">
						<Image
							src={filteredImages[lightboxIndex].src || "/placeholder.svg"}
							alt={filteredImages[lightboxIndex].alt}
							fill
							className="object-contain"
							sizes="100vw"
						/>
					</div>

					<button
						type="button"
						onClick={goNext}
						className="absolute right-4 text-background/60 hover:text-background md:right-8"
						aria-label="Next image"
					>
						<ChevronRight className="h-8 w-8" />
					</button>

					<div
						className="absolute bottom-6 text-center text-sm text-background/70"
						style={{ fontFamily: "var(--font-inter), sans-serif" }}
					>
						{filteredImages[lightboxIndex].alt} &mdash; {lightboxIndex + 1} of{" "}
						{filteredImages.length}
					</div>
				</div>
			)}
		</section>
	)
}

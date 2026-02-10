import type { Metadata } from "next"
import { GalleryCta } from "@/components/gallery/cta"
import { GalleryGrid } from "@/components/gallery/grid"
import { GalleryHero } from "@/components/gallery/hero"

export const metadata: Metadata = {
	title: "Gallery",
	description:
		"Explore the beauty of Riverhouse at Lindehof through our gallery. Discover the interiors, gardens, riverside views, and the surrounding countryside.",
}

export default function GalleryPage() {
	return (
		<>
			<GalleryHero />
			<GalleryGrid />
			<GalleryCta />
		</>
	)
}

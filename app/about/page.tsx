import type { Metadata } from "next"
import { AboutHero } from "@/components/about/hero"
import { AboutLocation } from "@/components/about/location"
import { AboutStory } from "@/components/about/story"
import { AboutValues } from "@/components/about/values"

export const metadata: Metadata = {
	title: "About",
	description:
		"Discover the story behind Riverhouse at Lindehof, a lovingly restored riverside retreat in the heart of the Dutch countryside.",
}

export default function AboutPage() {
	return (
		<>
			<AboutHero />
			<AboutStory />
			<AboutValues />
			<AboutLocation />
		</>
	)
}

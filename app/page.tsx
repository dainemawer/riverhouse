import { HomeCta } from "@/components/home/cta"
import { HomeHero } from "@/components/home/hero"
import { HomeHighlights } from "@/components/home/highlights"
import { HomeIntro } from "@/components/home/intro"
import { HomeTestimonials } from "@/components/home/testimonials"

export default function HomePage() {
	return (
		<>
			<HomeHero />
			<HomeIntro />
			<HomeHighlights />
			<HomeTestimonials />
			<HomeCta />
		</>
	)
}

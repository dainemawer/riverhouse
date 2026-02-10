import type { Metadata } from "next"
import { AccommodationAmenities } from "@/components/accommodation/amenities"
import { AccommodationHero } from "@/components/accommodation/hero"
import { AccommodationOverview } from "@/components/accommodation/overview"
import { AccommodationPricing } from "@/components/accommodation/pricing"
import { AccommodationRooms } from "@/components/accommodation/rooms"

export const metadata: Metadata = {
	title: "Accommodation",
	description:
		"Explore the rooms, amenities, and comforts of Riverhouse at Lindehof. A fully equipped riverside retreat designed for relaxation.",
}

export default function AccommodationPage() {
	return (
		<>
			<AccommodationHero />
			<AccommodationOverview />
			<AccommodationRooms />
			<AccommodationAmenities />
			<AccommodationPricing />
		</>
	)
}

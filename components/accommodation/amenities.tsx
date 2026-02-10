import {
	Bike,
	BookOpen,
	Car,
	Coffee,
	Dog,
	Flame,
	ShowerHead,
	TreePine,
	Tv,
	UtensilsCrossed,
	WashingMachine,
	Wifi,
} from "lucide-react"

const amenities = [
	{ icon: Wifi, label: "High-speed Wi-Fi" },
	{ icon: Car, label: "Private parking" },
	{ icon: UtensilsCrossed, label: "Fully equipped kitchen" },
	{ icon: Flame, label: "Wood-burning fireplace" },
	{ icon: WashingMachine, label: "Washer & dryer" },
	{ icon: Tv, label: "Smart TV & streaming" },
	{ icon: Dog, label: "Pet-friendly" },
	{ icon: TreePine, label: "Private garden" },
	{ icon: Coffee, label: "Nespresso machine" },
	{ icon: ShowerHead, label: "Rainfall showers" },
	{ icon: BookOpen, label: "Library corner" },
	{ icon: Bike, label: "Bicycles available" },
]

export function AccommodationAmenities() {
	return (
		<section className="py-24 lg:py-32">
			<div className="mx-auto max-w-7xl px-6">
				<div className="text-center">
					<p
						className="text-sm tracking-[0.2em] uppercase text-accent"
						style={{ fontFamily: "var(--font-inter), sans-serif" }}
					>
						Everything You Need
					</p>
					<h2 className="mt-3 text-3xl font-semibold tracking-wide text-foreground md:text-4xl text-balance">
						Amenities & Comforts
					</h2>
				</div>

				<div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
					{amenities.map((amenity) => (
						<div
							key={amenity.label}
							className="flex items-center gap-4 rounded-sm border border-border bg-card p-5"
						>
							<amenity.icon className="h-5 w-5 shrink-0 text-primary" />
							<span
								className="text-sm text-foreground"
								style={{ fontFamily: "var(--font-inter), sans-serif" }}
							>
								{amenity.label}
							</span>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

import Image from "next/image"

const rooms = [
	{
		name: "The River Suite",
		description:
			"The primary bedroom with king-sized bed, ensuite bathroom with freestanding bath, and floor-to-ceiling windows overlooking the river.",
		image: "/images/bedroom.jpg",
		details: ["King bed", "Ensuite bathroom", "River views", "Walk-in wardrobe"],
	},
	{
		name: "The Garden Room",
		description:
			"A bright and airy double room with views over the cottage garden. Furnished with locally crafted oak furniture and fine linen bedding.",
		image: "/images/reading-nook.jpg",
		details: ["Double bed", "Garden views", "Reading nook", "Wardrobe"],
	},
	{
		name: "The Loft Room",
		description:
			"A charming twin room tucked beneath the eaves with exposed beams. Perfect for children or guests who appreciate character.",
		image: "/images/fireplace.jpg",
		details: ["Twin beds", "Exposed beams", "Countryside views", "Storage"],
	},
]

export function AccommodationRooms() {
	return (
		<section className="bg-secondary py-24 lg:py-32">
			<div className="mx-auto max-w-7xl px-6">
				<div className="text-center">
					<p
						className="text-sm tracking-[0.2em] uppercase text-accent"
						style={{ fontFamily: "var(--font-inter), sans-serif" }}
					>
						The Rooms
					</p>
					<h2 className="mt-3 text-3xl font-semibold tracking-wide text-foreground md:text-4xl text-balance">
						Three Unique Bedrooms
					</h2>
					<p
						className="mt-4 max-w-2xl mx-auto text-base leading-relaxed text-muted-foreground"
						style={{ fontFamily: "var(--font-inter), sans-serif" }}
					>
						Each room has been individually designed with its own character, while sharing the same
						commitment to comfort and quality.
					</p>
				</div>

				<div className="mt-16 grid gap-8 lg:grid-cols-3">
					{rooms.map((room) => (
						<div
							key={room.name}
							className="overflow-hidden rounded-sm border border-border bg-card"
						>
							<div className="relative aspect-[4/3]">
								<Image
									src={room.image || "/placeholder.svg"}
									alt={room.name}
									fill
									className="object-cover"
									sizes="(max-width: 1024px) 100vw, 33vw"
								/>
							</div>
							<div className="p-6">
								<h3 className="text-xl font-semibold text-foreground">{room.name}</h3>
								<p
									className="mt-2 text-sm leading-relaxed text-muted-foreground"
									style={{ fontFamily: "var(--font-inter), sans-serif" }}
								>
									{room.description}
								</p>
								<div
									className="mt-4 flex flex-wrap gap-2"
									style={{ fontFamily: "var(--font-inter), sans-serif" }}
								>
									{room.details.map((detail) => (
										<span
											key={detail}
											className="rounded-sm bg-secondary px-3 py-1 text-xs text-muted-foreground"
										>
											{detail}
										</span>
									))}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

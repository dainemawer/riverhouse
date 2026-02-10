import { Clock, Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"

const contactDetails = [
	{
		icon: MapPin,
		label: "Address",
		value: "Lindehof Estate, Riverside Lane\nNetherlands",
	},
	{
		icon: Phone,
		label: "Phone",
		value: "+31 (0) 123 456 789",
	},
	{
		icon: Mail,
		label: "Email",
		value: "hello@riverhouselindehof.com",
	},
	{
		icon: Clock,
		label: "Check-in / Check-out",
		value: "Check-in from 15:00\nCheck-out by 11:00",
	},
]

export function ContactInfo() {
	return (
		<div>
			<div className="relative aspect-[4/3] overflow-hidden rounded-sm mb-8">
				<Image
					src="/images/terrace.jpg"
					alt="The riverside terrace at Riverhouse"
					fill
					className="object-cover"
					sizes="(max-width: 1024px) 100vw, 40vw"
				/>
			</div>

			<div className="flex flex-col gap-6" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
				{contactDetails.map((detail) => (
					<div key={detail.label} className="flex items-start gap-4">
						<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
							<detail.icon className="h-4 w-4 text-primary" />
						</div>
						<div>
							<p className="text-sm font-semibold text-foreground font-serif">{detail.label}</p>
							<p className="mt-0.5 text-sm text-muted-foreground whitespace-pre-line">
								{detail.value}
							</p>
						</div>
					</div>
				))}
			</div>

			<div className="mt-8 rounded-sm border border-border bg-card p-6">
				<h3 className="text-lg font-semibold text-foreground">Quick Booking</h3>
				<p
					className="mt-2 text-sm leading-relaxed text-muted-foreground"
					style={{ fontFamily: "var(--font-inter), sans-serif" }}
				>
					Ready to plan your stay? Check availability and book directly through our booking partner.
				</p>
				<a
					href="https://www.booking.com"
					target="_blank"
					rel="noopener noreferrer"
					className="mt-4 inline-flex w-full items-center justify-center rounded-sm bg-primary px-6 py-3 text-sm font-medium tracking-wide text-primary-foreground transition-colors hover:bg-primary/90"
					style={{ fontFamily: "var(--font-inter), sans-serif" }}
				>
					Check Availability
				</a>
			</div>
		</div>
	)
}

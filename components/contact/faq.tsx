"use client"

import { ChevronDown } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

const faqs = [
	{
		question: "What is the minimum stay?",
		answer:
			"Our minimum stay is two nights. During peak season and holidays, a minimum of three nights may apply. Please check availability for specific dates.",
	},
	{
		question: "Is Riverhouse pet-friendly?",
		answer:
			"Yes, we welcome well-behaved dogs by prior arrangement. A small surcharge applies to cover additional cleaning. Please let us know when booking so we can prepare accordingly.",
	},
	{
		question: "What time is check-in and check-out?",
		answer:
			"Check-in is available from 15:00, and check-out is by 11:00. If you need flexibility, please contact us and we will do our best to accommodate your schedule.",
	},
	{
		question: "Is there parking available?",
		answer:
			"Yes, there is private parking for up to two vehicles directly at the property, included in your stay at no extra cost.",
	},
	{
		question: "How do I get to Riverhouse at Lindehof?",
		answer:
			"Detailed directions will be provided upon booking confirmation. The property is easily accessible by car and is approximately 25 km from the nearest city. We can also arrange taxi transfers from the train station.",
	},
	{
		question: "Are bed linen and towels provided?",
		answer:
			"Yes, all bed linen, bath towels, and kitchen towels are provided and freshly laundered for your arrival. Bathrobes are also available in the River Suite.",
	},
]

export function ContactFaq() {
	const [openIndex, setOpenIndex] = useState<number | null>(null)

	const toggle = (index: number) => {
		setOpenIndex(openIndex === index ? null : index)
	}

	return (
		<section className="bg-secondary py-24 lg:py-32">
			<div className="mx-auto max-w-3xl px-6">
				<div className="text-center">
					<p
						className="text-sm tracking-[0.2em] uppercase text-accent"
						style={{ fontFamily: "var(--font-inter), sans-serif" }}
					>
						Common Questions
					</p>
					<h2 className="mt-3 text-3xl font-semibold tracking-wide text-foreground md:text-4xl text-balance">
						Frequently Asked Questions
					</h2>
				</div>

				<div className="mt-12 flex flex-col">
					{faqs.map((faq, i) => (
						<div key={faq.question} className="border-b border-border">
							<button
								type="button"
								onClick={() => toggle(i)}
								className="flex w-full items-center justify-between py-5 text-left"
								aria-expanded={openIndex === i}
							>
								<span className="text-base font-medium text-foreground pr-4">{faq.question}</span>
								<ChevronDown
									className={cn(
										"h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200",
										openIndex === i && "rotate-180",
									)}
								/>
							</button>
							<div
								className={cn(
									"grid transition-all duration-200",
									openIndex === i ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]",
								)}
							>
								<div className="overflow-hidden">
									<p
										className="text-sm leading-relaxed text-muted-foreground"
										style={{ fontFamily: "var(--font-inter), sans-serif" }}
									>
										{faq.answer}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

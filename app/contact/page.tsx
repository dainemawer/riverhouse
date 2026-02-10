import type { Metadata } from "next"
import { ContactFaq } from "@/components/contact/faq"
import { ContactForm } from "@/components/contact/form"
import { ContactHero } from "@/components/contact/hero"
import { ContactInfo } from "@/components/contact/info"

export const metadata: Metadata = {
	title: "Contact",
	description:
		"Get in touch with Riverhouse at Lindehof. We would love to hear from you and help plan your perfect stay.",
}

export default function ContactPage() {
	return (
		<>
			<ContactHero />
			<div className="py-24 lg:py-32">
				<div className="mx-auto max-w-7xl px-6">
					<div className="grid gap-16 lg:grid-cols-5 lg:gap-20">
						<div className="lg:col-span-3">
							<ContactForm />
						</div>
						<div className="lg:col-span-2">
							<ContactInfo />
						</div>
					</div>
				</div>
			</div>
			<ContactFaq />
		</>
	)
}

"use client"

import type React from "react"
import { useState } from "react"

export function ContactForm() {
	const [submitted, setSubmitted] = useState(false)

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setSubmitted(true)
	}

	if (submitted) {
		return (
			<div className="rounded-sm border border-border bg-card p-10 text-center">
				<h3 className="text-2xl font-semibold text-foreground">Thank You</h3>
				<p
					className="mt-3 text-base leading-relaxed text-muted-foreground"
					style={{ fontFamily: "var(--font-inter), sans-serif" }}
				>
					Your message has been sent. We will get back to you as soon as possible.
				</p>
			</div>
		)
	}

	return (
		<div>
			<p
				className="text-sm tracking-[0.2em] uppercase text-accent"
				style={{ fontFamily: "var(--font-inter), sans-serif" }}
			>
				Send a Message
			</p>
			<h2 className="mt-3 text-3xl font-semibold tracking-wide text-foreground md:text-4xl text-balance">
				We Would Love to Hear from You
			</h2>
			<p
				className="mt-4 text-base leading-relaxed text-muted-foreground"
				style={{ fontFamily: "var(--font-inter), sans-serif" }}
			>
				Have a question about Riverhouse, or want to discuss your stay? Fill out the form and we
				will be in touch.
			</p>

			<form
				onSubmit={handleSubmit}
				className="mt-10 flex flex-col gap-6"
				style={{ fontFamily: "var(--font-inter), sans-serif" }}
			>
				<div className="grid gap-6 sm:grid-cols-2">
					<div>
						<label htmlFor="firstName" className="mb-2 block text-sm font-medium text-foreground">
							First Name
						</label>
						<input
							type="text"
							id="firstName"
							name="firstName"
							required
							className="w-full rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
							placeholder="Your first name"
						/>
					</div>
					<div>
						<label htmlFor="lastName" className="mb-2 block text-sm font-medium text-foreground">
							Last Name
						</label>
						<input
							type="text"
							id="lastName"
							name="lastName"
							required
							className="w-full rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
							placeholder="Your last name"
						/>
					</div>
				</div>

				<div>
					<label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
						Email Address
					</label>
					<input
						type="email"
						id="email"
						name="email"
						required
						className="w-full rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
						placeholder="you@example.com"
					/>
				</div>

				<div>
					<label htmlFor="subject" className="mb-2 block text-sm font-medium text-foreground">
						Subject
					</label>
					<select
						id="subject"
						name="subject"
						className="w-full rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
					>
						<option value="general">General Enquiry</option>
						<option value="booking">Booking Question</option>
						<option value="special">Special Occasion</option>
						<option value="feedback">Feedback</option>
					</select>
				</div>

				<div>
					<label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
						Message
					</label>
					<textarea
						id="message"
						name="message"
						rows={5}
						required
						className="w-full rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-none"
						placeholder="Tell us how we can help..."
					/>
				</div>

				<button
					type="submit"
					className="self-start rounded-sm bg-primary px-8 py-3.5 text-sm font-medium tracking-wide text-primary-foreground transition-colors hover:bg-primary/90"
				>
					Send Message
				</button>
			</form>
		</div>
	)
}

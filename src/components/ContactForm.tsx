"use client"

import { useState, FormEvent } from "react"

const FORM_ENDPOINT = "https://forms.caltechweb.com/api/submit"

export default function ContactForm() {
  const [fields, setFields] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    topic: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus("sending")

    const fullName = `${fields.firstName} ${fields.lastName}`.trim()
    const messageParts = [
      fields.phone && `Phone: ${fields.phone}`,
      fields.topic && `Topic: ${fields.topic}`,
      fields.message,
    ].filter(Boolean)

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          site: "gccmadera.com",
          name: fullName,
          email: fields.email,
          message: messageParts.join("\n\n"),
          source: "contact-page",
        }),
      })

      if (res.ok) {
        setStatus("success")
        return
      }
    } catch {
      // fall through to mailto
    }

    const subject = encodeURIComponent(`Website message from ${fullName}`)
    const body = encodeURIComponent(messageParts.join("\n\n"))
    window.location.href = `mailto:info@gccmadera.com?subject=${subject}&body=${body}`
    setStatus("success")
  }

  if (status === "success") {
    return (
      <div className="bg-white rounded-3xl p-8 shadow-sm border border-[#e8e0d0] text-center">
        <div className="w-14 h-14 bg-green-50 border border-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-[#1a2e4a] mb-2">Message Sent!</h3>
        <p className="text-[#7a7060] text-sm">Thank you for reaching out. We typically respond within one business day.</p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-3xl p-8 shadow-sm border border-[#e8e0d0]">
      <h3 className="text-[#1a2e4a] font-bold text-xl mb-2">Send Us a Message</h3>
      <p className="text-[#7a7060] text-sm mb-6">We typically respond within one business day.</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-[#1a2e4a] text-sm font-medium mb-1.5">First Name</label>
            <input
              type="text"
              name="firstName"
              required
              value={fields.firstName}
              onChange={handleChange}
              placeholder="John"
              className="w-full px-4 py-3 rounded-xl border border-[#e8e0d0] bg-[#faf7f2] text-[#2d2d2d] text-sm focus:outline-none focus:ring-2 focus:ring-[#c8973a] focus:border-transparent placeholder:text-[#b0a898]"
            />
          </div>
          <div>
            <label className="block text-[#1a2e4a] text-sm font-medium mb-1.5">Last Name</label>
            <input
              type="text"
              name="lastName"
              required
              value={fields.lastName}
              onChange={handleChange}
              placeholder="Smith"
              className="w-full px-4 py-3 rounded-xl border border-[#e8e0d0] bg-[#faf7f2] text-[#2d2d2d] text-sm focus:outline-none focus:ring-2 focus:ring-[#c8973a] focus:border-transparent placeholder:text-[#b0a898]"
            />
          </div>
        </div>
        <div>
          <label className="block text-[#1a2e4a] text-sm font-medium mb-1.5">Email</label>
          <input
            type="email"
            name="email"
            required
            value={fields.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className="w-full px-4 py-3 rounded-xl border border-[#e8e0d0] bg-[#faf7f2] text-[#2d2d2d] text-sm focus:outline-none focus:ring-2 focus:ring-[#c8973a] focus:border-transparent placeholder:text-[#b0a898]"
          />
        </div>
        <div>
          <label className="block text-[#1a2e4a] text-sm font-medium mb-1.5">Phone (optional)</label>
          <input
            type="tel"
            name="phone"
            value={fields.phone}
            onChange={handleChange}
            placeholder="(559) 000-0000"
            className="w-full px-4 py-3 rounded-xl border border-[#e8e0d0] bg-[#faf7f2] text-[#2d2d2d] text-sm focus:outline-none focus:ring-2 focus:ring-[#c8973a] focus:border-transparent placeholder:text-[#b0a898]"
          />
        </div>
        <div>
          <label className="block text-[#1a2e4a] text-sm font-medium mb-1.5">How can we help?</label>
          <select
            name="topic"
            value={fields.topic}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-[#e8e0d0] bg-[#faf7f2] text-[#2d2d2d] text-sm focus:outline-none focus:ring-2 focus:ring-[#c8973a] focus:border-transparent"
          >
            <option value="">Select a topic...</option>
            <option value="I want to visit GCC">I want to visit GCC</option>
            <option value="Prayer request">Prayer request</option>
            <option value="Church membership">Church membership</option>
            <option value="Children's Ministry">Children&apos;s Ministry</option>
            <option value="Youth Ministry">Youth Ministry</option>
            <option value="Pastoral care / counseling">Pastoral care / counseling</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label className="block text-[#1a2e4a] text-sm font-medium mb-1.5">Message</label>
          <textarea
            name="message"
            required
            rows={4}
            value={fields.message}
            onChange={handleChange}
            placeholder="Tell us more..."
            className="w-full px-4 py-3 rounded-xl border border-[#e8e0d0] bg-[#faf7f2] text-[#2d2d2d] text-sm focus:outline-none focus:ring-2 focus:ring-[#c8973a] focus:border-transparent resize-none placeholder:text-[#b0a898]"
          />
        </div>
        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full bg-[#1a2e4a] hover:bg-[#243d61] text-white font-semibold py-3.5 rounded-xl transition-colors text-sm disabled:opacity-50"
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  )
}

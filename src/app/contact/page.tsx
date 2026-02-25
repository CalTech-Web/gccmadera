import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Contact Us | Grace Community Church Madera",
  description: "Get in touch with Grace Community Church Madera. (559) 674-1172 · info@gccmadera.com · 17755 Road 26, Madera, CA 93638.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Reach Out"
        title="Contact Us"
        subtitle="Have questions? Want to talk to a pastor? Need prayer? Our team is here for you."
      />

      {/* Contact Info + Form */}
      <section className="bg-[#faf7f2] py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Info */}
            <div>
              <p className="text-[#c8973a] text-sm font-semibold tracking-widest uppercase mb-4">Get in Touch</p>
              <h2
                className="text-[#1a2e4a] text-4xl font-bold mb-6"
                style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
              >
                We&apos;d Love<br />
                to Hear From You
              </h2>
              <p className="text-[#7a7060] text-lg leading-relaxed mb-8">
                Whether you&apos;re curious about visiting, want to ask about a ministry, or simply need someone to
                pray with you, we&apos;re glad you reached out.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    ),
                    label: "Address",
                    value: "17755 Road 26, Madera, CA 93638",
                    href: "https://maps.google.com/?q=17755+Road+26+Madera+CA",
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    ),
                    label: "Phone",
                    value: "(559) 674-1172",
                    href: "tel:5596741172",
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    ),
                    label: "General Email",
                    value: "info@gccmadera.com",
                    href: "mailto:info@gccmadera.com",
                  },
                ].map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    className="flex items-start gap-4 group"
                    target={c.href.startsWith("https") ? "_blank" : undefined}
                    rel={c.href.startsWith("https") ? "noopener noreferrer" : undefined}
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#1a2e4a] text-[#c8973a] flex items-center justify-center flex-shrink-0">
                      {c.icon}
                    </div>
                    <div>
                      <div className="text-[#7a7060] text-xs uppercase tracking-wider font-medium mb-0.5">{c.label}</div>
                      <div className="text-[#1a2e4a] font-semibold group-hover:text-[#c8973a] transition-colors">{c.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Ministry-specific contacts */}
              <div className="bg-white rounded-2xl p-6 border border-[#e8e0d0]">
                <h3 className="text-[#1a2e4a] font-bold text-sm uppercase tracking-wider mb-4">Ministry Contacts</h3>
                <div className="space-y-3 text-sm">
                  {[
                    { ministry: "Children's Ministry", email: "lavonne@gccmadera.com", contact: "Lavonne Marshall" },
                    { ministry: "Youth Ministry", email: "youth@gccmadera.com", contact: "Pastor Jake Beckman" },
                    { ministry: "Awana", email: "awana@gccmadera.com", contact: "David Vickery II" },
                    { ministry: "General / All Other", email: "info@gccmadera.com", contact: "Church Office" },
                  ].map((m) => (
                    <div key={m.ministry} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 py-2 border-b border-[#e8e0d0] last:border-0">
                      <div>
                        <div className="text-[#1a2e4a] font-semibold">{m.ministry}</div>
                        <div className="text-[#7a7060] text-xs">{m.contact}</div>
                      </div>
                      <a href={`mailto:${m.email}`} className="text-[#c8973a] text-xs font-medium hover:underline">
                        {m.email}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-[#e8e0d0]">
              <h3 className="text-[#1a2e4a] font-bold text-xl mb-2">Send Us a Message</h3>
              <p className="text-[#7a7060] text-sm mb-6">We typically respond within one business day.</p>
              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#1a2e4a] text-sm font-medium mb-1.5">First Name</label>
                    <input
                      type="text"
                      placeholder="John"
                      className="w-full px-4 py-3 rounded-xl border border-[#e8e0d0] bg-[#faf7f2] text-[#2d2d2d] text-sm focus:outline-none focus:ring-2 focus:ring-[#c8973a] focus:border-transparent placeholder:text-[#b0a898]"
                    />
                  </div>
                  <div>
                    <label className="block text-[#1a2e4a] text-sm font-medium mb-1.5">Last Name</label>
                    <input
                      type="text"
                      placeholder="Smith"
                      className="w-full px-4 py-3 rounded-xl border border-[#e8e0d0] bg-[#faf7f2] text-[#2d2d2d] text-sm focus:outline-none focus:ring-2 focus:ring-[#c8973a] focus:border-transparent placeholder:text-[#b0a898]"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[#1a2e4a] text-sm font-medium mb-1.5">Email</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-[#e8e0d0] bg-[#faf7f2] text-[#2d2d2d] text-sm focus:outline-none focus:ring-2 focus:ring-[#c8973a] focus:border-transparent placeholder:text-[#b0a898]"
                  />
                </div>
                <div>
                  <label className="block text-[#1a2e4a] text-sm font-medium mb-1.5">Phone (optional)</label>
                  <input
                    type="tel"
                    placeholder="(559) 000-0000"
                    className="w-full px-4 py-3 rounded-xl border border-[#e8e0d0] bg-[#faf7f2] text-[#2d2d2d] text-sm focus:outline-none focus:ring-2 focus:ring-[#c8973a] focus:border-transparent placeholder:text-[#b0a898]"
                  />
                </div>
                <div>
                  <label className="block text-[#1a2e4a] text-sm font-medium mb-1.5">How can we help?</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-[#e8e0d0] bg-[#faf7f2] text-[#2d2d2d] text-sm focus:outline-none focus:ring-2 focus:ring-[#c8973a] focus:border-transparent">
                    <option value="">Select a topic...</option>
                    <option value="visit">I want to visit GCC</option>
                    <option value="prayer">Prayer request</option>
                    <option value="membership">Church membership</option>
                    <option value="kids">Children&apos;s Ministry</option>
                    <option value="youth">Youth Ministry</option>
                    <option value="pastoral">Pastoral care / counseling</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[#1a2e4a] text-sm font-medium mb-1.5">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us more..."
                    className="w-full px-4 py-3 rounded-xl border border-[#e8e0d0] bg-[#faf7f2] text-[#2d2d2d] text-sm focus:outline-none focus:ring-2 focus:ring-[#c8973a] focus:border-transparent resize-none placeholder:text-[#b0a898]"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#1a2e4a] hover:bg-[#243d61] text-white font-semibold py-3.5 rounded-xl transition-colors text-sm"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map / Address */}
      <section className="bg-[#1a2e4a] py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#c8973a] text-sm font-semibold tracking-widest uppercase mb-4">Find Us</p>
          <h2
            className="text-white text-4xl font-bold mb-4"
            style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
          >
            17755 Road 26, Madera, CA 93638
          </h2>
          <p className="text-white/60 mb-8">Sunday Services at 9:00 AM &amp; 11:00 AM · Free Breakfast at 10:15 AM</p>
          <a
            href="https://maps.google.com/?q=17755+Road+26+Madera+CA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#c8973a] hover:bg-[#d9ab56] text-white font-semibold px-8 py-4 rounded-full transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Get Directions
          </a>
        </div>
      </section>
    </main>
  );
}

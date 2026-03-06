import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Plan Your Visit | Grace Community Church Madera",
  description: "Everything you need to know before your first visit to Grace Community Church Madera. Schedule, location, parking, and what to expect.",
  alternates: { canonical: "/visit" },
};

export default function VisitPage() {
  return (
    <main>
      <PageHero
        eyebrow="First Time?"
        title="Plan Your Visit"
        subtitle="We know visiting a new church can feel a little nerve-wracking. Here's everything you need to feel at home from the moment you arrive."
      />

      {/* Service Times */}
      <section className="bg-[#faf7f2] py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-[#c8973a] text-sm font-semibold tracking-widest uppercase mb-4">When We Meet</p>
              <h2
                className="text-[#1a2e4a] text-4xl font-bold leading-tight mb-6"
                style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
              >
                Service Times<br />
                &amp; Location
              </h2>

              <div className="bg-[#1a2e4a] rounded-2xl p-6 text-white space-y-5 mb-6">
                {/* Sunday */}
                <div>
                  <div className="text-[#c8973a] text-xs font-bold uppercase tracking-widest mb-2">Sunday Mornings</div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-[#c8973a] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <div className="text-white font-semibold">9:00 AM &amp; 11:00 AM</div>
                        <div className="text-white/60 text-xs">Worship Service + Bible Studies for all ages</div>
                        <div className="text-white/60 text-xs">Free Breakfast &amp; Fellowship at 10:15 AM</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Wednesday */}
                <div>
                  <div className="text-[#c8973a] text-xs font-bold uppercase tracking-widest mb-2">Wednesday Evenings</div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#c8973a] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <div className="text-white font-semibold">6:30 PM Bible Studies &amp; Classes</div>
                      <div className="text-white/60 text-xs">Awana · Youth Ministry · Women&apos;s Study</div>
                      <div className="text-white/60 text-xs">Free Dinner at 5:30 PM</div>
                    </div>
                  </div>
                </div>
                {/* Location */}
                <div className="flex items-start gap-3 pt-2 border-t border-white/10">
                  <svg className="w-5 h-5 text-[#c8973a] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <div className="text-white font-semibold">17755 Road 26, Madera, CA 93638</div>
                    <div className="text-white/60 text-xs">(559) 674-1172</div>
                  </div>
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=17755+Road+26+Madera+CA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#1a2e4a] font-semibold text-sm hover:text-[#c8973a] transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Get Directions
              </a>
            </div>

            {/* What to Expect */}
            <div>
              <h3
                className="text-[#1a2e4a] font-bold text-2xl mb-6"
                style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
              >
                What to Expect
              </h3>
              <div className="space-y-4">
                {[
                  {
                    title: "Warm Welcome",
                    desc: "Friendly greeters will meet you in the parking lot and at the doors. You are not just a visitor, you are expected and wanted.",
                  },
                  {
                    title: "Worship & Message",
                    desc: "Services run about 70–75 minutes and include congregational worship, Scripture reading, prayer, offering, and an expository message.",
                  },
                  {
                    title: "For Your Kids",
                    desc: "GCC Kids is available for all children birth through 6th grade during both services. Our team will walk you through the check-in process on your first visit.",
                  },
                  {
                    title: "Free Breakfast",
                    desc: "Between services (around 10:15 AM), we serve a free breakfast. It's a great time to meet people and experience the warmth of our church family.",
                  },
                ].map((item) => (
                  <div key={item.title} className="bg-white rounded-2xl p-5 border border-[#e8e0d0] flex gap-4">
                    <div className="text-[#c8973a] mt-0.5 flex-shrink-0">✦</div>
                    <div>
                      <h4 className="text-[#1a2e4a] font-bold text-sm mb-1">{item.title}</h4>
                      <p className="text-[#7a7060] text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#c8973a] text-sm font-semibold tracking-widest uppercase mb-3">Common Questions</p>
            <h2
              className="text-[#1a2e4a] text-4xl font-bold"
              style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
            >
              FAQs for First-Time Visitors
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                q: "What should I wear?",
                a: "Come as you are! You'll see everything from jeans to business casual. We want you comfortable, not stressed about what to wear.",
              },
{
                q: "What about my kids?",
                a: "GCC Kids is available for birth through 6th grade during both services, safe, fun, and age-appropriate. We'll walk you through check-in on your first visit.",
              },
              {
                q: "How long is the service?",
                a: "About 70–75 minutes, including worship, prayer, and a message from God's Word.",
              },
              {
                q: "Do I need to sign up in advance?",
                a: "Nope! Just show up. We'd love to know you're coming, but no registration is required. Simply come as you are.",
              },
              {
                q: "What if I have questions about faith?",
                a: "You're in the right place. Bring your questions, our pastors and staff are happy to talk with you. You can also fill out a connection card or email us.",
              },
              {
                q: "Is there anything for students?",
                a: "Yes! Pursuit Student Ministries is available for grades 7–12 during Sunday morning services, plus Wednesday evenings.",
              },
              {
                q: "What style is the worship?",
                a: "A blend of contemporary and traditional, led by a team committed to authentic, spirit-filled worship that puts God at the center.",
              },
            ].map((item) => (
              <div key={item.q} className="bg-[#faf7f2] rounded-2xl p-6 border border-[#e8e0d0]">
                <h3 className="text-[#1a2e4a] font-bold text-base mb-2">{item.q}</h3>
                <p className="text-[#7a7060] text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1a2e4a] py-20 px-4 sm:px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="text-[#c8973a]/40 text-4xl mb-6 select-none" aria-hidden="true">✦</div>
          <h2
            className="text-white text-4xl font-bold mb-4"
            style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
          >
            We&apos;ll See You Sunday
          </h2>
          <p className="text-white/70 text-lg mb-10">
            9:00 AM or 11:00 AM · 17755 Road 26, Madera, CA 93638
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://maps.google.com/?q=17755+Road+26+Madera+CA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#c8973a] hover:bg-[#d9ab56] text-white font-bold px-8 py-4 rounded-full transition-colors"
            >
              Get Directions
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-full transition-colors border border-white/20"
            >
              Contact Us First
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

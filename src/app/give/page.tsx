import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Give | Grace Community Church Madera",
  description: "Give online or by mail to Grace Community Church Madera. Generosity fuels local ministry and global missions.",
  alternates: { canonical: "/give" },
  openGraph: {
    title: "Give | Grace Community Church Madera",
    description: "Give online or by mail to Grace Community Church Madera. Generosity fuels local ministry and global missions.",
    url: "https://gccmadera.com/give",
  },
  twitter: {
    card: "summary",
    title: "Give | Grace Community Church Madera",
    description: "Give online or by mail to Grace Community Church Madera. Generosity fuels local ministry and global missions.",
  },
};

export default function GivePage() {
  return (
    <main>
      <PageHero
        eyebrow="Generosity"
        title="Give"
        subtitle="Your generosity makes it possible for us to reach our community, care for families, and support missions around the world."
      />

      {/* Main CTA */}
      <section className="bg-[#1a2e4a] py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Giving is an act of faithful worship. Whether you give online, by check, or in person, your contribution
            supports everything God is doing through Grace Community Church Madera.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://gracemadera.churchcenter.com/giving"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#c8973a] hover:bg-[#d9ab56] text-white font-bold px-10 py-5 rounded-full transition-colors shadow-lg text-base"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Give Online, Secure &amp; Easy
            </a>
          </div>
          <p className="text-white/40 text-xs mt-8">
            Giving is processed securely. Grace Community Church is a registered 501(c)(3) non-profit.
          </p>
        </div>
      </section>

      {/* Why We Give */}
      <section className="bg-[#faf7f2] py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#c8973a] text-sm font-semibold tracking-widest uppercase mb-3">Why It Matters</p>
            <h2
              className="text-[#1a2e4a] text-4xl font-bold"
              style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
            >
              Your Gift at Work
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Local Ministry",
                desc: "Supporting weekly services, GCC Kids, Awana, youth ministry, pastoral staff, and care for families in our community.",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                title: "Global Missions",
                desc: "Partnering with missionaries and organizations around the world to take the Gospel to places that haven't yet heard.",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ),
                title: "Community Care",
                desc: "Free meals on Wednesdays, assistance programs, and outreach that serves people throughout Madera.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-8 border border-[#e8e0d0] text-center">
                <div className="w-14 h-14 rounded-2xl bg-[#1a2e4a] text-[#c8973a] flex items-center justify-center mx-auto mb-5">
                  {item.icon}
                </div>
                <h3 className="text-[#1a2e4a] font-bold text-xl mb-3">{item.title}</h3>
                <p className="text-[#7a7060] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Ways to Give */}
      <section className="bg-white py-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#c8973a] text-sm font-semibold tracking-widest uppercase mb-3">Other Options</p>
            <h2
              className="text-[#1a2e4a] text-4xl font-bold"
              style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
            >
              Ways to Give
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Online",
                desc: "Give securely anytime through our online giving portal. Set up a one-time or recurring gift in minutes.",
                cta: "Give Online",
                href: "https://gracemadera.churchcenter.com/giving",
              },
              {
                title: "By Mail",
                desc: "Make checks payable to \"Grace Community Church\" and mail to 17755 Road 26, Madera, CA 93638.",
                cta: null,
                href: null,
              },
              {
                title: "In Person",
                desc: "Offering plates are available during both Sunday morning services. Cash or check welcomed.",
                cta: null,
                href: null,
              },
            ].map((item) => (
              <div key={item.title} className="bg-[#faf7f2] rounded-2xl p-6 border border-[#e8e0d0]">
                <h3 className="text-[#1a2e4a] font-bold text-lg mb-3">{item.title}</h3>
                <p className="text-[#7a7060] text-sm leading-relaxed mb-4">{item.desc}</p>
                {item.cta && item.href && (
                  <a
                    href={item.href}
                    className="inline-flex items-center gap-1.5 text-[#c8973a] font-semibold text-sm hover:text-[#1a2e4a] transition-colors"
                  >
                    {item.cta} →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 501(c)(3) */}
      <section className="bg-[#1a2e4a] py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <p className="text-[#c8973a] text-xs font-bold uppercase tracking-widest mb-3">Tax Information</p>
            <p className="text-white font-semibold mb-3">
              Grace Community Church is a registered 501(c)(3) non-profit organization.
            </p>
            <p className="text-white/60 text-sm leading-relaxed">
              All donations are tax-deductible to the extent permitted by law. You will receive a year-end giving
              statement for your records. For questions, contact the church office at{" "}
              <a href="mailto:info@gccmadera.com" className="text-[#c8973a] hover:underline">
                info@gccmadera.com
              </a>{" "}
              or (559) 674-1172.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

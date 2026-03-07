import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Men's Ministry | Grace Community Church Madera",
  description: "Men's Ministry at Grace Community Church Madera. Bible studies, breakfasts, retreats, and community for men of all ages.",
  alternates: { canonical: "/ministries/men" },
  openGraph: {
    title: "Men's Ministry | Grace Community Church Madera",
    description: "Men's Ministry at Grace Community Church Madera. Bible studies, breakfasts, retreats, and community for men of all ages.",
    url: "https://gccmadera.com/ministries/men",
  },
  twitter: {
    card: "summary",
    title: "Men's Ministry | Grace Community Church Madera",
    description: "Men's Ministry at Grace Community Church Madera. Bible studies, breakfasts, retreats, and community for men of all ages.",
  },
};

export default function MensMinistryPage() {
  return (
    <main>
      <PageHero
        eyebrow="Men's Ministry"
        title="Men's Ministry"
        subtitle="Brotherhood, accountability, and discipleship for men at every stage of life."
      />

      {/* About */}
      <section className="bg-[#faf7f2] py-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#c8973a] text-sm font-semibold tracking-widest uppercase mb-4">Community for Men</p>
              <h2
                className="text-[#1a2e4a] text-4xl font-bold leading-tight mb-6"
                style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
              >
                Iron Sharpens Iron
              </h2>
              <div className="space-y-4 text-[#7a7060] text-base leading-relaxed">
                <p>
                  The Men&apos;s Ministry at GCC Madera exists to equip men to be faithful disciples of Jesus Christ,
                  in their homes, workplaces, and community. We believe that men grow best in relationship with other
                  men who are committed to the same pursuit.
                </p>
                <p>
                  Whether you&apos;re a new believer or a long-time follower of Christ, there is a place for you here.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {[
                { icon: "📖", title: "Bible Studies", desc: "Expository studies through books of the Bible, designed to equip men to lead their families in faith." },
                { icon: "🍳", title: "Breakfasts", desc: "Monthly men's breakfasts with a guest speaker, great food, and real conversation." },
                { icon: "⛺", title: "Retreats", desc: "Annual men's retreat for deeper fellowship, focused teaching, and time away." },
                { icon: "🥩", title: "Steak Nights", desc: "Casual steak nights where men can relax, build friendships, and invite others." },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-2xl p-5 border border-[#e8e0d0] flex gap-4">
                  <div className="text-2xl flex-shrink-0">{item.icon}</div>
                  <div>
                    <h3 className="text-[#1a2e4a] font-bold text-sm mb-1">{item.title}</h3>
                    <p className="text-[#7a7060] text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Scripture Banner */}
      <section className="relative bg-[#1a2e4a] py-20 px-4 sm:px-6 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse 60% 80% at 50% 50%, #243d61 0%, #1a2e4a 70%)" }}
        />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8973a]/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8973a]/40 to-transparent" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="text-[#c8973a]/40 text-4xl mb-6 select-none" aria-hidden="true">✦</div>
          <blockquote>
            <p
              className="text-white text-2xl sm:text-3xl leading-relaxed italic"
              style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
            >
              &ldquo;Iron sharpens iron, and one person sharpens another.&rdquo;
            </p>
            <footer className="mt-6">
              <cite className="text-[#c8973a] text-sm font-semibold tracking-wide not-italic">
                Proverbs 27:17 (CSB)
              </cite>
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Get Connected */}
      <section className="bg-white py-24 px-4 sm:px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-[#c8973a] text-sm font-semibold tracking-widest uppercase mb-4">Get Involved</p>
          <h2
            className="text-[#1a2e4a] text-4xl font-bold mb-6"
            style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
          >
            Join the Men&apos;s Ministry
          </h2>
          <p className="text-[#7a7060] text-lg leading-relaxed mb-8">
            To learn about upcoming events, Bible studies, and gatherings, reach out to us.
            We&apos;d love to connect you with the right group.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#1a2e4a] hover:bg-[#243d61] text-white font-semibold px-8 py-4 rounded-full transition-colors"
            >
              Contact Us
            </Link>
            <a
              href="tel:5596741172"
              className="inline-flex items-center gap-2 border-2 border-[#1a2e4a] text-[#1a2e4a] hover:bg-[#1a2e4a] hover:text-white font-semibold px-8 py-4 rounded-full transition-colors"
            >
              (559) 674-1172
            </a>
          </div>
          <p className="text-[#7a7060] text-sm mt-6">
            Or email: <a href="mailto:info@gccmadera.com" className="text-[#c8973a] hover:underline">info@gccmadera.com</a>
          </p>
          <p className="text-[#7a7060] text-sm mt-4">
            <Link href="/ministries" className="text-[#c8973a] hover:underline">← All Ministries</Link>
          </p>
        </div>
      </section>
    </main>
  );
}

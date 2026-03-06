import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Women's Ministry | Grace Community Church Madera",
  description: "Women's Ministry at GCC Madera. Weekly Bible studies on Wednesdays and Thursdays, annual retreat at Calvin Crest, and more.",
  alternates: { canonical: "/ministries/women" },
};

export default function WomensMinistryPage() {
  return (
    <main>
      <PageHero
        eyebrow="Women's Ministry"
        title="Women's Ministry"
        subtitle="Bible studies, events, and community for women to grow deeper in faith together."
      />

      {/* About */}
      <section className="bg-[#faf7f2] py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-[#c8973a] text-sm font-semibold tracking-widest uppercase mb-4">Community for Women</p>
              <h2
                className="text-[#1a2e4a] text-4xl font-bold leading-tight mb-6"
                style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
              >
                Growing in Faith,<br />
                <span className="text-[#c8973a]">Together</span>
              </h2>
              <div className="space-y-4 text-[#7a7060] text-base leading-relaxed">
                <p>
                  The Women&apos;s Ministry at GCC Madera exists to connect women with God and each other through
                  consistent Bible study, authentic community, and meaningful events.
                </p>
                <p>
                  We offer two weekly study groups, seasonal events, and an annual overnight retreat -
                  all designed to help women of every age and stage grow in their walk with Christ.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {[
                { icon: "📖", title: "Bible Studies", desc: "Expository studies using Precept study materials and other Gospel-centered resources." },
                { icon: "☕", title: "Breakfasts & Dinners", desc: "Seasonal gatherings to connect, share a meal, and encourage one another." },
                { icon: "⛺", title: "Annual Retreat", desc: "Women's Retreat held the 3rd weekend of September at Calvin Crest. A time to rest, grow, and be renewed." },
                { icon: "🛍️", title: "Ministry Yard Sale", desc: "Annual yard sale held the 1st Saturday in May, a fundraiser to provide retreat sponsorships." },
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

      {/* Weekly Groups */}
      <section className="bg-white py-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#c8973a] text-sm font-semibold tracking-widest uppercase mb-3">Weekly Groups</p>
            <h2
              className="text-[#1a2e4a] text-4xl font-bold"
              style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
            >
              Find a Group
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                day: "Wednesday Evenings",
                time: "6:30–8:00 PM",
                location: "Room 205",
                leaders: "Nancy H. & Mari Jo H.",
                desc: "An evening Bible study group designed for women who prefer midweek evenings. Uses in-depth study materials to explore Scripture together.",
              },
              {
                day: "Thursday Mornings",
                time: "9:00 AM–12:00 PM",
                location: "Room 7",
                leaders: "Robin P.",
                desc: "A morning study group using Precept Ministries study books for an inductive approach to Scripture. Great for women with morning availability.",
              },
            ].map((group) => (
              <div key={group.day} className="bg-[#faf7f2] rounded-2xl border border-[#e8e0d0] overflow-hidden">
                <div className="bg-[#1a2e4a] px-6 py-5">
                  <h3 className="text-white font-bold text-lg">{group.day}</h3>
                  <p className="text-[#c8973a] text-sm mt-1">{group.time} · {group.location}</p>
                </div>
                <div className="p-6">
                  <p className="text-[#7a7060] text-sm leading-relaxed mb-4">{group.desc}</p>
                  <div className="text-xs text-[#7a7060]">
                    <strong className="text-[#1a2e4a]">Led by:</strong> {group.leaders}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Annual Events */}
      <section className="bg-[#1a2e4a] py-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#c8973a] text-sm font-semibold tracking-widest uppercase mb-3">Annual Events</p>
            <h2
              className="text-white text-4xl font-bold"
              style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
            >
              Mark Your Calendar
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                month: "SEP",
                title: "Women's Retreat",
                desc: "3rd weekend of September. An overnight retreat at Calvin Crest, a beautiful mountain camp setting for rest, worship, and renewed faith. Messages from the 2025 retreat are available on our website.",
              },
              {
                month: "MAY",
                title: "Ministry Yard Sale",
                desc: "1st Saturday in May. A community yard sale fundraiser that generates scholarships so every woman who wants to attend the retreat can go, regardless of financial need.",
              },
              {
                month: "YEAR",
                title: "Breakfasts, Dinners & More",
                desc: "Throughout the year, the Women's Ministry hosts additional gatherings, breakfasts, dinners, and special events, to build community and celebrate what God is doing.",
              },
            ].map((event) => (
              <div key={event.title} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="text-[#c8973a] text-xs font-bold uppercase tracking-widest mb-3">{event.month}</div>
                <h3 className="text-white font-bold text-xl mb-3">{event.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{event.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#faf7f2] py-20 px-4 sm:px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2
            className="text-[#1a2e4a] text-4xl font-bold mb-4"
            style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
          >
            Come Join a Group
          </h2>
          <p className="text-[#7a7060] text-lg leading-relaxed mb-8">
            Whether you&apos;re new to GCC or have been here for years, there&apos;s a place for you in Women&apos;s Ministry.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#1a2e4a] hover:bg-[#243d61] text-white font-semibold px-8 py-4 rounded-full transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/visit"
              className="inline-flex items-center gap-2 border-2 border-[#1a2e4a] text-[#1a2e4a] hover:bg-[#1a2e4a] hover:text-white font-semibold px-8 py-4 rounded-full transition-colors"
            >
              Plan Your Visit
            </Link>
          </div>
          <p className="text-[#7a7060] text-sm mt-6">
            <Link href="/ministries" className="text-[#c8973a] hover:underline">← All Ministries</Link>
          </p>
        </div>
      </section>
    </main>
  );
}

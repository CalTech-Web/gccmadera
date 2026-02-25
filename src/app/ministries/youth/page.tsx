import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Pursuit Student Ministries | Grace Community Church Madera",
  description: "Pursuit Student Ministries serves grades 7–12 at Grace Community Church Madera. Sundays, Wednesdays, retreats, and camps.",
};

export default function YouthPage() {
  return (
    <main>
      <PageHero
        eyebrow="Youth Ministry"
        title="Pursuit Student Ministries"
        subtitle="Grades 7–12. Growing in faith, friendship, and purpose, Sundays and Wednesday nights."
      />

      {/* About */}
      <section className="bg-[#faf7f2] py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#c8973a] text-sm font-semibold tracking-widest uppercase mb-4">About Pursuit</p>
              <h2
                className="text-[#1a2e4a] text-4xl font-bold leading-tight mb-6"
                style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
              >
                A Place for Every Student
              </h2>
              <div className="space-y-4 text-[#7a7060] text-base leading-relaxed">
                <p>
                  Pursuit Student Ministries exists to help middle and high school students know Christ and make Him known.
                  Through weekly gatherings, retreats, and camps, we want students to build genuine friendships and grow
                  in their walk with God.
                </p>
                <p>
                  Pastor Jake Beckman leads our student ministry with a heart for young people to discover the life-changing
                  truth of the Gospel.
                </p>
                <div className="bg-white rounded-xl p-5 border border-[#e8e0d0]">
                  <div className="text-[#c8973a] text-xs font-bold uppercase tracking-widest mb-2">Contact</div>
                  <p className="text-[#1a2e4a] font-semibold">Pastor Jake Beckman, Associate Pastor</p>
                  <a href="mailto:youth@gccmadera.com" className="text-[#c8973a] text-sm hover:underline block">
                    youth@gccmadera.com
                  </a>
                  <a href="tel:5596741172" className="text-[#7a7060] text-sm hover:text-[#c8973a] transition-colors">
                    (559) 674-1172
                  </a>
                </div>
              </div>
            </div>

            {/* Pastor card */}
            <div className="bg-white rounded-3xl border border-[#e8e0d0] overflow-hidden max-w-sm mx-auto w-full">
              <div className="bg-[#1a2e4a] p-8 text-center">
                <div className="w-20 h-20 rounded-full bg-[#243d61] border-4 border-[#c8973a]/30 flex items-center justify-center mx-auto mb-4">
                  <span
                    className="text-[#c8973a] font-bold text-xl"
                    style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
                  >
                    JB
                  </span>
                </div>
                <h3 className="text-white font-bold text-lg">Pastor Jake Beckman</h3>
                <p className="text-[#c8973a] text-sm mt-1">Associate Pastor, Youth</p>
              </div>
              <div className="p-6">
                <p className="text-[#7a7060] text-sm leading-relaxed">
                  Jake grew up in the Central Valley and holds a Business degree from Colorado Christian University.
                  He is pursuing an M.Div. at Southern Baptist Theological Seminary. His favorite verse is John 15:13:
                  &ldquo;Greater love has no one than this: to lay down one&apos;s life for one&apos;s friends.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="bg-white py-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#c8973a] text-sm font-semibold tracking-widest uppercase mb-3">When We Meet</p>
            <h2
              className="text-[#1a2e4a] text-4xl font-bold"
              style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
            >
              Weekly Schedule
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#faf7f2] rounded-2xl border border-[#e8e0d0] overflow-hidden">
              <div className="bg-[#1a2e4a] px-6 py-4">
                <h3 className="text-white font-bold">Sunday Mornings</h3>
              </div>
              <div className="p-6 space-y-3">
                <div className="flex gap-3">
                  <span className="text-[#c8973a] font-bold text-sm w-20 flex-shrink-0">9:00 AM</span>
                  <span className="text-[#7a7060] text-sm">Youth Bible Study, Room 203</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#c8973a] font-bold text-sm w-20 flex-shrink-0">11:00 AM</span>
                  <span className="text-[#7a7060] text-sm">Youth Class (grades 7–12)</span>
                </div>
              </div>
            </div>
            <div className="bg-[#faf7f2] rounded-2xl border border-[#e8e0d0] overflow-hidden">
              <div className="bg-[#1a2e4a] px-6 py-4">
                <h3 className="text-white font-bold">Wednesday Evenings</h3>
              </div>
              <div className="p-6 space-y-3">
                <div className="flex gap-3">
                  <span className="text-[#c8973a] font-bold text-sm w-20 flex-shrink-0">5:30 PM</span>
                  <span className="text-[#7a7060] text-sm">Free Dinner (donations accepted)</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#c8973a] font-bold text-sm w-20 flex-shrink-0">6:30 PM</span>
                  <span className="text-[#7a7060] text-sm">Pursuit Youth, Lesson from God&apos;s Word, small groups (age & gender-based), games, and worship music</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#c8973a] font-bold text-sm w-20 flex-shrink-0">8:00 PM</span>
                  <span className="text-[#7a7060] text-sm">End of evening</span>
                </div>
              </div>
            </div>
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
              Beyond Weekly Gatherings
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Winter Retreats",
                desc: "An overnight retreat on the GCC campus. Includes worship, games, fellowship, and the annual Nerf war students look forward to all year.",
              },
              {
                title: "Summer Camps",
                desc: "A week-long summer camp focused on faith, fellowship, and growing deeper in relationship with God and each other.",
              },
            ].map((event) => (
              <div key={event.title} className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <div className="w-10 h-10 rounded-xl bg-[#c8973a]/20 flex items-center justify-center mb-4">
                  <span className="text-[#c8973a] text-lg">✦</span>
                </div>
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
            Is Your Student Ready to Join?
          </h2>
          <p className="text-[#7a7060] text-lg mb-8">
            Pursuit meets every Sunday and Wednesday. We&apos;d love to have your student join us.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#1a2e4a] hover:bg-[#243d61] text-white font-semibold px-8 py-4 rounded-full transition-colors"
            >
              Get in Touch
            </Link>
            <Link
              href="/visit"
              className="inline-flex items-center gap-2 border-2 border-[#1a2e4a] text-[#1a2e4a] hover:bg-[#1a2e4a] hover:text-white font-semibold px-8 py-4 rounded-full transition-colors"
            >
              Plan Your Visit
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

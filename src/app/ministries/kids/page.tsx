import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "GCC Kids | Grace Community Church Madera",
  description: "GCC Kids offers fun, safe, Gospel-centered programming for children birth through 6th grade at Grace Community Church Madera.",
  alternates: { canonical: "/ministries/kids" },
};

export default function KidsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Children's Ministry"
        title="GCC Kids"
        subtitle="Fun, safe, and Gospel-centered for children birth through 6th grade, every Sunday at both services."
      />

      {/* Overview */}
      <section className="bg-[#faf7f2] py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-[#c8973a] text-sm font-semibold tracking-widest uppercase mb-4">About GCC Kids</p>
              <h2
                className="text-[#1a2e4a] text-4xl font-bold leading-tight mb-6"
                style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
              >
                Where Kids Encounter Jesus
              </h2>
              <div className="space-y-4 text-[#7a7060] text-base leading-relaxed">
                <p>
                  GCC Kids serves children from birth through 6th grade during both Sunday morning services.
                  Our curriculum is grounded in Scripture using <strong className="text-[#1a2e4a]">Answers in Genesis</strong> materials,
                  helping kids understand the Bible from the very beginning.
                </p>
                <p>
                  We provide a safe, nurturing environment where children can learn about God&apos;s Word,
                  make friends, and grow in faith, so parents can engage fully in worship.
                </p>
                <div className="bg-white rounded-xl p-5 border border-[#e8e0d0]">
                  <div className="text-[#c8973a] text-xs font-bold uppercase tracking-widest mb-2">Contact</div>
                  <p className="text-[#1a2e4a] font-semibold">Lavonne Marshall, Children&apos;s Ministry Director</p>
                  <a href="mailto:lavonne@gccmadera.com" className="text-[#c8973a] text-sm hover:underline">
                    lavonne@gccmadera.com
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {[
                { icon: "✦", title: "Bible-Based Curriculum", desc: "Sunday classes use Answers in Genesis curriculum, teaching children to trust God's Word from creation to Christ." },
                { icon: "♥", title: "Safe & Secure", desc: "All volunteers are background-checked and trained in our Child Protection Policy and California AB506 Mandatory Reporter requirements." },
                { icon: "✶", title: "All Ages Served", desc: "Nursery care, Pre-K through Kindergarten, 1st–3rd grade, and 4th–6th grade classes available both services." },
                { icon: "→", title: "Special Needs Ministry", desc: "A Special Needs Ministry class is available during the 11:00 AM service in Room 106." },
              ].map((val) => (
                <div key={val.title} className="bg-white rounded-2xl p-5 border border-[#e8e0d0] flex gap-4">
                  <div className="text-[#c8973a] text-xl mt-0.5 flex-shrink-0">{val.icon}</div>
                  <div>
                    <h3 className="text-[#1a2e4a] font-bold text-sm mb-1">{val.title}</h3>
                    <p className="text-[#7a7060] text-sm leading-relaxed">{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sunday Schedule */}
      <section className="bg-white py-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#c8973a] text-sm font-semibold tracking-widest uppercase mb-3">When & Where</p>
            <h2
              className="text-[#1a2e4a] text-4xl font-bold"
              style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
            >
              Sunday Schedule
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                time: "9:00 AM Service",
                classes: [
                  { room: "RM 11", ages: "Nursery (infant–age 2)", detail: "" },
                  { room: "RM 10", ages: "Bible Stories (Pre-K–Kindergarten)", detail: "" },
                  { room: "RM 105", ages: "Bible Lesson (1st–3rd Grade)", detail: "" },
                  { room: "RM 205", ages: "Bible Study (4th–6th Grade)", detail: "" },
                ],
              },
              {
                time: "11:00 AM Service",
                classes: [
                  { room: "RM 11", ages: "Nursery (infant–age 2)", detail: "" },
                  { room: "RM 10", ages: "Bible Stories (Pre-K–Kindergarten)", detail: "" },
                  { room: "RM 105", ages: "Bible Lesson (1st–3rd Grade)", detail: "" },
                  { room: "RM 205", ages: "Bible Study (4th–6th Grade)", detail: "Creation-focused" },
                  { room: "RM 106", ages: "Special Needs Ministry", detail: "" },
                ],
              },
            ].map((service) => (
              <div key={service.time} className="bg-[#faf7f2] rounded-2xl border border-[#e8e0d0] overflow-hidden">
                <div className="bg-[#1a2e4a] px-6 py-4">
                  <h3 className="text-white font-bold text-base">{service.time}</h3>
                </div>
                <div className="p-6 space-y-3">
                  {service.classes.map((cls) => (
                    <div key={cls.room + cls.ages} className="flex items-start gap-3">
                      <div className="bg-[#c8973a]/10 text-[#c8973a] text-xs font-bold rounded px-2 py-1 flex-shrink-0 mt-0.5">
                        {cls.room}
                      </div>
                      <div>
                        <span className="text-[#1a2e4a] text-sm font-medium">{cls.ages}</span>
                        {cls.detail && <span className="text-[#7a7060] text-xs ml-1">- {cls.detail}</span>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-[#1a2e4a] rounded-2xl p-6 text-white">
            <h3 className="text-[#c8973a] font-bold text-sm uppercase tracking-widest mb-3">Also Available</h3>
            <div className="grid sm:grid-cols-2 gap-4 text-sm text-white/70">
              <div className="flex gap-2">
                <span className="text-[#c8973a]">✦</span>
                <span><strong className="text-white">Cry Room (RM 1)</strong>, Livestream + families with young children</span>
              </div>
              <div className="flex gap-2">
                <span className="text-[#c8973a]">✦</span>
                <span><strong className="text-white">Family Room (RM 7)</strong>, Livestream + coloring for families</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer */}
      <section className="bg-[#faf7f2] py-24 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#c8973a] text-sm font-semibold tracking-widest uppercase mb-4">Serve</p>
          <h2
            className="text-[#1a2e4a] text-4xl font-bold mb-6"
            style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
          >
            Volunteer with GCC Kids
          </h2>
          <p className="text-[#7a7060] text-lg leading-relaxed mb-8">
            GCC Kids volunteers go through a straightforward screening process to ensure the safety of every child:
          </p>
          <div className="bg-white rounded-2xl p-8 border border-[#e8e0d0] text-left space-y-4 mb-8">
            {[
              "Submit a Volunteer Application (Adult or Youth form) to the office or email lavonne@gccmadera.com",
              "Complete a fingerprinting / LiveScan background check, processed at the UPS Store or Sheriff's Office (church reimburses)",
              "Read and acknowledge the Child Protection Policy",
              "Complete Mandatory Reporter Training (California AB506), required by CA law, renewed every 2 years",
            ].map((step, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-7 h-7 rounded-full bg-[#c8973a] text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                  {i + 1}
                </div>
                <p className="text-[#7a7060] text-sm leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#1a2e4a] hover:bg-[#243d61] text-white font-semibold px-8 py-4 rounded-full transition-colors"
          >
            Contact Lavonne to Volunteer
          </Link>
        </div>
      </section>
    </main>
  );
}

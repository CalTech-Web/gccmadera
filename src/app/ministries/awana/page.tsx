import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Awana | Grace Community Church Madera",
  description: "Awana clubs at GCC Madera serve children preschool through 6th grade every Wednesday evening during the school year.",
};

export default function AwanaPage() {
  return (
    <main>
      <PageHero
        eyebrow="Wednesday Evenings"
        title="Awana"
        subtitle="Part of 46,000+ worldwide Awana clubs, helping kids know, love, and serve Jesus through Scripture memorization, games, and community."
      />

      {/* Overview */}
      <section className="bg-[#faf7f2] py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-[#c8973a] text-sm font-semibold tracking-widest uppercase mb-4">About Awana</p>
              <h2
                className="text-[#1a2e4a] text-4xl font-bold leading-tight mb-6"
                style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
              >
                Scripture. Games. Community.
              </h2>
              <div className="space-y-4 text-[#7a7060] text-base leading-relaxed">
                <p>
                  Awana is a global ministry serving over 6 million children in 46,000+ clubs worldwide.
                  At GCC Madera, our Awana program runs every Wednesday evening during the school year,
                  serving children from preschool through 6th grade.
                </p>
                <p>
                  Each club meets for 90 minutes of Handbook Time (verse memorization in small groups),
                  Game Time (in the Pavilion), and Lesson Time (awards, Bible lesson, worship).
                </p>

                <div className="grid grid-cols-2 gap-4 mt-6">
                  {[
                    { label: "When", value: "Wednesdays, 6:30–8:00 PM" },
                    { label: "Where", value: "17755 Road 26, Madera, CA 93638" },
                    { label: "Cost", value: "$30/child/year (payment plans available)" },
                    { label: "Contact", value: "awana@gccmadera.com" },
                  ].map((item) => (
                    <div key={item.label} className="bg-white rounded-xl p-4 border border-[#e8e0d0]">
                      <div className="text-[#c8973a] text-xs font-bold uppercase tracking-widest mb-1">{item.label}</div>
                      <div className="text-[#1a2e4a] text-sm font-semibold">{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3
                className="text-[#1a2e4a] font-bold text-xl mb-4"
                style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
              >
                Club Leadership
              </h3>
              {[
                { role: "Commander", name: "David Vickery II" },
                { role: "Cubbies Director", name: "Carol Poythress" },
                { role: "Sparks Director", name: "Rosemary Vickery" },
                { role: "T&T Girls Director", name: "Anna Lopez" },
                { role: "T&T Boys Director", name: "Jacob Lopez" },
              ].map((leader) => (
                <div key={leader.role} className="bg-white rounded-xl p-4 border border-[#e8e0d0] flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#1a2e4a] flex items-center justify-center flex-shrink-0">
                    <span className="text-[#c8973a] text-xs font-bold">{leader.name.split(" ").map(w => w[0]).slice(0,2).join("")}</span>
                  </div>
                  <div>
                    <div className="text-[#c8973a] text-xs font-bold uppercase tracking-wider">{leader.role}</div>
                    <div className="text-[#1a2e4a] font-semibold text-sm">{leader.name}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Age Groups */}
      <section className="bg-white py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#c8973a] text-sm font-semibold tracking-widest uppercase mb-3">Age Groups</p>
            <h2
              className="text-[#1a2e4a] text-4xl font-bold"
              style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
            >
              Clubs for Every Age
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Cubbies",
                ages: "Ages 3–4 (must be 3 by Sept. 1)",
                checkin: "Check in: Room 11",
                director: "Carol Poythress",
                desc: "Cubbies introduces young children to God's love through simple Bible stories, songs, and hands-on activities.",
              },
              {
                name: "Sparks",
                ages: "Kindergarten–2nd Grade",
                checkin: "Check in: Room 7",
                director: "Rosemary Vickery",
                desc: "Sparks children learn to memorize Scripture and discover the key stories of the Bible through the Handbook program.",
              },
              {
                name: "T&T (Truth & Training)",
                ages: "3rd–6th Grade",
                checkin: "Meets in main club room",
                director: "Girls: Anna Lopez · Boys: Jacob Lopez",
                desc: "T&T challenges older kids to dig deeper into Scripture, develop convictions, and apply God's Word to everyday life.",
              },
            ].map((club) => (
              <div key={club.name} className="bg-[#faf7f2] rounded-2xl border border-[#e8e0d0] overflow-hidden">
                <div className="bg-[#1a2e4a] px-6 py-5">
                  <h3 className="text-white font-bold text-xl">{club.name}</h3>
                  <p className="text-[#c8973a] text-sm mt-1">{club.ages}</p>
                </div>
                <div className="p-6 space-y-3">
                  <p className="text-[#7a7060] text-sm leading-relaxed">{club.desc}</p>
                  <div className="pt-2 border-t border-[#e8e0d0] text-xs text-[#7a7060] space-y-1">
                    <div><strong className="text-[#1a2e4a]">Check-in:</strong> {club.checkin}</div>
                    <div><strong className="text-[#1a2e4a]">Director:</strong> {club.director}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Know */}
      <section className="bg-[#1a2e4a] py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#c8973a] text-sm font-semibold tracking-widest uppercase mb-3">Registration</p>
            <h2
              className="text-white text-4xl font-bold"
              style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
            >
              What to Know Before You Register
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Cost", desc: "$30 per child per year. Payment plans and scholarships are available. Uniforms are included in the fee." },
              { title: "What to Bring", desc: "Uniforms are required for game square participation. Closed-toe shoes are required for Game Time." },
              { title: "Required Forms", desc: "Medical, Liability, and Media Release Form must be completed at registration. Also available at the church office." },
              { title: "Registration", desc: "Register online or in person. Contact awana@gccmadera.com or call (559) 674-1172 for more information." },
            ].map((item) => (
              <div key={item.title} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="text-[#c8973a] font-bold text-base mb-2">{item.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#c8973a] hover:bg-[#d9ab56] text-white font-bold px-8 py-4 rounded-full transition-colors"
            >
              Contact Us to Register
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Ministries | Grace Community Church Madera",
  description: "Explore all ministries at Grace Community Church Madera. Kids, Youth, Awana, Men's, Women's, and more.",
};

const ministries = [
  {
    href: "/ministries/kids",
    title: "GCC Kids",
    eyebrow: "Birth – 6th Grade",
    desc: "Fun, safe, Gospel-centered programming for kids during every Sunday service. Curriculum by Answers in Genesis. Nursery available.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    href: "/ministries/youth",
    title: "Pursuit Student Ministries",
    eyebrow: "Grades 7–12",
    desc: "Middle and high school students growing in faith, friendship, and purpose. Sundays and Wednesday nights, plus annual retreats and camps.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
  },
  {
    href: "/ministries/awana",
    title: "Awana",
    eyebrow: "Preschool – 6th Grade",
    desc: "Part of 46,000+ worldwide Awana clubs. Wednesday evenings during the school year, verse memorization, games, and Gospel-centered teaching.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    href: "/ministries/men",
    title: "Men's Ministry",
    eyebrow: "All Men Welcome",
    desc: "Brotherhood, accountability, and discipleship for men at every stage of life. Bible studies, breakfasts, retreats, and more.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    href: "/ministries/women",
    title: "Women's Ministry",
    eyebrow: "All Women Welcome",
    desc: "Bible studies, community, and events for women to grow deeper in faith together. Weekly groups on Wednesdays and Thursdays.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    href: "/contact",
    title: "Missions",
    eyebrow: "Local & Global",
    desc: "Locally and globally, GCC partners to bring hope to those who haven't heard. Annual Missions Conference each fall.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function MinistriesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Get Involved"
        title="Ministries"
        subtitle="From the youngest to the oldest, there is a place for you at GCC Madera."
      />

      <section className="bg-white py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {ministries.map((m) => (
              <Link
                key={m.title}
                href={m.href}
                className="group bg-[#faf7f2] rounded-2xl p-8 border border-[#e8e0d0] hover:border-[#c8973a] hover:shadow-md transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-[#1a2e4a] text-[#c8973a] flex items-center justify-center mb-5 group-hover:bg-[#c8973a] group-hover:text-white transition-colors">
                  {m.icon}
                </div>
                <p className="text-[#c8973a] text-xs font-bold uppercase tracking-wider mb-2">{m.eyebrow}</p>
                <h2
                  className="text-[#1a2e4a] font-bold text-xl mb-3 group-hover:text-[#c8973a] transition-colors"
                  style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
                >
                  {m.title}
                </h2>
                <p className="text-[#7a7060] text-sm leading-relaxed mb-4">{m.desc}</p>
                <span className="inline-flex items-center gap-1 text-[#c8973a] text-sm font-semibold">
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Weekly Schedule */}
      <section className="bg-[#faf7f2] py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
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
            {[
              {
                day: "Sunday Mornings",
                items: [
                  "9:00 AM, Worship Services + Bible Studies for All Ages",
                  "10:15 AM, Free Breakfast & Fellowship",
                  "11:00 AM, Worship Services + Bible Studies for All Ages",
                  "Both services: GCC Kids, Youth, Nursery, Special Needs (11 AM)",
                ],
              },
              {
                day: "Wednesday Evenings",
                items: [
                  "5:30 PM, Free Dinner (donations accepted)",
                  "6:30–8:00 PM, Awana (preschool–6th grade)",
                  "6:30–8:00 PM, Pursuit Youth Ministry",
                  "6:30–8:00 PM, Women's Bible Study (RM 205)",
                  "6:30 PM, Adult Bible Studies",
                ],
              },
            ].map((block) => (
              <div key={block.day} className="bg-white rounded-2xl p-8 border border-[#e8e0d0]">
                <h3 className="text-[#c8973a] font-bold text-sm uppercase tracking-widest mb-4">{block.day}</h3>
                <ul className="space-y-3">
                  {block.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-[#7a7060]">
                      <span className="text-[#c8973a] mt-0.5">✦</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

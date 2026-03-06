import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Events | Grace Community Church Madera",
  description: "Upcoming events at Grace Community Church Madera. Services, studies, retreats, and community gatherings.",
  alternates: { canonical: "/events" },
  openGraph: {
    title: "Events | Grace Community Church Madera",
    description: "Upcoming events at Grace Community Church Madera. Services, studies, retreats, and community gatherings.",
    url: "https://gccmadera.com/events",
  },
  twitter: {
    card: "summary",
    title: "Events | Grace Community Church Madera",
    description: "Upcoming events at Grace Community Church Madera. Services, studies, retreats, and community gatherings.",
  },
};

const events = [
  {
    month: "MAR",
    day: "1",
    title: "Men's Breakfast",
    time: "7:30 AM",
    location: "Fellowship Hall",
    desc: "Monthly breakfast for men of all ages. Guest speaker and great food. Bring a friend.",
    tag: "",
  },
  {
    month: "MAR",
    day: "5",
    title: "Wednesday Awana & Youth",
    time: "6:30 PM",
    location: "GCC Campus",
    desc: "Weekly Awana clubs for children preschool–6th grade, Pursuit Youth Ministry for grades 7–12, and Women's Bible Study.",
    tag: "Weekly",
  },
  {
    month: "MAR",
    day: "7",
    title: "Women's Bible Study",
    time: "9:00 AM",
    location: "Room 7",
    desc: "Thursday morning study group using Precept study books. All women welcome.",
    tag: "Weekly",
  },
  {
    month: "MAR",
    day: "15",
    title: "Community Serve Day",
    time: "8:00 AM",
    location: "Meet at Church",
    desc: "Volunteer projects throughout the Madera community. All ages welcome. A great opportunity to serve our neighbors.",
    tag: "",
  },
  {
    month: "MAR",
    day: "22",
    title: "Pursuit Students Night",
    time: "6:30 PM",
    location: "Student Center",
    desc: "Special event for middle & high school students with worship, God's Word, small groups, and games.",
    tag: "",
  },
  {
    month: "MAR",
    day: "29",
    title: "Sunday Services",
    time: "9:00 & 11:00 AM",
    location: "Worship Center",
    desc: "Join us for worship, Scripture, prayer, and an expository message from the Gospel of John. GCC Kids and Youth available.",
    tag: "Weekly",
  },
  {
    month: "APR",
    day: "5",
    title: "Easter Sunday",
    time: "9:00 & 11:00 AM",
    location: "Worship Center",
    desc: "Celebrate the resurrection of Jesus Christ with us. Special Easter services with worship and the Gospel proclaimed.",
    tag: "Special",
  },
  {
    month: "MAY",
    day: "3",
    title: "Women's Ministry Yard Sale",
    time: "7:00 AM",
    location: "GCC Campus",
    desc: "Annual yard sale fundraiser for Women's Ministry retreat sponsorships. Donations and shoppers welcome!",
    tag: "",
  },
];

export default function EventsPage() {
  return (
    <main>
      <PageHero
        eyebrow="What&apos;s Coming Up"
        title="Events"
        subtitle="Upcoming services, studies, retreats, and community gatherings at GCC Madera."
      />

      {/* Weekly Regulars Banner */}
      <aside className="bg-[#c8973a]/10 border-b border-[#c8973a]/20 px-4 sm:px-6 py-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-6 text-sm text-[#1a2e4a]">
          <span className="font-semibold">Every week:</span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#c8973a]" />
            Sunday Services, 9:00 &amp; 11:00 AM
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#c8973a]" />
            Wednesday Awana, Youth &amp; Studies, 6:30 PM
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#c8973a]" />
            Thursday Women&apos;s Study, 9:00 AM
          </span>
        </div>
      </aside>

      {/* Events Grid */}
      <section className="bg-[#faf7f2] py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {events.map((e) => (
              <article
                key={e.title + e.day}
                className="bg-white rounded-2xl overflow-hidden border border-[#e8e0d0] hover:shadow-md transition-shadow"
              >
                {/* Date badge */}
                <div className="bg-[#1a2e4a] text-center py-4 relative">
                  <div className="text-[#c8973a] text-xs font-bold uppercase tracking-widest">{e.month}</div>
                  <div className="text-white text-4xl font-bold leading-none">{e.day}</div>
                  {e.tag && (
                    <span className="absolute top-2 right-2 text-[10px] font-bold uppercase tracking-wider bg-[#c8973a] text-white px-2 py-0.5 rounded-full">
                      {e.tag}
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="text-[#1a2e4a] font-bold text-base mb-1">{e.title}</h3>
                  <div className="flex items-center gap-1.5 text-[#7a7060] text-xs mb-1">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {e.time}
                  </div>
                  <div className="flex items-center gap-1.5 text-[#7a7060] text-xs mb-3">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    {e.location}
                  </div>
                  <p className="text-[#7a7060] text-xs leading-relaxed">{e.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Stay Updated */}
      <section className="bg-white py-20 px-4 sm:px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-[#c8973a] text-sm font-semibold tracking-widest uppercase mb-4">Stay Connected</p>
          <h2
            className="text-[#1a2e4a] text-4xl font-bold mb-6"
            style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
          >
            Never Miss an Event
          </h2>
          <p className="text-[#7a7060] text-lg leading-relaxed mb-8">
            The best way to stay up to date is to{" "}
            <Link href="/visit" className="text-[#c8973a] hover:underline font-medium">
              join us Sunday mornings
            </Link>
            , announcements are shared each week. You can also call the church office or fill out a connection card.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/visit"
              className="inline-flex items-center gap-2 bg-[#c8973a] hover:bg-[#d9ab56] text-white font-bold px-8 py-4 rounded-full transition-colors"
            >
              Plan Your Visit
            </Link>
            <a
              href="tel:5596741172"
              className="inline-flex items-center gap-2 bg-[#1a2e4a] hover:bg-[#243d61] text-white font-semibold px-8 py-4 rounded-full transition-colors"
            >
              Call (559) 674-1172
            </a>
            <a
              href="mailto:info@gccmadera.com"
              className="inline-flex items-center gap-2 border-2 border-[#1a2e4a] text-[#1a2e4a] hover:bg-[#1a2e4a] hover:text-white font-semibold px-8 py-4 rounded-full transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

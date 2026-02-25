import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Messages | Grace Community Church Madera",
  description: "Watch and listen to sermons from Grace Community Church Madera. Currently preaching through the Gospel of John.",
};

const sermons = [
  {
    series: "The Gospel of John",
    title: "That You May Believe",
    speaker: "Pastor Brandon Hopkins",
    date: "February 22, 2026",
    description: "John wrote his Gospel with one clear purpose, that you would believe Jesus is the Christ, the Son of God, and that by believing you may have life in His name.",
    tag: "Latest",
    videoUrl: "https://www.youtube.com/watch?v=oHB9ZWooKKQ",
  },
  {
    series: "The Gospel of John",
    title: "The Word Became Flesh",
    speaker: "Pastor Brandon Hopkins",
    date: "February 15, 2026",
    description: "In the beginning was the Word. John opens his Gospel with a stunning declaration about who Jesus is, and it changes everything about how we read His story.",
    tag: "",
    videoUrl: "https://www.youtube.com/watch?v=rahm3Gwfckw",
  },
  {
    series: "The Gospel of John",
    title: "Come and See",
    speaker: "Pastor Brandon Hopkins",
    date: "February 8, 2026",
    description: "The first disciples didn't have all the answers. They simply accepted an invitation: 'Come and see.' What happens when we respond to that same invitation today?",
    tag: "",
    videoUrl: "https://www.youtube.com/watch?v=CjSNlH2Qil8",
  },
  {
    series: "The Gospel of John",
    title: "The Lamb of God",
    speaker: "Pastor Brandon Hopkins",
    date: "February 1, 2026",
    description: "John the Baptist points to Jesus and declares, 'Behold, the Lamb of God, who takes away the sin of the world!' What does it mean that Jesus is our Passover lamb?",
    tag: "",
    videoUrl: "https://www.youtube.com/watch?v=814_UoVXQzA",
  },
  {
    series: "The Gospel of John",
    title: "Testimony and Truth",
    speaker: "Pastor Brandon Hopkins",
    date: "January 25, 2026",
    description: "John's Gospel opens with multiple witnesses pointing to one conclusion: Jesus is the Son of God. What difference does the testimony of Scripture make in your life?",
    tag: "",
    videoUrl: "https://www.youtube.com/watch?v=tNA3SkIpWU4",
  },
  {
    series: "Christmas 2025",
    title: "God With Us",
    speaker: "Pastor Brandon Hopkins",
    date: "December 22, 2025",
    description: "Immanuel, God with us. The miracle of Christmas is not just that a baby was born, but that the eternal God entered our world to rescue us. A Christmas reflection.",
    tag: "",
    videoUrl: "https://www.youtube.com/watch?v=JSfPpLvhWVA",
  },
];

const pastSeries = [
  { title: "Christmas 2025", desc: "Special Christmas messages", year: "2025" },
  { title: "The Great Co-Mission", desc: "Missions Conference, Matthew 28:18–20", year: "2025" },
  { title: "The Book of Ruth", desc: "\"During the Time of the Judges, a Love Story Emerges\"", year: "2025" },
  { title: "The Book of Judges", desc: "\"If We Forget God: A Warning from Judges\"", year: "2025" },
  { title: "A Series in Romans", desc: "Expository study through the book of Romans", year: "2025" },
  { title: "The Psalms of Ascent", desc: "Psalms 120–134, songs of pilgrimage", year: "2024" },
];

export default function SermonsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Messages"
        title="The Gospel of John"
        subtitle={`"That You May Believe", an expository series through John's Gospel. Livestreamed live Sundays at 9 & 11 AM.`}
      />

      {/* Livestream / Podcast Bar */}
      <div className="bg-[#1a2e4a] border-b border-white/10 px-4 sm:px-6 py-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-4 sm:gap-8">
          <div className="flex items-center gap-2 text-white/70 text-sm">
            <span className="w-2 h-2 rounded-full bg-[#c8973a] animate-pulse" />
            <span className="text-[#c8973a] font-semibold">Live</span>
            <span>Sundays at 9:00 &amp; 11:00 AM</span>
          </div>
          <a
            href="https://www.youtube.com/@gccmadera"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium transition-colors"
          >
            <svg className="w-4 h-4 text-[#c8973a]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            YouTube Channel
          </a>
          <a
            href="https://podcasts.apple.com/us/podcast/sunday-morning-sermons/id1709538486"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium transition-colors"
          >
            <svg className="w-4 h-4 text-[#c8973a]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.85 7.9l-7.07-3.98a2.14 2.14 0 00-2.14 0L2.57 7.9A2.14 2.14 0 001.5 9.76v4.48a2.14 2.14 0 001.07 1.86l7.07 3.98a2.14 2.14 0 002.14 0l7.07-3.98a2.14 2.14 0 001.07-1.86V9.76a2.14 2.14 0 00-1.07-1.86z" />
            </svg>
            Apple Podcast
          </a>
        </div>
      </div>

      {/* Recent Sermons Grid */}
      <section className="bg-[#1a2e4a] py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="text-[#c8973a] text-sm font-semibold tracking-widest uppercase mb-3">Recent Messages</p>
            <h2
              className="text-white text-4xl sm:text-5xl font-bold"
              style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
            >
              Current Series
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sermons.map((sermon, i) => (
              <div
                key={sermon.title}
                className={`rounded-2xl p-6 border transition-all hover:-translate-y-1 hover:shadow-xl cursor-pointer ${
                  i === 0
                    ? "bg-[#c8973a] border-[#c8973a] text-white"
                    : "bg-white/5 border-white/10 text-white hover:bg-white/10"
                }`}
              >
                {sermon.tag && (
                  <span
                    className={`inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4 ${
                      i === 0 ? "bg-white/20 text-white" : "bg-[#c8973a]/20 text-[#c8973a]"
                    }`}
                  >
                    {sermon.tag}
                  </span>
                )}
                <p className={`text-xs font-semibold uppercase tracking-wider mb-2 ${i === 0 ? "text-white/70" : "text-white/50"}`}>
                  {sermon.series}
                </p>
                <h3 className="font-bold text-xl mb-2 leading-snug">{sermon.title}</h3>
                <p className={`text-sm mb-1 ${i === 0 ? "text-white/80" : "text-white/60"}`}>{sermon.speaker}</p>
                <p className={`text-xs mb-4 ${i === 0 ? "text-white/60" : "text-white/40"}`}>{sermon.date}</p>
                <p className={`text-sm leading-relaxed mb-6 ${i === 0 ? "text-white/85" : "text-white/60"}`}>
                  {sermon.description}
                </p>
                <a
                  href={sermon.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors ${
                    i === 0 ? "text-white hover:text-white/80" : "text-[#c8973a] hover:text-[#d9ab56]"
                  }`}
                >
                  <svg className="w-8 h-8 rounded-full border-2 flex items-center justify-center p-1.5 border-current" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  Watch Message
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Series */}
      <section className="bg-[#faf7f2] py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#c8973a] text-sm font-semibold tracking-widest uppercase mb-3">Archive</p>
            <h2
              className="text-[#1a2e4a] text-4xl font-bold"
              style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
            >
              Past Series
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {pastSeries.map((series) => (
              <div
                key={series.title}
                className="bg-white rounded-2xl p-6 border border-[#e8e0d0] hover:shadow-md transition-shadow cursor-pointer group"
              >
                <div className="text-[#c8973a] text-xs font-bold uppercase tracking-widest mb-2">{series.year}</div>
                <h3 className="text-[#1a2e4a] font-bold text-lg mb-2 group-hover:text-[#c8973a] transition-colors">
                  {series.title}
                </h3>
                <p className="text-[#7a7060] text-sm leading-relaxed">{series.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

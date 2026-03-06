import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

// ─── HERO ───────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[85vh] flex items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #1a2e4a 0%, #243d61 50%, #1a2e4a 100%)" }}
    >
      {/* Radiating light beams */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMin slice"
        viewBox="0 0 1440 900"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="beamOrigin" cx="50%" cy="0%" r="45%">
            <stop offset="0%" stopColor="#c8973a" stopOpacity="0.22" />
            <stop offset="60%" stopColor="#c8973a" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#c8973a" stopOpacity="0" />
          </radialGradient>
        </defs>
        {/* Warm radial glow at beam origin */}
        <ellipse cx="720" cy="-30" rx="340" ry="220" fill="url(#beamOrigin)" />
        {/* Central bright beams */}
        <polygon points="720,0 610,900 830,900" fill="white" fillOpacity="0.048" />
        <polygon points="720,0 500,900 610,900" fill="white" fillOpacity="0.034" />
        <polygon points="720,0 830,900 940,900" fill="white" fillOpacity="0.034" />
        {/* Mid beams */}
        <polygon points="720,0 350,900 500,900" fill="white" fillOpacity="0.022" />
        <polygon points="720,0 940,900 1090,900" fill="white" fillOpacity="0.022" />
        {/* Outer beams */}
        <polygon points="720,0 80,860 350,900" fill="white" fillOpacity="0.014" />
        <polygon points="720,0 1090,900 1360,860" fill="white" fillOpacity="0.014" />
        {/* Edge beams */}
        <polygon points="720,0 0,580 80,860" fill="white" fillOpacity="0.008" />
        <polygon points="720,0 1360,860 1440,580" fill="white" fillOpacity="0.008" />
      </svg>

      {/* Warm ground glow */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: "radial-gradient(ellipse 80% 50% at 50% 100%, #c8973a 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto hero-animate">
        {/* Eyebrow */}
        <p className="text-[#c8973a] text-sm sm:text-base font-semibold tracking-widest uppercase mb-6">
          You&apos;re Welcome Here
        </p>

        {/* Headline */}
        <h1
          className="text-white text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
        >
          Grace{" "}
          <span className="text-[#c8973a]">Community</span>
          <br />
          Church, Madera
        </h1>

        {/* Subhead */}
        <p className="text-white/75 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          A warm, welcoming church in the heart of Madera. Join us this Sunday, no matter where you&apos;re starting from.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link
            href="/visit"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#c8973a] hover:bg-[#d9ab56] text-white font-bold text-base px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-[#c8973a]/30 hover:shadow-xl"
          >
            Plan Your Visit
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            href="/sermons"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-base px-8 py-4 rounded-full transition-all border border-white/20 hover:border-white/40"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            Watch Latest Sermon
          </Link>
        </div>

        {/* Service times card */}
        <div className="inline-flex flex-col sm:flex-row items-center gap-0 sm:gap-0 rounded-2xl overflow-hidden border border-white/15 backdrop-blur-sm bg-white/5 shadow-2xl">
          <div className="w-full sm:w-auto flex items-center gap-4 px-6 py-4 sm:border-r border-white/15">
            <div className="w-10 h-10 rounded-full bg-[#c8973a]/20 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-[#c8973a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="text-left">
              <div className="text-white/60 text-xs uppercase tracking-wider font-medium">Sunday Services</div>
              <div className="text-white font-bold text-base">9:00 AM &amp; 11:00 AM</div>
            </div>
          </div>
          <div className="w-full sm:w-auto flex items-center gap-4 px-6 py-4 border-t sm:border-t-0 sm:border-r border-white/15">
            <div className="w-10 h-10 rounded-full bg-[#c8973a]/20 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-[#c8973a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div className="text-left">
              <div className="text-white/60 text-xs uppercase tracking-wider font-medium">Location</div>
              <div className="text-white font-bold text-base">17755 Road 26, Madera</div>
            </div>
          </div>
          <div className="w-full sm:w-auto flex items-center gap-4 px-6 py-4 border-t sm:border-t-0">
            <div className="w-10 h-10 rounded-full bg-[#c8973a]/20 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-[#c8973a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <div className="text-left">
              <div className="text-white/60 text-xs uppercase tracking-wider font-medium">Kids &amp; Students</div>
              <div className="text-white font-bold text-base">All Ages Welcome</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}

// ─── ABOUT / MISSION ────────────────────────────────────────────────────────

function About() {
  return (
    <section id="about" className="bg-[#faf7f2] py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div data-animate>
            <p className="text-[#c8973a] text-sm font-semibold tracking-widest uppercase mb-4">Who We Are</p>
            <h2
              className="text-[#1a2e4a] text-4xl sm:text-5xl font-bold leading-tight mb-6"
              style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
            >
              Rooted in Faith,<br />
              <span className="text-[#c8973a]">Growing Together</span>
            </h2>
            <p className="text-[#7a7060] text-lg leading-relaxed mb-6">
              Grace Community Church is a family of believers committed to loving God, loving people, and making disciples in Madera and beyond. We believe the gospel transforms lives, and we want you to experience that transformation too.
            </p>
            <p className="text-[#7a7060] text-lg leading-relaxed mb-8">
              Whether you&apos;re exploring faith for the first time or looking for a church home, you&apos;ll find a church family here that welcomes you exactly as you are.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/visit"
                className="inline-flex items-center gap-2 bg-[#1a2e4a] hover:bg-[#243d61] text-white font-semibold px-6 py-3 rounded-full transition-colors text-sm"
              >
                Plan Your Visit
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-[#1a2e4a] font-semibold px-6 py-3 rounded-full border-2 border-[#1a2e4a] hover:bg-[#1a2e4a] hover:text-white transition-colors text-sm"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Values cards */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: "✦", title: "Preaching", desc: "Faithful, expository preaching of God's Word every Sunday, equipping believers for life and godliness.", delay: "1" },
              { icon: "♥", title: "Evangelism", desc: "Sharing the Gospel with our neighbors in Madera and partnering with missionaries around the world.", delay: "2" },
              { icon: "✶", title: "Discipleship", desc: "Growing together through Bible studies, small groups, and intentional mentoring relationships.", delay: "3" },
              { icon: "→", title: "Love", desc: "Caring for one another and our neighbors with the love of Christ in practical, meaningful ways.", delay: "4" },
            ].map((val) => (
              <div
                key={val.title}
                data-animate
                data-delay={val.delay}
                className="bg-white rounded-2xl p-6 shadow-sm border border-[#e8e0d0] hover:shadow-md transition-shadow"
              >
                <div className="text-[#c8973a] text-2xl mb-3">{val.icon}</div>
                <h3 className="text-[#1a2e4a] font-bold text-base mb-2">{val.title}</h3>
                <p className="text-[#7a7060] text-sm leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── TESTIMONIALS ────────────────────────────────────────────────────────────

function Testimonials() {
  const testimonials = [
    {
      quote:
        "The first thing you notice here is the love that people have for each other. There are extensive Bible studies and small groups for any spiritual questions you may have.",
      name: "Nick Tolmachoff",
      role: "Google Review",
      initial: "N",
      delay: "1",
    },
    {
      quote:
        "This church is the best church I ever went to. They treat you like family here and they are spot on with the teachings that are given in the Bible.",
      name: "Cam Camacho",
      role: "Google Review",
      initial: "C",
      delay: "2",
    },
    {
      quote:
        "Everyone is so welcoming and makes you feel like family. The biblical teaching approach and strong sense of family make this church truly special.",
      name: "Miss Edith",
      role: "Google Review",
      initial: "E",
      delay: "3",
    },
  ];

  return (
    <section className="bg-[#faf7f2] py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div data-animate className="text-center mb-14">
          <p className="text-[#c8973a] text-sm font-semibold tracking-widest uppercase mb-3">4.7 Stars on Google</p>
          <h2
            className="text-[#1a2e4a] text-4xl sm:text-5xl font-bold"
            style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
          >
            Stories of Grace
          </h2>
          <p className="text-[#7a7060] mt-4 text-lg max-w-xl mx-auto">
            Real reviews from people who call GCC Madera home.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              data-animate
              data-delay={t.delay}
              className="bg-[#faf7f2] rounded-2xl p-8 border border-[#e8e0d0] flex flex-col"
            >
              {/* Decorative quote mark */}
              <div
                className="text-[#c8973a] font-bold mb-3 leading-none select-none"
                style={{ fontFamily: "Georgia, serif", fontSize: "4.5rem", lineHeight: 1 }}
                aria-hidden="true"
              >
                &ldquo;
              </div>
              <p className="text-[#2d2d2d] text-base leading-relaxed mb-8 italic flex-1">{t.quote}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1a2e4a] text-[#c8973a] flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {t.initial}
                </div>
                <div>
                  <div className="text-[#1a2e4a] font-bold text-sm">{t.name}</div>
                  <div className="text-[#7a7060] text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── PASTOR'S WELCOME ───────────────────────────────────────────────────────

function PastorWelcome() {
  return (
    <section className="bg-white py-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div
          data-animate
          className="bg-white rounded-3xl border border-[#e8e0d0] overflow-hidden shadow-sm"
        >
          <div className="grid lg:grid-cols-5">
            {/* Left - pastor info panel */}
            <div className="lg:col-span-2 bg-[#1a2e4a] p-8 lg:p-10 flex flex-col items-center justify-center text-center">
              <div className="w-28 h-28 rounded-full border-4 border-[#c8973a]/30 overflow-hidden mb-6">
                <Image
                  src="/images/Brandon_Hopkins.jpg"
                  alt="Pastor Brandon Hopkins"
                  width={112}
                  height={112}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-white font-bold text-lg mb-1">Pastor Brandon Hopkins</h3>
              <p className="text-[#c8973a] text-sm font-medium">Lead Pastor</p>
              <div className="mt-6 w-12 h-px bg-[#c8973a]/40" />
              <p className="text-white/50 text-xs mt-4 leading-relaxed">
                Grace Community Church
                <br />
                Madera, California
              </p>
            </div>

            {/* Right - personal letter */}
            <div className="lg:col-span-3 p-8 lg:p-10">
              <p className="text-[#c8973a] text-sm font-semibold tracking-widest uppercase mb-4">
                From Our Pastor
              </p>
              <h2
                className="text-[#1a2e4a] text-3xl sm:text-4xl font-bold mb-6"
                style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
              >
                A Personal Welcome
              </h2>
              <div className="space-y-4 text-[#7a7060] text-base leading-relaxed">
                <p>
                  Whether you&apos;re just curious about faith, going through a tough
                  season, or looking for a church to call home, I want you to know that
                  you are genuinely welcome here.
                </p>
                <p>
                  At Grace Community Church, we&apos;re not a perfect church and we
                  don&apos;t pretend to be. We&apos;re a family of real people who have
                  found real hope in Jesus, and we&apos;d love for you to experience that
                  too.
                </p>
                <p>
                  Come as you are. Bring your questions. Bring your family. I&apos;d love
                  to meet you this Sunday.
                </p>
              </div>
              <p
                className="mt-8 text-[#1a2e4a] text-xl italic"
                style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
              >
                Pastor Brandon
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── SERMONS ─────────────────────────────────────────────────────────────────

function Sermons() {
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
  ];

  return (
    <section id="sermons" className="bg-[#1a2e4a] py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Featured verse */}
        <div data-animate className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-[#c8973a] text-xs font-bold uppercase tracking-widest mb-5">
            Current Series: The Gospel of John
          </p>
          <blockquote>
            <p
              className="text-white/80 text-xl sm:text-2xl leading-relaxed italic"
              style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
            >
              &ldquo;But these are written <strong className="text-white not-italic">so that you may believe</strong> that Jesus is the Messiah, the Son of God, and that by believing you may have life in his name.&rdquo;
            </p>
            <footer className="mt-4">
              <cite className="text-[#c8973a]/70 text-sm font-semibold tracking-wide not-italic">
                John 20:31 (CSB)
              </cite>
            </footer>
          </blockquote>
        </div>

        {/* Header */}
        <div data-animate className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-[#c8973a] text-sm font-semibold tracking-widest uppercase mb-3">Recent Messages</p>
            <h2
              className="text-white text-4xl sm:text-5xl font-bold"
              style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
            >
              The Gospel of John
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-[#c8973a] text-xs font-semibold uppercase tracking-wider bg-[#c8973a]/10 px-3 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c8973a] animate-pulse" />
              Live Sundays 9 &amp; 11 AM
            </span>
            <Link
              href="/sermons"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white font-medium text-sm transition-colors whitespace-nowrap"
            >
              View All Sermons
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Sermon cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {sermons.map((sermon, i) => (
            <div
              key={sermon.title}
              data-animate
              data-delay={String(i + 1)}
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
  );
}

// ─── PLAN YOUR VISIT ─────────────────────────────────────────────────────────

function PlanVisit() {
  const items = [
    {
      q: "What should I wear?",
      a: "Come as you are! You'll see everything from jeans to business casual. We want you comfortable.",
      delay: "1",
    },
    {
      q: "What about my kids?",
      a: "GCC Kids is available for birth through 6th grade during both services, safe, fun, and age-appropriate. We'll tour you through check-in.",
      delay: "2",
    },
    {
      q: "How long is the service?",
      a: "About 70–75 minutes, including worship, prayer, and a message.",
      delay: "3",
    },
  ];

  return (
    <section id="visit" className="bg-[#faf7f2] py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div data-animate>
            <p className="text-[#c8973a] text-sm font-semibold tracking-widest uppercase mb-4">First Time?</p>
            <h2
              className="text-[#1a2e4a] text-4xl sm:text-5xl font-bold leading-tight mb-6"
              style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
            >
              Plan Your <span className="text-[#c8973a]">First Visit</span>
            </h2>
            <p className="text-[#7a7060] text-lg leading-relaxed mb-8">
              We know visiting a new church can feel a little nerve-wracking. We want to make your first Sunday as easy and welcoming as possible.
            </p>

            {/* Service info */}
            <div className="bg-[#1a2e4a] rounded-2xl p-6 text-white mb-6">
              <div className="space-y-5">
                {/* Sunday */}
                <div>
                  <div className="text-[#c8973a] text-xs font-bold uppercase tracking-widest mb-2">Sunday Mornings</div>
                  <div className="space-y-2">
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
                      <div className="text-white font-semibold">6:30 PM Bible Studies</div>
                      <div className="text-white/60 text-xs">Classes for all ages · Awana · Youth Ministry</div>
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

          {/* Right - FAQ */}
          <div className="space-y-4">
            {items.map((item) => (
              <div
                key={item.q}
                data-animate
                data-delay={item.delay}
                className="bg-white rounded-2xl p-6 shadow-sm border border-[#e8e0d0]"
              >
                <h3 className="text-[#1a2e4a] font-bold text-base mb-2">{item.q}</h3>
                <p className="text-[#7a7060] text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── SCRIPTURE BANNER ────────────────────────────────────────────────────

function ScriptureBanner() {
  return (
    <section className="relative bg-[#1a2e4a] py-20 sm:py-28 px-4 sm:px-6 overflow-hidden">
      {/* Subtle radial glow for depth */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 60% 80% at 50% 50%, #243d61 0%, #1a2e4a 70%)",
        }}
      />

      {/* Thin gold accent lines at top and bottom */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8973a]/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8973a]/40 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto text-center" data-animate>
        {/* Decorative star */}
        <div className="text-[#c8973a]/40 text-4xl mb-6 select-none" aria-hidden="true">
          ✦
        </div>

        {/* Verse */}
        <blockquote>
          <p
            className="text-white text-2xl sm:text-3xl lg:text-4xl leading-relaxed italic"
            style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
          >
            &ldquo;And let us consider one another in order to provoke love and good works,
            not neglecting to gather together, as some are in the habit of doing, but encouraging
            each other, and all the more as you see the day approaching.&rdquo;
          </p>
          <footer className="mt-6">
            <cite className="text-[#c8973a] text-sm sm:text-base font-semibold tracking-wide not-italic">
              Hebrews 10:24–25 (CSB)
            </cite>
          </footer>
        </blockquote>

        {/* Decorative divider */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <div className="w-12 h-px bg-[#c8973a]/30" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#c8973a]/40" />
          <div className="w-12 h-px bg-[#c8973a]/30" />
        </div>
      </div>
    </section>
  );
}

// ─── MINISTRIES ──────────────────────────────────────────────────────────────

const ministryIcons: Record<string, ReactNode> = {
  "GCC Kids": (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" />
      <circle cx="12" cy="7" r="2" fill="currentColor" stroke="none" />
    </svg>
  ),
  "Pursuit Student Ministries": (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    </svg>
  ),
  "Men's Ministry": (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  "Women's Ministry": (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  ),
  "Small Groups": (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  ),
  "Missions": (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
};

function Ministries() {
  const ministries = [
    { name: "GCC Kids", desc: "Fun, safe, Gospel-centered programming for kids birth–5th grade during every service.", delay: "1", href: "/ministries/kids" },
    { name: "Pursuit Student Ministries", desc: "Middle & High School students (grades 7–12) growing in faith, friendship, and purpose. Sundays & Wednesdays.", delay: "2", href: "/ministries/youth" },
    { name: "Men's Ministry", desc: "Brotherhood, accountability, and discipleship for men at every stage of life.", delay: "3", href: "/ministries/men" },
    { name: "Women's Ministry", desc: "Bible studies, events, and fellowship for women to grow deeper in faith together.", delay: "4", href: "/ministries/women" },
    { name: "Small Groups", desc: "Life-giving fellowship in homes throughout Madera. Find your group and go deeper.", delay: "5", href: "/contact" },
    { name: "Missions", desc: "Locally and globally, we partner to bring hope to those who haven't heard.", delay: "6", href: "/contact" },
  ];

  return (
    <section id="ministries" className="bg-white py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div data-animate className="text-center mb-14">
          <p className="text-[#c8973a] text-sm font-semibold tracking-widest uppercase mb-3">Get Involved</p>
          <h2
            className="text-[#1a2e4a] text-4xl sm:text-5xl font-bold"
            style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
          >
            Ministries for Every Stage
          </h2>
          <p className="text-[#7a7060] mt-4 text-lg max-w-xl mx-auto">
            From the youngest to the oldest, there is a place for you here at GCC.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ministries.map((m) => (
            <Link
              key={m.name}
              href={m.href}
              data-animate
              data-delay={m.delay}
              className="group bg-[#faf7f2] rounded-2xl p-6 border border-[#e8e0d0] hover:border-[#c8973a] hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-[#1a2e4a] text-[#c8973a] flex items-center justify-center mb-5 group-hover:bg-[#c8973a] group-hover:text-white transition-colors">
                {ministryIcons[m.name]}
              </div>
              <h3 className="text-[#1a2e4a] font-bold text-lg mb-2 group-hover:text-[#c8973a] transition-colors">{m.name}</h3>
              <p className="text-[#7a7060] text-sm leading-relaxed">{m.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── EVENTS ──────────────────────────────────────────────────────────────────

function Events() {
  const events = [
    {
      month: "MAR",
      day: "1",
      title: "Men's Breakfast",
      time: "7:30 AM",
      location: "Fellowship Hall",
      desc: "Monthly breakfast for men of all ages. Guest speaker and great food.",
      delay: "1",
    },
    {
      month: "MAR",
      day: "7",
      title: "Women's Bible Study",
      time: "9:30 AM",
      location: "Room 204",
      desc: "Join us as we study the book of Philippians together.",
      delay: "2",
    },
    {
      month: "MAR",
      day: "15",
      title: "Community Serve Day",
      time: "8:00 AM",
      location: "Meet at Church",
      desc: "Volunteer projects throughout Madera. All ages welcome.",
      delay: "3",
    },
    {
      month: "MAR",
      day: "22",
      title: "Pursuit Students Night",
      time: "6:30 PM",
      location: "Student Center",
      desc: "Middle & high school students night with worship, God's Word, small groups, and games.",
      delay: "4",
    },
  ];

  return (
    <section id="events" className="bg-[#faf7f2] py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div data-animate className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-[#c8973a] text-sm font-semibold tracking-widest uppercase mb-3">What&apos;s Coming Up</p>
            <h2
              className="text-[#1a2e4a] text-4xl sm:text-5xl font-bold"
              style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
            >
              Upcoming Events
            </h2>
          </div>
          <Link
            href="/events"
            className="inline-flex items-center gap-2 text-[#1a2e4a] font-semibold text-sm hover:text-[#c8973a] transition-colors"
          >
            View All Events →
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {events.map((e) => (
            <div
              key={e.title}
              data-animate
              data-delay={e.delay}
              className="bg-white rounded-2xl overflow-hidden border border-[#e8e0d0] hover:shadow-md transition-shadow"
            >
              {/* Date badge */}
              <div className="bg-[#1a2e4a] text-center py-4">
                <div className="text-[#c8973a] text-xs font-bold uppercase tracking-widest">{e.month}</div>
                <div className="text-white text-4xl font-bold leading-none">{e.day}</div>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── GIVE ────────────────────────────────────────────────────────────────────

function Give() {
  return (
    <section id="give" className="bg-[#1a2e4a] py-24 px-4 sm:px-6">
      <div data-animate className="max-w-4xl mx-auto text-center">
        <p className="text-[#c8973a] text-sm font-semibold tracking-widest uppercase mb-4">Generosity</p>
        <h2
          className="text-white text-4xl sm:text-5xl font-bold mb-6"
          style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
        >
          Give to GCC Madera
        </h2>
        <p className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
          Your generosity makes it possible for us to reach our neighbors, care for families, and support missions around the world. Giving is secure, simple, and an act of faithful worship.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/give"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#c8973a] hover:bg-[#d9ab56] text-white font-bold px-8 py-4 rounded-full transition-colors shadow-lg text-base"
          >
            Give Online, Secure &amp; Easy
          </Link>
          <Link
            href="/give"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-full transition-colors border border-white/20 text-base"
          >
            Other Ways to Give
          </Link>
        </div>
        <p className="text-white/40 text-xs mt-8">
          Grace Community Church is a registered 501(c)(3) non-profit. Donations are tax-deductible.
        </p>
      </div>
    </section>
  );
}

// ─── CONNECT ─────────────────────────────────────────────────────────────────

function Connect() {
  const ways = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Join a Small Group",
      desc: "Go deeper in fellowship with a small group in your neighborhood.",
      cta: "Find a Group",
      href: "https://gracemadera.churchcenter.com/people/forms/695569",
      delay: "1",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      title: "Volunteer",
      desc: "Use your gifts to serve, from kids to tech to hospitality and more.",
      cta: "Serve With Us",
      href: "https://gracemadera.churchcenter.com/people/forms/695569",
      delay: "2",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      title: "New Member Class",
      desc: "Learn about GCC's vision, beliefs, and how to make this your church home.",
      cta: "Sign Up",
      href: "https://gracemadera.churchcenter.com/registrations/events/1255419",
      delay: "3",
    },
  ];

  return (
    <section id="connect" className="bg-white py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div data-animate className="text-center mb-14">
          <p className="text-[#c8973a] text-sm font-semibold tracking-widest uppercase mb-3">Take a Next Step</p>
          <h2
            className="text-[#1a2e4a] text-4xl sm:text-5xl font-bold"
            style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
          >
            Get Connected
          </h2>
          <p className="text-[#7a7060] mt-4 text-lg max-w-xl mx-auto">
            Wherever you are in your faith journey, there&apos;s a next step for you at GCC.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {ways.map((w) => (
            <div key={w.title} data-animate data-delay={w.delay} className="text-center">
              <div className="w-14 h-14 rounded-2xl bg-[#1a2e4a] text-[#c8973a] flex items-center justify-center mx-auto mb-5">
                {w.icon}
              </div>
              <h3 className="text-[#1a2e4a] font-bold text-xl mb-3">{w.title}</h3>
              <p className="text-[#7a7060] text-sm leading-relaxed mb-5">{w.desc}</p>
              <a
                href={w.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#c8973a] font-semibold text-sm hover:text-[#1a2e4a] transition-colors"
              >
                {w.cta} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CONTACT ─────────────────────────────────────────────────────────────────

function Contact() {
  return (
    <section id="contact" className="bg-[#faf7f2] py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Info */}
          <div data-animate>
            <p className="text-[#c8973a] text-sm font-semibold tracking-widest uppercase mb-4">Reach Out</p>
            <h2
              className="text-[#1a2e4a] text-4xl sm:text-5xl font-bold mb-6"
              style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
            >
              We&apos;d Love<br />
              to Hear From You
            </h2>
            <p className="text-[#7a7060] text-lg leading-relaxed mb-8">
              Have questions? Want to talk to a pastor? Need prayer? Our team is here for you.
            </p>
            <div className="space-y-4">
              {[
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  label: "Address",
                  value: "17755 Road 26, Madera, CA 93638",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ),
                  label: "Phone",
                  value: "(559) 674-1172",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  label: "Email",
                  value: "info@gccmadera.com",
                },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1a2e4a] text-[#c8973a] flex items-center justify-center flex-shrink-0">
                    {c.icon}
                  </div>
                  <div>
                    <div className="text-[#7a7060] text-xs uppercase tracking-wider font-medium mb-0.5">{c.label}</div>
                    <div className="text-[#1a2e4a] font-semibold">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Simple contact form */}
          <div data-animate data-delay="1">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Sermons />
      <Testimonials />
      <PastorWelcome />
      <PlanVisit />
      <Ministries />
      <Events />
      <Give />
      <Connect />
      <Contact />
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "About Us | Grace Community Church Madera",
  description: "Learn about Grace Community Church of Madera. Our mission, beliefs, history, and team.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Us | Grace Community Church Madera",
    description: "Learn about Grace Community Church of Madera. Our mission, beliefs, history, and team.",
    url: "https://gccmadera.com/about",
  },
  twitter: {
    card: "summary",
    title: "About Us | Grace Community Church Madera",
    description: "Learn about Grace Community Church of Madera. Our mission, beliefs, history, and team.",
  },
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="Grace Community Church"
        title="About Us"
        subtitle="A community of faith rooted in Scripture, serving Madera since 1977."
      />

      {/* Our Church */}
      <section className="bg-[#faf7f2] py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-[#c8973a] text-sm font-semibold tracking-widest uppercase mb-4">Our Purpose</p>
              <h2
                className="text-[#1a2e4a] text-4xl sm:text-5xl font-bold leading-tight mb-6"
                style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
              >
                Who We Are
              </h2>
              <p className="text-[#7a7060] text-lg leading-relaxed mb-6">
                Grace Community Church of Madera is a Bible church affiliated with the Southern Baptist Convention,
                committed to teaching God&apos;s Word faithfully and building a community of genuine believers.
              </p>
              <div className="bg-white rounded-2xl p-6 border border-[#e8e0d0] space-y-4">
                <div>
                  <div className="text-[#c8973a] text-xs font-bold uppercase tracking-widest mb-1">Vision</div>
                  <p className="text-[#1a2e4a] font-semibold">
                    To be a Biblically functioning community of believers impacting Madera and the World.
                  </p>
                </div>
                <div className="border-t border-[#e8e0d0] pt-4">
                  <div className="text-[#c8973a] text-xs font-bold uppercase tracking-widest mb-1">Mission</div>
                  <p className="text-[#1a2e4a] font-semibold">
                    To bring all people to the knowledge and worship of Jesus Christ.
                  </p>
                </div>
                <div className="border-t border-[#e8e0d0] pt-4">
                  <div className="text-[#c8973a] text-xs font-bold uppercase tracking-widest mb-1">Purpose</div>
                  <p className="text-[#1a2e4a] font-semibold">
                    To exalt the Lord, edify the Lord&apos;s people, and evangelize the lost.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "✦", title: "Preaching", desc: "Faithful, expository preaching of God's Word every Sunday, equipping believers for life and godliness." },
                { icon: "♥", title: "Evangelism", desc: "Sharing the Gospel with our neighbors in Madera and partnering with missionaries around the world." },
                { icon: "✶", title: "Discipleship", desc: "Growing together through Bible studies, small groups, and intentional mentoring relationships." },
                { icon: "→", title: "Love", desc: "Caring for one another and our neighbors with the love of Christ in practical, meaningful ways." },
              ].map((val) => (
                <div key={val.title} className="bg-white rounded-2xl p-6 shadow-sm border border-[#e8e0d0]">
                  <div className="text-[#c8973a] text-2xl mb-3">{val.icon}</div>
                  <h3 className="text-[#1a2e4a] font-bold text-base mb-2">{val.title}</h3>
                  <p className="text-[#7a7060] text-sm leading-relaxed">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Beliefs */}
      <section className="bg-white py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#c8973a] text-sm font-semibold tracking-widest uppercase mb-3">What We Believe</p>
            <h2
              className="text-[#1a2e4a] text-4xl sm:text-5xl font-bold"
              style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
            >
              Our Beliefs
            </h2>
            <p className="text-[#7a7060] mt-4 text-lg max-w-2xl mx-auto">
              Our faith is anchored in the historic truths of Scripture as summarized in our Statement of Faith.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: "Holy Scriptures",
                verse: "2 Tim 3:16–17",
                desc: "The Bible is the verbally inspired Word of God, inerrant in the original writings, and the final authority for all matters of faith and practice.",
              },
              {
                title: "The Godhead",
                verse: "Deut 6:4; 2 Cor 13:14",
                desc: "We believe in one Triune God: Father, Son, and Holy Spirit, co-eternal, co-identical in nature, and co-equal in power.",
              },
              {
                title: "Person & Work of Christ",
                verse: "John 1:14",
                desc: "Jesus Christ is the eternal Son of God, born of the Virgin Mary, who died for our redemption and rose bodily from the dead.",
              },
              {
                title: "The Holy Spirit",
                verse: "John 16:8",
                desc: "The Holy Spirit convicts of sin, regenerates, baptizes believers into the body of Christ, and indwells and seals every believer.",
              },
              {
                title: "The Nature of Man",
                verse: "Rom 3:23",
                desc: "All people fell in Adam and are born with a sinful nature, unable on their own to remedy their lost condition.",
              },
              {
                title: "Salvation",
                verse: "Eph 2:8–9",
                desc: "Salvation is a gift of God by grace through personal faith in Jesus Christ, whose shed blood provides forgiveness for sin.",
              },
            ].map((belief) => (
              <div key={belief.title} className="bg-[#faf7f2] rounded-2xl p-6 border border-[#e8e0d0]">
                <div className="text-[#c8973a] text-xs font-bold uppercase tracking-widest mb-2">{belief.verse}</div>
                <h3 className="text-[#1a2e4a] font-bold text-lg mb-3">{belief.title}</h3>
                <p className="text-[#7a7060] text-sm leading-relaxed">{belief.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Baptism",
                desc: "We practice believers' baptism by immersion only, based on the Greek baptizo, 'to dip or submerge.' Infant dedication is offered for Christian parents. To arrange baptism, call (559) 674-1172.",
              },
              {
                title: "Communion",
                desc: "The Lord's Supper is a memorial meal, not transubstantiation, observed with bread and grape juice by believers who have examined themselves.",
              },
              {
                title: "Marriage",
                desc: "We hold that marriage is a permanent, lifelong covenant between one man and one woman, as defined in Scripture.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-[#1a2e4a] rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-3 text-[#c8973a]">{item.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our History */}
      <section className="bg-[#faf7f2] py-24 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#c8973a] text-sm font-semibold tracking-widest uppercase mb-3">Our Story</p>
            <h2
              className="text-[#1a2e4a] text-4xl sm:text-5xl font-bold"
              style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
            >
              Our History
            </h2>
          </div>

          <div className="space-y-4">
            {[
              { year: "1977", text: "Founded in Madera as Madera Community Church, beginning as a home Bible study that grew into a community movement." },
              { year: "1978", text: "Incorporated in May as Madera Community Church, then renamed Grace Community Church of Madera shortly after." },
              { year: "1980", text: "The church called its first full-time pastor, establishing a foundation for sustained ministry." },
              { year: "1983", text: "Randy Brannon moved from Portland, Oregon to assume pastoral responsibilities. Services were held at John Adams School." },
              { year: "1985", text: "The congregation built a new worship center over five months, financed through internal church notes. GCC moved to its current campus at 17755 Road 26 in October." },
              { year: "1987", text: "Missions ministry launched with the first Faith Promise Missions Conference, beginning GCC's commitment to reaching the world." },
              { year: "1989–90", text: "Congregation constructed the educational building on campus, expanding capacity for Bible studies and children's ministry." },
              { year: "2019", text: "James Kendall moved from North Carolina to become Senior Pastor." },
              { year: "2022", text: "Brandon Hopkins assumed Interim Senior Pastor (January), then was voted in as Senior Pastor by the congregation on June 6." },
              { year: "Today", text: "GCC Madera continues to grow as a Biblically faithful, Gospel-centered community serving Madera and the world." },
            ].map((item) => (
              <div key={item.year} className="flex gap-5">
                <div className="flex-shrink-0 w-20 h-14 rounded-xl bg-[#1a2e4a] flex items-center justify-center text-[#c8973a] font-bold text-sm text-center leading-tight">
                  {item.year}
                </div>
                <div className="flex-1 bg-white rounded-2xl px-5 py-4 border border-[#e8e0d0]">
                  <p className="text-[#7a7060] text-sm leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="bg-white py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#c8973a] text-sm font-semibold tracking-widest uppercase mb-3">Leadership</p>
            <h2
              className="text-[#1a2e4a] text-4xl sm:text-5xl font-bold"
              style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
            >
              Our Team
            </h2>
          </div>

          {/* Pastoral Staff */}
          <div className="mb-16">
            <h3
              className="text-[#1a2e4a] font-bold text-2xl mb-8 text-center"
              style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
            >
              Pastoral Staff
            </h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {[
                {
                  initials: "BH",
                  name: "Brandon Hopkins",
                  title: "Senior Pastor",
                  bio: "Born and raised in the Central Valley, Pastor Brandon has been a member of Grace Community Church since early childhood. He has served in numerous roles including teaching adult Bible studies, leading youth ministry, and serving on the Elder Board. He was voted in as Senior Pastor on June 6, 2022. He is pursuing a Master of Divinity (emphasis: preaching) from Southern Baptist Theological Seminary and homeschools his seven children.",
                },
                {
                  initials: "JB",
                  name: "Jake Beckman",
                  title: "Associate Pastor, Youth Ministry",
                  bio: "Jake grew up in the Central Valley and holds a Business degree from Colorado Christian University. He is currently pursuing a Master of Divinity at Southern Baptist Theological Seminary. His heart is for students to know Christ and make Him known through Pursuit Student Ministries. His favorite verse is John 15:13.",
                },
              ].map((person) => (
                <div key={person.name} className="bg-[#faf7f2] rounded-3xl border border-[#e8e0d0] overflow-hidden">
                  <div className="bg-[#1a2e4a] p-8 text-center">
                    <div className="w-20 h-20 rounded-full bg-[#243d61] border-4 border-[#c8973a]/30 flex items-center justify-center mx-auto mb-4">
                      <span
                        className="text-[#c8973a] font-bold text-xl"
                        style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
                      >
                        {person.initials}
                      </span>
                    </div>
                    <h4 className="text-white font-bold text-lg">{person.name}</h4>
                    <p className="text-[#c8973a] text-sm mt-1">{person.title}</p>
                  </div>
                  <div className="p-6">
                    <p className="text-[#7a7060] text-sm leading-relaxed">{person.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Staff */}
          <div className="mb-16">
            <h3
              className="text-[#1a2e4a] font-bold text-2xl mb-8 text-center"
              style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
            >
              Staff
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                {
                  initials: "LM",
                  name: "Lavonne Marshall",
                  title: "Children's Ministry Director",
                  desc: "B.A. Linguistics, UC San Diego. Married to Noah; homeschools four children. Contact: lavonne@gccmadera.com",
                },
                {
                  initials: "MC",
                  name: "Mary Cunningham",
                  title: "Church Secretary",
                  desc: "Attending GCC since 1993. Youth Ministries Small Group Leader. 30 years in the travel industry.",
                },
                {
                  initials: "SO",
                  name: "Sherry Olguin",
                  title: "Fill-in Secretary",
                  desc: "Covers the office when Mary is away. Former Bookkeeper for GCC. Married to Oscar.",
                },
                {
                  initials: "DV",
                  name: "David Vickery II",
                  title: "IT/Media & Ministry Assistant",
                  desc: "On staff since 2018. Liberal Studies degree from Fresno State. Also serves as Awana Commander.",
                },
              ].map((person) => (
                <div key={person.name} className="bg-[#faf7f2] rounded-2xl border border-[#e8e0d0] p-5 text-center">
                  <div className="w-14 h-14 rounded-full bg-[#1a2e4a] border-2 border-[#c8973a]/30 flex items-center justify-center mx-auto mb-3">
                    <span className="text-[#c8973a] font-bold text-sm">{person.initials}</span>
                  </div>
                  <h4 className="text-[#1a2e4a] font-bold text-sm mb-0.5">{person.name}</h4>
                  <p className="text-[#c8973a] text-xs font-medium mb-3">{person.title}</p>
                  <p className="text-[#7a7060] text-xs leading-relaxed">{person.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Elder Board */}
          <div>
            <h3
              className="text-[#1a2e4a] font-bold text-2xl mb-8 text-center"
              style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
            >
              Council of Elders
            </h3>
            <div className="bg-[#faf7f2] rounded-2xl p-8 border border-[#e8e0d0] max-w-2xl mx-auto text-center">
              <p className="text-[#7a7060] text-sm leading-relaxed mb-6">
                GCC is governed by a Council of Elders responsible for developing and implementing all church policies.
                The council includes both lay elders and pastoral staff. Congregational votes are held to confirm new
                elders, approve constitutional changes, and authorize property purchases.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                {["Pastor Brandon Hopkins", "Mark Hutson", "David Dougherty", "Jerry King", "Corey Miller"].map((elder) => (
                  <div key={elder} className="bg-white rounded-full px-4 py-2 border border-[#e8e0d0] text-[#1a2e4a] font-medium text-sm">
                    {elder}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1a2e4a] py-20 px-4 sm:px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-[#c8973a] text-sm font-semibold tracking-widest uppercase mb-4">Come Join Us</p>
          <h2
            className="text-white text-4xl font-bold mb-6"
            style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
          >
            We&apos;d Love to Meet You
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Visit us this Sunday at 9:00 AM or 11:00 AM. You&apos;re welcome here.
          </p>
          <Link
            href="/visit"
            className="inline-flex items-center gap-2 bg-[#c8973a] hover:bg-[#d9ab56] text-white font-bold px-8 py-4 rounded-full transition-colors"
          >
            Plan Your Visit
          </Link>
        </div>
      </section>
    </main>
  );
}

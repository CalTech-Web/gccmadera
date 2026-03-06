import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";
import ScrollAnimations from "@/components/ScrollAnimations";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gccmadera.com"),
  title: "Grace Community Church | Madera, CA",
  description:
    "A warm, welcoming church family in Madera, California. Join us Sundays at 9AM & 11AM. You're welcome here.",
  keywords: "church, Madera, California, Grace Community Church, GCC, Christian, worship",
  openGraph: {
    title: "Grace Community Church | Madera, CA",
    description: "A warm, welcoming church family in Madera, California. Join us Sundays at 9AM & 11AM.",
    type: "website",
    url: "https://gccmadera.com",
    siteName: "Grace Community Church Madera",
    images: [{ url: "/images/logo-vertical.png", width: 280, height: 320, alt: "Grace Community Church Logo" }],
  },
  twitter: {
    card: "summary",
    title: "Grace Community Church | Madera, CA",
    description: "A warm, welcoming church family in Madera, California. Join us Sundays at 9AM & 11AM.",
    images: ["/images/logo-vertical.png"],
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/images/logo-small.jpg",
  },
};

const churchJsonLd = {
  "@context": "https://schema.org",
  "@type": "Church",
  "@id": "https://gccmadera.com/#organization",
  name: "Grace Community Church Madera",
  alternateName: "GCC Madera",
  url: "https://gccmadera.com",
  logo: "https://gccmadera.com/images/logo-vertical.png",
  image: "https://gccmadera.com/images/logo-vertical.png",
  description:
    "A warm, welcoming Bible church in Madera, California affiliated with the Southern Baptist Convention. Join us Sundays at 9AM & 11AM.",
  telephone: "+15596741172",
  email: "info@gccmadera.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "17755 Road 26",
    addressLocality: "Madera",
    addressRegion: "CA",
    postalCode: "93638",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 36.9613,
    longitude: -120.0607,
  },
  openingHours: ["Su 09:00-12:30", "We 17:30-21:00"],
  sameAs: ["https://www.facebook.com/gccmadera"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(churchJsonLd) }}
        />
        <ScrollAnimations />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}

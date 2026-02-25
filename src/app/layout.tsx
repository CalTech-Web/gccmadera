import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";
import ScrollAnimations from "@/components/ScrollAnimations";
import ScrollProgress from "@/components/ScrollProgress";
import AnnouncementBar from "@/components/AnnouncementBar";
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
  title: "Grace Community Church | Madera, CA",
  description:
    "A warm, welcoming church family in Madera, California. Join us Sundays at 9AM & 11AM. You're welcome here.",
  keywords: "church, Madera, California, Grace Community Church, GCC, Christian, worship",
  openGraph: {
    title: "Grace Community Church | Madera, CA",
    description: "A warm, welcoming church family in Madera, California.",
    type: "website",
    images: [{ url: "/images/logo-vertical.png", width: 280, height: 320, alt: "Grace Community Church Logo" }],
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/images/logo-small.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable}`}>
      <body>
        <ScrollProgress />
        <ScrollAnimations />
        <AnnouncementBar />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}

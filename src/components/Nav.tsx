"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Sermons", href: "/sermons" },
  { label: "Ministries", href: "/ministries" },
  { label: "Events", href: "/events" },
  { label: "Give", href: "/give" },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1a2e4a]/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/images/logo-horizontal.png"
              alt="Grace Community Church"
              width={200}
              height={60}
              className="h-10 sm:h-12 w-auto brightness-0 invert"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-white px-3 py-2 text-sm font-medium transition-colors rounded-md hover:bg-white/10"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="/visit"
              className="hidden md:inline-flex items-center gap-2 bg-[#c8973a] hover:bg-[#d9ab56] text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors"
            >
              Plan Your Visit
            </Link>
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden text-white/80 hover:text-white p-2"
              aria-label="Toggle menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <nav className="lg:hidden bg-[#1a2e4a] border-t border-white/10 px-4 py-3 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-white/80 hover:text-white px-3 py-2.5 text-sm font-medium rounded-md hover:bg-white/10 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 pb-1">
            <Link
              href="/visit"
              onClick={() => setOpen(false)}
              className="block text-center bg-[#c8973a] hover:bg-[#d9ab56] text-white text-sm font-semibold px-4 py-2.5 rounded-full transition-colors"
            >
              Plan Your Visit
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

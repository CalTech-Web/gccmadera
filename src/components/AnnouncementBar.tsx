"use client";

import { useState, useEffect } from "react";

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(false);

  // Delay mount to avoid hydration mismatch; read localStorage on client
  useEffect(() => {
    const dismissed = localStorage.getItem("gcc-announce-dismissed-v1");
    if (!dismissed) setVisible(true);
  }, []);

  function dismiss() {
    localStorage.setItem("gcc-announce-dismissed-v1", "1");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="relative bg-[#c8973a] text-white text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 flex items-center justify-center gap-3 flex-wrap text-center">
        <span className="font-medium leading-snug">
          <span className="font-bold">This Sunday at GCC Madera</span>
          <span className="mx-2 opacity-60">·</span>
          9:00 &amp; 11:00 AM Services
          <span className="mx-2 opacity-60">·</span>
          <span className="hidden sm:inline">Free Breakfast at 10:15 AM · </span>
          <em className="not-italic font-semibold">The Gospel of John</em>
        </span>
        <a
          href="/visit"
          className="inline-flex items-center gap-1 bg-white/20 hover:bg-white/30 text-white font-semibold px-3 py-1 rounded-full text-xs transition-colors whitespace-nowrap"
        >
          Plan Your Visit →
        </a>
      </div>
      <button
        onClick={dismiss}
        aria-label="Dismiss announcement"
        className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-1 rounded transition-colors"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}

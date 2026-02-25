"use client";

import { useEffect } from "react";

/**
 * Globally enables scroll-reveal animations.
 * - Adds `js-animate` to <html> so CSS hides [data-animate] elements only when JS is active.
 * - Uses IntersectionObserver to add `.in-view` class when elements enter the viewport.
 * - Renders nothing - drop once in layout.tsx.
 */
export default function ScrollAnimations() {
  useEffect(() => {
    document.documentElement.classList.add("js-animate");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target); // animate once
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px 60px 0px" }
    );

    document
      .querySelectorAll("[data-animate]")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}

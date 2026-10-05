"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    /** Hareket gözlemcisinin kurulduğunu düzen betiğine bildirir. */
    __motionReady?: boolean;
  }
}

/**
 * Sayfa genelindeki hareketleri yöneten tek nokta:
 * - [data-reveal] taşıyan öğeler görünür alana girdiğinde açılır.
 * - Çalışma biçimi bölümündeki ray, kaydırma ilerlemesine göre dolar.
 *
 * Hareket azaltma tercihi açıksa hiçbir gözlemci kurulmaz.
 */
export function Motion() {
  useEffect(() => {
    window.__motionReady = true;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (prefersReduced.matches) {
      document.documentElement.removeAttribute("data-motion");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );

    document.querySelectorAll("[data-reveal]").forEach((element) => observer.observe(element));

    const rail = document.querySelector<HTMLElement>("[data-process-rail]");
    const section = rail?.closest("section");
    let frame = 0;

    const updateRail = () => {
      frame = 0;
      if (!rail || !section) return;
      const box = section.getBoundingClientRect();
      const start = window.innerHeight * 0.85;
      const distance = box.height * 0.6;
      const progress = (start - box.top) / distance;
      rail.style.setProperty("--progress", String(Math.min(1, Math.max(0, progress))));
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateRail);
    };

    updateRail();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}

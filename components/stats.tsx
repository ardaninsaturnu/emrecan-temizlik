"use client";

import { useEffect, useRef, useState } from "react";

import { stats } from "@/lib/content";

const DURATION = 1500;
const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

/** Görünür alana girdiğinde sayıları 0'dan hedefe kadar artıran sayaç. */
function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;
    let start = 0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        // Hareket azaltma tercihinde sayaç çalışmaz, değer doğrudan yazılır.
        if (prefersReduced) {
          setDisplay(value);
          return;
        }

        const tick = (now: number) => {
          if (!start) start = now;
          const progress = Math.min(1, (now - start) / DURATION);
          setDisplay(Math.round(easeOut(progress) * value));
          if (progress < 1) frame = window.requestAnimationFrame(tick);
        };

        frame = window.requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="section section--pine section--tight" aria-labelledby="sayilar-baslik">
      <div className="container">
        <h2 className="visually-hidden" id="sayilar-baslik">
          Rakamlarla Emre Can Temizlik
        </h2>
        <dl className="stats">
          {stats.map((stat, index) => (
            <div
              className="stat"
              key={stat.label}
              data-reveal
              style={{ "--reveal-delay": `${index * 90}ms` } as React.CSSProperties}
            >
              <dt className="stat__value">
                <Counter value={stat.value} suffix={stat.suffix} />
              </dt>
              <dd className="stat__label">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

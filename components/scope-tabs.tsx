"use client";

import Image from "next/image";
import { useState } from "react";

import { CheckIcon } from "@/components/icons";
import { services } from "@/lib/content";

/**
 * Hizmet seçildiğinde kapsam listesi ve görseli değişen sekme grubu.
 * Klavye ile sol/sağ ok tuşları desteklenir.
 */
export function ScopeTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = services[activeIndex];

  const moveFocus = (direction: 1 | -1) => {
    const next = (activeIndex + direction + services.length) % services.length;
    setActiveIndex(next);
    document.getElementById(`kapsam-sekme-${next}`)?.focus();
  };

  return (
    <div className="scope">
      <div
        className="scope__tabs"
        role="tablist"
        aria-label="Hizmet kapsamları"
        onKeyDown={(event) => {
          if (event.key === "ArrowRight" || event.key === "ArrowDown") {
            event.preventDefault();
            moveFocus(1);
          }
          if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
            event.preventDefault();
            moveFocus(-1);
          }
        }}
      >
        {services.map((service, index) => (
          <button
            type="button"
            className="scope__tab"
            key={service.slug}
            id={`kapsam-sekme-${index}`}
            role="tab"
            aria-selected={index === activeIndex}
            aria-controls={`kapsam-panel-${index}`}
            tabIndex={index === activeIndex ? 0 : -1}
            onClick={() => setActiveIndex(index)}
          >
            {service.title}
          </button>
        ))}
      </div>

      <div
        className="scope__panel"
        key={active.slug}
        id={`kapsam-panel-${activeIndex}`}
        role="tabpanel"
        aria-labelledby={`kapsam-sekme-${activeIndex}`}
        tabIndex={0}
      >
        <div>
          <h3 className="scope__panel-title">{active.title}</h3>
          <p className="scope__panel-summary">{active.summary}</p>
          <ul className="scope__list">
            {active.scope.map((item, index) => (
              <li key={item} style={{ "--i": index } as React.CSSProperties}>
                <span className="scope__check" aria-hidden="true">
                  <CheckIcon />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <figure className="scope__media">
          <Image
            src={active.image}
            alt={active.imageAlt}
            placeholder="blur"
            sizes="(min-width: 920px) 28vw, 100vw"
          />
          <figcaption className="scope__media-caption">
            <strong>Çalışma sıklığı:</strong> {active.frequency}
          </figcaption>
        </figure>
      </div>
    </div>
  );
}

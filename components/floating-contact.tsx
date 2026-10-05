"use client";

import { useEffect, useState } from "react";

import { WhatsAppIcon } from "@/components/icons";
import { site } from "@/lib/site";

/** Sayfa bir miktar kaydırıldıktan sonra beliren hızlı iletişim düğmesi. */
export function FloatingContact() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > 640);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      className={`floating-contact${isVisible ? " is-visible" : ""}`}
      href={site.whatsapp.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp üzerinden fiyat teklifi alın"
    >
      <WhatsAppIcon width={19} height={19} />
      <span className="floating-contact__label">WhatsApp&apos;tan yazın</span>
    </a>
  );
}

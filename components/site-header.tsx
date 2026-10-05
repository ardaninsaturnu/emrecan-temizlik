"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { BrandMark, PhoneIcon } from "@/components/icons";
import { nav, site } from "@/lib/site";

export function SiteHeader() {
  const [isStuck, setIsStuck] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsStuck(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Menü açıkken arka planın kaymasını engelle, Esc ile kapat.
  useEffect(() => {
    if (!isMenuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <header className={`site-header${isStuck ? " is-stuck" : ""}${isMenuOpen ? " is-menu-open" : ""}`}>
      <div className="container site-header__inner">
        <Link href="/" className="brand" aria-label={`${site.name} ana sayfa`}>
          <BrandMark className="brand__mark" />
          <span className="brand__text">
            <span className="brand__name">Emre Can</span>
            <span className="brand__sub">Temizlik</span>
          </span>
        </Link>

        <nav className="site-nav" aria-label="Ana menü">
          <ul className="site-nav__list">
            {nav.map((item) => (
              <li key={item.href}>
                <a className="site-nav__link" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <a className="header-phone" href={site.phone.href}>
            <PhoneIcon width={17} height={17} />
            {site.phone.display}
          </a>
          <a className="button button--primary" href="#teklif">
            Ücretsiz Keşif
          </a>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={isMenuOpen}
            aria-controls="mobil-menu"
            aria-label={isMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span className="menu-toggle__bar" />
            <span className="menu-toggle__bar" />
            <span className="menu-toggle__bar" />
          </button>
        </div>
      </div>

      <div id="mobil-menu" className="mobile-menu" data-open={isMenuOpen} aria-hidden={!isMenuOpen}>
        <ul className="mobile-menu__list">
          {nav.map((item, index) => (
            <li className="mobile-menu__item" key={item.href}>
              <a
                className="mobile-menu__link"
                href={item.href}
                style={{ "--delay": `${120 + index * 60}ms` } as React.CSSProperties}
                tabIndex={isMenuOpen ? undefined : -1}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
                <span className="mobile-menu__index">{String(index + 1).padStart(2, "0")}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="mobile-menu__footer">
          <a className="mobile-menu__phone" href={site.phone.href} tabIndex={isMenuOpen ? undefined : -1}>
            {site.phone.display}
          </a>
          <p className="mobile-menu__meta">
            {site.address.district}, {site.address.city} · Hafta içi 08.00 – 19.00
          </p>
          <a
            className="button button--light"
            href="#teklif"
            onClick={() => setIsMenuOpen(false)}
            tabIndex={isMenuOpen ? undefined : -1}
          >
            Ücretsiz keşif talep et
          </a>
        </div>
      </div>
    </header>
  );
}

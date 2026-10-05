import Link from "next/link";

import {
  BrandMark,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  PhoneIcon,
} from "@/components/icons";
import { services } from "@/lib/content";
import { nav, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="brand" aria-label={`${site.name} ana sayfa`}>
              <BrandMark className="brand__mark" size={30} />
              <span className="brand__text">
                <span className="brand__name">Emre Can</span>
                <span className="brand__sub">Temizlik</span>
              </span>
            </Link>
            <p>{site.description}</p>
          </div>

          <div>
            <h2 className="footer-heading">Hizmetler</h2>
            <ul className="footer-list">
              {services.map((service) => (
                <li key={service.slug}>
                  <a href="#kapsam">{service.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="footer-heading">Kurumsal</h2>
            <ul className="footer-list">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
              <li>
                <Link href="/gizlilik-politikasi">Aydınlatma Metni</Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="footer-heading">İletişim</h2>
            <ul className="footer-list">
              <li>
                <a href={site.phone.href}>
                  <PhoneIcon width={14} height={14} style={{ display: "inline", verticalAlign: "-2px" }} />{" "}
                  {site.phone.display}
                </a>
              </li>
              <li>
                <a href={site.email.href}>
                  <MailIcon width={14} height={14} style={{ display: "inline", verticalAlign: "-2px" }} />{" "}
                  {site.email.display}
                </a>
              </li>
              <li>
                <address style={{ fontStyle: "normal" }}>
                  {site.address.street}
                  <br />
                  {site.address.district} / {site.address.city}
                </address>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} {site.legalName}. Tüm hakları saklıdır.
          </p>
          <div className="footer-social">
            <a href={site.social.instagram} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <InstagramIcon />
            </a>
            <a href={site.social.facebook} aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <FacebookIcon />
            </a>
            <a href={site.social.linkedin} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <LinkedinIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

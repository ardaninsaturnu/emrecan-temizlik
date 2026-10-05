import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";

import { FloatingContact } from "@/components/floating-contact";
import { JsonLd } from "@/components/json-ld";
import { Motion } from "@/components/motion";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { buildBusinessSchema } from "@/lib/schema";
import { site } from "@/lib/site";

import "./globals.css";

const display = Fraunces({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-display",
});

const sans = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | İstanbul Apartman, Ofis ve Ev Temizliği`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.legalName, url: site.url }],
  creator: site.legalName,
  publisher: site.legalName,
  category: "Temizlik Hizmetleri",
  keywords: [
    "İstanbul temizlik şirketi",
    "apartman temizliği",
    "site temizliği",
    "ofis temizliği",
    "ev temizliği",
    "inşaat sonrası temizlik",
    "cam ve cephe temizliği",
    "dezenfeksiyon hizmeti",
    "Avrupa Yakası temizlik firması",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    telephone: true,
    address: true,
  },
  other: {
    "geo.region": "TR-34",
    "geo.placename": `${site.address.district}, ${site.address.city}`,
  },
};

export const viewport: Viewport = {
  themeColor: "#0e3a2e",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

/**
 * Hareketleri ilk boyamadan önce açar; böylece içerik bir an görünüp kaybolmaz.
 * JavaScript bir sebeple devreye giremezse üç saniye sonra bayrak kaldırılır ve
 * bütün içerik normal biçimde görünür kalır.
 */
const motionBootstrap = `
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  var root = document.documentElement;
  root.setAttribute('data-motion', 'on');
  setTimeout(function () {
    if (!window.__motionReady) root.removeAttribute('data-motion');
  }, 3000);
}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`${display.variable} ${sans.variable}`} suppressHydrationWarning>
      <body>
        <script dangerouslySetInnerHTML={{ __html: motionBootstrap }} />

        <a className="skip-link" href="#icerik">
          İçeriğe geç
        </a>

        <SiteHeader />
        <main id="icerik">{children}</main>
        <SiteFooter />

        <FloatingContact />
        <Motion />
        <JsonLd id="isletme-verisi" data={buildBusinessSchema()} />
      </body>
    </html>
  );
}

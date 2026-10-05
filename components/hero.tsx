import Image from "next/image";

import { ArrowRightIcon, PhoneIcon, SprayIcon } from "@/components/icons";
import { site } from "@/lib/site";
import heroPrimary from "@/public/gorseller/hero-cam-temizligi.jpg";
import heroSecondary from "@/public/gorseller/hero-salon.jpg";

const titleLines = [
  { text: "Binanız her sabah", emphasis: false },
  { text: "ilk günkü gibi", emphasis: true },
  { text: "karşılasın.", emphasis: false },
];

const proof = [
  { value: "12 yıl", label: "İstanbul'da kesintisiz saha deneyimi" },
  { value: "430+", label: "Düzenli sözleşmeyle bakılan bina" },
  { value: "24 saat", label: "İçinde keşif ve yazılı teklif" },
];

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-baslik">
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="badge" data-reveal style={{ "--reveal-delay": "80ms" } as React.CSSProperties}>
            <span className="badge__dot" aria-hidden="true" />
            İstanbul Avrupa Yakası · Sigortalı ekip
          </p>

          <h1 className="hero__title" id="hero-baslik">
            {titleLines.map((line, index) => (
              <span className="hero__line" key={line.text}>
                <span style={{ "--delay": `${index * 110}ms` } as React.CSSProperties}>
                  {line.emphasis ? <em>{line.text}</em> : line.text}
                </span>
              </span>
            ))}
          </h1>

          <p className="hero__lead" data-reveal style={{ "--reveal-delay": "220ms" } as React.CSSProperties}>
            Apartman ve site ortak alanları, ofisler, evler ve inşaat sonrası teslimler için sabit ekiple
            çalışan, kapsamı yazıyla belirlenmiş temizlik hizmeti. Malzeme, makine ve denetim bize ait.
          </p>

          <div className="hero__actions" data-reveal style={{ "--reveal-delay": "300ms" } as React.CSSProperties}>
            <a className="button button--primary" href="#teklif">
              Ücretsiz keşif talep et
              <ArrowRightIcon className="button__icon" width={17} height={17} />
            </a>
            <a className="button button--ghost" href={site.phone.href}>
              <PhoneIcon width={17} height={17} />
              {site.phone.display}
            </a>
          </div>

          <dl className="hero__proof" data-reveal style={{ "--reveal-delay": "380ms" } as React.CSSProperties}>
            {proof.map((item) => (
              <div className="hero__proof-item" key={item.value}>
                <dt className="hero__proof-value">{item.value}</dt>
                <dd className="hero__proof-label">{item.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="hero__media" data-reveal="clip">
          <figure className="hero__photo">
            <Image
              src={heroPrimary}
              alt="Bir ekip üyesi ofis penceresini mikrofiber bezle siliyor"
              placeholder="blur"
              priority
              sizes="(min-width: 980px) 46vw, 100vw"
            />
          </figure>

          <figure className="hero__photo-secondary">
            <Image
              src={heroSecondary}
              alt="Temizlik sonrası toparlanmış, düzenli bir oturma odası"
              placeholder="blur"
              sizes="(min-width: 980px) 18vw, 40vw"
            />
          </figure>

          <p className="hero__chip">
            <SprayIcon width={16} height={16} />
            Malzeme ve ekipman dahil
          </p>

          <div className="hero__seal" aria-hidden="true">
            <svg viewBox="0 0 100 100">
              <defs>
                <path id="hero-seal-path" d="M50 50m-36 0a36 36 0 1 1 72 0a36 36 0 1 1 -72 0" />
              </defs>
              <text fontSize="8.2" fill="currentColor">
                <textPath href="#hero-seal-path" startOffset="0" textLength="226" lengthAdjust="spacing">
                  SİGORTALI EKİP · YAZILI TEKLİF ·
                </textPath>
              </text>
            </svg>
            <SprayIcon className="hero__seal-core" width={22} height={22} />
          </div>
        </div>
      </div>
    </section>
  );
}

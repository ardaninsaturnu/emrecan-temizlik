import Image from "next/image";

import { DocumentIcon, ShieldIcon, SprayIcon, TeamIcon } from "@/components/icons";
import { gallery, guarantees } from "@/lib/content";

const icons = [ShieldIcon, TeamIcon, SprayIcon, DocumentIcon];

export function Guarantees() {
  return (
    <section className="section" id="taahhutler" aria-labelledby="taahhutler-baslik">
      <div className="container">
        <header className="section-head section-head--split">
          <div>
            <p className="eyebrow" data-reveal>
              Neden biz
            </p>
            <h2 id="taahhutler-baslik" data-reveal style={{ "--reveal-delay": "60ms" } as React.CSSProperties}>
              Sözleşmeye yazdığımız dört taahhüt
            </h2>
          </div>
          <p className="lead" data-reveal style={{ "--reveal-delay": "140ms" } as React.CSSProperties}>
            Temizlik işinde farkı yaratan, işin kendisinden çok takibi. Bu yüzden vaatlerimizi sözlü
            bırakmıyor, sözleşmenin ekine koyuyoruz.
          </p>
        </header>

        <div className="guarantees">
          {guarantees.map((item, index) => {
            const Icon = icons[index] ?? ShieldIcon;
            return (
              <article
                className="guarantee"
                key={item.title}
                data-reveal
                style={{ "--reveal-delay": `${index * 90}ms` } as React.CSSProperties}
              >
                <span className="guarantee__icon" aria-hidden="true">
                  <Icon />
                </span>
                <h3 className="guarantee__title">{item.title}</h3>
                <p className="guarantee__text">{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>

      <div className="gallery" aria-label="Çalışma alanlarımızdan kareler">
        <div className="gallery__track">
          {[0, 1].map((copy) => (
            <div className="gallery__group" key={copy} aria-hidden={copy === 1 ? true : undefined}>
              {gallery.map((item, index) => (
                <figure className="gallery__item" key={`${copy}-${index}`}>
                  <Image src={item.image} alt={copy === 0 ? item.alt : ""} placeholder="blur" sizes="330px" />
                </figure>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

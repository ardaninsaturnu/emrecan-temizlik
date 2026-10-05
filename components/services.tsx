import Image from "next/image";

import { ArrowRightIcon, PhoneIcon } from "@/components/icons";
import { services } from "@/lib/content";
import { site } from "@/lib/site";

export function Services() {
  return (
    <section className="section section--paper" id="hizmetler" aria-labelledby="hizmetler-baslik">
      <div className="container">
        <header className="section-head section-head--split">
          <div>
            <p className="eyebrow" data-reveal>
              Hizmetler
            </p>
            <h2 id="hizmetler-baslik" data-reveal style={{ "--reveal-delay": "60ms" } as React.CSSProperties}>
              Altı ana başlıkta, kapsamı önceden yazılmış temizlik
            </h2>
          </div>
          <p className="lead" data-reveal style={{ "--reveal-delay": "140ms" } as React.CSSProperties}>
            Her hizmetin iş kalemleri, sıklığı ve kullanılan ekipmanı teklifin ekinde yer alır. Böylece
            hangi işin ne zaman yapılacağı ilk günden bellidir.
          </p>
        </header>

        <div className="services-grid">
          {services.map((service, index) => (
            <article
              className={`service-card${index === 0 ? " service-card--wide" : ""}`}
              key={service.slug}
              data-reveal
              style={{ "--reveal-delay": `${(index % 3) * 90}ms` } as React.CSSProperties}
            >
              <figure className="service-card__media">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  placeholder="blur"
                  sizes={index === 0 ? "(min-width: 1000px) 40vw, 100vw" : "(min-width: 1000px) 30vw, 100vw"}
                />
                <figcaption className="service-card__frequency">{service.frequency}</figcaption>
              </figure>

              <div className="service-card__body">
                <p className="service-card__index">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="service-card__title">{service.title}</h3>
                <p className="service-card__summary">{service.summary}</p>

                {index === 0 && (
                  <ul className="service-card__list">
                    {service.scope.slice(0, 4).map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}

                <a className="service-card__link" href="#kapsam">
                  Kapsamı gör
                  <ArrowRightIcon width={16} height={16} />
                  <span className="service-card__overlay" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}

          <aside className="service-cta" data-reveal>
            <div>
              <h3 className="service-cta__title">Aradığınız iş listede yok mu?</h3>
              <p className="service-cta__text">
                Kreş, klinik, depo, showroom ve şantiye ofisleri gibi özel alanlar için ayrı program
                hazırlıyoruz. Bir telefon yeterli; alanı görüp kapsamı birlikte belirleyelim.
              </p>
            </div>
            <div className="service-cta__actions">
              <a className="button button--light" href="#teklif">
                Keşif talep et
                <ArrowRightIcon className="button__icon" width={17} height={17} />
              </a>
              <a className="button button--outline-light" href={site.phone.href}>
                <PhoneIcon width={17} height={17} />
                {site.phone.display}
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

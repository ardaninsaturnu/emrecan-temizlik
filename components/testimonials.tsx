import { testimonials } from "@/lib/content";

export function Testimonials() {
  return (
    <section className="section section--paper" id="referanslar" aria-labelledby="referanslar-baslik">
      <div className="container">
        <header className="section-head section-head--split">
          <div>
            <p className="eyebrow" data-reveal>
              Referanslar
            </p>
            <h2 id="referanslar-baslik" data-reveal style={{ "--reveal-delay": "60ms" } as React.CSSProperties}>
              Uzun süredir birlikte çalıştığımız yerler
            </h2>
          </div>
          <p className="lead" data-reveal style={{ "--reveal-delay": "140ms" } as React.CSSProperties}>
            Müşterilerimizin çoğu ilk sözleşmesini yeniliyor. Aşağıdaki yorumlar site yöneticileri, ofis
            sorumluları ve ev sahiplerinden derlendi.
          </p>
        </header>

        <div className="testimonials">
          {testimonials.map((item, index) => (
            <figure
              className="testimonial"
              key={item.name}
              data-reveal
              style={{ "--reveal-delay": `${index * 100}ms` } as React.CSSProperties}
            >
              <span className="testimonial__mark" aria-hidden="true">
                &ldquo;
              </span>
              <blockquote className="testimonial__quote">
                <p>{item.quote}</p>
              </blockquote>
              <figcaption className="testimonial__author">
                <span className="testimonial__name">{item.name}</span>
                <span className="testimonial__role">{item.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

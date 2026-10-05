import { MailIcon, PhoneIcon, PinIcon } from "@/components/icons";
import { districts } from "@/lib/content";
import { site } from "@/lib/site";

export function Coverage() {
  return (
    <section className="section section--pine" id="bolgeler" aria-labelledby="bolgeler-baslik">
      <div className="container coverage">
        <div>
          <p className="eyebrow" data-reveal>
            Hizmet bölgeleri
          </p>
          <h2 id="bolgeler-baslik" data-reveal style={{ "--reveal-delay": "60ms" } as React.CSSProperties}>
            İstanbul Avrupa Yakası&apos;nda sahadayız
          </h2>
          <p
            className="lead"
            data-reveal
            style={{ "--reveal-delay": "120ms", marginBlock: "1.25rem 2rem" } as React.CSSProperties}
          >
            Ekiplerimiz {site.address.district} merkezli çalışıyor; aşağıdaki ilçelere aynı gün içinde keşfe
            çıkabiliyoruz. Anadolu Yakası&apos;ndaki kurumsal projeleri ayrıca değerlendiriyoruz.
          </p>

          <ul className="district-list" data-reveal style={{ "--reveal-delay": "180ms" } as React.CSSProperties}>
            {districts.map((district) => (
              <li key={district}>{district}</li>
            ))}
          </ul>
        </div>

        <div className="info-card" data-reveal style={{ "--reveal-delay": "220ms" } as React.CSSProperties}>
          <div className="info-card__row">
            <span className="info-card__label">
              <PinIcon width={14} height={14} style={{ display: "inline", verticalAlign: "-2px" }} /> Merkez
            </span>
            <address className="info-card__value" style={{ fontStyle: "normal" }}>
              {site.address.street}
              <br />
              {site.address.district} / {site.address.city}
            </address>
          </div>

          <hr className="rule" />

          <div className="info-card__row">
            <span className="info-card__label">
              <PhoneIcon width={14} height={14} style={{ display: "inline", verticalAlign: "-2px" }} /> Telefon
            </span>
            <p className="info-card__value">
              <a href={site.phone.href}>{site.phone.display}</a>
              <br />
              <a href={site.whatsapp.href} target="_blank" rel="noopener noreferrer">
                WhatsApp: {site.whatsapp.display}
              </a>
            </p>
          </div>

          <hr className="rule" />

          <div className="info-card__row">
            <span className="info-card__label">
              <MailIcon width={14} height={14} style={{ display: "inline", verticalAlign: "-2px" }} /> E-posta
            </span>
            <p className="info-card__value">
              <a href={site.email.href}>{site.email.display}</a>
            </p>
          </div>

          <hr className="rule" />

          <div className="info-card__row">
            <span className="info-card__label">Çalışma saatleri</span>
            <div className="hours-list">
              {site.hours.map((entry) => (
                <div key={entry.label}>
                  <span>{entry.label}</span>
                  <span>{entry.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

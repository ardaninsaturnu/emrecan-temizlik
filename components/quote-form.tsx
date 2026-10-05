"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";

import { submitQuote } from "@/app/actions";
import { ArrowRightIcon, CheckIcon } from "@/components/icons";
import { districts, services } from "@/lib/content";
import { initialQuoteState } from "@/lib/quote";
import { site } from "@/lib/site";

const points = [
  "Keşif ve teklif ücretsizdir, bağlayıcı değildir.",
  "Teklifte metrekare, sıklık ve iş kalemleri tek tek yazılır.",
  "Personel, malzeme ve makine hizmet bedeline dahildir.",
  "Sözleşme öncesi deneme temizliği yapılabilir.",
];

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className="button button--primary button--block" disabled={pending}>
      {pending ? "Gönderiliyor…" : "Teklif iste"}
      {!pending && <ArrowRightIcon className="button__icon" width={17} height={17} />}
    </button>
  );
}

export function QuoteForm() {
  const [state, formAction] = useActionState(submitQuote, initialQuoteState);

  return (
    <section className="section section--pine" id="teklif" aria-labelledby="teklif-baslik">
      <div className="container quote">
        <div className="quote__aside">
          <p className="eyebrow" data-reveal>
            Ücretsiz keşif
          </p>
          <h2 id="teklif-baslik" data-reveal style={{ "--reveal-delay": "60ms" } as React.CSSProperties}>
            Bir günde teklif, bir haftada düzen
          </h2>
          <p className="lead" data-reveal style={{ "--reveal-delay": "120ms" } as React.CSSProperties}>
            Formu doldurun ya da doğrudan arayın. Alanı görmeden fiyat vermiyoruz; keşif sonrası kapsamı
            yazılı olarak iletiyoruz.
          </p>

          <ul className="quote__points" data-reveal style={{ "--reveal-delay": "180ms" } as React.CSSProperties}>
            {points.map((point) => (
              <li key={point}>
                <CheckIcon />
                {point}
              </li>
            ))}
          </ul>

          <p className="info-card__value" data-reveal style={{ "--reveal-delay": "240ms" } as React.CSSProperties}>
            Telefonla hemen: <a href={site.phone.href}>{site.phone.display}</a>
          </p>
        </div>

        <form className="form" action={formAction} noValidate data-reveal>
          <div className="form__row form__row--two">
            <div className="field">
              <label className="field__label" htmlFor="name">
                Ad Soyad
              </label>
              <input
                className="field__control"
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Örn. Ayşe Yılmaz"
                required
                aria-invalid={Boolean(state.errors.name)}
                aria-describedby={state.errors.name ? "name-error" : undefined}
              />
              {state.errors.name && (
                <p className="field__error" id="name-error">
                  {state.errors.name}
                </p>
              )}
            </div>

            <div className="field">
              <label className="field__label" htmlFor="phone">
                Telefon
              </label>
              <input
                className="field__control"
                id="phone"
                name="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                placeholder="0532 000 00 00"
                required
                aria-invalid={Boolean(state.errors.phone)}
                aria-describedby={state.errors.phone ? "phone-error" : undefined}
              />
              {state.errors.phone && (
                <p className="field__error" id="phone-error">
                  {state.errors.phone}
                </p>
              )}
            </div>
          </div>

          <div className="form__row form__row--two">
            <div className="field">
              <label className="field__label" htmlFor="service">
                Hizmet
              </label>
              <select
                className="field__control"
                id="service"
                name="service"
                defaultValue=""
                required
                aria-invalid={Boolean(state.errors.service)}
                aria-describedby={state.errors.service ? "service-error" : undefined}
              >
                <option value="" disabled>
                  Hizmet seçin
                </option>
                {services.map((service) => (
                  <option value={service.slug} key={service.slug}>
                    {service.title}
                  </option>
                ))}
              </select>
              {state.errors.service && (
                <p className="field__error" id="service-error">
                  {state.errors.service}
                </p>
              )}
            </div>

            <div className="field">
              <label className="field__label" htmlFor="district">
                İlçe
              </label>
              <select className="field__control" id="district" name="district" defaultValue="">
                <option value="">Seçiniz (opsiyonel)</option>
                {districts.map((district) => (
                  <option value={district} key={district}>
                    {district}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="field">
            <label className="field__label" htmlFor="message">
              Kısaca ihtiyacınız
            </label>
            <textarea
              className="field__control"
              id="message"
              name="message"
              placeholder="Örn. 6 katlı, 24 daireli apartman. Haftada 3 gün merdiven ve ortak alan temizliği."
            />
          </div>

          <div className="field">
            <label className="consent" htmlFor="consent">
              <input id="consent" name="consent" type="checkbox" aria-invalid={Boolean(state.errors.consent)} />
              <span>
                Kişisel verilerimin teklif süreci kapsamında işlenmesine ilişkin{" "}
                <a href="/gizlilik-politikasi">aydınlatma metnini</a> okudum, onaylıyorum.
              </span>
            </label>
            {state.errors.consent && <p className="field__error">{state.errors.consent}</p>}
          </div>

          {state.status !== "idle" && (
            <p
              className="form__status"
              data-tone={state.status === "error" ? "error" : "success"}
              role="status"
              aria-live="polite"
            >
              {state.status === "success" && <CheckIcon />}
              {state.message}
            </p>
          )}

          <SubmitButton />

          <p className="form__note">
            Formu göndermek istemiyorsanız {site.whatsapp.display} numarasına WhatsApp&apos;tan da
            yazabilirsiniz.
          </p>
        </form>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";

import { faq } from "@/lib/content";
import { site } from "@/lib/site";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section" id="sss" aria-labelledby="sss-baslik">
      <div className="container faq">
        <div className="faq__intro">
          <p className="eyebrow" data-reveal>
            Sık sorulanlar
          </p>
          <h2 id="sss-baslik" data-reveal style={{ "--reveal-delay": "60ms" } as React.CSSProperties}>
            Teklif almadan önce merak edilenler
          </h2>
          <p
            className="lead"
            data-reveal
            style={{ "--reveal-delay": "120ms", marginTop: "1.25rem" } as React.CSSProperties}
          >
            Aradığınız yanıt burada yoksa {site.phone.display} numaralı telefondan bize doğrudan
            ulaşabilirsiniz.
          </p>
        </div>

        <div className="faq__list" data-reveal>
          {faq.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div className="faq__item" key={item.question}>
                <h3>
                  <button
                    type="button"
                    className="faq__question"
                    aria-expanded={isOpen}
                    aria-controls={`sss-cevap-${index}`}
                    id={`sss-soru-${index}`}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    {item.question}
                    <span className="faq__icon" aria-hidden="true" />
                  </button>
                </h3>
                <div
                  className="faq__answer"
                  id={`sss-cevap-${index}`}
                  role="region"
                  aria-labelledby={`sss-soru-${index}`}
                  data-open={isOpen}
                >
                  <div>
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

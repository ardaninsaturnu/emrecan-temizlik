import { ScopeTabs } from "@/components/scope-tabs";
import { steps } from "@/lib/content";

export function Process() {
  return (
    <section className="section" id="surec" aria-labelledby="surec-baslik">
      <div className="container">
        <header className="section-head section-head--split">
          <div>
            <p className="eyebrow" data-reveal>
              Çalışma biçimi
            </p>
            <h2 id="surec-baslik" data-reveal style={{ "--reveal-delay": "60ms" } as React.CSSProperties}>
              Dört adım, sürprizsiz bir süreç
            </h2>
          </div>
          <p className="lead" data-reveal style={{ "--reveal-delay": "140ms" } as React.CSSProperties}>
            Keşiften aylık rapora kadar her aşamanın sorumlusu bellidir. İşin ne zaman, kim tarafından ve
            hangi kontrol listesiyle yapıldığını her zaman görebilirsiniz.
          </p>
        </header>

        <div className="process">
          <span className="process__rail" data-process-rail aria-hidden="true" />
          <ol className="process__steps">
            {steps.map((step, index) => (
              <li
                className="step"
                key={step.title}
                data-reveal
                style={{ "--reveal-delay": `${index * 110}ms` } as React.CSSProperties}
              >
                <h3 className="step__title">{step.title}</h3>
                <p className="step__text">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export function Scope() {
  return (
    <section className="section section--paper" id="kapsam" aria-labelledby="kapsam-baslik">
      <div className="container">
        <header className="section-head section-head--split">
          <div>
            <p className="eyebrow" data-reveal>
              Kapsam
            </p>
            <h2 id="kapsam-baslik" data-reveal style={{ "--reveal-delay": "60ms" } as React.CSSProperties}>
              Hangi işin dahil olduğunu seçerek görün
            </h2>
          </div>
          <p className="lead" data-reveal style={{ "--reveal-delay": "140ms" } as React.CSSProperties}>
            Aşağıdaki kalemler standart sözleşmemizde yer alır. İhtiyacınıza göre kalem ekleyip
            çıkarabilir, sıklığı birlikte belirleyebiliriz.
          </p>
        </header>

        <div data-reveal>
          <ScopeTabs />
        </div>
      </div>
    </section>
  );
}

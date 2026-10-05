const items = [
  "Apartman ve site sözleşmeleri",
  "Mesai dışı ofis temizliği",
  "İnşaat sonrası teslim",
  "İple erişimli cephe",
  "ULV dezenfeksiyon",
  "Periyodik ev bakımı",
  "Aylık yazılı rapor",
];

/** Hizmet başlıklarını yavaşça kaydıran güven şeridi. */
export function TrustMarquee() {
  return (
    <div className="marquee" aria-label="Hizmet başlıkları">
      <div className="marquee__track">
        {[0, 1].map((copy) => (
          <div className="marquee__group" key={copy} aria-hidden={copy === 1 ? true : undefined}>
            {items.map((item) => (
              <span className="marquee__item" key={`${copy}-${item}`}>
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

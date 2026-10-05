import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container container--narrow" style={{ textAlign: "center" }}>
        <p className="eyebrow" style={{ justifyContent: "center" }}>
          404
        </p>
        <h1 style={{ fontSize: "var(--text-xl)", marginBlock: "1rem" }}>Aradığınız sayfa bulunamadı</h1>
        <p className="lead" style={{ marginInline: "auto" }}>
          Bağlantı taşınmış veya hiç var olmamış olabilir. Ana sayfadan hizmetlerimize göz atabilir ya da
          doğrudan teklif isteyebilirsiniz.
        </p>
        <p style={{ marginTop: "2rem" }}>
          <Link className="button button--primary" href="/">
            Ana sayfaya dön
          </Link>
        </p>
      </div>
    </section>
  );
}

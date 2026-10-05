/** JSON-LD verisini sayfaya gömer. Okunabilir kalması için 2 boşlukla biçimlendirilir. */
export function JsonLd({ data, id }: { data: object; id: string }) {
  return (
    <script
      type="application/ld+json"
      id={id}
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data, null, 2) }}
    />
  );
}

# Emre Can Temizlik — Kurumsal Landing

İstanbul merkezli bir temizlik firması için hazırlanmış tek sayfalık Next.js tanıtım sitesi.
Sunucu tarafında üretilen (statik) HTML, semantik etiketler, yapısal veri (JSON-LD) ve
kaydırmayla açılan hafif animasyonlar içerir.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # üretim derlemesi
npm run start   # üretim sunucusu
npm run lint
```

## Teknik özet

| Konu | Seçim |
| --- | --- |
| Çatı | Next.js 16 (App Router), React 19, TypeScript |
| Stil | Sade CSS + tasarım değişkenleri (`app/styles/`), CSS modülü veya yardımcı sınıf çerçevesi yok |
| Yazı tipleri | `next/font` ile Fraunces (başlıklar) + Inter (metin) |
| Görseller | `next/image` ile yerel dosyalar, otomatik AVIF/WebP ve blur ön izleme |
| Form | React Server Action (`app/actions.ts`) + `useActionState` |

CSS sınıfları elle yazıldığı için üretilen HTML okunabilir kalır:
`<article class="service-card">`, `<section class="section section--pine" id="bolgeler">` gibi.

## Dosya düzeni

```
app/
  layout.tsx             Meta etiketleri, yazı tipleri, iskelet, işletme JSON-LD'si
  page.tsx               Ana sayfa bölümlerinin sırası + SSS JSON-LD'si
  actions.ts             Teklif formunun sunucu tarafı doğrulaması
  globals.css            styles/ altındaki dosyaları toplar
  styles/                tokens, base, layout, ui, header, hero, services, proof, contact
  sitemap.ts robots.ts manifest.ts opengraph-image.tsx
  gizlilik-politikasi/   KVKK aydınlatma metni
components/              Bölümler (hero, services, process, faq, quote-form, ...)
lib/
  site.ts                İletişim bilgileri, adres, menü  ← önce burayı düzenleyin
  content.ts             Hizmetler, adımlar, sayılar, referanslar, SSS, bölgeler
  schema.ts              JSON-LD üretimi (site.ts ve content.ts'ten beslenir)
public/gorseller/        Fotoğraflar
```

## Canlıya almadan önce yapılacaklar

1. **`lib/site.ts`** — telefon, WhatsApp, e-posta, adres, koordinat, sosyal medya ve
   `url` alanını gerçek bilgilerle değiştirin. Bu dosya hem arayüzü hem JSON-LD'yi hem de
   sitemap'i besler.
2. **`lib/content.ts`** — hizmet açıklamaları, sayılar (12 yıl, 430+ bina …) ve referans
   yorumları örnek metindir. Gerçek verilerle değiştirin; olmayan referansı yayımlamayın.
3. **Fotoğraflar** — `public/gorseller/` içindeki kareler Unsplash'ten alınmış geçici
   görsellerdir. Firmanın kendi sahadan çekilmiş fotoğraflarıyla değiştirin (aynı dosya
   adlarını korursanız kod değişikliği gerekmez). `lib/content.ts` içindeki `imageAlt`
   metinlerini de güncelleyin.
4. **Form bağlantısı** — `app/actions.ts` şu an yalnızca doğrulama yapıyor. Doğrulama
   sonrasında e-posta (Resend, Postmark), CRM veya veritabanı kaydı ekleyin.
5. **Google Search Console** — alan adı doğrulandıktan sonra `app/layout.tsx` içindeki
   `metadata` nesnesine `verification` alanı eklenebilir.

## SEO ve erişilebilirlik

- Tüm meta etiketleri Next.js `Metadata` API'si ile tek yerden yönetilir; `metadataBase`
  sayesinde kanonik ve Open Graph adresleri mutlak üretilir.
- `lib/schema.ts` iki JSON-LD bloğu üretir: `LocalBusiness` + `WebSite` + `WebPage` grafiği
  ve `FAQPage`. Yapısal veri sayfadaki metinle aynı kaynaktan beslendiği için birbirinden
  ayrışmaz.
- `sitemap.xml`, `robots.txt`, `manifest.webmanifest` ve 1200×630 paylaşım görseli derleme
  anında üretilir.
- Başlık hiyerarşisi tek `h1` ile kurulur; her bölüm `aria-labelledby` ile başlığına bağlıdır.
- Menü, sekmeler ve akordeon klavyeyle kullanılabilir; `prefers-reduced-motion` açıkken tüm
  animasyonlar kapanır.
- JavaScript devreye giremezse üç saniye sonra animasyon bayrağı düşer ve içerik normal
  biçimde görünür.

## Not

Sitede kullanılan istatistikler ve referans yorumları tasarımın nasıl görüneceğini göstermek
için yazılmış örnek içeriklerdir. Yayına almadan önce gerçek verilerle değiştirilmelidir.

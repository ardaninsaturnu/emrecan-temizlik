/**
 * Kurum bilgileri tek kaynaktan yönetilir.
 * Buradaki değerler hem arayüzde hem de yapısal veride (JSON-LD),
 * sitemap'te ve meta etiketlerinde kullanılır.
 *
 * ! Canlıya almadan önce: telefon, e-posta, adres, koordinat ve
 *   sosyal medya bağlantılarını gerçek bilgilerle değiştirin.
 */

export const site = {
  name: "Emre Can Temizlik",
  legalName: "Emre Can Temizlik Hizmetleri",
  tagline: "Apartman, ofis ve ev temizliğinde İstanbul'un düzenli ekibi",
  description:
    "Emre Can Temizlik; İstanbul'da apartman ve site, ofis, ev, inşaat sonrası, cam–cephe temizliği ile dezenfeksiyon hizmetleri sunar. Sigortalı ekip, sabit program, yazılı teklif.",
  url: "https://www.emrecantemizlik.com",
  locale: "tr_TR",
  foundingYear: 2013,

  phone: {
    display: "0850 000 00 00",
    href: "tel:+908500000000",
    e164: "+908500000000",
  },
  whatsapp: {
    display: "0532 000 00 00",
    // wa.me numarası ülke kodu ile, boşluksuz yazılır.
    href: "https://wa.me/905320000000?text=Merhaba%2C%20temizlik%20hizmeti%20i%C3%A7in%20fiyat%20teklifi%20almak%20istiyorum.",
  },
  email: {
    display: "info@emrecantemizlik.com",
    href: "mailto:info@emrecantemizlik.com",
  },

  address: {
    street: "Merkez Mahallesi, Örnek Caddesi No: 00",
    district: "Kağıthane",
    city: "İstanbul",
    postalCode: "34400",
    country: "TR",
    countryName: "Türkiye",
  },
  geo: { latitude: 41.0766, longitude: 28.9724 },

  hours: [
    { label: "Pazartesi – Cuma", value: "08:00 – 19:00" },
    { label: "Cumartesi", value: "09:00 – 17:00" },
    { label: "Pazar", value: "Acil taleplere açık" },
  ],

  social: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    linkedin: "https://linkedin.com/",
  },
} as const;

export const nav = [
  { label: "Hizmetler", href: "#hizmetler" },
  { label: "Çalışma Biçimi", href: "#surec" },
  { label: "Kapsam", href: "#kapsam" },
  { label: "Referanslar", href: "#referanslar" },
  { label: "Bölgeler", href: "#bolgeler" },
  { label: "S.S.S.", href: "#sss" },
] as const;

export const absoluteUrl = (path = "/") => new URL(path, site.url).toString();

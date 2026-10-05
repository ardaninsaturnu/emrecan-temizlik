import type { StaticImageData } from "next/image";

import apartmanImage from "@/public/gorseller/hizmet-apartman-site.jpg";
import ofisImage from "@/public/gorseller/hizmet-ofis.jpg";
import insaatImage from "@/public/gorseller/hizmet-insaat-sonrasi.jpg";
import cepheImage from "@/public/gorseller/hizmet-cam-cephe.jpg";
import evImage from "@/public/gorseller/hizmet-ev.jpg";
import dezenfeksiyonImage from "@/public/gorseller/hizmet-dezenfeksiyon.jpg";

import galeriOfis from "@/public/gorseller/galeri-ofis-koridor.jpg";
import galeriOtel from "@/public/gorseller/galeri-otel-odasi.jpg";
import galeriBanyo from "@/public/gorseller/galeri-banyo.jpg";
import galeriDaire from "@/public/gorseller/galeri-daire.jpg";
import galeriHali from "@/public/gorseller/galeri-hali.jpg";
import galeriCamasirhane from "@/public/gorseller/galeri-camasirhane.jpg";
import galeriToplanti from "@/public/gorseller/galeri-toplanti.jpg";

export type Service = {
  slug: string;
  title: string;
  summary: string;
  image: StaticImageData;
  imageAlt: string;
  /** Tekliflerde yer alan iş kalemleri. Kapsam sekmelerinde de kullanılır. */
  scope: string[];
  frequency: string;
};

export const services: Service[] = [
  {
    slug: "apartman-site-temizligi",
    title: "Apartman ve Site Temizliği",
    summary:
      "Merdiven, hol, asansör ve otopark gibi ortak alanların haftalık programla, aynı ekiple sürdürülen bakımı.",
    image: apartmanImage,
    imageAlt: "Akşam saatlerinde aydınlatılmış modern bir sitenin ortak yaşam alanı",
    frequency: "Haftada 2–6 gün",
    scope: [
      "Merdiven, sahanlık ve korkulukların ıslak temizliği",
      "Asansör kabini, ayna ve butonların dezenfeksiyonu",
      "Bina girişi, hol ve cam kapıların günlük bakımı",
      "Çöp toplama, konteyner yıkama ve koku kontrolü",
      "Otopark, sığınak ve teknik hacimlerin periyodik temizliği",
      "Yönetime aylık çalışma raporu",
    ],
  },
  {
    slug: "ofis-temizligi",
    title: "Ofis ve İş Yeri Temizliği",
    summary:
      "Mesai öncesi veya sonrası çalışan, iş akışınızı bölmeyen düzenli ofis temizliği ve sarf malzeme takibi.",
    image: ofisImage,
    imageAlt: "Geniş pencereli, oturma gruplarıyla düzenlenmiş modern ofis alanı",
    frequency: "Her gün veya haftalık",
    scope: [
      "Çalışma masaları, toplantı odaları ve ortak alanlar",
      "Mutfak, çay ocağı ve buzdolabı düzeni",
      "Islak hacimlerin hijyeni ve sarf malzeme ikmali",
      "Zemin tipine göre cilalama ve koruyucu bakım",
      "Elektronik cihazların uygun ürünlerle temizliği",
      "Mesai dışı çalışma ve anahtar teslim düzeni",
    ],
  },
  {
    slug: "insaat-sonrasi-temizlik",
    title: "İnşaat Sonrası Temizlik",
    summary:
      "Kaba temizlikten ince detaya; moloz tozu, boya ve silikon kalıntılarından arındırılmış teslime hazır alan.",
    image: insaatImage,
    imageAlt: "Kaba yapı aşaması tamamlanmış bir inşaat alanında çalışan ekip",
    frequency: "Tek seferlik proje",
    scope: [
      "Kaba moloz ve ambalaj atıklarının tahliyesi",
      "Endüstriyel makineyle toz ve çimento kalıntısı alımı",
      "Boya, silikon, alçı ve etiket kalıntılarının sökümü",
      "Doğrama, pencere ve denizliklerin detaylı temizliği",
      "Zemin tipine göre kimyasal seçimi ve parlatma",
      "Teslim öncesi son kontrol turu",
    ],
  },
  {
    slug: "cam-cephe-temizligi",
    title: "Cam ve Cephe Temizliği",
    summary:
      "Yüksek katlarda iple erişim ve platform yöntemleriyle, saf su sistemiyle iz bırakmayan cephe temizliği.",
    image: cepheImage,
    imageAlt: "Aşağıdan yukarı bakış açısıyla cam cepheli gökdelenler",
    frequency: "3–6 ayda bir",
    scope: [
      "İple erişim sertifikalı ekiple yüksek cephe çalışması",
      "Saf su (deiyonize) sistemiyle leke bırakmayan durulama",
      "Alüminyum doğrama ve fuga temizliği",
      "Kompozit ve granit cephelerde yüzeye uygun kimyasal",
      "Çatı, saçak ve yağmur oluğu kontrolü",
      "Çalışma öncesi iş güvenliği planı",
    ],
  },
  {
    slug: "ev-temizligi",
    title: "Ev Temizliği",
    summary:
      "Haftalık düzenli bakım ya da taşınma öncesi detaylı temizlik; her defasında aynı, tanıdığınız ekip.",
    image: evImage,
    imageAlt: "Gün ışığı alan, sade ve düzenli bir oturma odası",
    frequency: "Haftalık / 15 günde bir",
    scope: [
      "Oda, salon ve koridorlarda toz alma ve süpürme",
      "Mutfak dolapları, ankastre yüzeyler ve davlumbaz",
      "Banyo ve tuvalette kireç, küf ve mantar müdahalesi",
      "Cam, pervaz ve kapı arkası detayları",
      "Yatak odası düzeni ve tekstil havalandırma",
      "Taşınma öncesi / sonrası detaylı paket",
    ],
  },
  {
    slug: "dezenfeksiyon",
    title: "Dezenfeksiyon ve Hijyen",
    summary:
      "Sağlık Bakanlığı ruhsatlı ürünlerle ULV sisleme; okul, kreş, ofis ve ortak alanlar için belgeli uygulama.",
    image: dezenfeksiyonImage,
    imageAlt: "Eldivenli bir el ile yüzey dezenfektanı uygulaması",
    frequency: "Aylık veya talebe göre",
    scope: [
      "ULV cihazıyla hacim dezenfeksiyonu",
      "Yüksek temas yüzeylerinde nokta uygulama",
      "Sağlık Bakanlığı ruhsatlı, kokusuz ürünler",
      "Uygulama sonrası bekleme süresi bilgilendirmesi",
      "Klima ve havalandırma menfezleri",
      "Uygulama belgesi ve ürün güvenlik formu teslimi",
    ],
  },
];

export const steps = [
  {
    title: "Keşif",
    description:
      "Alanı yerinde görüyor, metrekare ve kullanım yoğunluğunu ölçüyoruz. Keşif ücretsizdir ve 24 saat içinde planlanır.",
  },
  {
    title: "Yazılı Teklif",
    description:
      "Hangi işin hangi sıklıkla yapılacağı kalem kalem yazılır. Sürprizli ek ücret çıkmaz; teklif 30 gün geçerlidir.",
  },
  {
    title: "Sabit Ekip",
    description:
      "İşe aynı personel gelir. Ekip lideri belirlenir, yedek personel önceden tanıştırılır, malzeme bizden.",
  },
  {
    title: "Kontrol ve Rapor",
    description:
      "Her ziyaret kontrol listesiyle kapanır. Yönetici ya da ofis sorumlusuna aylık özet rapor iletilir.",
  },
];

export const stats = [
  { value: 12, suffix: "", label: "yıllık saha deneyimi" },
  { value: 430, suffix: "+", label: "düzenli sözleşmeli bina" },
  { value: 38, suffix: "", label: "sigortalı ekip üyesi" },
  { value: 98, suffix: "%", label: "sözleşme yenileme oranı" },
];

export const guarantees = [
  {
    title: "Sigortalı ve kayıtlı personel",
    description:
      "Sahadaki herkes SGK'lı, adli sicil kaydı kontrol edilmiş ve iş güvenliği eğitimi almış personeldir.",
  },
  {
    title: "Değişmeyen ekip",
    description:
      "Binanızı tanıyan aynı ekip gelir. Personel değişiminde önceden bilgi verilir, devir birlikte yapılır.",
  },
  {
    title: "Malzeme ve ekipman bizden",
    description:
      "Profesyonel makineler, mikrofiber sistem ve yüzeye uygun kimyasallar hizmet bedeline dahildir.",
  },
  {
    title: "Yazılı memnuniyet taahhüdü",
    description:
      "Eksik gördüğünüz iş 24 saat içinde ücretsiz tekrarlanır. Taahhüt sözleşmenin ekinde yer alır.",
  },
];

export const testimonials = [
  {
    quote:
      "Üç yıldır aynı ekiple çalışıyoruz. 84 daireli bir siteyiz; en büyük farkı denetimde gördük, her ay elimize rapor geliyor.",
    name: "Selim A.",
    role: "Site Yöneticisi, Beylikdüzü",
  },
  {
    quote:
      "Ofisimiz 07.30'da açılıyor ve biz geldiğimizde her şey hazır oluyor. Sarf malzemeleri de onlar takip ettiği için iş yükümüz azaldı.",
    name: "Deniz K.",
    role: "İdari İşler Müdürü, Şişli",
  },
  {
    quote:
      "Tadilat sonrası daireyi teslim alacaktık, her yer çimento tozuydu. İki günde toz zerresi kalmadı, kiracı aynı hafta taşındı.",
    name: "Nihan T.",
    role: "Ev Sahibi, Bahçelievler",
  },
];

export const districts = [
  "Beşiktaş",
  "Şişli",
  "Sarıyer",
  "Kağıthane",
  "Beyoğlu",
  "Eyüpsultan",
  "Bakırköy",
  "Bahçelievler",
  "Başakşehir",
  "Zeytinburnu",
  "Avcılar",
  "Küçükçekmece",
  "Beylikdüzü",
  "Büyükçekmece",
  "Esenyurt",
  "Arnavutköy",
];

export const faq = [
  {
    question: "Fiyat teklifi nasıl belirleniyor?",
    answer:
      "Fiyat; metrekare, kat sayısı, çalışma sıklığı ve işin kapsamına göre hesaplanır. Ücretsiz keşif sonrası tüm kalemlerin yazılı olduğu bir teklif iletilir. Teklifte yer almayan hiçbir kalem faturaya yansıtılmaz.",
  },
  {
    question: "Temizlik malzemesini biz mi temin ediyoruz?",
    answer:
      "Hayır. Makine, ekipman ve kimyasalların tamamı bize aittir ve hizmet bedeline dahildir. Talep etmeniz hâlinde kullandığımız ürünlerin güvenlik bilgi formlarını paylaşırız.",
  },
  {
    question: "Personeliniz sigortalı mı, referans kontrolü yapıyor musunuz?",
    answer:
      "Sahadaki tüm personel SGK kaydı yapılmış, adli sicil belgesi alınmış ve iş güvenliği eğitimi tamamlanmış kişilerdir. Sözleşme ekinde personel listesi ve sigorta belgeleri paylaşılır.",
  },
  {
    question: "Hangi gün ve saatlerde çalışıyorsunuz?",
    answer:
      "Hafta içi 08.00–19.00, cumartesi 09.00–17.00 arasında çalışıyoruz. Ofisler için mesai öncesi veya sonrası; siteler için sakinleri rahatsız etmeyen saat aralıkları planlanabilir. Acil taleplerde pazar günü de ekip çıkarıyoruz.",
  },
  {
    question: "Tek seferlik temizlik yaptırabilir miyim?",
    answer:
      "Evet. Taşınma öncesi ve sonrası, tadilat sonrası ya da bayram öncesi detaylı temizlik gibi tek seferlik işler alıyoruz. Bu işlerde de kapsam yazılı olarak belirlenir.",
  },
  {
    question: "İstanbul'un hangi bölgelerine hizmet veriyorsunuz?",
    answer:
      "Ağırlıklı olarak Avrupa Yakası'nda; Beşiktaş, Şişli, Sarıyer, Kağıthane, Bakırköy, Başakşehir, Beylikdüzü ve çevre ilçelerde hizmet veriyoruz. Anadolu Yakası'ndaki kurumsal projeler için ayrıca değerlendirme yapıyoruz.",
  },
];

export const gallery = [
  { image: galeriOfis, alt: "Cam bölmeli ofis koridorunda parlatılmış zemin" },
  { image: galeriDaire, alt: "Temizlik sonrası düzenlenmiş aydınlık bir daire" },
  { image: galeriBanyo, alt: "Kireç ve leke kalmamış modern banyo" },
  { image: galeriOtel, alt: "Konaklama tesisinde hazırlanmış oda" },
  { image: galeriHali, alt: "Endüstriyel makineyle halı temizliği" },
  { image: galeriCamasirhane, alt: "Düzenlenmiş çamaşır ve ev bakım alanı" },
  { image: galeriToplanti, alt: "Toplantıya hazırlanmış kurumsal ortak alan" },
];

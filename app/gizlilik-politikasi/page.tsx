import type { Metadata } from "next";
import Link from "next/link";

import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Aydınlatma Metni ve Gizlilik Politikası",
  description:
    "Emre Can Temizlik olarak teklif formu ve iletişim kanalları üzerinden paylaştığınız kişisel verileri nasıl işlediğimizi açıklıyoruz.",
  alternates: { canonical: "/gizlilik-politikasi" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <section className="section">
      <div className="container container--narrow">
        <p className="eyebrow">KVKK</p>
        <h1 style={{ fontSize: "var(--text-xl)", marginBlock: "0.75rem 2rem" }}>
          Aydınlatma Metni ve Gizlilik Politikası
        </h1>

        <div className="prose">
          <p>
            Bu metin, {site.legalName} (&ldquo;Şirket&rdquo;) tarafından 6698 sayılı Kişisel Verilerin
            Korunması Kanunu kapsamında veri sorumlusu sıfatıyla hazırlanmıştır. Web sitemizdeki teklif
            formunu doldurduğunuzda ya da bizimle telefon, e-posta veya WhatsApp üzerinden iletişime
            geçtiğinizde paylaştığınız verilerin nasıl işlendiğini açıklar.
          </p>

          <h2>Hangi verileri topluyoruz?</h2>
          <ul>
            <li>Ad ve soyad</li>
            <li>Telefon numarası ve varsa e-posta adresi</li>
            <li>Hizmet almak istediğiniz ilçe ve adres bilgisi</li>
            <li>Talebinize ilişkin serbest metin açıklamaları</li>
          </ul>

          <h2>İşleme amacı ve hukuki sebebi</h2>
          <p>
            Verileriniz yalnızca keşif planlaması, fiyat teklifi hazırlanması, sözleşme süreçlerinin
            yürütülmesi ve hizmet sonrası iletişim amacıyla işlenir. Hukuki sebep, sözleşmenin kurulması ve
            ifası ile şirketin meşru menfaatidir.
          </p>

          <h2>Saklama süresi</h2>
          <p>
            Teklif aşamasında kalan talepler en fazla 12 ay, sözleşmeye dönüşen kayıtlar ise ilgili mevzuatın
            öngördüğü süre boyunca saklanır. Sürenin sonunda veriler silinir veya anonim hâle getirilir.
          </p>

          <h2>Üçüncü taraflarla paylaşım</h2>
          <p>
            Verileriniz pazarlama amacıyla üçüncü kişilere satılmaz veya devredilmez. Yalnızca yasal
            yükümlülükler kapsamında yetkili kurumlarla ve hizmetin ifası için çalıştığımız tedarikçilerle
            sınırlı biçimde paylaşılabilir.
          </p>

          <h2>Haklarınız</h2>
          <p>
            Kanunun 11. maddesi uyarınca verilerinize erişme, düzeltilmesini veya silinmesini isteme ve
            işlemeye itiraz etme haklarına sahipsiniz. Taleplerinizi{" "}
            <a href={site.email.href}>{site.email.display}</a> adresine iletebilirsiniz.
          </p>

          <h2>Çerezler</h2>
          <p>
            Sitemiz, ziyaretçi davranışını izleyen pazarlama çerezleri kullanmaz. Yalnızca sayfanın düzgün
            çalışması için gereken teknik veriler tarayıcınızda tutulabilir.
          </p>

          <p>
            <Link href="/">← Ana sayfaya dön</Link>
          </p>
        </div>
      </div>
    </section>
  );
}

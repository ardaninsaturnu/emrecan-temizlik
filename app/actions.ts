"use server";

import { services } from "@/lib/content";
import type { QuoteFormState } from "@/lib/quote";

const digitsOnly = (value: string) => value.replace(/\D/g, "");

/**
 * Teklif formunu doğrular.
 *
 * ! Yapılacak: doğrulama geçtikten sonra kaydı e-posta (Resend, Postmark vb.),
 *   CRM ya da veritabanına iletin. Şu an yalnızca sunucu tarafında doğrulanıyor.
 */
export async function submitQuote(
  _previousState: QuoteFormState,
  formData: FormData,
): Promise<QuoteFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const service = String(formData.get("service") ?? "").trim();
  const consent = formData.get("consent") === "on";

  const errors: QuoteFormState["errors"] = {};

  if (name.length < 2) {
    errors.name = "Lütfen adınızı ve soyadınızı yazın.";
  }

  const phoneDigits = digitsOnly(phone);
  if (phoneDigits.length < 10 || phoneDigits.length > 13) {
    errors.phone = "Telefon numarasını başında 0 olacak şekilde yazın.";
  }

  if (!services.some((item) => item.slug === service)) {
    errors.service = "Hizmet seçin.";
  }

  if (!consent) {
    errors.consent = "Devam etmek için aydınlatma metnini onaylayın.";
  }

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Formda eksik alanlar var. Lütfen kontrol edin.",
      errors,
    };
  }

  return {
    status: "success",
    message: `Teşekkürler ${name.split(" ")[0]}. Talebiniz bize ulaştı, en geç bir iş günü içinde arıyoruz.`,
    errors: {},
  };
}

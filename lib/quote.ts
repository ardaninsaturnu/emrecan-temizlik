/** Teklif formunun sunucu ile paylaştığı durum biçimi. */
export type QuoteFormState = {
  status: "idle" | "success" | "error";
  message: string;
  errors: Partial<Record<"name" | "phone" | "service" | "consent", string>>;
};

export const initialQuoteState: QuoteFormState = {
  status: "idle",
  message: "",
  errors: {},
};

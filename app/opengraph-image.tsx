import { ImageResponse } from "next/og";

import { site } from "@/lib/site";

export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Paylaşım görselini derleme anında üretir; ayrıca bir görsel dosyası tutmaya gerek kalmaz. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          backgroundColor: "#0e3a2e",
          color: "#f4f2ec",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "18px", fontSize: 30, letterSpacing: 6 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              backgroundColor: "#f4f2ec",
              color: "#0e3a2e",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 32,
            }}
          >
            EC
          </div>
          EMRE CAN TEMİZLİK
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 76, lineHeight: 1.05, maxWidth: 900 }}>
            Binanız her sabah ilk günkü gibi karşılasın.
          </div>
          <div style={{ fontSize: 30, color: "#7fb99c", maxWidth: 820 }}>
            Apartman · Ofis · Ev · İnşaat sonrası · Cephe · Dezenfeksiyon
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 26,
            borderTop: "1px solid rgba(244,242,236,0.25)",
            paddingTop: 28,
          }}
        >
          <span>İstanbul Avrupa Yakası</span>
          <span>{site.phone.display}</span>
        </div>
      </div>
    ),
    size,
  );
}

import { ImageResponse } from "next/og";

export const alt = "NerveStack Solutions: Engineering high-performance software systems";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
          padding: "80px",
          backgroundColor: "#0b0707",
          backgroundImage:
            "radial-gradient(ellipse 70% 60% at 50% -10%, rgba(220,38,38,0.35), transparent 60%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 22,
              height: 22,
              borderRadius: 999,
              backgroundColor: "#DC2626",
              boxShadow: "0 0 40px 8px rgba(220,38,38,0.6)",
            }}
          />
          <div style={{ fontSize: 30, color: "#FAFAFA", letterSpacing: 4, fontWeight: 700 }}>
            NERVESTACK
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 62,
              lineHeight: 1.15,
              color: "#FAFAFA",
              fontWeight: 700,
              maxWidth: 900,
            }}
          >
            Engineering high-performance software systems.
          </div>
          <div style={{ fontSize: 26, color: "#A1A1AA", maxWidth: 820 }}>
            Web · Mobile · AI Integrations · n8n Automation
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}

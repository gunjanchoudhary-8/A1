import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const size = {
  width: 1200,
  height: 630,
};

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
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f8faf8",
          backgroundImage:
            "radial-gradient(circle at 18% 20%, rgba(76,175,80,0.18), transparent 45%), radial-gradient(circle at 85% 80%, rgba(124,179,66,0.18), transparent 45%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 96,
            height: 96,
            borderRadius: "9999px",
            backgroundColor: "#4caf50",
          }}
        >
          <svg
            width="52"
            height="52"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ffffff"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
            <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
          </svg>
        </div>

        <div
          style={{
            marginTop: 36,
            display: "flex",
            fontSize: 64,
            fontWeight: 600,
            color: "#1f2937",
            letterSpacing: "-0.02em",
          }}
        >
          A1 Nursery
        </div>

        <div
          style={{
            marginTop: 18,
            display: "flex",
            fontSize: 28,
            color: "#1f293799",
            textAlign: "center",
          }}
        >
          {siteConfig.description.split(".")[0]}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

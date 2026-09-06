import Link from "next/link";
import type { ReactNode } from "react";

// Shared visual shell for the login/signup pages, matching the landing palette.
export function AuthShell({
  title,
  subtitle,
  children,
  footer,
}: {
  title: string;
  subtitle: string;
  children: ReactNode;
  footer: ReactNode;
}) {
  return (
    <div
      className="min-h-full flex items-center justify-center px-6 py-16"
      style={{ backgroundColor: "#F8F4EC", color: "#202927" }}
    >
      <div className="w-full max-w-md">
        <Link
          href="/"
          className="flex items-center gap-2 justify-center mb-8"
          style={{ textDecoration: "none" }}
        >
          <div
            className="flex items-center justify-center rounded-md"
            style={{ width: 28, height: 28, backgroundColor: "#D86F52" }}
          >
            <span style={{ color: "white", fontSize: 11, fontWeight: 800 }}>A</span>
          </div>
          <span style={{ color: "#123E3A", fontWeight: 700, fontSize: 18 }}>
            Asaan Fund
          </span>
        </Link>

        <div
          style={{
            backgroundColor: "white",
            border: "1px solid #D4CEBE",
            borderRadius: 14,
            padding: 32,
          }}
        >
          <h1 style={{ fontSize: 24, fontWeight: 800, letterSpacing: "-0.02em" }}>
            {title}
          </h1>
          <p style={{ fontSize: 14, color: "#5C6B64", marginTop: 6, marginBottom: 24 }}>
            {subtitle}
          </p>
          {children}
        </div>

        <p
          style={{
            textAlign: "center",
            fontSize: 14,
            color: "#5C6B64",
            marginTop: 20,
          }}
        >
          {footer}
        </p>
      </div>
    </div>
  );
}

// Shared field/label/error styling used by both forms.
export const fieldStyle: React.CSSProperties = {
  width: "100%",
  padding: "10px 12px",
  borderRadius: 8,
  border: "1px solid #D4CEBE",
  fontSize: 14,
  backgroundColor: "#FBFAF6",
  outline: "none",
};

export const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: 13,
  fontWeight: 600,
  marginBottom: 6,
};

export const errorTextStyle: React.CSSProperties = {
  color: "#B23B2E",
  fontSize: 12,
  marginTop: 4,
};

export const submitStyle: React.CSSProperties = {
  width: "100%",
  backgroundColor: "#D86F52",
  color: "white",
  fontWeight: 600,
  fontSize: 14,
  padding: "11px 18px",
  borderRadius: 8,
  border: "none",
  cursor: "pointer",
  marginTop: 4,
};

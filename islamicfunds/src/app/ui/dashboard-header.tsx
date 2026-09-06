import Link from "next/link";
import { LogoutButton } from "./logout-button";
import type { Role } from "@/lib/definitions";

const ROLE_LABEL: Record<Role, string> = {
  investor: "Investor",
  business: "Business",
  admin: "Company Admin",
};

export function DashboardHeader({ name, role }: { name: string; role: Role }) {
  return (
    <header style={{ backgroundColor: "var(--accent)", position: "sticky", top: 0, zIndex: 50 }}>
      <nav
        className="max-w-6xl mx-auto px-6 flex items-center justify-between"
        style={{ minHeight: 140 }}
      >
        <Link href="/" className="flex items-center gap-2" style={{ textDecoration: "none" }}>
          <img src="/logo/gold-logo.png" alt="Asaan Fund" style={{ height: 140, width: "auto", display: "block" }} />
        </Link>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex flex-col items-end">
            <span style={{ color: "var(--accent-foreground)", fontSize: 13, fontWeight: 600 }}>{name}</span>
            <span
              style={{
                color: "var(--secondary)",
                fontSize: 11,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}
            >
              {ROLE_LABEL[role]}
            </span>
          </div>
          <LogoutButton />
        </div>
      </nav>
    </header>
  );
}

export function DashboardShell({
  name,
  role,
  children,
}: {
  name: string;
  role: Role;
  children: React.ReactNode;
}) {
  return (
    <div style={{ minHeight: "100%", backgroundColor: "var(--background)", color: "var(--foreground)" }}>
      <DashboardHeader name={name} role={role} />
      <main className="max-w-6xl mx-auto px-6 py-10">{children}</main>
    </div>
  );
}

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
    <header style={{ backgroundColor: "#123E3A", position: "sticky", top: 0, zIndex: 50 }}>
      <nav
        className="max-w-6xl mx-auto px-6 flex items-center justify-between"
        style={{ height: 64 }}
      >
        <Link href="/" className="flex items-center gap-2" style={{ textDecoration: "none" }}>
          <div
            className="flex items-center justify-center rounded-md"
            style={{ width: 28, height: 28, backgroundColor: "#D86F52" }}
          >
            <span style={{ color: "white", fontSize: 11, fontWeight: 800 }}>A</span>
          </div>
          <span style={{ color: "#F8F4EC", fontWeight: 700, fontSize: 18 }}>Amal Fund</span>
        </Link>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex flex-col items-end">
            <span style={{ color: "#F8F4EC", fontSize: 13, fontWeight: 600 }}>{name}</span>
            <span
              style={{
                color: "#DDE8E2",
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
    <div style={{ minHeight: "100%", backgroundColor: "#F8F4EC", color: "#202927" }}>
      <DashboardHeader name={name} role={role} />
      <main className="max-w-6xl mx-auto px-6 py-10">{children}</main>
    </div>
  );
}

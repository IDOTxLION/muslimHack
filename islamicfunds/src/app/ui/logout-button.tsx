import { logout } from "@/app/actions/auth";

// Server-action-backed logout. Rendered inside dashboards.
export function LogoutButton() {
  return (
    <form action={logout}>
      <button
        type="submit"
        style={{
          border: "1px solid color-mix(in srgb, var(--secondary) 40%, transparent)",
          color: "var(--secondary)",
          backgroundColor: "transparent",
          fontSize: 13,
          fontWeight: 600,
          padding: "7px 14px",
          borderRadius: 8,
          cursor: "pointer",
        }}
      >
        Sign out
      </button>
    </form>
  );
}

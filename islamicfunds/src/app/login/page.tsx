import Link from "next/link";
import type { Metadata } from "next";
import { AuthShell } from "@/app/ui/auth-shell";
import { LoginForm } from "@/app/ui/login-form";

export const metadata: Metadata = { title: "Sign in · Asaan Fund" };

export default function LoginPage() {
  return (
    <AuthShell
      title="Welcome back"
      subtitle="Sign in to your Asaan Fund account."
      footer={
        <>
          Don&apos;t have an account?{" "}
          <Link href="/signup" style={{ color: "#123E3A", fontWeight: 600 }}>
            Sign up
          </Link>
        </>
      }
    >
      <LoginForm />
    </AuthShell>
  );
}

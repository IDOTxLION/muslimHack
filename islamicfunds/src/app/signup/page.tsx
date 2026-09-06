import Link from "next/link";
import type { Metadata } from "next";
import { AuthShell } from "@/app/ui/auth-shell";
import { SignupForm } from "@/app/ui/signup-form";

export const metadata: Metadata = { title: "Create account · Asaan Fund" };

export default function SignupPage() {
  return (
    <AuthShell
      title="Create your account"
      subtitle="Join Asaan Fund as an investor or list your business."
      footer={
        <>
          Already have an account?{" "}
          <Link href="/login" style={{ color: "#123E3A", fontWeight: 600 }}>
            Sign in
          </Link>
        </>
      }
    >
      <SignupForm />
    </AuthShell>
  );
}

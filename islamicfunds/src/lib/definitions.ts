import * as z from "zod";

// The three account types on the platform.
// - investor: browses verified businesses and invests
// - business: lists a business and manages its campaign + financials
// - admin: the company; verifies businesses and oversees the platform
export const ROLES = ["investor", "business", "admin"] as const;
export type Role = (typeof ROLES)[number];

// Business verification lifecycle, controlled by admins.
export const BUSINESS_STATUSES = [
  "pending",
  "verified",
  "live",
  "funded",
  "rejected",
] as const;
export type BusinessStatus = (typeof BUSINESS_STATUSES)[number];

const password = z
  .string()
  .min(8, { error: "Be at least 8 characters long" })
  .regex(/[a-zA-Z]/, { error: "Contain at least one letter." })
  .regex(/[0-9]/, { error: "Contain at least one number." });

// Public sign-up is only allowed for investors and businesses.
// Admin accounts are provisioned via the seed script, never self-serve.
export const SignupFormSchema = z.object({
  name: z.string().min(2, { error: "Name must be at least 2 characters." }).trim(),
  email: z.email({ error: "Please enter a valid email." }).trim(),
  password,
  role: z.enum(["investor", "business"], {
    error: "Choose whether you're investing or listing a business.",
  }),
});

export const LoginFormSchema = z.object({
  email: z.email({ error: "Please enter a valid email." }).trim(),
  password: z.string().min(1, { error: "Password is required." }),
});

export type FormState =
  | {
      errors?: {
        name?: string[];
        email?: string[];
        password?: string[];
        role?: string[];
      };
      message?: string;
    }
  | undefined;

// The minimal, non-sensitive payload stored in the signed session cookie.
export type SessionPayload = {
  userId: string;
  role: Role;
  expiresAt: Date;
};

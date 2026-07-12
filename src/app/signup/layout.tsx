import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Create your Restore account and begin your performance journey.",
};

export default function SignupLayout({ children }: { children: React.ReactNode }) {
  return children;
}

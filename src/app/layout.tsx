import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ConditionalPageLoader } from "@/components/ConditionalPageLoader";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Restore | Elite Performance Coaching",
    template: "%s | Restore",
  },
  description:
    "Elite physiotherapy, performance coaching, and life optimization for ambitious executives, athletes, and high performers. Live mentorship, courses, and premium books.",
  keywords: [
    "performance coaching",
    "elite physiotherapy",
    "executive health",
    "athlete recovery",
    "personalised mentorship",
    "Restore coaching",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${outfit.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col font-sans antialiased">
        <ConditionalPageLoader />
        <Navbar />
        <main className="flex-1 page-enter">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

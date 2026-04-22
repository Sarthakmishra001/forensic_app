import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";
import Navbar from "@/components/layout/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PsyTrack AI — Mental Health Intelligence",
  description: "Premium AI-powered mental health tracking and analytics platform. Monitor mood, sleep, stress levels and get personalized psychological insights.",
  keywords: ["mental health", "AI", "mood tracking", "sleep", "stress", "psychology"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full font-[family-name:var(--font-inter)] antialiased">
        {/* Animated gradient mesh background */}
        <div className="gradient-bg" />

        {/* Layout shell */}
        <Sidebar />
        <div className="lg:pl-[260px] relative z-10 min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1 px-4 py-6 sm:px-6 lg:px-8 max-w-[1400px] mx-auto w-full">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

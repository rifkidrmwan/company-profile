import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Company Profile",
  description: "Company profile website with blog + auth",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-white text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-100">
        <Navbar />
        <div className="mx-auto max-w-6xl px-4 py-10">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
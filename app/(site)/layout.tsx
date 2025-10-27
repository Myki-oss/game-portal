// /app/(site)/layout.tsx

import { Inter } from "next/font/google";
// GARIS BAWAH INI YANG PALING PENTING
import "@/styles/globals.css"; 
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "GamePortal",
  description: "Portal game online terlengkap",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${inter.variable} scroll-smooth`}>
      <body
        className={`${inter.className} bg-neutral-950 text-white`}
        suppressHydrationWarning={true}
      >
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
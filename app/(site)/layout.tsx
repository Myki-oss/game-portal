import { Inter } from "next/font/google";
import "@/styles/globals.css"; 
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: "AJAIB88 – Portal Game Online Terlengkap dan Terbaru di Indonesia",
    template: "%s | AJAIB88",
  },
  description:
    "Temukan ribuan game online terpopuler dari provider terbaik. Mainkan slot, live casino, poker, sabung, crash game, e-sports, dan banyak lagi.",
  metadataBase: new URL("https://www.ajaib88.id"),
  alternates: {
    canonical: "https://www.ajaib88.id",
  },
  openGraph: {
    title: "AJAIB88 – Portal Game Online Terlengkap dan Terbaru di Indonesia",
    description:
      "Mainkan game slot RTP tinggi, live casino, taruhan e-sports, poker, dan sabung. Provider resmi seperti Pragmatic Play, PG Soft, Habanero, dll.",
    url: "https://www.ajaib88.id",
    siteName: "AJAIB88",
    images: [
      {
        url: "https://www.ajaib88.id/images/og-image.jpg", // pastikan file ini ada /public/images/og-image.jpg
        width: 1200,
        height: 630,
        alt: "AJAIB88 Game Portal",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${inter.variable} scroll-smooth`}>
      <head>
        {/* Tambahkan AMP HTML di sini */}
        <link rel="amphtml" href="https://ajaib88pasti.bio/ajaibid/amp.html" />
      </head>
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

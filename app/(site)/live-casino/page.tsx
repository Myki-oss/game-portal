import { Metadata } from "next";
import liveCasinoData from "@/data/games-live-casino.json";
import LiveCasinoPageClient from "@/components/LiveCasinoPageClient";

// --- SEO Metadata Generator (Berjalan di Server) ---
export const metadata: Metadata = {
  title: liveCasinoData.seo.title,
  description: liveCasinoData.seo.description,
  openGraph: {
    title: liveCasinoData.seo.title,
    description: liveCasinoData.seo.description,
    type: "website",
    url: "https://gameportal.example.com/live-casino",
    images: [
      {
        url: "https://gameportal.example.com/images/og-live-casino.jpg",
        width: 1200,
        height: 630,
        alt: "Live Casino",
      },
    ],
  },
};

// --- Page Component (Server Component) ---
// PERHATIKAN BAGIAN INI: export default function...
export default function LiveCasinoPage() {
  // Tugasnya hanya memanggil komponen client
  return <LiveCasinoPageClient />;
}
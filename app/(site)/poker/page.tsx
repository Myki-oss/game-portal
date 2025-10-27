import { Metadata } from "next";
import pokerData from "@/data/games-poker.json";
import PokerPageClient from "@/components/PokerPageClient";

// --- SEO Metadata Generator (Berjalan di Server) ---
export const metadata: Metadata = {
  title: pokerData.seo.title,
  description: pokerData.seo.description,
  openGraph: {
    title: pokerData.seo.title,
    description: pokerData.seo.description,
    type: "website",
    url: "https://gameportal.example.com/poker",
    images: [
      {
        url: "https://gameportal.example.com/images/og-poker.jpg",
        width: 1200,
        height: 630,
        alt: "Poker Games",
      },
    ],
  },
};

// --- Page Component (Server Component) ---
// INI ADALAH BAGIAN YANG PALING PENTING!
export default function PokerPage() {
  return <PokerPageClient />;
}
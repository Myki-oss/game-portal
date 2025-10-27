import { Metadata } from "next";
import arcadeData from "@/data/games-arcade.json";
import ArcadePageClient from "@/components/ArcadePageClient";

// --- SEO Metadata Generator (Berjalan di Server) ---
export const metadata: Metadata = {
  title: arcadeData.seo.title,
  description: arcadeData.seo.description,
  openGraph: {
    title: arcadeData.seo.title,
    description: arcadeData.seo.description,
    type: "website",
    url: "https://gameportal.example.com/arcade",
    images: [
      {
        url: "https://gameportal.example.com/images/og-arcade.jpg",
        width: 1200,
        height: 630,
        alt: "Arcade Games",
      },
    ],
  },
};

// --- Page Component (Server Component) ---
// INI ADALAH BAGIAN YANG PALING PENTING!
export default function ArcadePage() {
  return <ArcadePageClient />;
}
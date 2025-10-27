import { Metadata } from "next";
import raceData from "@/data/games-race.json";
import RacePageClient from "@/components/RacePageClient";

// --- SEO Metadata Generator (Berjalan di Server) ---
export const metadata: Metadata = {
  title: raceData.seo.title,
  description: raceData.seo.description,
  openGraph: {
    title: raceData.seo.title,
    description: raceData.seo.description,
    type: "website",
    url: "https://gameportal.example.com/race",
    images: [
      {
        url: "https://gameportal.example.com/images/og-race.jpg",
        width: 1200,
        height: 630,
        alt: "Race Betting",
      },
    ],
  },
};

// --- Page Component (Server Component) ---
// INI ADALAH BAGIAN YANG PALING PENTING!
export default function RacePage() {
  return <RacePageClient />;
}
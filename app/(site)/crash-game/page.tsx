import { Metadata } from "next";
import crashGameData from "@/data/games-crash-game.json";
import CrashGamePageClient from "@/components/CrashGamePageClient";

// --- SEO Metadata Generator (Berjalan di Server) ---
export const metadata: Metadata = {
  title: crashGameData.seo.title,
  description: crashGameData.seo.description,
  openGraph: {
    title: crashGameData.seo.title,
    description: crashGameData.seo.description,
    type: "website",
    url: "https://gameportal.example.com/crash-game",
    images: [
      {
        url: "https://gameportal.example.com/images/og-crash-game.jpg",
        width: 1200,
        height: 630,
        alt: "Crash Games",
      },
    ],
  },
};

// --- Page Component (Server Component) ---
// INI ADALAH BAGIAN YANG PALING PENTING!
export default function CrashGamePage() {
  return <CrashGamePageClient />;
}
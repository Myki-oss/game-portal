import { Metadata } from "next";
import eSportsData from "@/data/games-e-sports.json";
import ESportsPageClient from "@/components/ESportsPageClient";

// --- SEO Metadata Generator (Berjalan di Server) ---
export const metadata: Metadata = {
  title: eSportsData.seo.title,
  description: eSportsData.seo.description,
  openGraph: {
    title: eSportsData.seo.title,
    description: eSportsData.seo.description,
    type: "website",
    url: "https://gameportal.example.com/e-sports",
    images: [
      {
        url: "https://gameportal.example.com/images/og-e-sports.jpg",
        width: 1200,
        height: 630,
        alt: "E-Sports Betting",
      },
    ],
  },
};

// --- Page Component (Server Component) ---
// INI ADALAH BAGIAN YANG PALING PENTING!
export default function ESportsPage() {
  return <ESportsPageClient />;
}
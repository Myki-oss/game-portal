import { Metadata } from "next";
import olahragaData from "@/data/games-olahraga.json";
import OlahragaPageClient from "@/components/OlahragaPageClient";

// --- SEO Metadata Generator (Berjalan di Server) ---
export const metadata: Metadata = {
  title: olahragaData.seo.title,
  description: olahragaData.seo.description,
  openGraph: {
    title: olahragaData.seo.title,
    description: olahragaData.seo.description,
    type: "website",
    url: "https://gameportal.example.com/olahraga",
    images: [
      {
        url: "https://gameportal.example.com/images/og-olahraga.jpg",
        width: 1200,
        height: 630,
        alt: "Sports Betting",
      },
    ],
  },
};

// --- Page Component (Server Component) ---
// INI ADALAH BAGIAN YANG PALING PENTING!
export default function OlahragaPage() {
  return <OlahragaPageClient />;
}
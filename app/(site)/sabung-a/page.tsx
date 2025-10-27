import { Metadata } from "next";
import sabungAData from "@/data/games-sabung-a.json";
import SabungAPageClient from "@/components/SabungAPageClient";

// --- SEO Metadata Generator (Berjalan di Server) ---
export const metadata: Metadata = {
  title: sabungAData.seo.title,
  description: sabungAData.seo.description,
  openGraph: {
    title: sabungAData.seo.title,
    description: sabungAData.seo.description,
    type: "website",
    url: "https://gameportal.example.com/sabung-a",
    images: [
      {
        url: "https://gameportal.example.com/images/og-sabung-a.jpg",
        width: 1200,
        height: 630,
        alt: "Sabung Ayam",
      },
    ],
  },
};

// --- Page Component (Server Component) ---
// INI ADALAH BAGIAN TERPENTING!
export default function SabungAPage() {
  return <SabungAPageClient />;
}
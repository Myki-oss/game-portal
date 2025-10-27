import { Metadata } from "next";
import slotsData from "@/data/games-slots.json";
import SlotsPageClient from "@/components/SlotsPageClient";

// --- SEO Metadata Generator (Berjalan di Server) ---
export const metadata: Metadata = {
  title: slotsData.seo.title,
  description: slotsData.seo.description,
  openGraph: {
    title: slotsData.seo.title,
    description: slotsData.seo.description,
    type: "website",
    url: "https://gameportal.example.com/slots",
    images: [
      {
        url: "https://gameportal.example.com/images/og-slots.jpg",
        width: 1200,
        height: 630,
        alt: "Slot Games",
      },
    ],
  },
};

// --- Page Component (Server Component) ---
export default function SlotsPage() {
  // Tugasnya hanya memanggil komponen client
  return <SlotsPageClient />;
}
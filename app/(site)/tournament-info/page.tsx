import { Metadata } from "next";
import data from "@/data/tournament-info.json";
import TournamentInfoPageClient from "@/components/TournamentInfoPageClient";

export const metadata: Metadata = {
  title: data.seo.title,
  description: data.seo.description,
  openGraph: {
    title: data.seo.title,
    description: data.seo.description,
    type: "website",
    url: "https://www.ajaib88.id/tournament-info",
    images: [
      {
        url: "https://gameportal.example.com/images/og-tournament.jpg",
        width: 1200,
        height: 630,
        alt: "Summer Championship 2024",
      }
    ]
  }
};

export default function TournamentInfoPage() {
  return <TournamentInfoPageClient />;
}

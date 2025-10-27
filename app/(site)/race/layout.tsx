import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Race | GamePortal",
  description: "Balapan virtual dan odds cepat.",
  openGraph: {
    title: "Race | GamePortal",
    description: "Balapan virtual dan odds cepat.",
    type: "website",
    url: "https://www.ajaib88.id/race",
    images: [
      {
        url: "https://gameportal.example.com/images/og-race.jpg",
        width: 1200,
        height: 630,
        alt: "Race Odds",
      },
    ],
  },
};

export default function RaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Live Casino | GamePortal",
  description: "Live dealer,实时 meja asli.",
  openGraph: {
    title: "Live Casino | GamePortal",
    description: "Live dealer, meja asli, interaksi langsung.",
    type: "website",
    url: "https://gameportal.example.com/live-casino",
    images: [
      {
        url: "https://gameportal.example.com/images/og-livecasino.jpg",
        width: 1200,
        height: 630,
        alt: "Live Casino",
      },
    ],
  },
};

export default function LiveCasinoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

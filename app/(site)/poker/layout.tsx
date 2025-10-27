import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Poker | GamePortal",
  description: "Meja poker online dan turnamen.",
  openGraph: {
    title: "Poker | GamePortal",
    description: "Meja poker online dan turnamen.",
    type: "website",
    url: "https://gameportal.example.com/poker",
    images: [
      {
        url: "https://gameportal.example.com/images/og-poker.jpg",
        width: 1200,
        height: 630,
        alt: "Poker Lobby",
      },
    ],
  },
};

export default function PokerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

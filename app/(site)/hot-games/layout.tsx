import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hot Games | GamePortal",
  description: "Game yang lagi panas, lagi sering menang.",
  openGraph: {
    title: "Hot Games | GamePortal",
    description: "Game yang lagi panas, lagi sering menang.",
    type: "website",
    url: "https://gameportal.example.com/hot-games",
    images: [
      {
        url: "https://gameportal.example.com/images/og-hot.jpg",
        width: 1200,
        height: 630,
        alt: "Hot Games",
      },
    ],
  },
};

export default function HotGamesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

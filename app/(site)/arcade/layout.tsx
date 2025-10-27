import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arcade Games | GamePortal",
  description: "Main game arcade populer, terbaru, dan seru.",
  openGraph: {
    title: "Arcade Games | GamePortal",
    description: "Main game arcade populer, terbaru, dan seru.",
    type: "website",
    url: "https://www.ajaib88.id/arcade",
    images: [
      {
        url: "https://gameportal.example.com/images/og-arcade.jpg",
        width: 1200,
        height: 630,
        alt: "Arcade Games",
      },
    ],
  },
};

export default function ArcadeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

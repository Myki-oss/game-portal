import { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-Sports | GamePortal",
  description: "Pertandingan e-sports dan betting odds.",
  openGraph: {
    title: "E-Sports | GamePortal",
    description: "Pertandingan e-sports dan betting odds.",
    type: "website",
    url: "https://www.ajaib88.id/e-sports",
    images: [
      {
        url: "https://gameportal.example.com/images/og-esports.jpg",
        width: 1200,
        height: 630,
        alt: "E-Sports",
      },
    ],
  },
};

export default function ESportsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

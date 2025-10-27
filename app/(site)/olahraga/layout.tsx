import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Olahraga | GamePortal",
  description: "Taruhan olahraga dan skor langsung.",
  openGraph: {
    title: "Olahraga | GamePortal",
    description: "Taruhan olahraga dan skor langsung.",
    type: "website",
    url: "https://gameportal.example.com/olahraga",
    images: [
      {
        url: "https://gameportal.example.com/images/og-sports.jpg",
        width: 1200,
        height: 630,
        alt: "Sports Betting",
      },
    ],
  },
};

export default function OlahragaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

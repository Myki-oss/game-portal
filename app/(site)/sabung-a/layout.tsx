import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sabung A | GamePortal",
  description: "Arena sabung A.",
  openGraph: {
    title: "Sabung A | GamePortal",
        description: "Arena sabung A.",
    type: "website",
    url: "https://www.ajaib88.id/sabung-a",
    images: [
      {
        url: "https://gameportal.example.com/images/og-sabung.jpg",
        width: 1200,
        height: 630,
        alt: "Sabung",
      },
    ],
  },
};

export default function SabungALayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

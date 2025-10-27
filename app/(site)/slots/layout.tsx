import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Slots | GamePortal",
  description: "Slot gacor, RTP tinggi, gampang buyspin.",
  openGraph: {
    title: "Slots | GamePortal",
    description: "Slot gacor, RTP tinggi, gampang buyspin.",
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

export default function SlotsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

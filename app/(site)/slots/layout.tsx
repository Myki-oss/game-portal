import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Slots | GamePortal",
  description: "Slot gacor, RTP tinggi, gampang buyspin.",
  openGraph: {
    title: "Slots | GamePortal",
    description: "Slot gacor, RTP tinggi, gampang buyspin.",
    type: "website",
    url: "https://www.ajaib88.id/slots",
    images: [
      {
        url: "https://cdn.lumiax.io/2025/10/27/bannerme.jpg",
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

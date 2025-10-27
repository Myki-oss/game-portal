import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crash Game | GamePortal",
  description: "Main game crash multipliers realtime.",
  openGraph: {
    title: "Crash Game | GamePortal",
    description: "Main game crash multipliers realtime.",
    type: "website",
    url: "https://www.ajaib88.id/crash-game",
    images: [
      {
        url: "https://cdn.lumiax.io/2025/09/05/ajaib-88.jpg",
        width: 1200,
        height: 630,
        alt: "Crash Game Preview",
      },
    ],
  },
};

export default function CrashGameLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crash Game | GamePortal",
  description: "Main game crash multipliers realtime.",
  openGraph: {
    title: "Crash Game | GamePortal",
    description: "Main game crash multipliers realtime.",
    type: "website",
    url: "https://gameportal.example.com/crash-game",
    images: [
      {
        url: "https://gameportal.example.com/images/og-crash.jpg",
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

import { GameGrid } from "@/components/GameGrid";
import { ProviderStrip } from "@/components/ProviderStrip";
import { Badge } from "@/components/Badge";
import { getGamesByCategory, getProviders } from "@/lib/data";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "AJAIB88 – Portal Game Online Terlengkap dan Terbaru di Indonesia",
  description:
    "Temukan ribuan game online terpopuler dari provider terbaik. Mainkan slot, live casino, poker, sabung, crash game, e-sports, dan banyak lagi.",
  alternates: {
    canonical: "https://www.ajaib88.id",
  },
  openGraph: {
    title: "AJAIB88 – Portal Game Online Terlengkap dan Terbaru di Indonesia",
    description:
      "Temukan ribuan game online terpopuler dari provider terbaik. Mainkan slot, live casino, poker, sabung, crash game, e-sports, dan banyak lagi.",
    url: "https://www.ajaib88.id",
    siteName: "AJAIB88",
    images: [
      {
        url: "https://www.ajaib88.id/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AJAIB88 Game Portal",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },



export default function HomePage() {
  const hotGames = getGamesByCategory("hot-games", 6);
  const newGames = getGamesByCategory("slots", 6);
  const providers = getProviders();

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />
        <div className="relative h-[500px] w-full bg-neutral-800">
           <Image
			  src="/images/games/hero-banner.jpg"
			  alt="Game Tournament Banner"
			  fill
			  className="absolute inset-0 object-cover"
			/>
        </div>
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <Badge className="mb-4 bg-orange-600 text-white">TOURNAMENT</Badge>
              <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                Summer Championship 2024
              </h1>
              <p className="mb-6 text-lg text-neutral-200 md:text-xl">
                Bergabunglah dalam turnamen terbesar musim ini dengan total hadiah miliaran rupiah!
              </p>
              <div className="flex flex-wrap gap-4">
                <a
				  href="https://ajaib88love.click/daftarajb8"
				  target="_blank"
				  rel="noopener noreferrer"
				  className="rounded-lg bg-orange-600 px-6 py-3 font-medium text-white transition-colors hover:bg-orange-700"
				>
				  Daftar Sekarang
				</a>
                <a
                  href="/tournament-info"
                  className="rounded-lg border border-white/30 bg-white/10 px-6 py-3 font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                >
                  Info Lebih Lanjut
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Jackpot Ticker */}
      <section className="bg-neutral-900 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center overflow-hidden">
            <div className="flex-shrink-0 pr-4">
              <h2 className="text-lg font-bold text-orange-500">JACKPOT TERBESAR HARI INI</h2>
            </div>
            <div className="relative flex-1 overflow-hidden">
              <div className="flex whitespace-nowrap ticker-animation">
                {[
                  { game: "Gates of Olympus", amount: "Rp 12.456.789.012" },
                  { game: "Sweet Bonanza", amount: "Rp 8.234.567.890" },
                  { game: "Starlight Princess", amount: "Rp 6.789.012.345" },
                  { game: "Wild West Gold", amount: "Rp 5.123.456.789" },
                  { game: "Mahjong Ways 2", amount: "Rp 4.567.890.123" },
                ].map((jackpot, index) => (
                  <div key={index} className="mx-8 flex items-center">
                    <span className="mr-2 text-neutral-400">{jackpot.game}:</span>
                    <span className="font-bold text-green-400">{jackpot.amount}</span>
                  </div>
                ))}
                {/* Duplicate for seamless animation */}
                {[
                  { game: "Gates of Olympus", amount: "Rp 12.456.789.012" },
                  { game: "Sweet Bonanza", amount: "Rp 8.234.567.890" },
                  { game: "Starlight Princess", amount: "Rp 6.789.012.345" },
                  { game: "Wild West Gold", amount: "Rp 5.123.456.789" },
                  { game: "Mahjong Ways 2", amount: "Rp 4.567.890.123" },
                ].map((jackpot, index) => (
                  <div key={`duplicate-${index}`} className="mx-8 flex items-center">
                    <span className="mr-2 text-neutral-400">{jackpot.game}:</span>
                    <span className="font-bold text-green-400">{jackpot.amount}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hot Games Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white md:text-3xl">Hot Games</h2>
              <p className="mt-2 text-neutral-400">Game paling populer saat ini</p>
            </div>
            <a
              href="/hot-games"
              className="hidden items-center text-orange-500 transition-colors hover:text-orange-400 md:flex"
            >
              Lihat Semua
              <svg className="ml-1 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          <GameGrid games={hotGames} columns={3} />
          <div className="mt-6 text-center md:hidden">
            <a
              href="/hot-games"
              className="inline-flex items-center rounded-lg bg-orange-600 px-6 py-3 font-medium text-white transition-colors hover:bg-orange-700"
            >
              Lihat Semua
            </a>
          </div>
        </div>
      </section>

      {/* New Games Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white md:text-3xl">New Games</h2>
              <p className="mt-2 text-neutral-400">Game terbaru dari provider ternama</p>
            </div>
            <a
              href="/slots"
              className="hidden items-center text-orange-500 transition-colors hover:text-orange-400 md:flex"
            >
              Lihat Semua
              <svg className="ml-1 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          <GameGrid games={newGames} columns={3} />
          <div className="mt-6 text-center md:hidden">
            <a
              href="/slots"
              className="inline-flex items-center rounded-lg bg-orange-600 px-6 py-3 font-medium text-white transition-colors hover:bg-orange-700"
            >
              Lihat Semua
            </a>
          </div>
        </div>
      </section>

      {/* Provider Strip */}
      <ProviderStrip providers={providers} />

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl bg-gradient-to-r from-orange-600 to-red-600 p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
                Bergabung Sekarang dan Dapatkan Bonus 100%
              </h2>
              <p className="mb-8 text-lg text-white/90">
                Daftar sekarang dan dapatkan bonus deposit 100% untuk member baru. Syarat dan ketentuan berlaku.
              </p>
              <a
                href="https://ajaib88love.click/daftarajb8"
                className="inline-block rounded-lg bg-white px-8 py-3 font-bold text-orange-600 transition-transform hover:scale-105"
              >
                Daftar Sekarang
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
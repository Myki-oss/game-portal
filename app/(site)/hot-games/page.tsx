import { Metadata } from "next";
import { GameGrid } from "@/components/GameGrid";
import { getGamesByCategory } from "@/lib/data";
import hotGamesData from "@/data/games-hot.json";

export const metadata: Metadata = {
  title: hotGamesData.seo.title,
  description: hotGamesData.seo.description,
  openGraph: {
    title: hotGamesData.seo.title,
    description: hotGamesData.seo.description,
    type: "website",
    url: "https://gameportal.example.com/hot-games",
    images: [
      {
        url: "https://gameportal.example.com/images/og-hot-games.jpg",
        width: 1200,
        height: 630,
        alt: "Hot Games",
      },
    ],
  },
};

export default function HotGamesPage() {
  const games = getGamesByCategory("hot-games");

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white md:text-4xl">Hot Games</h1>
          <div className="mt-4 max-w-3xl text-neutral-300">
            <p>
              Temukan koleksi game paling populer dan diminati oleh pemain di seluruh Indonesia. 
              Game-game ini menawarkan pengalaman bermain yang seru dengan peluang menang yang tinggi 
              dan fitur bonus yang menggiurkan. Dari slot progresif dengan jackpot hingga ratusan juta 
              hingga game interaktif dengan tema menarik, semua bisa Anda temukan di kategori Hot Games.
            </p>
            <p className="mt-4">
              Setiap game di kategori ini telah terbukti memberikan hiburan maksimal dan peluang 
              kemenangan yang adil. Provider ternama seperti Pragmatic Play, PG Soft, dan Habanero 
              secara rutin memperbarui koleksi mereka dengan game-game inovatif yang menjadi 
              favorit para pemain. Jangan lewatkan kesempatan untuk mencoba game-game yang sedang 
              tren dan dapatkan keuntungan maksimal dari setiap sesi bermain Anda.
            </p>
          </div>
        </div>

        {/* Filters and Sort */}
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            <button className="rounded-lg bg-neutral-800 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-700">
              Semua Provider
            </button>
            <button className="rounded-lg bg-neutral-800 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-700">
              Pragmatic Play
            </button>
            <button className="rounded-lg bg-neutral-800 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-700">
              PG Soft
            </button>
            <button className="rounded-lg bg-neutral-800 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-700">
              Habanero
            </button>
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="sort" className="text-sm text-neutral-400">
              Urutkan:
            </label>
            <select
              id="sort"
              className="rounded-lg bg-neutral-800 px-4 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="popular">Populer</option>
              <option value="rtp">RTP Tertinggi</option>
              <option value="new">Terbaru</option>
              <option value="name">Nama A-Z</option>
            </select>
          </div>
        </div>

        {/* Games Grid */}
        <GameGrid games={games} columns={4} />

        {/* Pagination */}
        <div className="mt-12 flex justify-center">
          <nav className="flex items-center space-x-1">
            <button className="rounded-lg bg-neutral-800 p-2 text-neutral-400 transition-colors hover:bg-neutral-700 hover:text-white">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="rounded-lg bg-orange-600 px-4 py-2 text-sm font-medium text-white">1</button>
            <button className="rounded-lg bg-neutral-800 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-700">2</button>
            <button className="rounded-lg bg-neutral-800 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-700">3</button>
            <span className="px-2 text-neutral-500">...</span>
            <button className="rounded-lg bg-neutral-800 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-700">8</button>
            <button className="rounded-lg bg-neutral-800 p-2 text-neutral-400 transition-colors hover:bg-neutral-700 hover:text-white">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}
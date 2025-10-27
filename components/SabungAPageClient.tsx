"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { GameGrid } from "@/components/GameGrid";
import { getGamesByCategory, getProviders } from "@/lib/data";
import { Game } from "@/types";

export default function SabungAPageClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [sortedGames, setSortedGames] = useState<Game[]>([]);
  const [paginatedGames, setPaginatedGames] = useState<Game[]>([]);

  // Ganti dengan "sabung-a"
  const allGames = getGamesByCategory("sabung-a");
  const providers = getProviders();
  const gamesPerPage = 24;
  const currentPage = Number(searchParams.get("page")) || 1;

  useEffect(() => {
    const providerFilter = searchParams.get("provider");
    const sortFilter = searchParams.get("sort") || "popular";

    const filtered = allGames.filter((game) => {
      if (providerFilter && game.provider !== providerFilter) {
        return false;
      }
      return true;
    });

    const sorted = [...filtered].sort((a, b) => {
      switch (sortFilter) {
        case "rtp":
          return b.rtp - a.rtp;
        case "name":
          return a.name.localeCompare(b.name);
        case "new":
          return a.tags.includes("new") ? -1 : b.tags.includes("new") ? 1 : 0;
        case "popular":
        default:
          return a.tags.includes("popular") ? -1 : b.tags.includes("popular") ? 1 : 0;
      }
    });

    setSortedGames(sorted);
  }, [searchParams, allGames]);

  useEffect(() => {
    const paginated = sortedGames.slice(
      (currentPage - 1) * gamesPerPage,
      currentPage * gamesPerPage
    );
    setPaginatedGames(paginated);
  }, [sortedGames, currentPage]);

  const totalPages = Math.ceil(sortedGames.length / gamesPerPage);

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white md:text-4xl">Sabung Ayam Online</h1>
          <div className="mt-4 max-w-3xl text-neutral-300">
            <p>
              Merasakan adrenalin pertandingan sabung ayam langsung dari arena terpercaya. Nikmati streaming HD real-time dari pertandingan-pertandingan seru dengan odds transparan dan adil. Pasang taruhan pada ayam jagoan pilihan Anda dan saksikan kemenangan terjadi di depan mata Anda.
            </p>
            <p className="mt-4">
              Platform kami menampilkan pertandingan dari arena terkenal seperti SV388 dan S128, menjamin pengalaman bermain yang aman dan menyenangkan. Dengan berbagai jenis taruhan dan bonus menarik, setiap pertandingan menjadi peluang untuk meraih kemenangan besar. Bergabunglah sekarang dan jadilah bagian dari aksi sabung ayam paling bergengsi.
            </p>
          </div>
        </div>

        {/* Filters and Sort */}
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => router.push("/sabung-a")}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                !searchParams.get("provider")
                  ? "bg-orange-600 text-white"
                  : "bg-neutral-800 text-white hover:bg-neutral-700"
              }`}
            >
              Semua Provider
            </button>
            {providers.map((provider) => (
              <button
                key={provider.id}
                onClick={() => router.push(`/sabung-a?provider=${encodeURIComponent(provider.name)}`)}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  searchParams.get("provider") === provider.name
                    ? "bg-orange-600 text-white"
                    : "bg-neutral-800 text-white hover:bg-neutral-700"
                }`}
              >
                {provider.name}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="sort" className="text-sm text-neutral-400">
              Urutkan:
            </label>
            <select
              id="sort"
              className="rounded-lg bg-neutral-800 px-4 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={searchParams.get("sort") || "popular"}
              onChange={(e) => {
                const params = new URLSearchParams(searchParams.toString());
                params.set("sort", e.target.value);
                params.delete("page");
                router.push(`/sabung-a?${params.toString()}`);
              }}
            >
              <option value="popular">Populer</option>
              <option value="rtp">RTP Tertinggi</option>
              <option value="new">Terbaru</option>
              <option value="name">Nama A-Z</option>
            </select>
          </div>
        </div>

        {/* Games Grid */}
        <GameGrid games={paginatedGames} columns={4} />

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex justify-center">
            <nav className="flex items-center space-x-1">
              {currentPage > 1 && (
                <button
                  onClick={() => router.push(`/sabung-a?page=${currentPage - 1}`)}
                  className="rounded-lg bg-neutral-800 p-2 text-neutral-400 transition-colors hover:bg-neutral-700 hover:text-white"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              )}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => router.push(`/sabung-a?page=${page}`)}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                    page === currentPage
                      ? "bg-orange-600 text-white"
                      : "bg-neutral-800 text-white hover:bg-neutral-700"
                  }`}
                >
                  {page}
                </button>
              ))}
              {currentPage < totalPages && (
                <button
                  onClick={() => router.push(`/sabung-a?page=${currentPage + 1}`)}
                  className="rounded-lg bg-neutral-800 p-2 text-neutral-400 transition-colors hover:bg-neutral-700 hover:text-white"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              )}
            </nav>
          </div>
        )}
      </div>
    </div>
  );
}
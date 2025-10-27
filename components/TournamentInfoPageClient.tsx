"use client";

import data from "@/data/tournament-info.json";

export default function TournamentInfoPageClient() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4 text-white">

        {/* Header Section */}
        <div className="mb-10">
          <div className="inline-block rounded bg-orange-600 px-3 py-1 text-xs font-bold text-white">
            {data.hero.label}
          </div>

          <h1 className="mt-4 text-4xl font-bold md:text-5xl">
            {data.hero.title}
          </h1>

          <p className="mt-4 text-lg text-neutral-300 max-w-2xl">
            {data.hero.subtitle}
          </p>

          <div className="mt-6 text-xl font-semibold text-orange-400">
            Total Prize: Rp {data.hero.prize}
          </div>
        </div>

        {/* Info Box */}
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg bg-neutral-900 border border-neutral-800 p-6">
            <h2 className="text-xl font-semibold text-white mb-3">
              Periode Event
            </h2>
            <p className="text-neutral-300 text-sm leading-relaxed">
              {data.details.periode}
            </p>

            <h2 className="text-xl font-semibold text-white mb-3 mt-6">
              Hadiah Utama
            </h2>
            <p className="text-neutral-300 text-sm leading-relaxed">
              {data.details.hadiahUtama}
            </p>

            <h2 className="text-xl font-semibold text-white mb-3 mt-6">
              Catatan
            </h2>
            <p className="text-neutral-400 text-xs leading-relaxed">
              {data.details.catatan}
            </p>
          </div>

          <div className="rounded-lg bg-neutral-900 border border-neutral-800 p-6">
            <h2 className="text-xl font-semibold text-white mb-4">
              Cara Ikut & Mekanisme Poin
            </h2>
            <ol className="list-decimal list-inside space-y-3 text-neutral-300 text-sm leading-relaxed">
              {data.details.mekanisme.map((step, idx) => (
                <li key={idx}>{step}</li>
              ))}
            </ol>

            <div className="mt-8">
              <a
                href={data.cta.registerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg bg-orange-600 px-6 py-3 font-medium text-white transition-colors hover:bg-orange-700"
              >
                {data.cta.buttonText}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom block */}
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-orange-600 to-red-600 p-8 md:p-12 text-center">
          <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl">
            Siap Naik Leaderboard?
          </h2>
          <p className="mb-6 text-white/90 text-lg max-w-2xl mx-auto">
            Mainkan game favoritmu, kumpulkan poin, dan rebut posisi teratas.
            Setiap hari ada kesempatan menang.
          </p>
          <a
            href={data.cta.registerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-white px-8 py-3 font-bold text-orange-600 transition-transform hover:scale-105"
          >
            {data.cta.buttonText}
          </a>
        </div>

      </div>
    </div>
  );
}

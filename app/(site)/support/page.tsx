import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dukungan Pelanggan - Ajaib88",
  description:
    "Butuh bantuan? Hubungi tim dukungan Ajaib88 24 jam melalui live chat atau kontak resmi. Kami siap bantu masalah akun, deposit, withdraw, dan teknis.",
  openGraph: {
    title: "Dukungan Pelanggan - Ajaib88",
    description:
      "Tim dukungan siap 24/7 untuk membantu Anda dengan akun, deposit, withdraw, bonus, dan kendala teknis.",
    type: "website",
    url: "https://www.ajaib88.id/dukungan",
    images: [
      {
        url: "https://gameportal.example.com/images/og-support.jpg",
        width: 1200,
        height: 630,
        alt: "Layanan Dukungan Ajaib88",
      },
    ],
  },
};

export default function SupportPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white md:text-4xl">
            Dukungan Pelanggan
          </h1>

          <div className="mt-4 max-w-3xl text-neutral-300 space-y-4">
            <p>
              Tim kami aktif 24 jam setiap hari. Kami siap membantu Anda soal akun,
              verifikasi, bonus, deposit, withdraw, atau kendala teknis saat bermain.
            </p>
            <p>
              Pilih salah satu jalur bantuan di bawah ini. Gunakan kanal resmi saja.
              Jangan percaya akun palsu yang mengatasnamakan admin.
            </p>
          </div>
        </div>

        {/* Contact Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg bg-neutral-900 border border-neutral-800 p-5">
            <h2 className="text-xl font-semibold text-white mb-2">Live Chat</h2>
            <p className="text-neutral-400 text-sm leading-relaxed mb-4">
              Chat langsung dengan agen dukungan real-time untuk bantuan cepat.
              Cocok untuk masalah urgent seperti saldo tidak masuk atau akun terkunci.
            </p>
            <a
              href="#livechat"
              className="inline-block rounded-lg bg-orange-600 px-5 py-2 font-medium text-white transition-colors hover:bg-orange-700"
            >
              Buka Live Chat
            </a>
          </div>

          <div className="rounded-lg bg-neutral-900 border border-neutral-800 p-5">
            <h2 className="text-xl font-semibold text-white mb-2">Telegram Resmi</h2>
            <p className="text-neutral-400 text-sm leading-relaxed mb-4">
              Support via Telegram hanya melalui channel yang kami verifikasi.
              Jangan kirim password Anda ke siapa pun.
            </p>
            <a
              href="https://t.me/ajaib88official"
              className="inline-block rounded-lg bg-neutral-800 px-5 py-2 font-medium text-white border border-neutral-700 transition-colors hover:bg-neutral-700 hover:border-neutral-600"
            >
              t.me/ajaib88official
            </a>
          </div>

          <div className="rounded-lg bg-neutral-900 border border-neutral-800 p-5 md:col-span-2">
            <h2 className="text-xl font-semibold text-white mb-2">Pemulihan Akun</h2>
            <p className="text-neutral-400 text-sm leading-relaxed mb-4">
              Lupa password? Tidak bisa login? Akun terkunci karena verifikasi?
              Kami bisa bantu verifikasi data dan pulihkan akses.
            </p>
            <ol className="list-decimal list-inside text-neutral-400 text-sm leading-relaxed space-y-1">
              <li>Buka halaman login lalu pilih &quot;Lupa Password&quot;.</li>
              <li>Masukkan username / kontak yang terdaftar.</li>
              <li>Jika tetap tidak bisa, hubungi Live Chat untuk verifikasi manual.</li>
            </ol>
          </div>
        </div>

        {/* CTA / Bottom block */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-orange-600 to-red-600 p-8 md:p-12 text-center">
          <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl">
            Butuh Bantuan Sekarang?
          </h2>
          <p className="mb-6 text-white/90 text-lg">
            CS aktif 24/7. Kami bantu sampai kelar, bukan cuma kasih template.
          </p>
          <a
            href="#livechat"
            className="inline-block rounded-lg bg-white px-8 py-3 font-bold text-orange-600 transition-transform hover:scale-105"
          >
            Hubungi CS
          </a>
        </div>

        {/* Pagination-style nav bawah biar konsisten */}
        <div className="mt-12 flex justify-center">
          <nav className="flex items-center space-x-1 text-neutral-600 text-sm">
            <a
              href="/faq"
              className="rounded-lg bg-neutral-800 px-4 py-2 font-medium text-white transition-colors hover:bg-neutral-700"
            >
              FAQ
            </a>
            <span className="rounded-lg bg-orange-600 px-4 py-2 font-medium text-white">
              Dukungan
            </span>
          </nav>
        </div>

      </div>
    </div>
  );
}

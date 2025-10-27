import { Metadata } from "next";
import faqData from "@/data/faq.json";

export const metadata: Metadata = {
  title: faqData.seo.title,
  description: faqData.seo.description,
  openGraph: {
    title: faqData.seo.title,
    description: faqData.seo.description,
    type: "website",
    url: "https://www.ajaib88.id/faq",
    images: [
      {
        url: "https://gameportal.example.com/images/og-faq.jpg",
        width: 1200,
        height: 630,
        alt: "FAQ - Bantuan dan Dukungan",
      },
    ],
  },
};

export default function FAQPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Header / Intro */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white md:text-4xl">
            {faqData.intro.headline}
          </h1>

          <div className="mt-4 max-w-3xl text-neutral-300 space-y-4">
            <p>{faqData.intro.descriptionTop}</p>
            <p>{faqData.intro.descriptionBottom}</p>
          </div>
        </div>

        {/* FAQ List */}
        <div className="space-y-6">
          {faqData.items.map((item, idx) => (
            <div
              key={idx}
              className="rounded-lg bg-neutral-900 p-5 border border-neutral-800"
            >
              <h2 className="text-lg font-semibold text-white md:text-xl">
                {item.q}
              </h2>
              <p className="mt-2 text-neutral-400 text-sm md:text-base leading-relaxed">
                {item.a}
              </p>
            </div>
          ))}
        </div>

        {/* Contact / CTA Bantuan */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-orange-600 to-red-600 p-8 md:p-12 text-center">
          <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl">
            Masih Butuh Bantuan?
          </h2>
          <p className="mb-6 text-white/90 text-lg">
            Tim dukungan kami aktif 24 jam. Hubungi live chat atau Telegram resmi untuk bantuan cepat.
          </p>
          <a
            href="/support"
            className="inline-block rounded-lg bg-white px-8 py-3 font-bold text-orange-600 transition-transform hover:scale-105"
          >
            Hubungi Dukungan
          </a>
        </div>

        {/* Bottom Pagination Style (dummy biar konsisten layout) */}
        <div className="mt-12 flex justify-center">
          <nav className="flex items-center space-x-1 text-neutral-600 text-sm">
            <span className="text-neutral-500">Halaman</span>
            <span className="rounded-lg bg-orange-600 px-4 py-2 font-medium text-white">
              FAQ
            </span>
            <a
              href="/support"
              className="rounded-lg bg-neutral-800 px-4 py-2 font-medium text-white transition-colors hover:bg-neutral-700"
            >
              Dukungan
            </a>
          </nav>
        </div>
      </div>
    </div>
  )
}
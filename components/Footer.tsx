import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-neutral-900 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <h3 className="mb-4 text-lg font-bold text-white">Ajaib88.id</h3>
            <p className="mb-4 text-sm text-neutral-400">Portal game online terlengkap dengan ribuan pilihan game dari provider terbaik.</p>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white uppercase">Game</h4>
            <ul className="space-y-2">
              <li><Link href="/hot-games" className="text-sm text-neutral-400 hover:text-white">Hot Games</Link></li>
              <li><Link href="/slots" className="text-sm text-neutral-400 hover:text-white">Slots</Link></li>
              <li><Link href="/live-casino" className="text-sm text-neutral-400 hover:text-white">Live Casino</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white uppercase">Bantuan</h4>
            <ul className="space-y-2">
              <li><Link href="/faq" className="text-sm text-neutral-400 hover:text-white">FAQ</Link></li>
              <li><Link href="/support" className="text-sm text-neutral-400 hover:text-white">Dukungan</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-neutral-800 pt-8 text-center">
          <p className="text-sm text-neutral-400">© {new Date().getFullYear()} Ajaib88. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
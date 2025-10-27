"use client";

import Link from "next/link";
import { X, ChevronDown } from "lucide-react";
import { getCategories } from "@/lib/data";
import { useState } from "react";

export function MobileMenuDrawer({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const categories = getCategories();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className="fixed right-0 top-0 h-full w-full max-w-sm bg-neutral-900 shadow-xl">
        <div className="flex items-center justify-between p-4 border-b border-neutral-800">
          <span className="text-lg font-bold text-white">Menu</span>
          <button onClick={onClose} className="p-2 text-neutral-400 transition-colors hover:text-white"><X className="h-6 w-6" /></button>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            {categories.map((category) => (
              <li key={category.id} className="border-b border-neutral-800">
                <button onClick={() => setOpenAccordion(openAccordion === category.id ? null : category.id)} className="flex w-full items-center justify-between p-3 text-left text-sm font-medium text-neutral-300 transition-colors hover:bg-neutral-800 hover:text-white">
                  {category.name}
                  <ChevronDown className={`h-4 w-4 transition-transform ${openAccordion === category.id ? "rotate-180" : ""}`} />
                </button>
                {openAccordion === category.id && (
                  <div className="bg-neutral-800/50 p-3">
                    <p className="mb-3 text-xs text-neutral-400">{category.description}</p>
                    <Link href={category.path} className="block rounded bg-orange-600 px-3 py-1.5 text-center text-xs font-medium text-white transition-colors hover:bg-orange-700" onClick={onClose}>
                      Mainkan Sekarang
                    </Link>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
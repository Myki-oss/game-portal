"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, Search, User } from "lucide-react";
import dynamic from "next/dynamic";
import { MobileMenuDrawer } from "./MobileMenuDrawer";
import { getCategories } from "@/lib/data";

const MegaMenu = dynamic(() => import("./MegaMenu").then((mod) => mod.MegaMenu), { ssr: false, loading: () => <div className="h-64 bg-neutral-900 animate-pulse" /> });

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const categories = getCategories();
  const handleMouseLeave = () => {
    // Beri jeda 150ms sebelum menutup menu
    setTimeout(() => setActiveCategory(null), 150);
  }; 

  return (
    <nav className="sticky top-0 z-40 bg-neutral-900/95 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="mr-8 flex items-center">
              <span className="text-xl font-bold text-white"><img src="https://cdn.lumiax.io/2025/09/26/ajaib88logo.png"></img></span>
            </Link>
            <div className="hidden lg:block">
              <ul className="flex space-x-1">
                {categories.map((category) => (
                  <li key={category.id} className="relative" onMouseEnter={() => setActiveCategory(category.id)} onMouseLeave={() => setActiveCategory(null)}>
                    <Link href={category.path} className="block px-4 py-2 text-sm font-medium text-neutral-300 transition-colors hover:text-white">
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 text-neutral-400 transition-colors hover:text-white"><Search className="h-5 w-5" /></button>
            <button className="p-2 text-neutral-400 transition-colors hover:text-white"><User className="h-5 w-5" /></button>
            <button className="p-2 text-neutral-400 transition-colors hover:text-white lg:hidden" onClick={() => setIsMobileMenuOpen(true)}>
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
      <div className="hidden lg:block" onMouseEnter={() => setActiveCategory(activeCategory)} onMouseLeave={() => setActiveCategory(null)}>
        {activeCategory && <MegaMenu categoryId={activeCategory} onClose={() => setActiveCategory(null)} />}
      </div>
      <MobileMenuDrawer isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </nav>
  );
}
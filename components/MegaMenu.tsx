"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { GameCard } from "./GameCard";
import { getGamesByCategory, getProviders } from "@/lib/data";

interface MegaMenuProps {
  categoryId: string;
  onClose: () => void;
}

export function MegaMenu({ categoryId, onClose }: MegaMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  const games = getGamesByCategory(categoryId, 6);
  const providers = getProviders();

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div
      ref={menuRef}
      className="absolute left-0 right-0 bg-neutral-900 shadow-xl"
      role="menu"
      aria-labelledby={`menu-${categoryId}`}
    >
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <h3 className="mb-4 text-lg font-bold text-white capitalize">
              {categoryId.replace("-", " ")}
            </h3>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {games.map((game) => (
                <GameCard key={game.id} {...game} />
              ))}
            </div>
            <div className="mt-4">
              <Link
                href={`/${categoryId}`}
                className="inline-flex items-center text-sm font-medium text-orange-500 transition-colors hover:text-orange-400"
                onClick={onClose}
              >
                Lihat Semua
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Provider</h3>
            <div className="space-y-3">
              {providers.slice(0, 6).map((provider) => (
                <Link
                  key={provider.id}
                  href={`/providers/${provider.id}`}
                  className="flex items-center rounded-lg bg-neutral-800 p-3 transition-colors hover:bg-neutral-700"
                  onClick={onClose}
                >
                  <div className="relative h-8 w-8 overflow-hidden rounded bg-neutral-700">
                    <Image
                      src={provider.logo}
                      alt={provider.name}
                      fill
                      className="object-contain"
                      sizes="32px"
                    />
                  </div>
                  <span className="ml-3 text-sm text-neutral-300">
                    {provider.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
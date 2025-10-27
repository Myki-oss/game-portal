"use client";

import { Suspense } from "react";
import HotGamesPageClient from "@/components/HotGamesPageClient";

export default function HotGamesPage() {
  return (
    <Suspense fallback={<div>Loading hot games…</div>}>
      <HotGamesPageClient />
    </Suspense>
  );
}

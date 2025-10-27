"use client";

import { Suspense } from "react";
import PokerPageClient from "@/components/PokerPageClient";

export default function PokerPage() {
  return (
    <Suspense fallback={<div>Loading poker…</div>}>
      <PokerPageClient />
    </Suspense>
  );
}

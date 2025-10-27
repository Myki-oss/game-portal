"use client";

import { Suspense } from "react";
import LiveCasinoPageClient from "@/components/LiveCasinoPageClient";

export default function LiveCasinoPage() {
  return (
    <Suspense fallback={<div>Loading live casino…</div>}>
      <LiveCasinoPageClient />
    </Suspense>
  );
}

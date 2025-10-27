"use client";

import { Suspense } from "react";
import SlotsPageClient from "@/components/SlotsPageClient";

export default function SlotsPage() {
  return (
    <Suspense fallback={<div>Loading slots…</div>}>
      <SlotsPageClient />
    </Suspense>
  );
}

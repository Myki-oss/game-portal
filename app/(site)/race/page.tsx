"use client";

import { Suspense } from "react";
import RacePageClient from "@/components/RacePageClient";

export default function RacePage() {
  return (
    <Suspense fallback={<div>Loading race…</div>}>
      <RacePageClient />
    </Suspense>
  );
}

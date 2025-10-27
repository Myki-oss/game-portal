"use client";

import { Suspense } from "react";
import ESportsPageClient from "@/components/ESportsPageClient";

export default function ESportsPage() {
  return (
    <Suspense fallback={<div>Loading e-sports…</div>}>
      <ESportsPageClient />
    </Suspense>
  );
}

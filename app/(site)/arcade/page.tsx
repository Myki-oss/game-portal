"use client";

import { Suspense } from "react";
import ArcadePageClient from "@/components/ArcadePageClient";

export default function ArcadePage() {
  return (
    <Suspense fallback={<div>Loading arcade…</div>}>
      <ArcadePageClient />
    </Suspense>
  );
}

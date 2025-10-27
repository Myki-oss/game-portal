"use client";

import { Suspense } from "react";
import CrashGamePageClient from "@/components/CrashGamePageClient";

export default function CrashGamePage() {
  return (
    <Suspense fallback={<div>Loading crash game…</div>}>
      <CrashGamePageClient />
    </Suspense>
  );
}

"use client";

import { Suspense } from "react";
import SabungAPageClient from "@/components/SabungAPageClient";

export default function SabungAPage() {
  return (
    <Suspense fallback={<div>Loading sabung…</div>}>
      <SabungAPageClient />
    </Suspense>
  );
}

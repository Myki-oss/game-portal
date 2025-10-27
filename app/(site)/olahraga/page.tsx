"use client";

import { Suspense } from "react";
import OlahragaPageClient from "@/components/OlahragaPageClient";

export default function OlahragaPage() {
  return (
    <Suspense fallback={<div>Loading sports…</div>}>
      <OlahragaPageClient />
    </Suspense>
  );
}

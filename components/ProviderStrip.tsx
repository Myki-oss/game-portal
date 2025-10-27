import Image from "next/image";
import Link from "next/link";
import { Provider } from "@/types";

interface ProviderStripProps {
  providers: Provider[];
  title?: string;
}

export function ProviderStrip({ providers, title = "Provider Populer" }: ProviderStripProps) {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="mb-6 text-xl font-bold text-white">{title}</h2>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {providers.map((provider) => (
            <Link
              key={provider.id}
              href={`/providers/${provider.id}`}
              className="group flex items-center justify-center"
            >
              <div className="relative h-12 w-32 overflow-hidden rounded-lg bg-neutral-800 p-2 transition-all duration-300 group-hover:bg-neutral-700">
                <Image
                  src={provider.logo}
                  alt={provider.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100px, 128px"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
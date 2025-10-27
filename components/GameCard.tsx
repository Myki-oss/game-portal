import Image from "next/image";
import Link from "next/link";
import { Badge } from "./Badge";

interface GameCardProps {
  id: string;
  name: string;
  provider: string;
  thumb: string;
  tags: string[];
  rtp: number;
  priority?: boolean;
}

export function GameCard({ id, name, provider, thumb, tags, rtp, priority = false }: GameCardProps) {
  return (
    <Link href={`/games/${id}`} className="group block">
      <div className="relative overflow-hidden rounded-lg bg-neutral-800 transition-all duration-300 hover:ring-2 hover:ring-orange-500">
        <div className="aspect-[4/3] overflow-hidden">
          <Image src={thumb} alt={name} fill className="object-cover transition-transform duration-300 group-hover:scale-105" priority={priority} sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-3">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h3 className="truncate text-sm font-semibold text-white">{name}</h3>
              <p className="truncate text-xs text-neutral-400">{provider}</p>
            </div>
            <div className="ml-2 flex items-center">
              <span className="text-xs font-medium text-green-400">{rtp}%</span>
            </div>
          </div>
          <div className="mt-2 flex gap-1">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
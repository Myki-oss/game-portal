import { GameCard } from "./GameCard";
import { Game } from "@/types";

interface GameGridProps {
  games: Game[];
  columns?: 2 | 3 | 4 | 6;
}

export function GameGrid({ games, columns = 4 }: GameGridProps) {
  const gridCols = {
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-2 md:grid-cols-4",
    6: "grid-cols-2 md:grid-cols-3 lg:grid-cols-6",
  };

  return (
    <div className={`grid ${gridCols[columns]} gap-4`}>
      {games.map((game, index) => (
        <GameCard
          key={game.id}
          id={game.id}
          name={game.name}
          provider={game.provider}
          thumb={game.thumb}
          tags={game.tags}
          rtp={game.rtp}
          priority={index < 6}
          url={game.url} // <-- INI PENTING
        />
      ))}
    </div>
  );
}

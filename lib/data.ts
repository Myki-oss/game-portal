import gamesHot from "@/data/games-hot.json";
import gamesSlots from "@/data/games-slots.json";
import gamesLiveCasino from "@/data/games-live-casino.json"; // Tambahkan ini
import gamesSabungA from "@/data/games-sabung-a.json";     // Tambahkan ini
import providersData from "@/data/providers.json";
import categoriesData from "@/data/categories.json";
import gamesRace from "@/data/games-race.json"; // TAMBAHKAN BARIS INI
import gamesArcade from "@/data/games-arcade.json"; // TAMBAHKAN BARIS INI
import gamesPoker from "@/data/games-poker.json"; // TAMBAHKAN BARIS INI
import gamesOlahraga from "@/data/games-olahraga.json"; // TAMBAHKAN BARIS INI
import gamesCrashGame from "@/data/games-crash-game.json"; // TAMBAHKAN BARIS INI
import gamesESports from "@/data/games-e-sports.json"; // TAMBAHKAN BARIS INI

import { Game, Provider, Category } from "@/types";

export function getGamesByCategory(categoryId: string, limit?: number): Game[] {
  let games: Game[] = [];
  
  switch (categoryId) {
    case "hot-games":
      games = gamesHot.items as Game[];
      break;
    case "slots":
      games = gamesSlots.items as Game[];
      break;
    case "live-casino":
      games = gamesLiveCasino.items as Game[]; // Tambahkan ini
      break;
    case "sabung-a":
      games = gamesSabungA.items as Game[];   // Tambahkan ini
      break;
	case "race":
	  games = gamesRace.items as Game[];
	  break;
	case "arcade":
      games = gamesArcade.items as Game[]; // TAMBAHKAN BARIS INI
      break;
    case "poker":
      games = gamesPoker.items as Game[]; // TAMBAHKAN BARIS INI
      break;
    case "olahraga":
      games = gamesOlahraga.items as Game[]; // TAMBAHKAN BARIS INI
      break;
    case "crash-game":
      games = gamesCrashGame.items as Game[]; // TAMBAHKAN BARIS INI
      break;
    case "e-sports":
      games = gamesESports.items as Game[]; // TAMBAHKAN BARIS INI
      break;	  
    default:
      games = [];
  }
  
  return limit ? games.slice(0, limit) : games;
}

// ... sisanya tetap sama

export function getProviders(): Provider[] {
  return providersData.providers as Provider[];
}

export function getCategories(): Category[] {
  return categoriesData.categories as Category[];
}
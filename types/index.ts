export interface Game {
  id: string;
  name: string;
  provider: string;
  thumb: string;
  tags: string[];
  rtp: number;
  url?: string;
}

export interface Provider {
  id: string;
  name: string;
  logo: string;
}

export interface Category {
  id: string;
  name: string;
  path: string;
  description: string;
}

export interface GamesData {
  category: string;
  title: string;
  seo: {
    title: string;
    description: string;
  };
  items: Game[];
}
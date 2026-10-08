export interface MarketType {
  market: string;
  division: string;
  min: number;
  max: number;
}

export interface DataType {
  id: number;
  slug: string;
  nameBn: string;
  category: string;
  categoryNameBn: string;
  categoryIcon: string;
  change: {
    dir: "up" | "down";
    pct: number;
  };
  image: string;
  lastMonth: number;
  lastWeek: number;
  markets: MarketType[];
  today: number;
  unit: string;
  yesterday: number;
}
export interface GameItemModel {
  title: string;
  type: GameItemType;
  bonus: boolean;
  color: { first: string; last: string };
  icon: string;
}

export type GameItemType = "PAPER" | "ROCK" | "SCISSORS" | "LIZARD" | "SPOCK";

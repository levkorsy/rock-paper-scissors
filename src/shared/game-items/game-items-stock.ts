import type { GameItemModel } from "@/shared/models/game-items.model";

export const gameItemsStok: Array<GameItemModel> = [
  {
    title: "Rock",
    type: "ROCK",
    bonus: false,
    color: {
      first: "--rock-gradient-1",
      last: "--rock-gradient-2",
    },
    icon: "icon-rock.svg",
  },
  {
    title: "Paper",
    type: "PAPER",
    bonus: false,
    color: {
      first: "--paper-gradient-1",
      last: "--paper-gradient-2",
    },
    icon: "icon-paper.svg",
  },
  {
    title: "Scissors",
    type: "SCISSORS",
    bonus: false,
    color: {
      first: "--scissors-gradient-1",
      last: "--scissors-gradient-2",
    },
    icon: "icon-scissors.svg",
  },
  {
    title: "Lizard",
    type: "LIZARD",
    bonus: true,
    color: {
      first: "--lizard-gradient-1",
      last: "--lizard-gradient-2",
    },
    icon: "icon-lizard.svg",
  },
  {
    title: "Spock",
    type: "SPOCK",
    bonus: true,
    color: {
      first: "--spock-gradient-1",
      last: "--spock-gradient-2",
    },
    icon: "icon-spock.svg",
  },
];

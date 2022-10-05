import { defineStore } from "pinia";

export const useScoreStore = defineStore("ScoreStore", {
  state: () => ({
    score: 0,
  }),

//  TODO remove as unnesassary
});

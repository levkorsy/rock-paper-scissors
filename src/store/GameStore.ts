import { GameStepsEnum } from "@/shared/models/game-steps.enum";
import { defineStore } from "pinia";
import type { GameItemModel } from "@/shared/models/game-items.model";
import { getGameItems } from "@/shared/game-items/game-items.helper";

const gameItems = getGameItems();

interface GameState {
  activeStep: GameStepsEnum;
  selectedItems: { user: GameItemModel | null; ai: GameItemModel | null };
  bonus: boolean;
  score: number;
  winner: string | null;
}

export const useGameStore = defineStore("GameStore", {
  state: (): GameState => ({
    activeStep: GameStepsEnum.SELECT,
    selectedItems: { user: null, ai: null },
    bonus: false,
    score: 0,
    winner: null,
  }),

  actions: {
    userSelectGameItem(gameItem: GameItemModel): void {
      this.selectedItems.user = gameItem;
      this.setActiveStep(GameStepsEnum.RESULT);

      setTimeout(() => {
        this.aiSelectGameItem(gameItems);
      }, 1000);
    },

    setActiveStep(step: GameStepsEnum): void {
      this.activeStep = step;
    },

    aiSelectGameItem(gameItems: Array<GameItemModel>): void {
      const maxNum = this.bonus ? 5 : 3;

      this.selectedItems.ai = gameItems[this.getRandomNumber(maxNum)];

      this.setResult(this.selectedItems.user!, this.selectedItems.ai);
    },

    getRandomNumber(maxNum: number): number {
      return Math.floor(Math.random() * maxNum);
    },

    setResult(userSelection: GameItemModel, aiSelection: GameItemModel) {
      if (!userSelection && !aiSelection){
        return;
      }

      let result = 0;

      if(userSelection.type !== aiSelection.type) {
        result = userSelection.beats.includes(aiSelection.type) ? 1 : -1

        this.winner = userSelection.beats.includes(aiSelection.type) ? 'user' : 'ai'
      }

      this.score += result


    },

    playAgain(){
      this.winner = null
      this.activeStep = GameStepsEnum.SELECT
      this.selectedItems = { user: null, ai: null }
    }
  },
});

import { GameStepsEnum } from "@/shared/models/game-steps.enum";
import { defineStore } from "pinia";
import type { GameItemModel } from "@/shared/models/game-items.model";

interface GameState {
  activeStep: GameStepsEnum
  selectedItems: { user: GameItemModel | null, ai: GameItemModel | null,}
}

export const useGameStore = defineStore("GameStore", {
  state: (): GameState => ({
    activeStep: GameStepsEnum.SELECT,
    selectedItems: { user: null, ai: null },
  }),

  actions: {
    userSelectGameItem(gameItem: GameItemModel) {
      this.selectedItems.user = gameItem;
      this.setActiveStep(GameStepsEnum.RESULT)
    },

      setActiveStep(step: GameStepsEnum) {
        this.activeStep = step
      }
  },
});

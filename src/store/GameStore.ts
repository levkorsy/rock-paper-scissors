import { GameStepsEnum } from "@/shared/models/game-steps.enum";
import { defineStore } from "pinia";
import type { GameItemModel } from "@/shared/models/game-items.model";

export const useGameStore = defineStore("GameStore", {
  state: () => ({
    activeStep: GameStepsEnum.SELECT,
    selectedItems: { user: {} as GameItemModel, ai: {} as GameItemModel },
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

import { GameStepsEnum } from '@/shared/models/game-steps.enum'
import { defineStore } from 'pinia'

export const useGameStore = defineStore('GameStore', {
    state: () => ({
       activeStep: GameStepsEnum.SELECT 
    }),
})
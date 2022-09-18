export interface GameItemModel {
    title: String
    type: GameItemType
    bonus: boolean,
    color: { first: string, last: string },
    icon: string
}

export type GameItemType = 'PAPER' | 'ROCK' | 'SCISSORS' | 'LIZARD' | 'SPOCK'

export enum GameStepsEnum {
    SELECT = 'select',
    RESULT = 'result',
  }
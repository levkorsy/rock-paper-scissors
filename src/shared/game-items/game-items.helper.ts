import { gameItemsStok } from "@/shared/game-items/game-items-stock";
import type { GameItemModel } from "@/shared/models/game-items.model";

export const getGameItems = ( bonusMode: boolean): Array<GameItemModel> => {
    return gameItemsStok.filter( item => item.bonus === bonusMode )
}
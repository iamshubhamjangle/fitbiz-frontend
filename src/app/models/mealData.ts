import { MealList } from "./mealList";

export interface MealData {
    uid: number,
    userId: string,
    date: string
    mealList: MealList,
}
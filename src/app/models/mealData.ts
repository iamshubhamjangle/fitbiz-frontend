import { MealList } from "./mealList";

export interface MealData {
    mealDataId: string,
    userId: string,
    date: string
    mealList: MealList,
}
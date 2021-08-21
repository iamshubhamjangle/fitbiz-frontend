import { Steps } from "./steps";
import { Tags } from "./tags";

export interface Exercise {
    id: string,
    name: string,
    description: string,
    imgUrl: string,
    category: string,
    steps: Steps[],
    tags: Tags[],
}
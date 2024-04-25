import { CHAMPIONS } from "./src/data";
import { sortNames } from "./src/lib";

const sortedChampionsByLastName = sortNames(CHAMPIONS);
console.log(sortedChampionsByLastName);

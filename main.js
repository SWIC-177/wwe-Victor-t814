import { BELTS, CHAMPIONS } from "./src/data";
import { removeCorrespondingItemsByTerm } from "./src/lib";

const { terms1: updatedBelts, terms2: updatedChampions } =
  removeCorrespondingItemsByTerm({
    terms1: BELTS,
    terms2: CHAMPIONS,
    filterTerm: "Tag Team Champions",
  });

console.log("Updated BELTS:", updatedBelts);
console.log("Updated CHAMPIONS:", updatedChampions);

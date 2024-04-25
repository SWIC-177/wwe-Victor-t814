import { BELTS, CHAMPIONS } from "./src/data";

const filteredBelts = BELTS.filter((belt) => belt !== "Women's World Champion");
const filteredChampions = CHAMPIONS.filter(
  (champion) => champion !== "Vacant Title",
);
console.log("Updated BELTS:", filteredBelts);
console.log("Updated CHAMPIONS:", filteredChampions);

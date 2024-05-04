export function sortNames(arr, sortBy = "last") {
  // Define a function to extract either the first or last name
  const getNamePart = (name) => {
    const parts = name.split(" ");
    return sortBy === "first" ? parts[0] : parts[parts.length - 1];
  };

  // Sort the array based on the selected name part
  arr.sort((a, b) => {
    const nameA = getNamePart(a);
    const nameB = getNamePart(b);
    return nameA.localeCompare(nameB);
  });

  return arr;
}
export function getLastName(fullName) {
  const splitName = fullName.split(" ");
  return splitName[splitName.length - 1];
}

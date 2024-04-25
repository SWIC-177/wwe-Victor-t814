import { expect } from "vitest";
import { sortNames } from "./lib";

describe("sortNames function", () => {
  it("should sort an array of names by last name by default", () => {
    const unsortedNames = [
      "John Smith",
      "Alice Johnson",
      "David Lee",
      "Emily Taylor",
    ];

    const expectedSortedNames = [
      "Alice Johnson",
      "David Lee",
      "John Smith",
      "Emily Taylor",
    ];

    const sortedNames = sortNames(unsortedNames);
    expect(sortedNames).toEqual(expectedSortedNames);
  });

  it("should sort an array of names by first name when specified", () => {
    const unsortedNames = [
      "John Smith",
      "Alice Johnson",
      "David Lee",
      "Emily Taylor",
    ];

    const expectedSortedNames = [
      "Alice Johnson",
      "David Lee",
      "Emily Taylor",
      "John Smith",
    ];

    const sortedNames = sortNames(unsortedNames, "first");
    expect(sortedNames).toEqual(expectedSortedNames);
  });
});

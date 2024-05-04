import { describe, expect, test } from "vitest";
import { getLastName } from "./lib";

describe("getLastName", () => {
  test("returns the last name from a full name", () => {
    // Arrange
    const fullName = "John Doe";
    const expected = "Doe";
    // Act
    const result = getLastName(fullName);
    // Assert
    expect(result).toBe(expected);
  });
});
test("getLastName", () => {});

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
  test("returns the last name from a full name with multiple parts", () => {
    // Arrange
    const fullName = "John Jacob Jingleheimer Schmidt";
    const expected = "Schmidt";
    // Act
    const result = getLastName(fullName);
    // Assert
    expect(result).toBe(expected);
  });
  test("returns the last name from a full name with a single part", () => {
    // Arrange
    const fullName = "Cher";
    const expected = "Cher";
    // Act
    const result = getLastName(fullName);
    // Assert
    expect(result).toBe(expected);
  });
  test("returns an empty string when the full name is empty", () => {
    // Arrange
    const fullName = "";
    const expected = "";
    // Act
    const result = getLastName(fullName);
    // Assert
    expect(result).toBe(expected);
  });
});
test("getLastName", () => {});

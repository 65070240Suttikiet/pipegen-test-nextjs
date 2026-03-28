import { describe, test, expect } from "vitest";
import { formatDate, slugify, capitalize } from "../lib/utils";

describe("formatDate", () => {
  test("formats date correctly", () => {
    const date = new Date("2024-01-15");
    expect(formatDate(date)).toContain("2024");
  });
});

describe("slugify", () => {
  test("converts text to slug", () => {
    expect(slugify("Hello World")).toBe("hello-world");
  });
  test("removes special characters", () => {
    expect(slugify("Hello! @World#")).toBe("hello-world");
  });
  test("trims hyphens", () => {
    expect(slugify("--hello--")).toBe("hello");
  });
});

describe("capitalize", () => {
  test("capitalizes first letter", () => {
    expect(capitalize("hello")).toBe("Hello");
  });
  test("handles empty string", () => {
    expect(capitalize("")).toBe("");
  });
});
import { describe, test, expect } from "vitest";

describe("API types", () => {
  test("user object shape", () => {
    const user = { id: "1", name: "Test", email: "test@test.com", createdAt: new Date() };
    expect(user).toHaveProperty("id");
    expect(user).toHaveProperty("name");
    expect(user).toHaveProperty("email");
  });

  test("post object shape", () => {
    const post = { id: "1", title: "Test", content: "Hello", published: false, authorId: "1" };
    expect(post).toHaveProperty("title");
    expect(post.published).toBe(false);
  });
});
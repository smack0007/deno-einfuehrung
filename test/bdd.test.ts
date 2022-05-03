import { assertEquals, assertStringIncludes, describe, it } from "./deps.ts";
import { User } from "./user.ts";

describe("User", () => {
  describe("constructor", () => {
    it("age should equal name length if not specified", () => {
      const user = new User("John");
      assertEquals(user.name, "John");
      assertEquals(user.age, "John".length);
    });

    it("age can be specified", () => {
      const user = new User("John", 42);
      assertEquals(user.name, "John");
      assertEquals(user.age, 42);
    });
  });

  describe("greet", () => {
    it("should contain name", () => {
      const user = new User("John", 42);
      assertStringIncludes(user.greet(), "John");
    });

    it("should contain age", () => {
      const user = new User("John", 42);
      assertStringIncludes(user.greet(), "42 years");
    });
  });
});

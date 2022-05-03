import { assertEquals, delay } from "./deps.ts";

Deno.test("hello world", () => {
  const x = 1 + 2;
  assertEquals(x, 3);
});

Deno.test("async hello world", async () => {
  const x = 1 + 2;

  await delay(100);

  assertEquals(x, 3);
});

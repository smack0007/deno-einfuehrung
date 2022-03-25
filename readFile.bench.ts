// deno bench --allow-read ./readFile.bench.ts

Deno.bench("readFile sync", () => {
  Deno.readTextFileSync("Readme.md");
});

Deno.bench("readFile async", async () => {
  await Deno.readTextFile("Readme.md");
});

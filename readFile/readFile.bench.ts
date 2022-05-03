Deno.bench({ name: "readFile sync", baseline: true }, () => {
  Deno.readTextFileSync("../Readme.md");
});

Deno.bench("readFile async", async () => {
  await Deno.readTextFile("../Readme.md");
});

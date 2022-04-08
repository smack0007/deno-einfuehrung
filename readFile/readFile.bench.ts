const NUMBER_OF_ITERATIONS = 10000;

Deno.bench("readFile sync", { n: NUMBER_OF_ITERATIONS }, () => {
  Deno.readTextFileSync("../Readme.md");
});

Deno.bench("readFile async", { n: NUMBER_OF_ITERATIONS }, async () => {
  await Deno.readTextFile("../Readme.md");
});

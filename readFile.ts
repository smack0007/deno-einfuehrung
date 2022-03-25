// deno run --allow-read ./readFile.ts

const contents = await Deno.readTextFile("Readme.md");
console.info(contents);

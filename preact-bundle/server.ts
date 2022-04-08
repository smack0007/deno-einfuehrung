import { Application } from "https://deno.land/x/oak@v10.5.1/mod.ts";
import frontendDenoJson from "./frontend/deno.json" assert { type: "json" };

async function bundle(sourceFile: string, sourceMap: boolean) {
  const { files } = await Deno.emit(sourceFile, {
    bundle: "module",
    compilerOptions: {
      ...frontendDenoJson.compilerOptions,
      jsx: "react",
    },
  });

  let source = files["deno:///bundle.js"];

  if (sourceMap) {
    const map = files["deno:///bundle.js.map"];
    const reader = new FileReader();
    const blob = new Blob([map], { type: "application/json" });

    reader.readAsDataURL(blob);
    await new Promise((cb) => (reader.onload = cb));

    source += `//# sourceMappingURL=${reader.result}`;
  }

  return source;
}

const app = new Application();

app.use(async (context, next) => {
  try {
    await context.send({
      root: `${Deno.cwd()}/static`,
      index: "index.html",
    });
  } catch {
    await next();
  }
});

app.use(async (ctx) => {
  const source = await bundle("./frontend/main.tsx", true);

  ctx.response.body = `<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Deno Preact</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <div id="root"></div>
    <script type="module">
        ${source}
    </script>
  </body>
</html>
`;
});

app.addEventListener("listen", (ev) => {
  console.info(`Listening on ${ev.hostname}:${ev.port}`);
});

await app.listen({ port: 8080 });

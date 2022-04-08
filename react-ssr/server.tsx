import { Application, React, ReactDomServer } from "./deps.ts";
import App from "./App.tsx";

const app = new Application();

app.use(async (context, next) => {
  try {
    await context.send({
      root: `${Deno.cwd()}/static`,
      index: "index.html",
    });
  } catch {
    next();
  }
});

app.use((ctx) => {
  ctx.response.body = `<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <div id="root">${ReactDomServer.renderToString(<App />)}</div>
  </body>
</html>
  `;
});

app.addEventListener("listen", (ev) => {
  console.info(`Listening on ${ev.hostname}:${ev.port}`);
});

await app.listen({ port: 8080 });

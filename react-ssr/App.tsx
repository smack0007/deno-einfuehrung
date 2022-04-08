import { React } from "./deps.ts";
import Greeting from "./Greeting.tsx";

export default function App(): JSX.Element {
  return (
    <div className="app">
      <h1>Deno React SSR</h1>
      <Greeting name="World" />
    </div>
  );
}

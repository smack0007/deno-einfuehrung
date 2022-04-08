/** @jsx h */
import { h, VNode } from "./deps.ts";
import Greeting from "./Greeting.tsx";

export default function App(): VNode {
  return (
    <div className="app">
      <h1>Deno Preact</h1>
      <Greeting name="World" />
    </div>
  );
}

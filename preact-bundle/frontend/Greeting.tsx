/** @jsx h */
import { h, VNode } from "./deps.ts";

export default function Greeting({ name }: { name: string }): VNode {
  return (
    <div className="greeting">
      Hello <span className="name">{name}</span>!
    </div>
  );
}

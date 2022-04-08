import { React } from "./deps.ts";

export default function Greeting({ name }: { name: string }): JSX.Element {
  return (
    <div className="greeting">
      Hello <span className="name">{name}</span>!
    </div>
  );
}

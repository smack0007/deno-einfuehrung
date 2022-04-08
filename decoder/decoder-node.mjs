import { Buffer } from "buffer";
import { TextDecoder } from "util";

const data = [
  72, 101, 108, 108, 111, 32, 102, 114, 111, 109, 32, 66, 117, 102, 102, 101,
  114, 33,
];

const decoder = new TextDecoder();
console.info(decoder.decode(Buffer.from(data)));

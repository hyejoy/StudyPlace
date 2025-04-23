import { text } from "./text";

let list: string[] = [];
list = text.split("\n");
list = list.filter((text) => text.length != 0);
list = list.filter((text) => !text.includes(":"));

const result: string[] = [];

for (let idx = 0; idx < list.length; idx++) {
  const text = list[idx];

  if (list[idx - 1]?.includes("섹션")) continue;
  if (list[idx + 1]?.includes("∙")) {
    const combined = `${text} _ ${list[idx + 1]}`;
    result.push(combined);
  } else {
    result.push(text);
  }
}

console.log(result);

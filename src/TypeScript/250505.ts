import { rejects } from "assert";
import { resolve } from "path";

type functionType<T> = T extends () => infer R ? R : never;

function funcA() {
  return "string";
}
function funcB() {
  return 1000;
}

type funcAType = functionType<typeof funcA>;

interface Post {
  title: string;
  content: string;
}

function fetchPost(): Promise<Post> {
  return new Promise((resolve, rejects) => {
    resolve({
      title: "제목",
      content: "컨텐츠",
    });
  });
}

type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;

// Promise의 결과값만 때오기
type fetchType = PromiseUnpack<functionType<typeof fetchPost>>;
// PromiseUnpack<Promise<Post>>

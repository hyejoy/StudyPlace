/**
 * 템플릿 리터럴 타입
 * 조건부 타입 소개
 */

type Animal = "cat" | "dog" | "hourse";
type Color = "pink" | "red" | "blue";
type ColorAnimal = `${Color}-${Animal}`;

type Exclude<T> = T extends string ? never : T;

type ExclueTest = Exclude<string | number | boolean>;

function removeSpace<T>(text: T): T extends string ? string : undefined; // 오버로딩

function removeSpace(text: any) {
  if (typeof text === "string") {
    text.replaceAll(" ", "");
  } else {
    return undefined;
  }
}

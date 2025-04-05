/**
 * 템플릿 리터럴 타입
 */

type Color = "red" | "yellow";
type Animal = "Dog" | "Cat";
type ColorAnimal = `${Color}${Animal}`;

/**
 * 조건부 타입
 */

type A = number extends string ? number : string;

type SwtichType<T> = T extends string ? number : string;

let typeA: SwtichType<string> = 123;

function removeSpace<T>(text: T): T extends string ? string : undefined;

function removeSpace(text: any) {
  if (typeof text === "string") {
    return text.replaceAll(" ", "") as any;
  } else return undefined as any;
}

/**
 * 분산적인 조건부 타입
 * 조건부 타입을 유니온이랑 같이 쓰면 분산적으로 업그레이드 됨
 * extends 양옆에 [] 씌워주면 분산 안됨
 */

type StringNumberSwitch<T> = T extends string ? number : string;
type test1 = StringNumberSwitch<string | number | boolean>;

type Exclude<T, U> = T extends U ? T : never;

type test2 = Exclude<string | number | boolean, string>; // string

/**
 * infer - 조건부 타입 내에서 타입 추론하기
 */

type FuncA = () => string;
type ReturnString<T> = T extends () => string ? string : never;
type InferReturn<T> = T extends () => infer R ? R : never;
type test3 = InferReturn<FuncA>;
type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;

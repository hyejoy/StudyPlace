/**
 * 분산적인 조건부 타입
 * 조건부타입에 유니온을 쓰게 되면, 타입이 분산적으로 동작하게 되는 문법
 */

type StringNumberSwitch<T> = T extends string ? number : string;
type c = StringNumberSwitch<string | number | boolean>;

// 분산적 조건부 타입안되도록 막기
type StringNumberSwitch1<T> = [T] extends [string] ? number : string;

type Exclude<T, U> = T extends U ? never : T;
type A = Exclude<string | number | boolean, string>; // number || boolean

type Extract<T, U> = T extends U ? T : never;
type B = Extract<string | number | boolean, string>;

/**
 * infer - 조건부 타입 내에서 타입 추론하기,
 * 조건식을 참으로 만드는 타입을 추론하도록 동작한다.
 */

type funcA = () => string;
type funcB = () => boolean;

type funcType1<T> = T extends () => string ? string : undefined;
type func1 = funcType1<funcA>;

type InferType<T> = T extends () => infer R ? R : undefined;
type func2 = InferType<funcA>;
type func3 = InferType<funcB>;

interface Post {
  id: number;
  title: string;
  content: string;
}

type InferPromise<T> = T extends Promise<infer R> ? R : never;
type PostPromise = InferPromise<Promise<Post>>;

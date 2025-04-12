/**
 * 분산적인 조건부 타입
 * 조건부 타입  + 유니온 -> 분산적
 */

type StringNumberSwitch<T> = T extends string ? number : string;

type test1 = StringNumberSwitch<number | string | boolean>;

/*
 * infer - 조건부 타입 내에서 타입 추론
 */

type funcA = () => string;
type funcB = () => number;

type ReturnInferType<T> = T extends () => infer R ? R : never;
type stringReturn = ReturnInferType<funcA>;
type numberReturn = ReturnInferType<funcB>;

// 응용 : ReturnType<T>
type returnType = ReturnType<funcA>;

// promise의 결과값만 똑때오는 결과값을 만들자
interface Person {
  name: string;
  age: number;
  hasDog: boolean;
  hasCat: boolean;
  job: string;
}

type ReturnPromiseType<T> = T extends Promise<infer R> ? R : never;
type ReturnPromisePerson = ReturnPromiseType<Promise<Person>>;

/**
 * 응용 :: 조건부 타입 기반의 유틸리티 타입
 * Exclude, Extract
 */

type hasPets1 = Exclude<keyof Person, "name" | "age" | "job">;
type hasPets2 = Extract<keyof Person, "hasCat" | "hasDog">;

/**
 * Exclude<T,U>
 * -> 제외하다, 추방하다
 * -> T에서 U를 제거하는 타입
 */

type Exclude<T, U> = T extends U ? never : T;
type ExclueType = Exclude<string | boolean, string>;

/**
 * Extract<T,U>
 * -> 추출하다
 * -> T에서 U를 추출하는 타입
 */

type Extract<T, U> = T extends U ? T : never;
type ExtractType = Extract<string | boolean, boolean>;

/**
 * ReturnType<T>
 * -> 함수의 반환값 타입을 추출하는 타입
 */

function funcA() {
  return "stringType";
}

type ReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : never;
type funcType = ReturnType<typeof funcA>;

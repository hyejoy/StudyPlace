const func1 = (a: number, b: number): number => a + b;

type Operation = (a: number, b: number) => number;

type Operation2 = {
  (a: number, b: number): number;
};

// 오버로드 시그니처
function func(a: number): void;
function func(a: number, b: number, c: number): void;

// 구현부
// function func() {}
// function func(a: number) {}
function func(a: number, b?: number, c?: number) {
  if (typeof b === "number" && typeof c === "number") {
    console.log("시그니처 2번째꺼");
  } else {
    console.log("시그니처 1번째꺼");
  }
}

func(1);
func(1, 2, 3);

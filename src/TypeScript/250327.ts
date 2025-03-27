function func<T>(value: T): T {
  return value;
}

let num = func(10);
let string = func("string");
let boolean = func(true);

let arr = func([1, 2, 3]);
let arr1 = func([1, 2, 3] as [number, number, number]);
let arr2 = func<[number, number, number]>([3, 4, 5]);

/**
 *  a , b의 값을 입력하면 [b , a] 값을 return
 *  a, b는 type이 다를수 있음.
 */
function swap<T, U>(a: T, b: U) {
  return [b, a];
}
swap(1, "s");

/**
 * 어떤 배열이든 0번째 인덱스값을 리턴해줌
 */
function zeroIndex<T>(arr: [T, ...unknown[]]): T {
  return arr[0];
}

let a = zeroIndex([0, 3, 4, 5]);
let b = zeroIndex(["몽", 12, true]);
let c = zeroIndex([true, 12, false]);
console.log(zeroIndex, b, c);

/**
 * 매개변수 data 의 length 를 반환해줘야함
 * 단, 숫자같이 length를 가지고있는 경우는 쓰지 못하도록 해야함
 */

// 해당함수는 data.length의 타입은 타입 매개변수 T에 의해
// number로 이미 확정돼 있어 따로 return type을 명시하지 않아도 됨
function findLength<T extends { length: number }>(data: T) {
  return data.length;
}

// findLength(123); ERR

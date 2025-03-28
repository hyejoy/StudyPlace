/**
 * 단락평가
 */

function truty() {
  console.log("true 함수");
  return "123";
}

function falsy() {
  console.log("false 함수");
  return undefined;
}

let a = falsy() && truty();
console.log("a : ", a);

let b = truty() && falsy();
console.log("b :  ", b);

let c = falsy() || truty();
console.log("c :  ", c);

let person = {
  name: "이정환",
  age: 27,
};

let { name, age, extra } = person;
console.log({ name, age, extra });

/**
 * spread 연산자
 */

let arr = [1, 2, 3];
function funcA(...rest) {
  console.log(rest);
}
function funcB(param1, ...rest) {
  console.log(param1);
  console.log(rest);
}

funcA(...arr); //[1,2,3]
funcB(...arr); // 1 [2,3]

/**
 * for of 반복문
 * -> 오직 배열을 순회하는데에만 사용하는 반복문
 */

for (let item of arr) {
  console.log(item);
}

// object의 key들을 배열로 반환
let keys = Object.keys(person);

for (let key of keys) {
  console.log(key);
}

// object의 value들을 배열로 반환
let values = Object.values(person);

for (let value of values) {
  console.log(value);
}

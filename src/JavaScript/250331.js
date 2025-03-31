// 단락평가

function truty() {
  console.log("true함수");
  return 123;
}
function falsy() {
  console.log("false함수");
  return null;
}

let a = truty() && falsy();
console.log("-------------------------");
/**
 * 정답 :a = null, 둘다 실행됨
 */
let b = falsy() && truty();
/**
 * 정답 : b = null, false함수만 실행됨
 */
console.log("-------------------------");
let c = truty() || falsy();
/**
 * 정답 : c = 123, true함수만 실행됨
 */
console.log("-------------------------");
let d = falsy() || truty();
/**
 * 정답 : d = 123, 둘다 실행됨
 */
console.log("-------------------------");

console.log(`a = ${a}`);
console.log(`b = ${b}`);
console.log(`c = ${c}`);
console.log(`d = ${d}`);

// 배열 순회 for of _ index 사용안함
let arr = [1, 2, 3, 4, 5];

for (let item of arr) {
  console.log(item);
}

let person = {
  name: "CHJ",
  age: 27,
  hasDog: true,
  PetNamt: "Susu",
};

// 객체 키값 뽑기
let keys = Object.keys(person);
console.log(`key List : ${keys}`);

// 배열순회 for of
for (let key of keys) {
  const value = person[key];
  console.log(`value : ${value}`);
}

// 객체 value값들 뽑기
let values = Object.values(person);
console.log(`value List : ${values}`);

//객체 순회 for in

for (let key in person) {
  const value = person[key];
  console.log("🔑: ", key, value);
}

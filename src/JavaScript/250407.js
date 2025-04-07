let dog = {
  name: "수수",
  age: 4,
  color: "gold",
};

// 구조분해 할당

let { name, age, color, hobby } = dog;
console.log(name, age, color, hobby);

let arr1 = [1, 2, 3, 4];

function funcA(param, ...rest) {
  console.log("param :", param);
  console.log("rest :", rest);
}

funcA(...arr1);

// 배열 순회_인덱스 사용 안함
for (let item of arr1) {
  console.log(item);
}

// 객체 key만 뽑아오기

let keys = Object.keys(dog);
console.log(keys);

for (let key of keys) {
  console.log(`${key} : ${dog[key]}`);
}

// 객체 값만 뽑아오기
let values = Object.values(dog);
console.log(values);

// 객체 순회 _ for in

for (let key in dog) {
  const value = dog[key];
  console.log("🐶", key, value);
}

/**
 * ✅ 콜백함수
 */

function repeat(count) {
  for (let idx = 1; idx <= count; idx++) {
    console.log(idx);
  }
}

function repeatDouble(count) {
  for (let idx = 0; idx < count; idx++) {
    console.log(idx * 2);
  }
}

// callback 함수를 활용

function repeatFunction(count, func) {
  for (let index = 0; index < count; index++) {
    func(index);
  }
}

repeatFunction(5, (idx) => {
  console.log(idx);
});

repeatFunction(5, (idx) => {
  console.log(idx * 2);
});

/**
 * 객체 프로퍼티 다루기
 */

// 1. 프로퍼티 꺼내오기

let person = {
  name: "최혜조",
  age: 29,
  job: "FrontEndDeveloper",
  company: "Toss",
  favoriteSkill: "JavaScript",
  favoriteGame: "lol",
};

let a = person.name;
let b = person["name"];
let string = "name";
let c = person[string];

console.log(`a는 ${a}`);
console.log(`b는 ${b}`);
console.log(`c는 ${c}`);

// 프로퍼티 추가하기
person.dogName = "수수";
person["hasDog"] = true;

console.log("추가 : ", person);

// 프로퍼티 수정하기
person.favoriteGame = null;
person["favoriteSkill"] = "React";
console.log("수정 : ", person);

// 프로퍼티 삭제하기
delete person.favoriteGame;
console.log("삭제 : ", person);

// 프로퍼티 존재 유무 확인하기
if ("age" in person) {
  console.log("age 프로퍼티 있음");
}

/**
 * 사용자 정의 타입가드
 */

import { profile } from "console";
import { Interface } from "readline";

type Dog = {
  name: string;
  isBark: boolean;
};

type Cat = {
  name: string;
  isScratch: boolean;
};

type Animal = Dog | Cat;

/**
 * 서로소 유니온 타입을 만들지 못하는 상황이라고 가정했을때
 * 반환값이 true 인 경우 animal 은 Dog 타입이다. 를 뜻함
 */

function isDog(animal: Animal): animal is Dog {
  return (animal as Dog).isBark !== undefined;
}

function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).isScratch !== undefined;
}

function warning(animal: Animal) {
  if (isDog(animal)) {
    animal.isBark;
  } else if (isCat(animal)) {
    animal.isScratch;
  }
}

// Animal의 프로퍼티 + isBark 프로퍼티 객체 타입으로 정의됨
// 💡 상속받는 인터페이스에서 동일한 프로퍼티를 재정의 할 수 있음
//    단 원본타입의 서브타입이여야만 함.

interface Animals {
  name: string;
  age: number;
}

interface Chicken extends Animals {
  isFly: boolean;
  fly(): void;
}

interface Cow extends Animals {
  isShy: boolean;
  shy(): void;
}

interface FlyCow extends Chicken, Cow {}

const flyCow: FlyCow = {
  name: "나는소",
  age: 3,
  isFly: true,
  isShy: true,
  isCute: true,
  fly() {
    console.log("나는 소");
  },
  shy() {
    console.log("부끄럽소");
  },
};

// 선언합침 가능
interface Animals {
  isCute: boolean;
}

// map 메서드

const arr = [1, 2, 3];
arr.map((item) => item * 2);

function map<T>(arr: T[], callback: (value: T) => T) {
  let result = [];
  for (let idx = 0; idx < arr.length; idx++) {
    result.push(callback(arr[idx]));
  }

  return result;
}

map(arr, (value) => value * 2);
map(["iam", "person"], (value) => value.toUpperCase());

function foreEach<T>(arr: T[], callback: (value: T) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

foreEach(arr, (value) => value * 5);

/**제네릭 인터페이스 */
interface Keypare<K, V> {
  key: K;
  value: V;
}

const keyPair: Keypare<string, number> = {
  key: "string",
  value: 123,
};

let keyPair2: Keypare<boolean, string[]> = {
  key: true,
  value: ["123", "234"],
};

// 인덱스시그니처

interface NumberMap {
  [key: string]: number;
}

// 제네릭 인터페이스 + 인덱스 시그니처
interface Map<V> {
  [key: string]: V;
}

const stringMap: Map<string> = {
  ob: "d",
  ob2: "c",
};

type Map2<V> = {
  [key: string]: V;
};
/**
 * 자바스크립트에서는 객체의 모든 키는 자동으로 문자열로 변환돼.
 * 타입 정의 [key: string]은 "문자열 key만 허용"이라는 의미야.
 * 객체 키로 true를 넣었지만, 자바스크립트는 이걸 "true"라는 문자열로 자동 변환해줌.
 * 결국 타입스크립트는 "true"라는 string key를 보고 있는 거라서 타입도 일치함 → ❌오류 없음.
 */
const NumberMap2: Map2<number> = {
  true: 123,
};

/**
 * 언제 사용할 수 있나?
 * 제네릭 인터페이스 활용 예시
 * -> 유저 관리 프로그램
 * -> 유저 구분 : 학생 유저 / 개발자 유저
 */

interface Student {
  type: "student";
  school: string;
}

interface Developer {
  type: "developer";
  skill: string;
}

interface User<T> {
  name: string;
  profile: T;
}

function gotoScholl(user: User<Student>) {
  const school = user.profile.school;
  console.log(school + "등교");
}

function works(user: User<Developer>) {
  const skill = user.profile.skill;
  console.log(skill + "로 개발");
}

const user1: User<Developer> = {
  name: "최해초",
  profile: {
    skill: "TypeScript",
    type: "developer",
  },
};

const user2: User<Student> = {
  name: "이정환",
  profile: {
    school: "GKK 학교",
    type: "student",
  },
};

console.log(works(user1));
console.log(gotoScholl(user2));

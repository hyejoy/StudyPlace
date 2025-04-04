/**
 * map, forEach 메서드 타입 정의하기,
 */

import { Key } from "readline";

function map<T, U>(arr: T[], callback: (value: T) => U) {
  const result = [];
  for (let idx = 0; idx < arr.length; idx++) {
    result.push(callback(arr[idx]));
  }
  return result;
}

const arr1 = [1, 2, 3];
const arr2 = ["hi", "hello", "good"];

map(arr1, (value) => {
  value * 2;
});

map(arr2, (value) => {
  parseInt(value);
});

function forEach<T>(arr: T[], callback: (value: T) => void) {
  for (let idx = 0; idx < arr.length; idx++) {
    callback(arr[idx]);
  }
}

const result1 = forEach(arr1, (value) => {
  console.log(value * 5);
});

/**
 *제네릭 인터페이스 & 제네릭 타입 별칭,
    -> 제네릭 인터페이스는 제네릭 함수와 달리 타입으로 정의할대 반드시 타입변수 <> 안에 정의해줘야함.
 */

interface Keyboard<K, V> {
  key: K;
  value: V;
}

const GK806: Keyboard<string, number> = {
  key: "독거미",
  value: 123,
};

const GU8199C: Keyboard<number, boolean> = {
  key: 1289990,
  value: true,
};

// 활용
interface Game<V> {
  rank: number;
  gameInfo: V;
}

interface LeagueOfLegned {
  type: "MOBA";
  sickness: boolean;
}

interface PUBG {
  type: "Shooting Survival";
  site: "https://www.pubg.kr";
}

function DisorderOfTheGame(game: Game<LeagueOfLegned>) {
  `${game.gameInfo.sickness}`;
}

function shootingGameInfo(game: Game<PUBG>) {
  `${game.gameInfo.site}`;
}

// 인덱스 시그니처 + 제네릭
interface Signature<V> {
  [key: string]: V;
}

/**
 * keyof 연산자,
 * 객체의 프로퍼티의 키값들을 유니온 '스트링'타입으로 만들고 싶을때 사용
 */

type Person = {
  name: string;
  age: number;
  job: string;
};

type PersonKey = keyof Person;
function personValuePrint(person: Person, key: PersonKey) {
  return person[key];
}

const person1: Person = {
  name: "최수수",
  age: 4,
  job: "home protecter",
};
const job = personValuePrint(person1, "job");
console.log(job);

/**
 *맵드 타입, [ 인터 페이스 사용 X ]
  - 
 */

type User = {
  id: number;
  name: string;
  age: number;
};

type MappedType = { [key in keyof User]?: User[key] };

function updateUser(user: MappedType) {
  //.. 기능
  user.age;
}

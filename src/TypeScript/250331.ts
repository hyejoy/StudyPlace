/**
 * map, forEach 메서드 타입 정의하기,
 * 제네릭 인터페이스 & 제네릭 타입 별칭,
 */

import { rejects } from "assert";
import { resolve } from "path";

let arr = [1, 2, 3];
let arr2 = ["string", "array", "list"];

function map<T>(arr: T[], callback: (value: T) => T): T[] {
  let result = [];
  for (let idx = 0; idx < arr.length; idx++) {
    result.push(callback(arr[idx]));
  }
  return result;
}

map(arr, (value: number) => {
  return value * 2;
});

function map1<T, U>(arr: T[], callback: (value: T) => U): U[] {
  let result = [];
  for (let idx = 0; idx < arr.length; idx++) {
    const res = callback(arr[idx]);
    result.push(res);
  }
  return result;
}

map1(arr2, (value) => {
  return value.toUpperCase();
});

map1(arr, (value) => {
  return value.toFixed();
});

/**
 * 제네릭 인터페이스 & 제네릭 타입 별칭,
 */

interface KyePare<K, V> {
  key: K;
  value: V;
}

// 제네릭 인터페이스와 문법만 다르지 거의 비슷
type TypePare<K, V> = {
  key: K;
  value: V;
};

let keyPare1: KyePare<string, number> = {
  key: "string",
  value: 3,
};

let keyPare2: KyePare<boolean, string[]> = {
  key: true,
  value: ["hi", "hello"],
};

interface Map<K> {
  [key: string]: K;
}

let stringMap: Map<string> = {
  key1: "string1",
  key2: "string2",
};

let numberMap: Map<Number> = {
  key1: 1,
  key2: 2,
  key3: 3,
};

/**
 *  제네릭 인터페이스 활용예시
 *  : 유저 관리 프로그램
 *  : 유저 구분 : 학생유저 / 개발자유저
 *
 */

/**
 * 💡 제네릭 인터페이스를 이용하면
 *   비교적 코드와 타입들의 유형을 깔끔하게 분리 해 줄수 있다.
 */

interface Student {
  type: "student";
  school: string;
}

interface Developer {
  type: "developer";
  skill: string;
}

interface User<K> {
  name: string;
  profile: K;
}

function gotoSchool(user: User<Student>) {
  user.profile.school;
}

function dev(user: User<Developer>) {
  user.profile.skill;
}

/**
 * 제네릭 클래스
 */
class NumberList {
  constructor(private list: number[]) {}

  push(data: number) {
    this.list.push(data);
  }

  pop() {
    return this.list.pop();
  }
  print() {
    console.log(this.list);
  }
}

class GenericList<K> {
  constructor(private list: K[]) {}

  push(data: K) {
    this.list.push(data);
  }

  pop() {
    this.list.pop();
  }

  print() {
    console.log(this.list);
  }
}

const numberList = new GenericList<number>([1, 2, 3]);
const stringList = new GenericList<string>(["hi", "hello"]);

/**
 * 프로미스 제네릭활용
 */

const promise = new Promise<number>((resolve, rejects) => {
  setTimeout(() => {
    resolve(20);
    rejects("실패");
  }, 2000);
});

// err type은 any타입으로 떨어지므로 타입좁히기를 사용
promise
  .then((res) => {
    console.log(res * 10);
  })
  .catch((err) => {
    if (typeof err === "string") {
      console.log(err);
    }
  });

interface Post {
  id: number;
  title: string;
  content: string;
}

/**방법 1: Promise 에 제네릭 타입변수 선언 */
function fetchPost() {
  return new Promise<Post>((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "게시글제목",
        content: "게시글 내용",
      });
    }, 3000);
  });
}

/** 방법 2: 함수 반환값으로 Promise 제네릭 설정 🌸 */
function fetchPost2(): Promise<Post> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "게시글제목",
        content: "게시글 내용",
      });
    }, 2000);
  });
}

const postRequest = fetchPost2();

postRequest
  .then((res) => console.log(res))
  .catch((err) => {
    if (typeof err === "string") {
      console.log("뭔가 잘못됐어용");
    }
  });

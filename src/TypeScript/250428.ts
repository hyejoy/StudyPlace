/**
 * map, forEach 메서드 타입 정의하기,
 * 제네릭 인터페이스 & 제네릭 타입 별칭,
 * 제네릭 클래스,
 * 프로미스와 제네릭,
 */

function map<T, U>(array: T[], callback: (value: T) => U) {
  const result: U[] = [];
  array.forEach((item) => result.push(callback(item)));

  return result;
}

function forEacch<T>(arr: T[], callback: (value: T) => void) {
  for (let idx = 0; idx < arr.length; idx++) {
    callback(arr[idx]);
  }
}

interface KeyPare<T, U> {
  key: T;
  vlaue: U;
}

// 제네릭 인터페이스 + 인덱스 시그니처
interface Map<V> {
  [key: string]: V;
}

interface Studnet {
  type: "student";
  school: string;
}

interface Developer {
  type: "developer";
  skill: "REACT" | "JAVA" | "Vue";
}

interface User<V> {
  name: string;
  profile: V;
}

function goToSchool(user: User<Studnet>) {
  return user.profile.school;
}

function fetchUser(): Promise<User<Developer>> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "CHJ",
        profile: {
          type: "developer",
          skill: "REACT",
        },
      });
    }, 2000);
  });
}

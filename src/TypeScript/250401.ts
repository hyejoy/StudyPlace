/**
 * 사용자 정의 타입가드
 */

type Dog = {
  name: string;
  isBark: boolean;
};

type Cat = {
  name: string;
  isScratch: boolean;
};

type Animal = Dog | Cat;

function isDog(animal: Animal): animal is Dog {
  return (animal as Dog).isBark !== undefined;
}

function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).isScratch !== undefined!;
}

function searchAnimalType(animal: Animal) {
  if (isDog(animal)) {
    console.log("🐶");
  } else if (isCat(animal)) {
    console.log("🐱");
  }
}

/**
 * 인터페이스
 * 오버로딩은 함수표현식 X 호출 시그니처만 가능
 * 상속, 합침 특수한 기능 제공
 */

interface IPerson {
  readonly name: string;
  age?: number;
  sayHi: () => void; // 함수표현식
  sayHi2(): void; // 호출시그니처
  sayHi2(name: string): void;
}

/**
 * 인터페이스 확장하기
 *  💡 인터페이스는 객체 타입이면 다 확장 할 수 있다.
 * 상속받는 인터페이스에서 동일한 프로퍼티를 재정의 할 수 있음 . 단 원본타입의 서브타입이여야만 함.
 */

/**
 * 인터페이스 합치기
 * 💡 인터페이스는 동일한 이름으로 정의해도, 오류가 나지 않는다.
 *    그 이유는, 동일한 이름인 인터페이스들은 합쳐지기 때문이다. [ 선언 합침 ]
 *    하지만 동일한 프로퍼티를 중복 정의하는데, 타입을 다르게 정의하는 경우는 충돌이나 허용하지 않음
 *    반드시, 중복되는 프로퍼티는 동일한 타입으로만 정의해줘야한다. 서브타입도 X
 *    모듈보강할때 주로 사용
 */

/**
 * 타입조작 하기 _ 인덱스드 엑세스 타입
 * : 객체, 배열, 튜플에 사용가능
 */

interface Post {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
    star: boolean;
  };
}

const post: Post = {
  title: "제목",
  content: "내용",
  author: {
    id: 1,
    age: 29,
    name: "이름",
    star: true,
  },
};

function printAuthorInfo(autor: Post["author"]) {
  autor.id;
  autor.age;
  autor.name;
  autor.star;
}

function printAuthorId(id: Post["author"]["id"]) {
  console.log(id);
}

// 배열 타입으로부터 특정 요소의 타입을 뽑아오기
type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];

const post1: PostList[number] = {
  title: "제목",
  content: "내용",
  author: {
    id: 1,
    name: "이정환",
    age: 27,
  },
};

function printAuthorInfo2(author: PostList[number]["author"]) {
  author.age;
  author.id;
  author.name;
}

type Tup = [number, string, boolean];

type Tup0 = Tup[0]; // number
type Tup1 = Tup[1]; // string
type Tup2 = Tup[2]; // boolean
type Typ3 = Tup[number]; // number | string | boolean

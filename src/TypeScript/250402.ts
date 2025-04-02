/**
 * keyof연산자
 * 특정 객체 타입으로부터 프로퍼티 키들을 유니온 스트링타입으로 추출
 */

interface Person {
  name: string;
  age: number;
}

function getPropertyKey(person: Person, key: keyof Person) {
  return person[key];
}

const person1: Person = {
  name: "해초",
  age: 27,
};

const name = getPropertyKey(person1, "name");
console.log(name);

// typeof 응용

function getPropertyKey2(person: Person, key: keyof typeof person) {
  return person[key];
}

const age = getPropertyKey2(person1, "age");
console.log(age);

/**
 * 맵드 타입 ⭐⭐⭐⭐🌞
 * [ key in keyof Type ] : Type[key]
 * : 기존의 객체타입을 기반으로 새로운 객체 타입을 만드는 문법
 * 인터페이스에서는 사용불가임
 */

interface User {
  name: string;
  age: number;
  star: boolean;
}

function getUser(): User {
  //... 기능
  return {
    name: "수수",
    age: 4,
    star: true,
  };
}

// 제네릭 인덱스 시그니처 [참고]
interface Map<V> {
  [key: string]: V;
}

type PertialUser = {
  [key in keyof User]?: User[key];
};
// 한명의 유저정보를 수정하는데, 변경되는값만 프로퍼티에 담아서 보내고싶다?

function updateUser(user: PertialUser) {
  // ... 수정하는기능
}

const user1: PertialUser = {
  name: "최수수",
};

updateUser(user1); // name만 넘김

// 전부 boolean 타입으로 바꾸기
type BooleanUser = {
  [key in keyof User]: boolean;
};

// fetch 함수 읽기 전용 객체 반환해야한다면?
type ReadOnlyUser = {
  readonly [key in keyof User]: User[key];
};

// 제네릭 클래스
class GenericList<V> {
  constructor(private list: V[]) {}

  push(value: V) {
    this.list.push(value);
  }

  pop() {
    return this.list.pop();
  }
}

// 제네릭 클래스는 제네릭 인터페이스나 타입과 다르게 생성자 호출할때 타입변수에 따라 타입을 추론하기때문에
// 반드시 타입을 명시해주지 않아도 됨
const numberList = new GenericList([1, 2, 3, 4, 5, 6]);
numberList.pop();
console.log(numberList);
numberList.push(888);
console.log(numberList);

// 프로미스 제네릭

interface Post {
  id: number;
  title: string;
  content: string;
}

function fetchPost(id: Post["id"]): Promise<Post> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id === 0) {
        reject("없는 게시글 입니다.");
      }

      resolve({
        id: 1,
        title: "제목",
        content: "내용",
      });
    }, 2000);
  });
}

fetchPost(0)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

fetchPost(1)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

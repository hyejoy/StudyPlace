/**
 * 타입 조작하기,
 * 인덱스드 엑세스 타입,
 */

interface Post {
  id: number;
  title: string;
  author: {
    userId: string | number;
    name: string;
    star: boolean;
  };
}

const post: Post = {
  id: 1,
  title: "첫 게시글",
  author: {
    userId: "user123",
    name: "김정환",
    star: true,
  },
};

// 원본타입이 수정되어도 별도의 수정이 필요없다
// 인덱스에 들어오는값은 값이 아닌 타입으로, 스트링 리터럴 타입이 들어온거라고 보면됨
function printAuthorInfo(author: Post["author"]) {
  console.log(
    `${author.userId}님은 ${author.name}이며, 올해 유명작가 ${author.star} 상태이십니다.`
  );
}

printAuthorInfo(post.author);

// 중첩으로도 가져올 수 있음
function printAuthorName(name: Post["author"]["name"]) {
  console.log(name);
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

function getPost(post: PostList[number]) {
  console.log(post.author);
}

function getPostAuthorName(name: PostList[number]["author"]["name"]) {
  return name;
}

type Tup = [number, string, boolean];

type NumberType = Tup[0];
type StringType = Tup[1];
type BooleanType = Tup[2];

type UnionType = Tup[number];

/**
 *템플릿 리터럴 타입
 */

type Color = "red" | "yellow" | "black";

type Animal = "dog" | "duck" | "cat";

type templeteType = `${Color}-${Animal}`;

/**
 * 조건부 타입 소개
 * 삼항연산자를 통해 타입을 결정
 */

type A = number extends string ? string : number;

type StringNumberSwitch<T> = T extends string ? number : string;

let varA: StringNumberSwitch<number> = "123";
let varB: StringNumberSwitch<string> = 123;

// 오버로딩 시그니처

function removeSpace<T>(data: T): T extends string ? string : undefined;

function removeSpace(data: any) {
  if (typeof data === "string") {
    return data.replaceAll(" ", "");
  } else return undefined;
}

const result = removeSpace(" Hi! My Name is HyeJo!🌸 ");
result.toLowerCase();

const result2 = removeSpace(undefined);

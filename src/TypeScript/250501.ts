/**
 * 제네릭 클래스
 * 프로미스와 제네릭
 * 타입 조작하기
 * 인덱스드 엑세스 타입
 */

class Map<T> {
  constructor(public list: T[]) {}

  push(value: T) {
    this.list.push(value);
  }

  printList() {
    console.log(this.list);
  }
}

const stringMap = new Map<string>(["test"]);
stringMap.push("ddd");
stringMap.printList();

interface Post {
  id: number;
  title: string;
  content: string;
  user?: {
    id: string;
    nickName: string | number;
  };
}

function fetchPost(): Promise<Post> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 0,
        title: "title",
        content: "contente",
      });
    }, 2000);
  });
}

//인덱스드 엑세스타입
type UserInfo = Post["user"];

const user1: UserInfo = {
  id: "user1",
  nickName: 1113,
};

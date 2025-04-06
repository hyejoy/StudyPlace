/**
 * 제네릭 클래스
 */

class GenericClass<T> {
  constructor(private list: T[]) {}

  push(data: T) {
    this.list.push(data);
  }
  pop() {
    this.list.pop();
  }

  print() {
    console.log(this.list);
  }
}

/**
 * 프로미스와 제네릭
 */
interface Post {
  id: number;
  title: string;
  content: string;
}

const post1: Post = {
  id: 1,
  title: "타이틀",
  content: "내용",
};
/**방법 1 Pormise에 제네릭 타입변수 선언 */
function fetchPost1() {
  return new Promise<Post>((resolve, reject) => {
    if (!post1) {
      reject("포스트 없음");
    }

    resolve(post1);
  });
}
/**방법 2 함수의 반환값으로 Promise<Post>로 설정*/

function fetchPost2(): Promise<Post> {
  return new Promise((resolve, reject) => {
    if (!post1) {
      reject("포스트 없음");
    }
    resolve(post1);
  });
}

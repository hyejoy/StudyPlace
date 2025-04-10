/**
맵드 타입 기반의 유틸리티 타입 1 - Partial, Required, Readonly,
 */

interface Post {
  id: number;
  title: string;
  content: string;
  thumbnailUrl?: string;
}

// Partial : 타입변수로 전달한 모든 타입의 모든 프로퍼티를 선택적 프로퍼티로 바꿔준다.
const draft: Partial<Post> = {};

// Required : 타입변수로 전달한 모든 타입의 모든 프로퍼티를 필수 프로퍼티로 바꿔준다

const importantPost: Required<Post> = {
  id: 1,
  content: "필수",
  title: "제목필수",
  thumbnailUrl: "",
};

// readonly : 모든 프로퍼티를 읽기전용 프로퍼티로 만들어줌

const readOnlyPost: Readonly<Post> = {
  id: 1,
  content: "",
  title: "",
};

// readOnlyPost.title = "변경불가";

// Exclude : 제외

type stringExclude = Exclude<Post[keyof Post], string>;

// Extract : 추출
type stringExtract = Extract<Post[keyof Post], string>;

// ReturnType<T> : 함수 반환값 추출
function funcA() {
  return "hello1";
}

type ReturnA = ReturnType<typeof funcA>;

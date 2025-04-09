/**
 * 사용자 정의 타입 가드
 */

interface Dog {
  name: string;
  bark: boolean;
}

interface Cat {
  name: string;
  scratch: boolean;
}

type Animal = Dog | Cat;

function isDog(animal: Animal): animal is Dog {
  return (animal as Dog).bark !== undefined;
}

function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).scratch !== undefined;
}

// 인터페이스는 동일한 이름으로 정의해도 오류안나고 합쳐짐, [선언합침] -- 모듈보강할때 사용

/**
 * 인덱스드 엑세스 타입
 */

interface Person {
  name: string;
  age: number;
  job: string;
  skill: {
    firstSkill: string;
    secondSkill: string;
  };
}

function printPersonJob(job: Person["job"]) {
  return job;
}

function printPersonSkill(skill: Person["skill"]["firstSkill"]) {
  return skill;
}

/**
 * 맵드 타입 기반의 유틸리티 타입
 * Partial, Required, Readonly
 */

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

// 임시 게시글

const draft: Partial<Post> = {
  title: "임시저장",
  content: "초안..",
};

type Partial<T> = {
  [key in keyof T]?: T[key];
};

// 필수 게시글

const importantPost: Required<Post> = {
  title: "",
  content: "",
  tags: [],
  thumbnailURL: "",
};

type Required<T> = {
  [key in keyof T]-?: T[key];
};

// Readonly 게시글

const readOnlyPost: Readonly<Post> = {
  title: "보호된 게시글",
  tags: [],
  content: "",
};

type Readonly<T> = {
  readonly [key in keyof T]: T[key];
};

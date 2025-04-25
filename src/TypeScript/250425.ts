/**
 * 사용자 정의 타입가드
 * -> 함수를 이용하여 타입가드를 만드는 문법
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
  return (animal as Cat).isScratch !== undefined;
}

function dogOrCat(animal: Animal) {
  if (isDog(animal)) {
    console.log("개입니다.");
  } else if (isCat(animal)) {
    console.log("고냥이입니다.");
  }
}

/**
 * 인터페이스,
 * 인터페이스 확장하기,
 * 인터페이스 합치기,
 */

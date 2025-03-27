// 타입가드

type Dog = {
  name: string;
  isBark: boolean;
};

type Cat = {
  name: string;
  isScratch: boolean;
};

type Animal = Dog | Cat;

function test1(animal: Animal) {
  if ("isBark" in animal) {
    animal.name = "🐶";
  } else if ("isScratch" in animal) {
    animal.name = "🐱";
  }
}

function test2(animal: Animal): animal is Dog {
  return (animal as Dog).isBark !== undefined;
}

function test3(animal: Animal): animal is Cat {
  return (animal as Cat).isScratch !== undefined;
}

function test4(animal: Animal) {
  if (test2(animal)) {
    animal.isBark;
  } else if (test3(animal)) {
    animal.isScratch;
  }
}

interface Animals {
  name: string;
  age: number;
}

interface Chicken extends Animals {
  isFly: boolean;
}

// 합쳐짐
interface Animals {
  color: string;
}

const chicken: Chicken = {
  name: "교촌",
  age: 12,
  color: "Red",
  isFly: false,
};

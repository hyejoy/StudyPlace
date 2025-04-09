/**
 * Employee : [private]name / [protected]age / position /
 *ExecutiveOfficer : officeNumber
 */

class Employee {
  constructor(
    private name: string,
    protected age: number,
    public poisition: string
  ) {}

  work() {
    console.log("일함");
  }

  changeName(name: string) {
    this.name = name;
  }
}

class ExecutiveOfficer extends Employee {
  constructor(
    name: string,
    age: number,
    poistion: string,
    public officeNumber: number
  ) {
    super(name, age, poistion);
    this.officeNumber = officeNumber;
  }

  changeAge(age: number): void {
    this.age = this.age;
  }
}

/**
 * 인터페이스와 클래스
 */

interface CharacterInterface {
  name: string;
  speed: number;
  move(): void;
}

class Character implements CharacterInterface {
  constructor(public name: string, public speed: number) {}
  move(): void {
    console.log("move");
  }
}

/**
 * keyof 연산자
 */
interface User {
  id: number;
  name: string;
  age: number;
}

function getUserInfo(User: User, key: keyof User) {
  return User[key];
}

/**
 * 맵드 타입
 */

type PertialUser = {
  [key in keyof User]?: User[key];
};

/**
 * 맵드 타입 기반의 유틸리티 타입 2 - Pick, Omit, Record,
 */

const name: Pick<User, "name" | "age"> = {
  name: "이름",
  age: 12,
};

const noNmae: Omit<User, "name"> = {
  age: 12,
  id: 2,
};

type ThumbnailLegacy = {
  large: {
    url: string;
  };
  medium: {
    url: string;
  };
  small: {
    url: string;
  };
  watch: {
    url: string;
  };
};

type Thumbnail = Record<
  "large" | "medium" | "small" | "watcg",
  { url: string }
>;

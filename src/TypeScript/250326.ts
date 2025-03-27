import { StdioNull } from "child_process";

class Student {
  // 필드
  name: string;
  age: number;
  grade: string;

  // 생성자
  constructor(name: string, age: number, grade: string) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }

  //함수
  study() {
    console.log("열심히 공부함");
  }
  introduce() {
    console.log("안녕하세요");
  }
}

const studentA = new Student("이정환", 25, "B+");
console.log(studentA);

const studentB: Student = {
  name: "김민미",
  age: 23,
  grade: "A+",
  introduce() {
    console.log("Class의 Type취급");
  },
  study() {},
};

console.log(studentB);

/** 상 속 */
class PlusStudent extends Student {
  // 필드
  plusPlace: string;

  constructor(name: string, age: number, grade: string, plusPlace: string) {
    super(name, age, grade);
    this.plusPlace = plusPlace;
  }
}

const newPlus = new PlusStudent("완자", 33, "A+", "플러스반");

console.log(newPlus);

/** 접근 제어
 * public / private / protected
 */

class Employee {
  private name: string;
  protected age: number;
  grade: string;

  constructor(name: string, age: number, grade: string) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }

  work() {
    console.log("토스에서 일해요💜");
  }

  // private 값 변경하고싶은경우
  changePrivateValue(name: string) {
    this.name = name;
  }
}

class ExecutiveOfficer extends Employee {
  officeNumber: number;

  constructor(name: string, age: number, grade: string, officeNumber: number) {
    super(name, age, grade);
    this.officeNumber = officeNumber;
  }

  changeProtectedValue(age: number) {
    this.age = age;
  }
}

class 필드정의생략 {
  constructor(
    public name: string,
    private age: number,
    protected grade: number
  ) {}
}

interface CharacterInterface {
  name: string;
  score: number;
  op: boolean;
}

class Character implements CharacterInterface {
  constructor(
    public name: string,
    public score: number,
    public op: boolean,
    public speed: number // 필드에 선언하면 중복 선언으로 인식함
  ) {}

  move() {
    console.log(this.speed++);
  }
}

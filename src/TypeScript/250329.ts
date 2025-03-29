class Employee {
  name: string;
  age: number;
  position: string;

  constructor(name: string, age: number, poisiton: string) {
    this.name = name;
    this.age = age;
    this.position = poisiton;
  }

  work() {
    console.log("일해용");
  }
}

/**
 * 생성자에 접근제어자 붙히문 필드정의 생략 가능, 값도 자동할당됨
 */

class Student {
  constructor(
    public name: string,
    protected age: number,
    private position: string
  ) {}
}

/**
 * 인터페이스와 클래스
 */

interface CharacterInterface {
  name: string;
  moveSpeed: number;
  move(): void;
}

class Character implements CharacterInterface {
  // 인터페이스에 정의된 필드들은 무조건 public
  constructor(public name: string, public moveSpeed: number) {}
  move(): void {
    this.moveSpeed++;
  }
}

const mercy = new Character("mercy", 78);

console.log(mercy);

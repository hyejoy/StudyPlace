/**
 * 자바스크립트의 클래스
 */

class Student {
  name;
  age;
  school;

  constructor(name, age, school) {
    this.name = name;
    this.age = age;
    this.school = school;
  }

  goToSchool() {
    return this.school;
  }
}

class Employee extends Student {
  constructor(name, age, school, job) {
    super();
    this.job = job;
  }

  works() {
    return this.job;
  }
}

const emp1 = new Employee("이름", 21, "대학교", "인턴");

let arr5 = [
  { name: "이정환" },
  { name: "홍길동" },
  { name: "이정환" },
  { name: "홍길동" },
];

const test = arr5.find((item) => item.name === "이정환");

// name이 이정환인 첫번째 객체를 return;
console.log(test);

function add(a, b, callback) {
  console.log("5");
  setTimeout(() => {
    const sum = a + b;
    callback(sum);
  }, 4000);
}

add(2, 3, (value) => {
  console.log(value);
});

function add2(param) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof param === "number") {
        resolve(param + 10);
      } else {
        reject("param Type 이 number 가아닙니다 ===> " + typeof param);
      }
    }, 4000);
  });

  return promise;
}

const p = add2(10);
p.then((res) => {
  console.log(res);
  return add2(res);
})
  .then((res) => {
    console.log(res);
    return add2(res);
  })
  .then((res) => {
    console.log(res);
    return add2(res);
  })
  .catch((err) => {
    console.log("err!", err);
  });

async function func1() {
  return {
    name: "최혜조",
    age: 27,
  };
}

console.log(func1());

async function waitPlease() {
  const data = await func1();
  console.log("data는 >>>", data);
}

waitPlease();

/**
 * 자바스크립트 클래스
 */

class Student {
  // 필드
  name;
  age;
  grade;

  //생성자
  constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }

  // 메서드
  study() {
    console.log(`${name}은 학교에서 공부중!`);
  }
}

let sutdentA = new Student("김아무개", 16, "A");

// 클래스는 확장 가능
class Developer extends Student {
  favoriteSkill;

  constructor(name, age, grade, favoriteSkill) {
    super(name, age, grade);
    this.favoriteSkill = favoriteSkill;
  }

  study() {
    console.log("오버라이딩~");
  }
}

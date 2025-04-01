function orderFood(callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const food = "떡볶이";
      callback(food);
      resolve(food);
    }, 1500);
  });
}

function cooldonwFood(food, callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const cooldonwFood = `식은 ${food}`;
      callback(cooldonwFood);
      resolve(cooldonwFood);
    }, 1500);
  });
}

function freezeFood(food, callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const freezeFood = `얼린 ${food}`;
      callback(freezeFood);
      resolve(freezeFood);
    }, 1500);
  });
}

orderFood((value) => {
  console.log(value);
}).then((food) => {
  cooldonwFood(food, (food) => {
    console.log(food);
  }).then((food) => {
    freezeFood(food, (food) => {
      console.log(food);
    }).catch((err) => {
      console.log(err);
    });
  });
});

// async 는 promise를 반환하는 함수로 변환시켜준다.
// 이 함수는 getData()를 호출하면 자동으로 Promise.resolve({...}) 형태로 감싸서 반환함
async function getData() {
  return {
    name: "해초",
    age: 27,
    hasDog: true,
    petName: "수수",
  };
}

function fetchData() {
  getData().then((res) => console.log(res));
}

// await를 async를 붙힌 함수 내부에서만 사용이 가능하다.

async function printData() {
  const data = await getData();
  console.log(data);
}

fetchData();
printData();

//🍀 실수
/**
 * 이 getData 함수는 async라고 되어 있지만, setTimeout 안의 return 값은 바깥의 getData 함수에 아무 영향도 주지 못해.
 * 즉, setTimeout 내부 return은 콜백 함수 안에서만 의미 있고, getData() 자체는 undefined를 암시적으로 반환하게 돼.
 */
async function getData_2() {
  setTimeout(() => {
    return {
      name: "해초",
      age: 27,
      hasDog: true,
      petName: "수수",
    };
  }, 1500);
}

// 📌 해결방법
/**
 *
 * setTimeout은 비동기지만 Promise를 반환하지 않음 → 직접 Promise로 래핑해야 함
 * async 함수는 내부적으로 Promise를 반환하기 때문에, await이나 .then()이 가능하려면 return new Promise(...)를 써야 의미 있음
 */
async function getData_3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: "해초",
        age: 27,
        hasDog: true,
        petName: "수수",
      });
    }, 1500);
  });
}

function fetchData() {
  getData().then((res) => console.log(res));
}

fetchData(); // 1.5초 뒤에 정상 출력됨

// throw는 reject를 의미
async function getData_4() {
  const success = false; // 예: 실패 상황이라고 가정

  if (!success) {
    throw new Error("데이터를 불러오는 데 실패했습니다.");
  }

  return {
    name: "해초",
    age: 27,
    hasDog: true,
    petName: "수수",
  };
}

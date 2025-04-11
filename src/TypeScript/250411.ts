/**
 * map, forEach 메서드
 */

function map<T, U>(arr: T[], callback: (value: T) => U) {
  let result = [];
  for (let idx = 0; idx < arr.length; idx++) {
    result.push(callback(arr[idx]));
  }
  console.log(result);
  return result;
}

const arr1 = [1, 2, 3, 4];

map(arr1, (value) => {
  return value + "say hi!";
});

function forEach<T>(arr: T[], callback: (value: T) => void) {
  for (let idx = 0; idx < arr.length; idx++) {
    callback(arr[idx]);
  }
}

forEach(arr1, (value) => {
  console.log(value);
});

interface GernericList<T> {
  list: T[];
  listName: string;
}

const numberList: GernericList<number> = {
  list: [1, 2, 3, 4],
  listName: "numberList",
};

interface KeyPare<K, V> {
  key: K;
  value: V;
}

let keyPair: KeyPare<number, boolean> = {
  key: 1,
  value: true,
};

interface GenericMap<T> {
  [key: string]: T;
}

let stringMap: GenericMap<string> = {
  str1: "str1_V",
  str2: "str2_V",
  str3: "str3_V",
};

/** Pick , Omit, Record */

interface Post {
  id: number;
  title: string;
  content: string;
  tag?: string[];
  thumbNail?: string;
}

const tagPost: Pick<Post, "tag"> = {
  tag: ["나는", "토스에 합격할고야"],
};

const extractContent: Omit<Post, "content"> = {
  id: 1,
  title: "썸네일 제외",
};

interface thumbNail {
  phone: {
    url: string;
    size: number;
  };
  iPad: {
    url: string;
    size: number;
  };
  PC: {
    url: string;
    size: number;
  };
}

type ReocordThumbNail = Record<
  "phone" | "iPad" | "PC",
  { url: string; size: number }
>;

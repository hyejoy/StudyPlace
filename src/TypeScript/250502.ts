/**
 * keyof 연산자
 * 맵드 타입
 */

interface Book {
  id: number;
  title: string;
  author: {
    name: string;
    age: number;
    besttseller: boolean;
  };
}

type KeyofType = keyof Book;

function getPropertyKeys(book: Book, key: keyof Book) {
  return book[key];
}

const book1: Book = {
  id: 1,
  title: "책이름1",
  author: {
    name: "chj",
    age: 29,
    besttseller: true,
  },
};

const authorInfo = getPropertyKeys(book1, "author");
console.log(authorInfo);

type AllTypeT<T> = {
  [key in keyof Book]: T;
};

type ChangeOptional = {
  [key in keyof Book]?: Book[key];
};

type ChangeReadOnly = {
  readonly [key in keyof Book]: Book[key];
};

/**
 * 인덱스드 엑세스 타입,
 */

interface Book {
  name: string;
  date: Date;
  author: {
    name: string;
    age: number;
    rank: boolean;
  };
  bookmark?: boolean;
}

function bookAuthorInfo(author: Book["author"]) {
  return author;
}

function bookRank(rank: Book["author"]["rank"]) {
  return rank;
}

/**
 * 맵드 타입 기반의 유틸리티 타입 1 - Partial, Required, Readonly,
 */

type PartialBook = Partial<Book>;
type RequiredBook = Required<Book>;
type ReadonlyBook = Readonly<Book>;

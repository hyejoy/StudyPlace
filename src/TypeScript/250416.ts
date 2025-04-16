/**
 * key of
 */

interface Person {
  name: string;
  age: number;
  school: string;
  job: {
    department: string;
    Period: Date;
  };
}

type JobList = keyof Person["job"];

/**
 * 맵드
 */

type PersonList = {
  [key in keyof Person]: Person[key];
};

/*
 *맵드 타입 기반의 유틸리티 타입 2 - Pick, Omit, Record,
 */

type JobList2 = Pick<Person, "job">;
type ExtractJobList = Omit<Person, "job">;

type JobRecord = Record<
  "job1" | "job2?" | "job3?" | "job4?" | "job5?",
  { department: string; Peroid: Date; annual: number }
>;

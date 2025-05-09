/**
 * 맵드 타입 기반의 유틸리티 타입 2 - Pick, Omit, Record,
 */

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

const legacyPost: Pick<Post, "content" | "title"> = {
  title: "옛날 제목",
  content: "옛날글",
};

const noTitlePost: Omit<Post, "title"> = {
  content: "",
  tags: [],
};

type Thumnail = Record<"large" | "medium" | "small" | "watch", { url: string }>;

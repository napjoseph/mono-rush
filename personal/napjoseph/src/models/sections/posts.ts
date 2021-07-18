export interface Post {
  title: string;
  href: string;
  tags: PostTag[];
  snippet: string;
  publishedDate: string;
  readingTime: string;
}

export interface PostTag {
  name: string;
  href: string;
  color: string;
}

export interface Post {
  title: string;
  slug?: string;
  href?: string;
  tags?: string[];
  excerpt?: string;
  publishedDate?: string;
  readingTime?: string;
  content?: string;
  disableComments?: boolean;
}

export interface PostTag {
  name: string;
  description?: string;
  slug?: string;
  color?: string;
}

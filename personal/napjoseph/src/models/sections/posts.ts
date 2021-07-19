export interface Post {
  title: string;
  slug?: string;
  href?: string;
  tags?: string[];
  excerpt?: string;
  publishedDate?: string;
  readingTime?: string;
  content?: string;
}

// TODO: Create a different configuration for this and the categories.
export interface PostTag {
  name: string;
  href: string;
  color: string;
}

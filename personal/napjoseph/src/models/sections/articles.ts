import { MDXRemoteSerializeResult } from 'next-mdx-remote/dist/types';

export interface Article {
  title: string;
  layout: string;
  slug: string;
  draft?: boolean;
  rawContent?: string;
  frontMatter?: ArticleFrontMatter;
  serializedContent?: MDXRemoteSerializeResult;
  excerpt?: string;
}

export interface ArticleFrontMatter {
  [key: string]: any;
  title?: string;
  publishedDate?: string;
  tags?: string[];
  description?: string;
  disableComments?: boolean;
  draft?: boolean;
}

export interface ArticleTag {
  name: string;
  description?: string;
  slug?: string;
  color?: string;
}

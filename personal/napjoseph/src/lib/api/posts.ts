import fs from 'fs-extra';
import { join } from 'path';

import matter from 'gray-matter';

import { Post } from '../../models';
import slugify from '../utils/slugify';
import getExcerpt from '../utils/get-excerpt';

const POSTS_DIRECTORY = join(process.cwd(), 'src/_content/posts');

export const getPostFiles = (): string[] => {
  return fs.readdirSync(POSTS_DIRECTORY);
};

export const getPostSlugs = (): string[] => {
  return getPostFiles().map((slug) => slug.replace(/\.md$/, ''));
};

export const getPostBySlug = (slug: string): Post => {
  const fullPath = join(POSTS_DIRECTORY, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const cleanedContent = (content || '').trim();

  return {
    title: data['title'] || '',
    slug: slug || '',
    tags: data['tags'] || [],
    publishedDate: data['publishedDate'] || '',
    content: cleanedContent,
    excerpt: data['excerpt'] || getExcerpt(cleanedContent)
  };
};

export const getAllPosts = (): Post[] => {
  const slugs = getPostSlugs();

  return slugs
    .map((slug) => getPostBySlug(slug))
    .sort((post1, post2) => (post1.publishedDate > post2.publishedDate ? -1 : 1));
};

export const getAllPostsByTag = (tagName: string): Post[] => {
  return getAllPosts().filter((post) => (post.tags || []).includes(tagName));
};

export const getAllPostsByTagSlug = (tagSlug: string): Post[] => {
  return getAllPosts().filter((post) =>
    (post.tags || []).map((tag) => slugify(tag)).includes(tagSlug)
  );
};

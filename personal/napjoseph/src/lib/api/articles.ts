import fs from 'fs-extra';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import remarkAutolinkHeadings from 'remark-autolink-headings';
import remarkSlug from 'remark-slug';
// import remarkCodeTitles from 'remark-code-titles';

import { Article } from '../../models';
import parseFrontMatter from '../utils/parse-front-matter';
import getExcerpt from '../utils/get-excerpt';
import slugify from '../utils/slugify';

const DATA_DIR = path.join(process.cwd(), 'src', 'data', 'articles');

export const getArticleBySlug = async (layout: string, slug = ''): Promise<Article> => {
  const source = slug
    ? fs.readFileSync(path.join(DATA_DIR, layout, `${slug}.mdx`), 'utf8')
    : fs.readFileSync(path.join(DATA_DIR, `${layout}.mdx`), 'utf8');

  const { data, content } = matter(source);
  const frontMatter = parseFrontMatter(data);
  const serializedContent = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [
        remarkAutolinkHeadings,
        remarkSlug
        // TODO: Create a custom plugin since this creates a separate element
        // than the actual code.
        // remarkCodeTitles
      ]
    }
  });

  return {
    title: frontMatter.title || '',
    layout,
    slug,
    frontMatter,
    rawContent: content,
    excerpt: getExcerpt(content),
    serializedContent
  };
};

const getAllArticleFileNames = (layout: string): string[] => {
  return fs.readdirSync(path.join(DATA_DIR, layout));
};

export const getArticles = async (layout: string): Promise<Article[]> => {
  const slugs = getAllArticleFileNames(layout).map((slug) => slug.replace(/\.mdx$/, ''));
  const articles = await Promise.all(slugs.map((slug) => getArticleBySlug(layout, slug)));
  const sorted = articles.sort((a, b) =>
    a.frontMatter.publishedDate > b.frontMatter.publishedDate ? -1 : 1
  );

  return sorted;
};

export const getArticlesByTag = async (layout: string, tagName: string): Promise<Article[]> => {
  const articles = await getArticles(layout);

  return articles.filter((post) => (post.frontMatter.tags || []).includes(tagName));
};

export const getArticlesByTagSlug = async (layout: string, tagSlug: string): Promise<Article[]> => {
  const articles = await getArticles(layout);

  return articles.filter((post) =>
    (post.frontMatter.tags || []).map((tag) => slugify(tag)).includes(tagSlug)
  );
};

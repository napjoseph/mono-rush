import * as fs from 'fs-extra';

import { Article } from '../src/models';
import { getArticles } from '../src/lib/api/articles';
import { generateSiteUrl } from '../src/lib/utils/site-url';

const generateSiteMapBody = ({
  rootUrl,
  articles
}: {
  rootUrl: string;
  articles: Article[];
}): string => {
  const today = new Date().toISOString();
  const url = generateSiteUrl(rootUrl);

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${url}calub/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  ${articles
    .map(({ slug, frontMatter: { publishedDate } }) => {
      return `
  <url>
    <loc>${url}posts/${slug}</loc>
    <lastmod>${publishedDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
    })
    .join('')}
</urlset>`;
};

export const generateSiteMap = async (rootUrl: string, targetFolder: string): Promise<void> => {
  if (!rootUrl || rootUrl === '' || !targetFolder || targetFolder === '') {
    throw new Error('Missing required environment variables');
  }

  const articles = await getArticles('posts');

  const body = generateSiteMapBody({ rootUrl, articles });
  const path = `${targetFolder}/sitemap.xml`;

  await fs.writeFile(path, body);
};

generateSiteMap(process.env.ROOT_URL, process.env.TARGET_FOLDER);

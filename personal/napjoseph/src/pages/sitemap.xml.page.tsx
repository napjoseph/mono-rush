import { Article, ArticleTag } from '../models';
import { getArticles } from '../lib/api/articles';
import { getArticleTags } from '../lib/api/tags';
import { generateSiteUrl } from '../lib/utils/head-data';

const generateSiteMap = ({
  articles,
  tags
}: {
  articles: Article[];
  tags: ArticleTag[];
}): string => {
  const rootUrl = generateSiteUrl();
  const today = new Date().toISOString();

  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>${rootUrl}</loc>
      <lastmod>${today}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>
    </url>
    <url>
      <loc>${rootUrl}calub/</loc>
      <lastmod>${today}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.9</priority>
    </url>
    <url>
      <loc>${rootUrl}posts/</loc>
      <lastmod>${today}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.5</priority>
    </url>
    <url>
      <loc>${rootUrl}tags/</loc>
      <lastmod>${today}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.5</priority>
    </url>
    ${articles
      .map(({ slug, frontMatter: { publishedDate } }) => {
        return `
    <url>
      <loc>${rootUrl}posts/${slug}</loc>
      <lastmod>${publishedDate}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>
    `;
      })
      .join('')}
    ${tags
      .map(({ slug }) => {
        return `
    <url>
      <loc>${rootUrl}tags/${slug}</loc>
      <lastmod>${today}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.5</priority>
    </url>
    `;
      })
      .join('')}
  </urlset>
 `;
};

const SiteMap = () => {
  // noop: getServerSideProps will do the heavy lifting.
};

export const getServerSideProps = async ({ res }) => {
  const articles = await getArticles('posts');
  const tags = await getArticleTags('posts');

  const sitemap = generateSiteMap({ articles, tags });

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {}
  };
};

export default SiteMap;

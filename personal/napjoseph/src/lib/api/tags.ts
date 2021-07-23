import { ArticleTag } from '../../models';
import slugify from '../utils/slugify';
import { getArticles } from './articles';

export const getArticleTags = async (layout: string): Promise<ArticleTag[]> => {
  const posts = await getArticles(layout);

  const tagsSet = new Set<string>();
  (posts || []).forEach((post) => {
    (post.frontMatter.tags || []).forEach((tag) => {
      tagsSet.add(tag);
    });
  });

  const tags: ArticleTag[] = [];
  tagsSet.forEach((tag) => {
    tags.push({
      name: tag,
      slug: slugify(tag)

      // TODO: Create a separate config with the colors for each unique tag.
    });
  });

  return tags;
};

export const getArticleTagBySlug = async (
  layout: string,
  tagSlug: string
): Promise<ArticleTag | null> => {
  const tags = await getArticleTags(layout);
  const filtered = tags.filter((tag) => tag.slug === tagSlug);

  return filtered.length >= 0 ? filtered[0] : null;
};

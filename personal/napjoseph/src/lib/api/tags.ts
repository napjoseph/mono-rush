import { PostTag } from '../../models';
import slugify from '../utils/slugify';
import { getAllPosts } from './posts';

export const getAllPostTags = (): PostTag[] => {
  const posts = getAllPosts();

  const tagsSet = new Set<string>();
  (posts || []).forEach((post) => {
    (post.tags || []).forEach((tag) => {
      tagsSet.add(tag);
    });
  });

  const tags: PostTag[] = [];
  tagsSet.forEach((tag) => {
    tags.push({
      name: tag,
      slug: slugify(tag)

      // TODO: Create a separate config with the colors for each unique tag.
    });
  });

  return tags;
};

export const getTagBySlug = (tagSlug: string): PostTag | null => {
  const tags = getAllPostTags().filter((tag) => tag.slug === tagSlug);

  return tags.length >= 0 ? tags[0] : null;
};

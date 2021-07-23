import { ArticleTag } from '../../models';
import slugify from './slugify';

const convertToArticleTag = (tagName: string): ArticleTag => {
  return {
    name: tagName,
    slug: slugify(tagName)

    // TODO: Create a separate config with the colors for each unique tag.
  };
};

export default convertToArticleTag;

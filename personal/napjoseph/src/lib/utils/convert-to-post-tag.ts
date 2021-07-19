import { PostTag } from '../../models';
import slugify from './slugify';

const convertToPostTag = (tagName: string): PostTag => {
  return {
    name: tagName,
    slug: slugify(tagName)

    // TODO: Create a separate config with the colors for each unique tag.
  };
};

export default convertToPostTag;

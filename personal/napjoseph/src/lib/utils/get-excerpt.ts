import { SITE_CONFIG } from '../../config';

const getExcerpt = (text: string): string => {
  let maxLength = 150;
  if (
    SITE_CONFIG.posts !== undefined &&
    SITE_CONFIG.posts.excerpt !== undefined &&
    SITE_CONFIG.posts.excerpt.maxLength !== undefined
  ) {
    maxLength = SITE_CONFIG.posts.excerpt.maxLength;
  }

  return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
};

export default getExcerpt;

import { SITE_URL } from '../../config';

export const generateSiteUrl = (url?: string): string => {
  let rootUrl = '';
  if (!url || url === '') {
    rootUrl = SITE_URL || 'https://napjose.ph/';
  } else {
    rootUrl = url;
  }
  return rootUrl.endsWith('/') ? rootUrl : `${rootUrl}/`;
};

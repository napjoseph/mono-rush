import { SITE_CONFIG } from '../../config';
import { HeadData } from '../../models';

export const generateSiteUrl = (): string => {
  const { rootUrl } = SITE_CONFIG;
  if (!rootUrl || rootUrl === '') return 'https://napjose.ph/';
  return rootUrl.endsWith('/') ? rootUrl : `${rootUrl}/`;
}

export const generateSiteTitle = (pageTitle?: string): string => {
  if (!pageTitle || pageTitle === '') return SITE_CONFIG.title || '';
  const suffix = SITE_CONFIG.title ? ` | ${SITE_CONFIG.title}` : '';
  return `${pageTitle}${suffix}`;
};

export const generateSiteDescription = (pageDescription?: string): string => {
  if (!pageDescription || pageDescription.trim() === '') return SITE_CONFIG.description || '';

  return pageDescription;
};

export const createHeadData = (data: Partial<HeadData>): HeadData => {
  const defaultData: HeadData = (SITE_CONFIG.metadata || {}).defaultHeadData || {};

  return {
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,

    ...defaultData,
    ...data
  };
};

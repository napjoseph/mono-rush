import { SITE_CONFIG } from '../../config';

export const generateSiteTitle = (pageTitle: string): string => {
  const suffix = SITE_CONFIG.title ? ` | ${SITE_CONFIG.title}` : '';

  return `${pageTitle}${suffix}`;
};

export const generateSiteDescription = (pageDescription?: string): string => {
  if (!pageDescription || pageDescription.trim() === '') return SITE_CONFIG.description || '';

  return pageDescription;
};

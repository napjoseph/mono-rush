import { IconLookup } from '@fortawesome/fontawesome-svg-core';

export interface HeaderConfig {
  introText?: string;
  fullName: string;
  image?: HeaderImage;
  links?: HeaderLinksItem[];
}

export const DEFAULT_HEADER_CONFIG: HeaderConfig = {
  fullName: ''
};

export interface HeaderLinksItem {
  title: string;
  value: string;
  linkTo?: string;
  icon: IconLookup;
}

export interface HeaderImage {
  show: boolean;
  source?: 'static' | 'external';
  path?: string;
}

export const DEFAULT_HEADER_IMAGE: HeaderImage = {
  show: false
};

import { IconLookup } from '@fortawesome/fontawesome-svg-core';

export interface HeaderConfig {
  introText?: string;
  fullName: string;
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

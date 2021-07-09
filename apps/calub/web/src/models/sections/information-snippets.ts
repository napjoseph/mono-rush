import { IconLookup } from '@fortawesome/fontawesome-svg-core';

export interface InformationSnippetItem {
  title: string;
  value: string;
  linkTo?: string;
  icon: IconLookup;
}

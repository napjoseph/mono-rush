import { UtterancesProps } from 'utterances-react-component';

import { SiteNavigationLinkItem } from './site-navigation-links';
import { SocialLinkItem } from './social-links';

export interface SiteConfig {
  title: string;
  description?: string;
  navbar?: {
    links?: SiteNavigationLinkItem[];
  };
  footer?: {
    copyright: {
      year?: string;
      name?: string;
    };
    social?: {
      links: SocialLinkItem[];
    };
  };
  comments?:
    | {
        using: 'none';
      }
    | {
        using: 'utterances';
        props: UtterancesProps;
      };
}

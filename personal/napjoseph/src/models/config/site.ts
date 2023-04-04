import { UtterancesProps } from 'utterances-react-component';

import { OpenGraphData } from '../open-graph/open-graph-data';
import { HeadData } from './head-data';
import { SiteNavigationLinkItem } from './site-navigation-links';
import { SocialLinkItem } from './social-links';

export interface SiteConfig {
  rootUrl: string;
  title: string;
  description?: string;
  metadata?: {
    defaultHeadData?: HeadData;
    defaultOpenGraph?: OpenGraphData;
  };
  navbar?: {
    links?: SiteNavigationLinkItem[];
  };
  posts?: {
    excerpt?: {
      maxLength?: number;
    };
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

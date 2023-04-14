import { SiteConfig } from './models';

export const SITE_URL = 'https://napjose.ph';

export const SITE_CONFIG: SiteConfig = {
  title: 'Nap Joseph Calub',
  description: 'Software Engineer and Open Source Enthusiast',
  metadata: {
    defaultHeadData: {
      charSet: 'UTF-8',
      keywords: 'web development, software engineering, blog, go, typescript',
      author: 'Nap Joseph Calub'
    },
    defaultOpenGraph: {
      ogImage: 'https://napjose.ph/open-graph.png',
      ogLocale: 'en_US',
      ogType: 'website',
      ogSiteName: 'Nap Joseph Calub'
    }
  },
  navbar: {
    links: [
      {
        name: 'Home',
        href: '/'
      },
      {
        name: 'Posts',
        href: '/posts'
      },
      {
        name: 'View Curriculum Vitae',
        href: 'https://napjose.ph/calub/',
        external: true
      }
    ]
  },
  posts: {
    excerpt: {
      maxLength: 300
    }
  },
  footer: {
    copyright: {
      year: '2021',
      name: 'Nap Joseph Calub'
    },
    social: {
      links: [
        {
          name: 'GitHub',
          href: 'https://github.com/njncalub',
          icon: 'FaGithub'
        },
        {
          name: 'Keybase',
          href: 'https://keybase.io/njncalub',
          icon: 'FaKeybase'
        },
        {
          name: 'LinkedIn',
          href: 'https://linkedin.com/in/njncalub',
          icon: 'FaLinkedin'
        }
      ]
    }
  },
  comments: {
    using: 'utterances',
    props: {
      repo: 'napjoseph/napjoseph-comments',
      theme: 'preferred-color-scheme',
      issueTerm: 'pathname'
    }
  }
};

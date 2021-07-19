import { SiteConfig } from './models';

export const SITE_CONFIG: SiteConfig = {
  title: 'Nap Joseph Calub',
  description: 'not only working software, but also well-crafted software',
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
        name: 'Tags',
        href: '/tags'
      },
      {
        name: 'View Curriculum Vitae',
        href: 'https://napjose.ph/calub',
        external: true
      }
    ]
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
          icon: {
            prefix: 'fab',
            iconName: 'github'
          }
        },
        {
          name: 'Keybase',
          href: 'https://keybase.io/njncalub',
          icon: {
            prefix: 'fab',
            iconName: 'keybase'
          }
        },
        {
          name: 'LinkedIn',
          href: 'https://linkedin.com/in/njncalub',
          icon: {
            prefix: 'fab',
            iconName: 'linkedin'
          }
        }
      ]
    }
  }
};

import React from 'react';

import Link from 'next/link';

import SiteNavigation from '../site-navigation/site-navigation.component';
import { SiteNavigationLinkItem } from '../../../models';

import classes from './header.module.scss';

/* eslint-disable-next-line */
interface HeaderProps {}

const Header: React.FC<HeaderProps> = (_props) => {
  const title = 'Nap Joseph Calub';
  const description = 'not only working software, but also well-crafted software';
  const siteNavigationLinks: SiteNavigationLinkItem[] = [
    {
      name: 'Home',
      href: '/'
    },
    {
      name: 'View Curriculum Vitae',
      href: 'https://napjose.ph/calub',
      external: true
    }
  ];

  return (
    <header className={classes.container}>
      <div className={classes.content}>
        <div className={classes.inner}>
          <Link href="/">
            <a className={classes.title}>
              <h1>{title}</h1>
            </a>
          </Link>

          <p className={classes.description}>{description}</p>

          {siteNavigationLinks && (
            <div className={classes.navigation}>
              <SiteNavigation links={siteNavigationLinks} />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

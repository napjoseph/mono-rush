import React from 'react';

import Link from 'next/link';

import SiteNavigation from '../site-navigation/site-navigation.component';
import { SITE_CONFIG } from '../../../config';

import classes from './header.module.scss';

/* eslint-disable-next-line */
interface HeaderProps {}

const Header: React.FC<HeaderProps> = (_props) => {
  const title = SITE_CONFIG.title;
  const description = SITE_CONFIG.description || '';
  const siteNavigationLinks = SITE_CONFIG.navbar.links || [];

  return (
    <header className={classes.container}>
      <div className={classes.content}>
        <div className={classes.inner}>
          <Link href="/">
            <a className={classes.title}>
              <h1>{title}</h1>
            </a>
          </Link>

          {description !== '' && <p className={classes.description}>{description}</p>}

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

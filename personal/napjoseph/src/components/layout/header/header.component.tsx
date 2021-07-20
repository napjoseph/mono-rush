import React from 'react';

import Link from 'next/link';
import { motion } from 'framer-motion';

import SiteNavigation from '../site-navigation/site-navigation.component';
import { SITE_CONFIG } from '../../../config';

import classes from './header.module.scss';
import SiteLogo from '../../assets/site-logo.component';

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
          <div className={classes.site}>
            <div className={classes.branding}>
              <Link href="/">
                <a className={classes.logo} title={title}>
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    variants={{
                      hidden: {
                        rotate: 0,
                        opacity: 0
                      },
                      visible: {
                        rotate: 180,
                        opacity: 1,
                        transition: {
                          duration: 0.3
                        }
                      },
                      hover: {
                        rotate: 0,
                        scale: 1.2,
                        transition: {
                          duration: 0.3
                        }
                      }
                    }}
                  >
                    <div className={classes.big}>
                      <SiteLogo height={'120'} width={'120'} fill={'#1d4ed8'} />
                    </div>
                    <div className={classes.small}>
                      <SiteLogo height={'50'} width={'50'} fill={'#1d4ed8'} />
                    </div>
                  </motion.div>
                </a>
              </Link>
              <Link href="/">
                <a className={classes.title} title={title}>
                  <h1 className={classes.value}>{title}</h1>
                </a>
              </Link>
            </div>

            {description !== '' && <p className={classes.description}>{description}</p>}
          </div>

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

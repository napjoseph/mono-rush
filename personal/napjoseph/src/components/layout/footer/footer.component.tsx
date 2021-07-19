import React from 'react';

import Link from 'next/link';

import SocialLinks from '../social-links/social-links.component';
import { SITE_CONFIG } from '../../../config';

import classes from './footer.module.scss';

/* eslint-disable-next-line */
interface FooterProps {}

const Footer: React.FC<FooterProps> = (_props) => {
  const year = SITE_CONFIG.footer.copyright.year || '';
  const name = SITE_CONFIG.footer.copyright.name || '';
  const socialLinks = SITE_CONFIG.footer.social.links || [];

  return (
    <footer className={classes.container} aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className={classes.content}>
        <p className="text-base text-gray-400 text-left">
          &copy; {year}{' '}
          <Link href="/">
            <a className={classes.name}>{name}</a>
          </Link>
          . All rights reserved.
        </p>
        {socialLinks && (
          <div className="my-4 flex justify-left space-x-6">
            <SocialLinks socialLinks={socialLinks} />
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import Link from 'next/link';

import SocialLinks from '../social-links/social-links.component';
import { SITE_CONFIG } from '../../../config';
import ThemeSwitcher from '../theme-switcher/theme-switcher.component';

/* eslint-disable-next-line */
interface FooterProps {}

const Footer: React.FC<FooterProps> = (_props) => {
  const year = SITE_CONFIG.footer.copyright.year || '';
  const name = SITE_CONFIG.footer.copyright.name || '';
  const socialLinks = SITE_CONFIG.footer.social.links || [];

  return (
    <footer className="text-center" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="py-10 sm:py-14 flex flex-col gap-4 justify-center">
        <p className="text-base text-gray-400">
          &copy; {year}{' '}
          <Link href="/">
            <a className="font-bold main-link-hover">{name}</a>
          </Link>
          . All rights reserved.
        </p>
        {socialLinks && (
          <div className="flex justify-center space-x-6">
            <SocialLinks socialLinks={socialLinks} />
          </div>
        )}
        <ThemeSwitcher />
      </div>
    </footer>
  );
};

export default Footer;

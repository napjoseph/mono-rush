import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { SocialLinkItem } from '../../../models';

interface SocialLinksProps {
  socialLinks: SocialLinkItem[];
}

const SocialLinks: React.FC<SocialLinksProps> = ({ socialLinks = [] }) => {
  if (!socialLinks) return null;

  return (
    <nav>
      {socialLinks.map((link, index) => {
        return (
          <a
            key={index}
            href={link.href}
            className="inline-block text-gray-400 main-link-hover"
            target="_blank"
            rel="noreferrer"
          >
            <div className="mr-2">
              <FontAwesomeIcon icon={link.icon} fixedWidth className="text-lg" />
            </div>
          </a>
        );
      })}
    </nav>
  );
};

export default SocialLinks;

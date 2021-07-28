import React from 'react';
import { IconButton } from '@chakra-ui/react';

import { SocialLinkItem } from '../../../models';

interface SocialLinkProps {
  link: SocialLinkItem;
}

const SocialLink: React.FC<SocialLinkProps> = ({ link }) => {
  if (!link) return null;

  return (
    <IconButton
      onClick={() => window.open(link.href, '_blank', 'noreferrer')}
      layerStyle="social-link"
      _hover={{ layerStyle: 'social-link-hover' }}
      _focus={{ layerStyle: 'social-link-focus' }}
      aria-label={link.name}
      title={link.name}
      icon={link.icon}
      variant="ghost"
      rounded="full"
    />
  );
};

export default SocialLink;

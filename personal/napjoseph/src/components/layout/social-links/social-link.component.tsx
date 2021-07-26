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
      _hover={{ textColor: 'gray.500' }}
      _focus={{ textColor: 'gray.600', bg: 'gray.100' }}
      aria-label={link.name}
      title={link.name}
      icon={link.icon}
      variant="ghost"
      textColor="gray.300"
      rounded="full"
    />
  );
};

export default SocialLink;

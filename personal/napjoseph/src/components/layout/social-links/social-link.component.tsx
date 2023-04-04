import React from 'react';
import { IconButton } from '@chakra-ui/react';
import { FaGithub, FaKeybase, FaLinkedin } from 'react-icons/fa';

import { SocialLinkItem } from '../../../models';

interface SocialLinkProps {
  link: SocialLinkItem;
}

const SocialLink: React.FC<SocialLinkProps> = ({ link }) => {
  if (!link) return null;

  let icon: JSX.Element;

  // TODO: Temporary fix. Replace this with a better solution.
  if (link.icon === 'FaGithub') icon = <FaGithub />;
  if (link.icon === 'FaKeybase') icon = <FaKeybase />;
  if (link.icon === 'FaLinkedin') icon = <FaLinkedin />;

  return (
    <IconButton
      onClick={() => window.open(link.href, '_blank', 'noreferrer')}
      layerStyle="social-link"
      _hover={{ layerStyle: 'social-link-hover' }}
      _focus={{ layerStyle: 'social-link-focus' }}
      aria-label={link.name}
      title={link.name}
      icon={icon}
      variant="ghost"
      rounded="full"
    />
  );
};

export default SocialLink;

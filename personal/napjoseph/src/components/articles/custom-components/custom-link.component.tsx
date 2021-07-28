import React from 'react';
import { NextChakraLink } from '../../primitives/next-chakra-link';

const CustomLink: React.FC<React.HTMLProps<HTMLAnchorElement>> = ({ href = '', children }) => {
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  return (
    <NextChakraLink
      href={href}
      textStyle="article-link"
      layerStyle="article-link"
      _hover={{ layerStyle: 'article-link-hover' }}
      _focus={{ layerStyle: 'article-link-focus' }}
      isExternal={!isInternalLink}
    >
      {children}
    </NextChakraLink>
  );
};

export default CustomLink;

import React from 'react';

import { Link, useColorMode } from '@chakra-ui/react';
import NextLink from 'next/link';

const CustomLink: React.FC<React.HTMLProps<HTMLAnchorElement>> = (props) => {
  const { colorMode } = useColorMode();
  const color = {
    light: 'brand.600',
    dark: 'brand.500'
  };

  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <NextLink href={href} passHref>
        <Link color={color[colorMode]} fontWeight="semibold">
          {props.children}
        </Link>
      </NextLink>
    );
  }

  return (
    <Link color={color[colorMode]} fontWeight="semibold" isExternal>
      {props.children}
    </Link>
  );
};

export default CustomLink;

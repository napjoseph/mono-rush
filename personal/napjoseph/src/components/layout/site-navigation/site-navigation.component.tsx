import React from 'react';
import { Box, List, ListItem } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import { SiteNavigationLinkItem } from '../../../models';
import { MotionBox } from '../../primitives/motion-box';
import { NextChakraLink } from '../../primitives/next-chakra-link';

interface SiteNavigationProps {
  links: SiteNavigationLinkItem[];
}

const SiteNavigation: React.FC<SiteNavigationProps> = ({ links = [] }) => {
  const router = useRouter();
  const pathname = router ? router.pathname : '';

  if (!links) return null;

  return (
    <Box as="nav">
      <List
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        gridGap={{ base: 1, sm: 2 }}
        justifyContent="center"
      >
        {links.map((link) => (
          <ListItem key={link.name}>
            <SiteNavigationItem link={link} isActive={pathname === link.href} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

interface SiteNavigationItemProps {
  link: SiteNavigationLinkItem;
  isActive?: boolean;
}

const SiteNavigationItem: React.FC<SiteNavigationItemProps> = ({ link, isActive = false }) => {
  return (
    <MotionBox whileHover={{ scale: 1.1 }}>
      <NextChakraLink
        href={link.href}
        isExternal={link.external}
        py={1}
        px={4}
        display="block"
        textAlign="center"
        textStyle="site-navigation"
        layerStyle={isActive ? 'site-navigation-active' : 'site-navigation'}
        _hover={{
          layerStyle: 'site-navigation-hover'
        }}
      >
        {link.name}
      </NextChakraLink>
    </MotionBox>
  );
};

export default SiteNavigation;

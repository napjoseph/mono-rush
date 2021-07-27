import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';

import SiteNavigation from '../site-navigation/site-navigation.component';
import { SITE_CONFIG } from '../../../config';
import SiteLogo from '../../assets/site-logo.component';
import { MotionBox } from '../../primitives/motion-box';
import { NextChakraLink } from '../../primitives/next-chakra-link';

const Header: React.FC = (_props) => {
  const title = SITE_CONFIG.title;
  const description = SITE_CONFIG.description || '';
  const siteNavigationLinks = SITE_CONFIG.navbar.links || [];

  const logo = (
    <MotionBox
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
      <Box display={{ base: 'none', sm: 'block' }}>
        <SiteLogo height={'120'} width={'120'} fill={'#1d4ed8'} />
      </Box>
      <Box display={{ base: 'block', sm: 'none' }}>
        <SiteLogo height={'50'} width={'50'} fill={'#1d4ed8'} />
      </Box>
    </MotionBox>
  );

  return (
    <Flex
      as="header"
      direction="column"
      gridGap={14}
      justify="center"
      alignItems="stretch"
      w="full"
      py={{ base: 10, sm: 14 }}
    >
      <Flex direction="column" textAlign="center">
        <Flex direction="column" justify="center" alignItems="center">
          <NextChakraLink href="/" title={title}>
            {logo}
          </NextChakraLink>
          <NextChakraLink
            href="/"
            fontSize={{ base: '3xl', sm: '5xl' }}
            fontWeight="extrabold"
            title={title}
            layerStyle="site-title"
            _hover={{ layerStyle: 'site-title-hover' }}
          >
            <Text as="h1">{title}</Text>
          </NextChakraLink>
        </Flex>

        {description !== '' && (
          <Text textColor="gray.500" fontSize={{ base: 'xs', sm: 'sm' }}>
            {description}
          </Text>
        )}
      </Flex>

      {siteNavigationLinks && <SiteNavigation links={siteNavigationLinks} />}
    </Flex>
  );
};

export default Header;

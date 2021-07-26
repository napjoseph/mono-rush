import React from 'react';
import Link from 'next/link';
import { Box, Flex, Text } from '@chakra-ui/react';

import SocialLink from '../social-links/social-link.component';
import { SITE_CONFIG } from '../../../config';
import ThemeSwitcher from '../theme-switcher/theme-switcher.component';

const Footer: React.FC = (_props) => {
  const year = SITE_CONFIG.footer.copyright.year || '';
  const name = SITE_CONFIG.footer.copyright.name || '';
  const socialLinks = SITE_CONFIG.footer.social.links || [];

  return (
    <Box as="footer" textAlign="center">
      <Flex direction="column" py={{ base: '10', sm: '14' }} gridGap={1.5} justify="center">
        <Text color="gray.400">
          &copy; {year}{' '}
          <Link href="/">
            <a className="font-bold main-link-hover">{name}</a>
          </Link>
          . All rights reserved.
        </Text>
        {socialLinks && (
          <Flex justify="center" gridGap={2}>
            {socialLinks.map((link, index) => {
              return <SocialLink key={index} link={link} />;
            })}
          </Flex>
        )}
        <ThemeSwitcher />
      </Flex>
    </Box>
  );
};

export default Footer;

import React from 'react';
import { Box, Flex } from '@chakra-ui/react';

import Footer from './footer/footer.component';
import Header from './header/header.component';
import ContentWrapper from './content/content-wrapper.component';
import StaticHead from '../document/static-head.component';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <StaticHead />

      <ContentWrapper>
        <Flex direction="column" gridGap={5}>
          <Header />
          <Box as="main">{children}</Box>
          <Footer />
        </Flex>
      </ContentWrapper>
    </>
  );
};

export default Layout;

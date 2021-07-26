import React from 'react';
import { Box, VStack } from '@chakra-ui/react';

import Footer from './footer/footer.component';
import Header from './header/header.component';
import ContentWrapper from './content/content-wrapper.component';
import StaticHead from '../document/static-head.component';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <StaticHead />

      <ContentWrapper>
        <VStack spacing="5">
          <Header />
          <Box as="main">{children}</Box>
          <Footer />
        </VStack>
      </ContentWrapper>
    </>
  );
};

export default Layout;

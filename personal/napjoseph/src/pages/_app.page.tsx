import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';

import Layout from '../components/layout/layout.component';
import { theme } from '../theme/app';

import '../vendor/font-awesome';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
};

export default App;

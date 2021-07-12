import React from 'react';

import { AppProps } from 'next/app';

import Layout from '../components/layout/layout.component';

import { StateProvider } from '../providers/state';

import '../vendor/font-awesome';
import '../styles/tailwind.scss';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <StateProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StateProvider>
  );
};

export default App;

import React from 'react';
import { AppProps } from 'next/app';

import Layout from '../components/layout/layout.component';

import '../styles/tailwind.scss';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;

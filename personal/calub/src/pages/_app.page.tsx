import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import * as gtag from '../utils/gtag';
import Layout from '../components/layout/layout.component';

import '../vendor/font-awesome';
import '../styles/tailwind.scss';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      // Add other events via `gtag.event`.
      // For more details, check out:
      // https://github.com/vercel/next.js/blob/master/examples/with-google-analytics/pages/contact.js
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;

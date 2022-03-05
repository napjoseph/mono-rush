import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

import { GA_TRACKING_ID } from '../utils/gtag';
import joinClassNames from '../utils/join-class-names';

class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto&display=optional"
            rel="stylesheet"
          />
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `
            }}
          />
        </Head>
        <body className={joinClassNames('bg-gray-700', 'print:bg-white', 'with-scrollbars')}>
          <div>
            <Main />
            <NextScript />
            <div id="portals"></div>
          </div>
        </body>
      </Html>
    );
  }
}

export default Document;

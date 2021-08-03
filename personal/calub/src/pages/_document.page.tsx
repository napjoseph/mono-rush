import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

import joinClassNames from '../utils/join-class-names';

class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head />
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

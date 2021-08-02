import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body className="bg-gray-700 print:bg-white">
          <div id="root" className="lg:my-5 md:my-3 sm:my-2 sm:mx-2">
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

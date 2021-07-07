module.exports = {
  pageExtensions: [
    'page.tsx',
    'page.ts',
    'page.jsx',
    'page.js',
    // used to differentiate the endpoint handlers from regular pages
    'api.tsx',
    'api.ts',
    'api.jsx',
    'api.js'
  ],
  images: {
    // NOTE: Must update when adding external URLs to next/image.
    domains: ['i.imgur.com']
  }
};

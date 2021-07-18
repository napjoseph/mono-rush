module.exports = {
  basePath: process.env.NEXT_PUBLIC_BASEPATH || '',
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
    // Default values at:
    // https://github.com/vercel/next.js/blob/canary/packages/next/server/config-shared.ts
    // This is currently a workaround until the issue is fixed.
    // See: https://github.com/vercel/next.js/issues/21079
    loader: process.env.NEXT_IMAGES_LOADER || 'default',
    path: process.env.NEXT_IMAGES_PATH === '<empty>' ? '' : '/_next/image',
    // NOTE: Must update when adding external URLs to next/image.
    domains: ['images.unsplash.com']
  }
};

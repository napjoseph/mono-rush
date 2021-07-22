import getBaseUrl from './get-base-url';

/**
 * Returns a URL for the endpoint. This assumes that `baseUrl` doesn't have a
 * trailing slash, and that `path` leads with a slash.
 */
const localEndpoint = (path: string): string => {
  const baseUrl = getBaseUrl();
  return `${baseUrl}${path}`;
};

export default localEndpoint;

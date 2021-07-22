const DEFAULT_BASE_URL = 'http://localhost:3000';

const getBaseUrl = (): string => {
  const fromEnv = process.env.NEXT_PUBLIC_BASE_URL || '';
  const baseUrl = (fromEnv ? fromEnv : DEFAULT_BASE_URL).replace(/\/$/, '');

  return baseUrl;
};

export default getBaseUrl;

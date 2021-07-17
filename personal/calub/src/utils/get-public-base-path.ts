const getPublicBasepath = (): string => {
  // For some reason, `import getConfig from 'next/config'` is not exposing the correct
  // environment variables to this component.
  // Using the NEXT_PUBLIC_* version instead.
  return process.env.NEXT_PUBLIC_BASEPATH || '';
};

export default getPublicBasepath;

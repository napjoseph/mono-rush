const joinClassNames = (...classes: string[]): string => {
  return classes.filter(Boolean).join(' ');
};

export default joinClassNames;

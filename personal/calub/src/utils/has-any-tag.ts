const hasAnyTag = (list: string[], from: string[]): boolean => {
  for (let i = 0; i < from.length; i++) {
    if (list.includes(from[i])) return true;
  }
  return false;
};

export default hasAnyTag;

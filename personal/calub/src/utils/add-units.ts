const addUnits = (someNumber: number, unitSingular: string, unitPlural: string): string => {
  switch (someNumber) {
    case 0:
      return '';
    case 1:
      return `${someNumber} ${unitSingular}`;
    default:
      return `${someNumber} ${unitPlural}`;
  }
};

export default addUnits;

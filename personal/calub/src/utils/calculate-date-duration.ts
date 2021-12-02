import { DateTime } from 'luxon';

const calculateDateDuration = (dateStart: string, dateEnd?: string): string => {
  if (!dateEnd) {
    dateEnd = DateTime.now().toFormat('yyyy-MM');
  }

  const { years, months } = DateTime.fromISO(dateEnd).diff(DateTime.fromISO(dateStart), [
    'years',
    'months'
  ]);

  if (years === 0 && months === 0) {
    return 'for a very short while';
  }

  const yearsMessage = addUnits(years, 'year', 'years');
  const monthsMessage = addUnits(months, 'month', 'months');

  return `${yearsMessage} ${monthsMessage}`.trim();
};

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

export default calculateDateDuration;

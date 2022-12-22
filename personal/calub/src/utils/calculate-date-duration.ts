import { DateTime } from 'luxon';

import addUnits from './add-units';

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

export default calculateDateDuration;

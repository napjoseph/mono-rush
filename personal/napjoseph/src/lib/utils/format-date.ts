import { DateTime } from 'luxon';

const formatDate = (dateString: string, formatString = 'LLLL kkkk'): string => {
  return DateTime.fromISO(dateString).toFormat(formatString);
};

export default formatDate;

import { DateTime } from 'luxon';

const formatDate = (dateString: string, formatString = 'LLLL yyyy'): string => {
  return DateTime.fromISO(dateString).toFormat(formatString);
};

export default formatDate;

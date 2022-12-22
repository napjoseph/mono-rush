import addUnits from './add-units';

const calculateTotalUsage = (totalMonths: number): string => {
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  const items: string[] = [];
  if (years !== 0) {
    items.push(addUnits(years, 'year', 'years'));
  }
  if (months !== 0) {
    items.push(addUnits(months, 'month', 'months'));
  }

  return items.join(' and ');
};

export default calculateTotalUsage;

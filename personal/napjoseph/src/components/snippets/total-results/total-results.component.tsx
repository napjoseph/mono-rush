import React from 'react';

interface TotalResultsProps {
  total: number;
  unit?: string;
  unitPlural?: string;
}

const TotalResults: React.FC<TotalResultsProps> = ({ total = 0, unit = 'item', unitPlural }) => {
  const plural = !unitPlural ? `${unit}s` : unitPlural;

  return (
    <div className="block">
      Showing a total of <span className="font-semibold">{total}</span>{' '}
      {total === 0 || total > 1 ? plural : unit}.
    </div>
  );
};

export default TotalResults;

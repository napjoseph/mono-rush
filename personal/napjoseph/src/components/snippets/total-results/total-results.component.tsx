import React from 'react';
import { Box, Text } from '@chakra-ui/react';

interface TotalResultsProps {
  total: number;
  unit?: string;
  unitPlural?: string;
}

const TotalResults: React.FC<TotalResultsProps> = ({ total = 0, unit = 'item', unitPlural }) => {
  const plural = !unitPlural ? `${unit}s` : unitPlural;

  return (
    <Box>
      Showing a total of{' '}
      <Text as="span" fontWeight="semibold">
        {total}
      </Text>{' '}
      {total === 0 || total > 1 ? plural : unit}.
    </Box>
  );
};

export default TotalResults;

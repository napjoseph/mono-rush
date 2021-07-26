import React from 'react';
import { Box } from '@chakra-ui/react';

const ContentWrapper: React.FC = ({ children }) => {
  return (
    <Box
      maxW="4xl"
      mx="auto"
      px={{
        base: '4',
        sm: '6',
        lg: '8'
      }}
    >
      {children}
    </Box>
  );
};

export default ContentWrapper;

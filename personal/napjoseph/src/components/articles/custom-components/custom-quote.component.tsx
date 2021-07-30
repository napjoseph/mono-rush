import React from 'react';
import { Alert, useColorMode } from '@chakra-ui/react';

export interface CustomQuoteProps extends React.HTMLProps<HTMLQuoteElement> {}

const CustomQuote: React.FC<CustomQuoteProps> = ({ children }) => {
  const { colorMode } = useColorMode();
  const bgColor = {
    light: 'brand.50',
    dark: 'brand.900'
  };

  return (
    <Alert
      bg={bgColor[colorMode]}
      variant="left-accent"
      status="info"
      css={{
        '> *:first-of-type': {
          marginTop: 0,
          marginLeft: 8
        }
      }}
    >
      {children}
    </Alert>
  );
};

export default CustomQuote;

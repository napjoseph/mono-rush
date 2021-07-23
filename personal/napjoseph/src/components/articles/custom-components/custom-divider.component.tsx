import React from 'react';
import { Divider, useColorMode } from '@chakra-ui/react';

export interface CustomDividerProps extends React.HTMLProps<HTMLHRElement> {}

const CustomDivider: React.FC<CustomDividerProps> = (_props) => {
  const { colorMode } = useColorMode();
  const borderColor = {
    light: 'gray.200',
    dark: 'gray.600'
  };

  return <Divider borderColor={borderColor[colorMode]} my={4} w="100%" />;
};

export default CustomDivider;

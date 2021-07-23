import React from 'react';
import { Code } from '@chakra-ui/react';

interface CustomCodeInlineProps {
  className?: string;
}

const CustomCodeInline: React.FC<CustomCodeInlineProps> = ({ className, children }) => {
  return (
    <Code
      colorScheme="gray"
      p={1}
      fontSize="xs"
      display="inline"
      overflowWrap="break-word"
      className={className}
    >
      {children}
    </Code>
  );
};

export default CustomCodeInline;

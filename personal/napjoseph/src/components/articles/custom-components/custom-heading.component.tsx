import React from 'react';
import { Flex, Heading, HeadingProps } from '@chakra-ui/react';

import { NextChakraLink } from '../../primitives/next-chakra-link';

const CustomHeading: React.FC<HeadingProps> = (props) => {
  return (
    <Heading pointerEvents="none" my={2} {...props}>
      <Flex pointerEvents="auto" gridGap={1}>
        {props.id && (
          <NextChakraLink
            textStyle="article-link"
            layerStyle="article-link"
            _hover={{ layerStyle: 'article-link-hover' }}
            _focus={{ layerStyle: 'article-link-focus' }}
            aria-label="anchor"
            href={`#${props.id}`}
          >
            #
          </NextChakraLink>
        )}
        {props.children}
      </Flex>
    </Heading>
  );
};

export default CustomHeading;

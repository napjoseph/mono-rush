import React from 'react';
import { Box, Heading, HeadingProps, useColorModeValue as mode } from '@chakra-ui/react';

const CustomHeading: React.FC<HeadingProps> = (props) => {
  return (
    <Heading
      css={{
        scrollMarginTop: '100px',
        scrollSnapMargin: '100px', // Safari
        '&[id]': {
          pointerEvents: 'none'
        },
        '&[id]:before': {
          display: 'block',
          height: ' 6rem',
          marginTop: '-6rem',
          visibility: 'hidden',
          content: `""`
        },
        '&[id]:hover a': { opacity: 1 }
      }}
      {...props}
      mb="1em"
      mt="2em"
    >
      <Box pointerEvents="auto">
        {props.children}
        {props.id && (
          <Box
            aria-label="anchor"
            as="a"
            textStyle="article-link"
            layerStyle="article-link"
            _focus={{
              layerStyle: 'article-link-focus'
            }}
            opacity="0"
            ml="0.375rem"
            href={`#${props.id}`}
          >
            #
          </Box>
        )}
      </Box>
    </Heading>
  );
};

export default CustomHeading;

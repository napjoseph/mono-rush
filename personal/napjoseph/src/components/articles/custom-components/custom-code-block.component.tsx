import React from 'react';
import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import lightTheme from 'prism-react-renderer/themes/vsLight';
import darkTheme from 'prism-react-renderer/themes/vsDark';
import { Box, Code, Text, useColorModeValue as mode } from '@chakra-ui/react';

// https://mdxjs.com/guides/syntax-highlighting#build-a-codeblock-component

interface CustomCodeBlockProps {
  // The className will contain the language defined in the code block.
  className?: string;
  // The filename must be passed to encodeURI(s) in order to display spaces.
  filename?: string;
  // The note must be passed to encodeURI(s) in order to display spaces.
  note?: string;
}

const CustomCodeBlock: React.FC<CustomCodeBlockProps> = ({
  className,
  filename = '',
  note = '',
  children
}) => {
  // TODO: Add more languages:
  // https://github.com/FormidableLabs/prism-react-renderer#faq
  const language: Language = className
    ? (className.replace(/language-/, '') as Language)
    : 'javascript';

  const decodedFilename = decodeURI(filename.trim());
  const decodedNote = decodeURI(note.trim());

  // TODO: Add check if need to show line numbers.

  // Removes the trailing new line created.
  const codeString = String(children).replace(/\n$/, '');

  // Matches value in `theme`.
  const bgColor = mode('#ffffff', '#1e1e1e');

  return (
    <Box>
      {decodedNote && (
        <Text
          textAlign="center"
          textColor={mode('gray.500', 'gray.600')}
          fontSize="xs"
          overflow="auto"
        >
          {decodedNote}
        </Text>
      )}

      <Box className={className} bg={bgColor} m="1" shadow="md">
        {decodedFilename && (
          <Text
            textAlign="center"
            bg={mode('gray.300', 'gray.700')}
            textColor={mode('gray.600', 'gray.300')}
            fontSize="xs"
            py="2"
            px="5"
            overflow="auto"
          >
            {decodedFilename}
          </Text>
        )}

        <Box overflow="auto">
          <Highlight
            {...defaultProps}
            theme={mode(lightTheme, darkTheme)}
            code={codeString}
            language={language}
          >
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
              <Code className={className} p="3" style={{ ...style }}>
                {tokens.map((line, i) => (
                  <div key={i} {...getLineProps({ line, key: i })}>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                ))}
              </Code>
            )}
          </Highlight>
        </Box>
      </Box>
    </Box>
  );
};

export default CustomCodeBlock;

import { Box, Flex, Text } from '@chakra-ui/react';

import CustomCodeBlock from './custom-code-block.component';
import CustomCodeInline from './custom-code-inline.component';
import CustomDivider from './custom-divider.component';
import CustomHeading from './custom-heading.component';
import CustomLink from './custom-link.component';
import CustomQuote from './custom-quote.component';

const CustomComponents: Record<string, React.ReactNode> = {
  h1: (props) => <CustomHeading as="h1" size="xl" {...props} />,
  h2: (props) => <CustomHeading as="h2" size="lg" {...props} />,
  h3: (props) => <CustomHeading as="h3" size="md" {...props} />,
  h4: (props) => <CustomHeading as="h4" size="sm" {...props} />,
  h5: (props) => <CustomHeading as="h5" size="sm" {...props} />,
  h6: (props) => <CustomHeading as="h6" size="xs" {...props} />,
  br: (props) => <Box height="24px" {...props} />,
  p: (props) => <Text as="p" lineHeight="tall" {...props} />,
  ul: (props) => <Flex direction="column" as="ul" pl={4} ml={2} gridGap={1} {...props} />,
  ol: (props) => <Flex direction="column" as="ol" pl={4} ml={2} gridGap={1} {...props} />,
  li: (props) => <Box as="li" {...props} />,
  hr: CustomDivider,
  a: CustomLink,
  blockquote: CustomQuote,
  inlineCode: CustomCodeInline,
  code: CustomCodeBlock
};

export default CustomComponents;

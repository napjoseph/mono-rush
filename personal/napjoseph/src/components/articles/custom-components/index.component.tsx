import { Box, Text } from '@chakra-ui/react';

import CustomCodeBlock from './custom-code-block.component';
import CustomCodeInline from './custom-code-inline.component';
import CustomDivider from './custom-divider.component';
import CustomHeading from './custom-heading.component';
import CustomLink from './custom-link.component';
import CustomQuote from './custom-quote.component';

const CustomComponents: Record<string, React.ReactNode> = {
  h1: (props) => <CustomHeading as="h1" size="xl" fontWeight="bold" {...props} />,
  h2: (props) => <CustomHeading as="h2" size="lg" fontWeight="bold" {...props} />,
  h3: (props) => <CustomHeading as="h3" size="md" fontWeight="bold" {...props} />,
  h4: (props) => <CustomHeading as="h4" size="sm" fontWeight="bold" {...props} />,
  h5: (props) => <CustomHeading as="h5" size="sm" fontWeight="bold" {...props} />,
  h6: (props) => <CustomHeading as="h6" size="xs" fontWeight="bold" {...props} />,
  br: (props) => <Box height="24px" {...props} />,
  p: (props) => <Text as="p" mt={0} lineHeight="tall" {...props} />,
  ul: (props) => <Box as="ul" pt={2} pl={4} ml={2} {...props} />,
  ol: (props) => <Box as="ol" pt={2} pl={4} ml={2} {...props} />,
  li: (props) => <Box as="li" pb={1} {...props} />,
  hr: CustomDivider,
  a: CustomLink,
  blockquote: CustomQuote,
  inlineCode: CustomCodeInline,
  code: CustomCodeBlock
};

export default CustomComponents;

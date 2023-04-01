import {
  Box,
  Center,
  Flex,
  Image,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr
} from '@chakra-ui/react';

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
  img: (props) => (
    <Center as="span">
      <Image src={props.src} alt={props.alt} />
    </Center>
  ),
  table: (props) => (
    <TableContainer>
      <Table variant="striped" {...props} />
    </TableContainer>
  ),
  tr: (props) => <Tr {...props} />,
  th: (props) => <Th {...props} />,
  td: (props) => <Td {...props} />,
  thead: (props) => <Thead {...props} />,
  tbody: (props) => <Tbody {...props} />,
  hr: CustomDivider,
  a: CustomLink,
  blockquote: CustomQuote,
  inlineCode: CustomCodeInline,
  code: CustomCodeBlock
};

export default CustomComponents;

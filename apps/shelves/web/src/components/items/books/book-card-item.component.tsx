import React from 'react';
import { Box, Flex, Text, Image } from '@chakra-ui/react';

import { Book } from '../../../models';
import { getBookThumbnail } from '../../../lib/utils/books';
import formatDate from '../../../lib/utils/format-date';
import { MotionBox } from '../../primitives/motion-box';
import { NextChakraLink } from '../../primitives/next-chakra-link';

interface BookCardItemProps {
  book?: Book;
}

const BookCardItem: React.FC<BookCardItemProps> = ({ book }) => {
  if (!book) return null;

  return (
    <MotionBox whileHover={{ scale: 1.1 }}>
      <Flex direction="column" shadow="lg" p={2} gridGap={2} maxW="210px">
        <Image
          src={getBookThumbnail(book)}
          boxSize="200px"
          objectFit="cover"
          alt={`Cover of ${book.title}`}
          title={`Cover of ${book.title}`}
          draggable={false}
        />
        <Flex direction="column">
          <NextChakraLink href={`/books/${book.id}`} title={book.title}>
            <Text fontSize="medium">{book.title}</Text>
          </NextChakraLink>

          {book.subtitle && (
            <Text fontSize="sm" noOfLines={2}>
              {book.subtitle}
            </Text>
          )}

          {book.authors && (
            <Box fontSize="xs">
              <Text as="span" mr={1}>
                by
              </Text>
              {book.authors.map((author, index) => {
                return (
                  <>
                    <Text as="span" key={index}>
                      {author}
                    </Text>
                    {book.authors.length - 1 !== index && (
                      <Text as="span" mr={1}>
                        ,
                      </Text>
                    )}
                  </>
                );
              })}
            </Box>
          )}

          {book.publishedDate && (
            <Box fontSize="xs">
              <Text as="span" mr={1}>
                Published on
              </Text>
              <Text as="span" title={book.publishedDate}>
                {formatDate(book.publishedDate)}
              </Text>
            </Box>
          )}
        </Flex>
      </Flex>
    </MotionBox>
  );
};

export default BookCardItem;

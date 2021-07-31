import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Flex, Text, Heading } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import localEndpoint from '../../lib/utils/local-endpoint';
import { Book } from '../../models';

const BASE_URL = localEndpoint('/api/books');

const getBook = (slug: string | string[]): Promise<Book | null> => {
  return axios
    .get<Book | null>(`${BASE_URL}/${slug.toString()}`)
    .then((response) => {
      const { data } = response;
      return data;
    })
    .catch(() => {
      return null;
    });
};

const BookPage: React.FC = (_props) => {
  const router = useRouter();
  const { slug } = router.query;

  const [book, setBook] = useState<Book | null>(null);
  useEffect(() => {
    if (!slug) return;

    getBook(slug).then((book: Book | null) => {
      setBook(book);
    });
  }, [slug]);

  if (!book) return null;

  return (
    <Flex direction="column" gridGap={4} maxW="4xl" mx="auto" my={5}>
      <Heading>{book.title}</Heading>
      {book.title && <Text>{book.title}</Text>}
      {book.description && <Text>{book.description}</Text>}
    </Flex>
  );
};

export default BookPage;

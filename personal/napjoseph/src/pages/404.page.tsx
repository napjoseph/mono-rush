import React, { useState } from 'react';
import Image from 'next/image';
import { Box, Heading, Flex, Text, useColorModeValue as mode } from '@chakra-ui/react';

import profilePicture from '../../public/img/me/ws1.jpg';
import { createHeadData, generateSiteDescription, generateSiteTitle } from '../lib/utils/head-data';
import { createOpenGraphData } from '../lib/utils/open-graph-data';
import OpenGraph from '../components/document/open-graph.component';
import DynamicHead from '../components/document/dynamic-head.component';
import { MotionBox } from '../components/primitives/motion-box';

interface Message {
  language: 'english' | 'filipino';
  header: JSX.Element;
  content: JSX.Element;
}

const pageHeader = <Text>Unfortunately, that specific page can&apos;t be found.</Text>;

const pageDescription = (
  <Text>
    But hey, at least you found{' '}
    <Text as="span" fontWeight="semibold" fontStyle="italic">
      me
    </Text>
    .
  </Text>
);

const inFilipino: Message = {
  language: 'filipino',
  header: <Text>Naniniwala ako sa kasabihang:</Text>,
  content: (
    <Text>
      Kung hindi siya para sa akin,
      <br />
      kawawa naman siya.
    </Text>
  )
};

const inEnglish: Message = {
  language: 'english',
  header: <Text>I believe in the saying:</Text>,
  content: (
    <Text>
      If she is not for me,
      <br />
      then it&apos;s considered her loss.
    </Text>
  )
};

const NotFoundPage: React.FC = (_props) => {
  const pageTitle = 'Page Not Found';
  const siteTitle = generateSiteTitle(pageTitle);
  const siteDescription = generateSiteDescription();

  const headData = createHeadData({
    description: siteDescription
  });

  const ogData = createOpenGraphData({
    ogTitle: siteTitle,
    ogDescription: siteDescription
  });

  const [message, setMessage] = useState<Message>(inFilipino);

  return (
    <>
      <DynamicHead data={headData} />
      <OpenGraph data={ogData} />

      <Flex direction="column" gridGap={10}>
        <Flex direction="column" gridGap={6} textAlign="center">
          <Heading>{pageHeader}</Heading>
          <Box>{pageDescription}</Box>
        </Flex>

        <Flex
          direction={{ base: 'column', sm: 'row-reverse' }}
          gridGap={{ base: 7, sm: 4 }}
          justifyContent="center"
          placeItems={{ sm: 'start' }}
        >
          <MotionBox
            display="flex"
            flexDirection="column"
            gridGap={4}
            alignItems="center"
            justifyContent="center"
            alignContent="center"
            textAlign="center"
            p={4}
            bgColor={mode('#ffffff', 'gray.700')}
            rounded="lg"
            shadow="lg"
            cursor="pointer"
            animate={{
              transform: 'translatey(10px)',
              transition: {
                repeatType: 'reverse',
                repeat: Infinity,
                duration: 2,
                ease: 'easeInOut'
              }
            }}
            onClick={() => setMessage(message.language === 'english' ? inFilipino : inEnglish)}
          >
            <Heading as="h3" fontSize={{ base: 'sm', sm: 'lg' }} fontWeight="bold">
              {message.header}
            </Heading>
            <Text fontSize={{ base: 'xs', md: 'lg' }}>{message.content}</Text>
          </MotionBox>
          <Box w={{ base: 'full', sm: 5 / 12 }} rounded="full">
            <Image src={profilePicture} alt="Nap Joseph Calub" />
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

export default NotFoundPage;

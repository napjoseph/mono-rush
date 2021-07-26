import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import profilePicture from '../../public/img/me/ws1.jpg';
import { createHeadData, generateSiteDescription, generateSiteTitle } from '../lib/utils/head-data';
import { createOpenGraphData } from '../lib/utils/open-graph-data';
import OpenGraph from '../components/document/open-graph.component';
import DynamicHead from '../components/document/dynamic-head.component';

interface Message {
  language: 'english' | 'filipino';
  header: JSX.Element;
  content: JSX.Element;
}

/* eslint-disable-next-line */
interface NotFoundPageProps {}

const NotFoundPage: React.FC<NotFoundPageProps> = (_props) => {
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

  const pageHeader = <>Unfortunately, that specific page can&apos;t be found.</>;
  const pageDescription = (
    <p>
      But hey, at least you found <span className="font-semibold italic">me</span>.
    </p>
  );

  const inFilipino: Message = {
    language: 'filipino',
    header: <>Naniniwala ako sa kasabihang:</>,
    content: (
      <>
        Kung hindi siya para sa akin,
        <br />
        kawawa naman siya.
      </>
    )
  };
  const inEnglish: Message = {
    language: 'english',
    header: <>I believe in the saying:</>,
    content: (
      <>
        If she is not for me,
        <br />
        then it&apos;s considered her loss.
      </>
    )
  };

  const [message, setMessage] = useState<Message>(inFilipino);

  return (
    <>
      <DynamicHead data={headData} />
      <OpenGraph data={ogData} />

      <div className="flex flex-col gap-10 text-gray-700">
        <div className="text-center flex flex-col gap-2">
          <h1 className="text-2xl font-bold">{pageHeader}</h1>
          <div>{pageDescription}</div>
        </div>

        <div className="flex flex-col sm:flex-row-reverse gap-7 sm:gap-2 justify-center sm:place-items-start">
          <motion.div
            className="flex flex-col gap-4 items-center justify-center content-center text-center p-4 shadow-lg cursor-pointer"
            animate={{
              transform: 'translatey(10px)'
            }}
            transition={{ yoyo: Infinity, duration: 2, ease: 'easeInOut' }}
            onClick={() => setMessage(message.language === 'english' ? inFilipino : inEnglish)}
          >
            <h2 className="text-sm md:text-xl font-bold">{message.header}</h2>
            <p className="text-xs md:text-lg">{message.content}</p>
          </motion.div>
          <div className="w-full sm:w-5/12 rounded-full">
            <Image src={profilePicture} alt="Nap Joseph Calub" />
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;

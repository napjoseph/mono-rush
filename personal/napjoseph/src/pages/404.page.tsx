import React, { useState } from 'react';

import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { SITE_CONFIG } from '../config';
import profilePicture from '../../public/img/me/ws1.jpg';

import classes from './404.module.scss';

interface Message {
  language: 'english' | 'filipino';
  header: JSX.Element;
  content: JSX.Element;
}

/* eslint-disable-next-line */
interface NotFoundPageProps {}

const NotFoundPage: React.FC<NotFoundPageProps> = (_props) => {
  const siteTitle = SITE_CONFIG.title || '';
  const pageTitle = 'Page Not Found';
  const pageDescription = (
    <span>
      Well, at least, you found <span className={classes.emphasis}>me</span>.
    </span>
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
      <Head>
        <title>
          {pageTitle} | {siteTitle}
        </title>
      </Head>

      <div className={classes.container}>
        <div className={classes.meta}>
          <h1 className={classes.title}>{pageTitle}</h1>
          <p className={classes.description}>{pageDescription}</p>
        </div>

        <div className={classes.body}>
          <motion.div
            className={classes.message}
            animate={{
              transform: 'translatey(10px)'
            }}
            transition={{ yoyo: Infinity, duration: 2, ease: 'easeInOut' }}
            onClick={() => setMessage(message.language === 'english' ? inFilipino : inEnglish)}
          >
            <h2 className={classes.header}>{message.header}</h2>
            <p className={classes.content}>{message.content}</p>
          </motion.div>
          <div className={classes.picture}>
            <Image src={profilePicture} alt="Nap Joseph Calub" />
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;

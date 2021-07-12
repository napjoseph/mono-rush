// https://github.com/NoahBres/MeepMeepWeb/blob/main/src/state/GlobalTimelineManager.tsx
// https://github.com/statelyai/xstate/issues/1132

import React, { useContext } from 'react';

import { GetStaticProps } from 'next';

import parseConfig from '../utils/parse-config';
import { Config, DEFAULT_CONFIG, DEFAULT_CONFIG_META, DEFAULT_FOOTER_CONFIG } from '../models';
import SectionComponent from '../components/sections/section.component';
import { StateContext } from '../providers/state';

interface HomePageProps {
  config: Config;
}

const HomePage: React.FC<HomePageProps> = ({ config }) => {
  const { meta, sections } = config;

  const stateContext = useContext(StateContext);
  const footerLinks = ((meta || DEFAULT_CONFIG_META).footer || DEFAULT_FOOTER_CONFIG).links || [];

  stateContext.services.footerLinkList.send({ type: 'SET_CONTENT', content: footerLinks });

  return (
    <>
      {sections.map((section) => (
        <SectionComponent key={section.title} section={section} />
      ))}
    </>
  );
};

export const getStaticProps: GetStaticProps = async (_context) => {
  const config = parseConfig();

  return {
    props: {
      config: config || DEFAULT_CONFIG
    }
  };
};

export default HomePage;

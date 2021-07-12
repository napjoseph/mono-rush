import React, { useContext } from 'react';

import { GetStaticProps } from 'next';

import parseConfig from '../utils/parse-config';
import { Config } from '../models';
import SectionComponent from '../components/sections/section.component';
import { StateContext } from '../providers';

interface HomePageProps {
  config: Config;
}

const HomePage: React.FC<HomePageProps> = ({ config }) => {
  const { sections = [] } = config;

  const stateContext = useContext(StateContext);
  stateContext.configService.send({ type: 'SET_CONTENT', content: config });

  return (
    <>
      {sections.map((section) => (
        <SectionComponent key={section.title} section={section} />
      ))}
    </>
  );
};

export const getStaticProps: GetStaticProps = (_context) => {
  const config = parseConfig();

  return {
    props: {
      config: config
    }
  };
};

export default HomePage;

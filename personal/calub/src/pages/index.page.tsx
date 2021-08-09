import React from 'react';

import { GetStaticProps } from 'next';

import parseConfig from '../utils/parse-config';
import { Config } from '../models';
import SectionComponent from '../components/sections/section.component';
import { configStore } from '../store';
import OpenGraph from '../components/document/open-graph.component';
import DynamicHead from '../components/document/dynamic-head.component';

interface HomePageProps {
  config: Config;
}

const HomePage: React.FC<HomePageProps> = ({ config }) => {
  const { sections = [] } = config;

  configStore.updateConfig(config);

  return (
    <>
      {config.meta && config.meta.head && <DynamicHead data={config.meta.head} />}
      {config.meta && config.meta.openGraph && <OpenGraph data={config.meta.openGraph} />}

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

import React from 'react';

import { GetStaticProps } from 'next';

import getConfig from '../utils/get-config';
import { Section } from '../models';
import SectionComponent from '../components/sections/section.component';

interface HomePageProps {
  sections: Section[];
}

const HomePage: React.FC<HomePageProps> = ({ sections }) => {
  return (
    <>
      {sections.map((section) => (
        <SectionComponent key={section.name} section={section} />
      ))}
    </>
  );
};

export const getStaticProps: GetStaticProps = async (_context) => {
  const config = getConfig();

  return {
    props: {
      sections: config.sections
    }
  };
};

export default HomePage;

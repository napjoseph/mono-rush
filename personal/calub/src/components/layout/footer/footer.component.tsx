import React from 'react';
import { useSnapshot } from 'valtio';

import LinkItemComponent from './link-item.component';
import { configStore } from '../../../store';

const FooterComponent: React.FC = (_props) => {
  const snap = useSnapshot(configStore);
  if (
    !(snap.config && snap.config.meta && snap.config.meta.footer && snap.config.meta.footer.links)
  ) {
    return null;
  }

  const links = snap.config.meta.footer.links;

  return (
    <>
      <footer className="text-center md:mt-3 lg:mt-5 hidden md:block">
        {links.map((link, index) => {
          return <LinkItemComponent key={index} link={link} />;
        })}
      </footer>
    </>
  );
};

export default FooterComponent;

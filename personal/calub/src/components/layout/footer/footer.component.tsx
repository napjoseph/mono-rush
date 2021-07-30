import React from 'react';
import { useSnapshot } from 'valtio';

import LinkItemComponent from './link-item.component';
import { configStore } from '../../../store';

import classes from './footer.module.scss';

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
      <footer className={classes.footer}>
        {links.map((link, index) => {
          return <LinkItemComponent key={index} link={link} />;
        })}
      </footer>
    </>
  );
};

export default FooterComponent;

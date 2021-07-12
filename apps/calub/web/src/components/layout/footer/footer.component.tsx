import React, { useContext } from 'react';

import LinkItemComponent from './link-item.component';
import { StateContext } from '../../../providers/state';

import classes from './footer.module.scss';

/* eslint-disable-next-line */
interface FooterComponentProps {}

// TODO: Move values to pro-file.yaml and update using context.
const FooterComponent: React.FC<FooterComponentProps> = (_props) => {
  const stateContext = useContext(StateContext);
  const links = stateContext.services.footerLinkList.state.context.content;

  if (!links) {
    return <></>;
  }

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

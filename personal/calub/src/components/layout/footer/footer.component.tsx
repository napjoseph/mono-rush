import React, { useContext } from 'react';

import { StateContext } from '../../../providers';

import LinkItemComponent from './link-item.component';

import classes from './footer.module.scss';

const FooterComponent: React.FC = (_props) => {
  const stateContext = useContext(StateContext);
  const config = stateContext.configService.state.context.content;
  const links = config.meta.footer.links;

  if (!links) {
    return null;
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

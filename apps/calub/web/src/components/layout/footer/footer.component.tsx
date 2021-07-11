import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classes from './footer.module.scss';

/* eslint-disable-next-line */
interface FooterComponentProps {}

// TODO: Move values to pro-file.yaml and update using context.
const FooterComponent: React.FC<FooterComponentProps> = (_props) => {
  return (
    <>
      <footer className={classes.footer}>
        <span title="View source at GitHub">
          <a
            href="https://github.com/napjoseph/mono-rush/blob/main/apps/calub/web/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={['fab', 'github']}
              size="lg"
              fixedWidth
              className={classes.icon}
            />
          </a>
        </span>
      </footer>
    </>
  );
};

export default FooterComponent;

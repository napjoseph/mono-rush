import React from 'react';

import { CharacterReferencesItem } from '../../../models';

import classes from './reference-item.module.scss';

interface CharacterReferencesItemComponentProps {
  item: CharacterReferencesItem;
}

const CharacterReferencesItemComponent: React.FC<CharacterReferencesItemComponentProps> = ({
  item
}) => {
  const { title, role, company, email, mobile } = item;

  return (
    <>
      <div className={classes.container}>
        <h3 className={classes.title}>{title}</h3>
        <div className={classes.company}>
          <span>
            {company.url ? (
              <a className={classes.link} href={company.url}>
                {company.text}
              </a>
            ) : (
              company.text
            )}
          </span>
        </div>
        <div className={classes.role}>
          <span>{role}</span>
        </div>
        <div>
          {email && (
            <div className={classes.email}>
              {email.url ? (
                <a className={classes.link} href={email.url}>
                  {email.text}
                </a>
              ) : (
                <a className={classes.link} href={`mailto:${removeSpaces(email.text)}`}>
                  {email.text}
                </a>
              )}
            </div>
          )}
          {mobile && (
            <div className={classes.mobile}>
              {mobile.url ? (
                <a className={classes.link} href={mobile.url}>
                  {mobile.text}
                </a>
              ) : (
                <a className={classes.link} href={`callto:${removeSpaces(mobile.text)}`}>
                  {mobile.text}
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

const removeSpaces = (text: string): string => {
  return text.replace(/\s/g, '');
};

export default CharacterReferencesItemComponent;

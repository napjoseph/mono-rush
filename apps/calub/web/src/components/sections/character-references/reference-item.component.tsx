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
                  <span className={classes.masked}>{maskEmail(email.text)}</span>
                  <span className={classes.unmasked}>{email.text}</span>
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
                  <span className={classes.masked}>{maskMobile(mobile.text)}</span>
                  <span className={classes.unmasked}>{mobile.text}</span>
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

const maskEmail = (text: string): string => {
  const showChars = 2;

  const [username, domain] = text.split('@');
  const masked = `${username.substring(0, showChars)}${'*'.repeat(username.length - showChars)}`;

  return [masked, domain].join('@');
};

const maskMobile = (text: string): string => {
  const values = text.split(' ');

  // If the mobile number provided has no spaces, only show the first 4 characters.
  if (values.length <= 1) {
    return `${text.substring(0, 4)}${'*'.repeat(text.length - 4)}`;
  }

  const masked = values.map((value, index) => {
    // Show country code.
    if (index === 0) {
      return value;
    }

    // Show just a glimpse of mobile number.
    if (index === 1) {
      const showChars = 1;
      return `${value.substring(0, showChars)}${'*'.repeat(value.length - showChars)}`;
    }

    // Mask the rest completely.
    return '*'.repeat(value.length);
  });

  return masked.join(' ');
};

export default CharacterReferencesItemComponent;

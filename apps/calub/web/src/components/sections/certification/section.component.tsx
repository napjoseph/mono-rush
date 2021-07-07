import React from 'react';

import { CertificationItem } from '../../../models';
import classes from './section.module.scss';

interface CertificationSectionComponentProps {
  items?: CertificationItem[];
}

const CertificationSectionComponent: React.FC<CertificationSectionComponentProps> = ({ items }) => {
  return (
    <>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.title}>
              <div className={classes.certification}>
                <h3>{item.title}</h3>
                <div>
                  <a href={item.verification_url}>{item.credential_id}</a>
                </div>
                <div>{item.issued_date}</div>

                {item.children && (
                  <div className={classes.children}>
                    <CertificationSectionComponent items={item.children} />
                  </div>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default CertificationSectionComponent;

import React from 'react';

import Image from 'next/image';

import { WorkExperienceItem } from '../../../models';
import getPublicBasePath from '../../../utils/get-public-base-path';
import RoleItemComponent from './role-item.component';

import classes from './company-item.module.scss';

interface CompanyItemComponentProps {
  item: WorkExperienceItem;
  isLast?: boolean;
}

const CompanyItemComponent: React.FC<CompanyItemComponentProps> = ({ item, isLast = false }) => {
  const { title, url, address, image, roles } = item;

  let imagePath = image.path || '';
  if (image.source === 'static') {
    imagePath = `${getPublicBasePath()}${image.path}`;
  }

  return (
    <>
      <div className={classes.wrapper}>
        {!isLast && <span className={classes.line} aria-hidden="true"></span>}

        <div className={classes.content}>
          <div className={classes.logo}>
            <a href={url} className={classes.link}>
              <Image
                className={classes.image}
                src={imagePath}
                alt={image.title}
                title={image.title}
                width={24}
                height={24}
                quality={100}
                unoptimized={true}
              />
            </a>
          </div>
          <div className={classes.description}>
            <div>
              <h3 className={classes.title}>
                <a href={url} className={classes.link}>
                  {title}
                </a>
              </h3>
              <p className={classes.address}>{address}</p>
            </div>
            <div className={classes.roles}>
              <ul className={classes.list}>
                {roles.map((role, index) => {
                  return (
                    <li key={index}>
                      <RoleItemComponent item={role} />
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyItemComponent;

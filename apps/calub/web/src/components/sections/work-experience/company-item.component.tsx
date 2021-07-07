import React from 'react';

import Image from 'next/image';

import { WorkExperienceItem } from '../../../models';
import RoleItemComponent from './role-item.component';

interface CompanyItemComponentProps {
  item: WorkExperienceItem;
  isLast: boolean;
}

const CompanyItemComponent: React.FC<CompanyItemComponentProps> = ({ item, isLast }) => {
  const { title, url, address, logoSrc, logoAlt, roles } = item;

  return (
    <>
      <div className="relative">
        {!isLast && (
          <span
            className="absolute top-3 left-3 -ml-px h-full w-0.5 bg-gray-200"
            aria-hidden="true"
          ></span>
        )}
        <div className="relative flex items-start space-x-3">
          <div className="relative">
            <a href={url} className="font-medium text-gray-900">
              <Image
                className="h-6 w-6 bg-white flex items-center justify-center ring-8 ring-white object-contain"
                src={logoSrc}
                alt={logoAlt}
                width={20}
                height={20}
              />
            </a>
          </div>
          <div className="min-w-0 flex-1">
            <div>
              <div className="text-sm">
                <a href={url} className="font-medium text-gray-900">
                  {title}
                </a>
              </div>
              <p className="mt-0.5 text-gray-500 text-xs">{address}</p>
            </div>
            <div className="mt-2 text-sm text-gray-700">
              <ul className="list-square ml-4 pb-2">
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

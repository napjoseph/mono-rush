import React from 'react';

import { OrganizationsItem } from '../../../models';
import formatDate from '../../../utils/format-date';
import calculateDateDuration from '../../../utils/calculate-date-duration';

interface OrganizationsItemComponentProps {
  item: OrganizationsItem;
}

const OrganizationsItemComponent: React.FC<OrganizationsItemComponentProps> = ({ item }) => {
  const datesPrefix = '(';
  const datesTo = ' to ';
  const datesSuffix = ')';

  return (
    <>
      <div>
        <h3 className="font-medium text-gray-900">
          <a className="color-link" href={item.url}>
            {item.title}
          </a>
        </h3>
        <div className="ml-4 text-xs">
          <ul className="mt-1 ml-4 list-square">
            {item.roles.map((role, index) => {
              return (
                <li className="pb-1" key={index}>
                  <span className="font-medium">{role.title}</span>
                  <span
                    className="ml-1 text-gray-500"
                    title={calculateDateDuration(role.dates.start, role.dates.end)}
                  >
                    <span>{datesPrefix}</span>
                    <span>{formatDate(role.dates.start)}</span>
                    <span>{datesTo}</span>
                    <span>{role.dates.end ? formatDate(role.dates.end) : <>present</>}</span>
                    <span>{datesSuffix}</span>
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default OrganizationsItemComponent;

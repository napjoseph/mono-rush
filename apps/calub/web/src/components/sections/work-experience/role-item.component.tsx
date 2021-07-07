import React from 'react';

import { WorkExperienceRole } from '../../../models';

interface RoleItemComponentProps {
  item: WorkExperienceRole;
}

const RoleItemComponent: React.FC<RoleItemComponentProps> = ({ item }) => {
  const { title, canadaClassification, startDate, endDate, description } = item;

  return (
    <>
      <h6 className="font-medium" title={title}>
        {canadaClassification || title}
      </h6>
      <p className="text-xs">
        <span className="italic">{startDate}</span>–<span className="italic">{endDate}</span>
      </p>
      <p className="text-xs mt-2">{description}</p>
    </>
  );
};

export default RoleItemComponent;

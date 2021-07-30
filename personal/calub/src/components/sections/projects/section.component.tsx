import React from 'react';

import { ProjectsConfig } from '../../../models';
import ProjectsItemComponent from './projects-item.component';

interface ProjectsSectionComponentProps {
  config: ProjectsConfig;
}

const ProjectsSectionComponent: React.FC<ProjectsSectionComponentProps> = ({ config }) => {
  const { items } = config;

  return (
    <>
      <div className="text-sm text-gray-700">
        <ul className="list-square ml-4">
          {items.map((item, index) => {
            return (
              <li key={index}>
                <ProjectsItemComponent item={item} />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default ProjectsSectionComponent;

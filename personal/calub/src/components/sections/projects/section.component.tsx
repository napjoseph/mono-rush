import React from 'react';

import { ProjectsConfig } from '../../../models';
import ProjectsItemComponent from './projects-item.component';

import classes from './section.module.scss';

interface ProjectsSectionComponentProps {
  config: ProjectsConfig;
}

const ProjectsSectionComponent: React.FC<ProjectsSectionComponentProps> = ({ config }) => {
  const { items } = config;

  return (
    <>
      <div className={classes.container}>
        <ul className={classes.list}>
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

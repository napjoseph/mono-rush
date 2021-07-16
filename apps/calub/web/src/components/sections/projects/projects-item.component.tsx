import React from 'react';

import { ProjectsItem } from '../../../models';
import formatDate from '../../../utils/format-date';

import classes from './projects-item.module.scss';

interface ProjectsItemComponentProps {
  item: ProjectsItem;
}

const ProjectsItemComponent: React.FC<ProjectsItemComponentProps> = ({ item }) => {
  const tagsPrefix = 'Technologies used: ';
  const datesTo = ' to ';

  return (
    <>
      <div className={classes.container}>
        <h3 className={classes.title}>{item.title}</h3>
        <div className={classes.meta}>
          <span className={classes.dates}>
            <span className={classes.start}>{formatDate(item.dates.start)}</span>
            <span className={classes.to}>{datesTo}</span>
            <span className={classes.end}>{formatDate(item.dates.end)}</span>
          </span>

          <span className={classes.divider}>|</span>

          {item.tags && (
            <>
              <span>{tagsPrefix}</span>
              <ul className={classes.tags}>
                {item.tags.map((tag, index) => {
                  return (
                    <li key={index} className={classes.tag}>
                      <span className={classes.content}>{tag}</span>
                      {index !== item.tags.length - 1 && <span className={classes.comma}>,</span>}
                    </li>
                  );
                })}
              </ul>
            </>
          )}
        </div>
        {item.roles && (
          <div className={classes.roles}>
            <ul className={classes.list}>
              {item.roles.map((role, index) => {
                return (
                  <li key={index} className={classes.role}>
                    <span>{role}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default ProjectsItemComponent;

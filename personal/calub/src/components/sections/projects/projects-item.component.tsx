import React from 'react';
import { useSnapshot } from 'valtio';

import { ProjectsItem, TagFilterStatus } from '../../../models';
import formatDate from '../../../utils/format-date';
import { tagFiltersStore } from '../../../store';

interface ProjectsItemComponentProps {
  item: ProjectsItem;
}

const ProjectsItemComponent: React.FC<ProjectsItemComponentProps> = ({ item }) => {
  const tagFilters = useSnapshot(tagFiltersStore);

  const tagsPrefix = 'Technologies used: ';
  const datesTo = ' to ';

  return (
    <>
      <div className="mt-1">
        <h3 className="font-medium text-gray-900">{item.title}</h3>
        <div className="text-xs text-gray-500">
          <span>
            <span>{formatDate(item.dates.start)}</span>
            <span>{datesTo}</span>
            <span>{formatDate(item.dates.end)}</span>
          </span>

          <span className="mx-1">|</span>

          {item.tags && (
            <>
              <span>{tagsPrefix}</span>
              <ul className="inline break-words">
                {item.tags.map((tag, index) => {
                  return (
                    <li key={index} className="inline">
                      <span
                        className="transition duration-150 ease-in-out cursor-pointer hover:font-semibold"
                        onClick={() => tagFilters.update(tag, TagFilterStatus.ONLY_WITH)}
                      >
                        {tag}
                      </span>
                      {index !== item.tags.length - 1 && <span className="mr-1">,</span>}
                    </li>
                  );
                })}
              </ul>
            </>
          )}
        </div>
        {item.roles && (
          <div className="text-xs">
            <ul className="mt-1 ml-8 list-square">
              {item.roles.map((role, index) => {
                return (
                  <li key={index} className="mb-1">
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

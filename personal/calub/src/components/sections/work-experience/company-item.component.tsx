import React from 'react';
import Image from 'next/image';
import { useSnapshot } from 'valtio';

import { ProjectsItem, WorkExperienceItem } from '../../../models';
import getPublicBasePath from '../../../utils/get-public-base-path';
import RoleItemComponent from './role-item.component';
import { workExperienceFiltersStore } from '../../../store/filters/work-experience';
import ProjectsItemComponent from '../projects/projects-item.component';
import { tagFiltersStore } from '../../../store';
import hasAnyTag from '../../../utils/has-any-tag';

import classes from './company-item.module.scss';

interface CompanyItemComponentProps {
  item: WorkExperienceItem;
  isLast?: boolean;
}

const CompanyItemComponent: React.FC<CompanyItemComponentProps> = ({ item, isLast = false }) => {
  const { title, url, address, image, roles } = item;
  const tagFilters = useSnapshot(tagFiltersStore);
  const workExperienceFilters = useSnapshot(workExperienceFiltersStore);

  let imagePath = image.path || '';
  if (image.source === 'static') {
    imagePath = `${getPublicBasePath()}${image.path}`;
  }

  let relatedProjects: ProjectsItem[] = workExperienceFilters.relatedProjects
    .filter((item) => item.key === title)
    .map((item) => item.value);

  if (tagFilters.mustNotHaveTags.length !== 0) {
    relatedProjects = relatedProjects.filter(
      (item) => !hasAnyTag(item.tags, tagFilters.mustNotHaveTags)
    );
  }
  if (tagFilters.onlyWithTags.length !== 0) {
    relatedProjects = relatedProjects.filter((item) =>
      hasAnyTag(item.tags, tagFilters.onlyWithTags)
    );
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
            {workExperienceFilters.showRelatedProjects && relatedProjects.length > 0 && (
              <>
                <hr />
                <div className="mt-3 text-sm text-gray-700">
                  <div className="text-xs font-semibold">Projects:</div>
                  <ul className="ml-8 list-square">
                    {relatedProjects.map((project, index) => {
                      return (
                        <li key={index}>
                          <ProjectsItemComponent item={project} isRelatedProject={true} />
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyItemComponent;

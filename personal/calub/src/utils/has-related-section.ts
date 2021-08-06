import { ProjectsItemRelationship, SectionType } from '../models';

const hasRelatedSection = (list: ProjectsItemRelationship[], sectionType: SectionType): boolean => {
  for (let i = 0; i < list.length; i++) {
    if (list[i].type === sectionType) return true;
  }

  return false;
};

export default hasRelatedSection;

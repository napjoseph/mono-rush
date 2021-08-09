import { proxy } from 'valtio';

import { SectionType } from '../../models';

const addSection = (
  list: SidebarContentSection[],
  item: SidebarContentSection
): SidebarContentSection[] => {
  return list.map((section) => section.type).indexOf(item.type) === -1
    ? [...list, item]
    : [...list];
};

export interface SidebarContentSection {
  title: string;
  type: SectionType;
}

export interface SidebarContentStore {
  sections: SidebarContentSection[];
  addSection: (section: SidebarContentSection) => void;
}

export const sidebarContentStore = proxy<SidebarContentStore>({
  sections: [],
  addSection: (section: SidebarContentSection) => {
    sidebarContentStore.sections = addSection(sidebarContentStore.sections, section);
  }
});

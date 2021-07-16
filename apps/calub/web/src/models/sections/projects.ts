export interface ProjectsConfig {
  items: ProjectsItem[];
}

export interface ProjectsItem {
  title: string;
  meta?: ProjectsItemMeta;
  dates: {
    start: string;
    end: string;
  };
  tags: string[];
  roles: string[];
}

export interface ProjectsItemMeta {
  show?: boolean;
}

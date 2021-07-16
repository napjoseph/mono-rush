export interface SkillsConfigMeta {
  maxRating?: number;
}

export const DEFAULT_SKILLS_CONFIG_META: SkillsConfigMeta = {
  maxRating: 10
};

export interface SkillsConfig {
  meta?: SkillsConfigMeta;
  items: SkillsCategory[];
}

export const DEFAULT_SKILLS_CONFIG: SkillsConfig = {
  meta: DEFAULT_SKILLS_CONFIG_META,
  items: []
};

export interface SkillsCategory {
  title: string;
  meta?: SkillsCategoryMeta;
  items: SkillsItem[];
}

export interface SkillsCategoryMeta {
  show?: boolean;
}

export const DEFAULT_SKILLS_CATEGORY_META: SkillsCategoryMeta = {
  show: true
};

export interface SkillsItem {
  title: string;
  rating: number;
  meta?: SkillsItemMeta;
}

export interface SkillsItemMeta {
  show?: boolean;
}

export const DEFAULT_SKILLS_ITEM_META: SkillsItemMeta = {
  show: true
};

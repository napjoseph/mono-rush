import { Section } from './section';
import { FooterConfig, DEFAULT_FOOTER_CONFIG } from './footer';

export interface Config {
  meta?: ConfigMeta;
  sections: Section[];
}

export interface ConfigMeta {
  footer?: FooterConfig;
}

export const DEFAULT_CONFIG_META: ConfigMeta = {
  footer: DEFAULT_FOOTER_CONFIG
};

export const DEFAULT_CONFIG: Config = {
  meta: DEFAULT_CONFIG_META,
  sections: []
};

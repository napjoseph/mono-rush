import { Section } from './section';
import { FooterConfig } from './footer';

export interface Config {
  meta?: ConfigMeta;
  sections: Section[];
}

export const DEFAULT_CONFIG: Config = {
  sections: []
};

export interface ConfigMeta {
  footer?: FooterConfig;
}

export const DEFAULT_CONFIG_META: ConfigMeta = {};

import { proxy } from 'valtio';

import { Config, DEFAULT_CONFIG } from '../models';

export interface ConfigStore {
  config: Config;
  updateConfig: (config: Config) => void;
}

export const configStore = proxy<ConfigStore>({
  config: DEFAULT_CONFIG,
  updateConfig: (config: Config) => {
    configStore.config = config;
  }
});

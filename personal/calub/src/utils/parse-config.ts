import fs from 'fs-extra';
import path from 'path';
import yaml from 'js-yaml';

import { Config, DEFAULT_CONFIG } from '../models';

const CONFIG_PATH = path.resolve('pro-file.yaml');

const parseConfig = (): Config => {
  let data: Config;
  try {
    data = yaml.load(fs.readFileSync(CONFIG_PATH, 'utf8'), {
      schema: yaml.JSON_SCHEMA
    });
  } catch (error) {
    data = DEFAULT_CONFIG;
  }

  const config: Config = {
    ...DEFAULT_CONFIG,
    ...data
  };

  return config;
};

export default parseConfig;

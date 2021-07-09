import fs from 'fs-extra';
import yaml from 'js-yaml';

import { Config } from '../models';

const parseConfig = (): Config => {
  return yaml.load(fs.readFileSync('public/pro-file.yaml', 'utf8'), {
    schema: yaml.JSON_SCHEMA
  });
};

export default parseConfig;

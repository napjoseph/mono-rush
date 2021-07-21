import { SITE_CONFIG } from '../../config';
import { OpenGraphData } from '../../models/open-graph/open-graph-data';

export const createOpenGraphData = (data: Partial<OpenGraphData>): OpenGraphData => {
  const defaultData: OpenGraphData = (SITE_CONFIG.metadata || {}).defaultOpenGraph || {};

  return {
    ogTitle: SITE_CONFIG.title,
    ogDescription: SITE_CONFIG.description,

    ...defaultData,
    ...data
  };
};

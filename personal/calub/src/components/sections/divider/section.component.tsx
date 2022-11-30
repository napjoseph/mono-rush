import React from 'react';
import { motion } from 'framer-motion';

import SiteLogoComponent from '../../assets/site-logo.component';
import {
  DEFAULT_DIVIDER_CONFIG,
  DEFAULT_DIVIDER_LOGO_CONFIG,
  DividerConfig,
  DividerLogoConfig
} from '../../../models';

interface DividerSectionComponentProps {
  config?: DividerConfig;
}

const DividerSectionComponent: React.FC<DividerSectionComponentProps> = ({
  config = DEFAULT_DIVIDER_CONFIG
}) => {
  const logoConfig: DividerLogoConfig = {
    ...DEFAULT_DIVIDER_LOGO_CONFIG,
    ...config.logo
  };

  return (
    <>
      <div className="relative">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center">
          <a
            href={logoConfig.link || ''}
            title={logoConfig.linkTitle || ''}
            className="px-4 bg-white"
          >
            <motion.div
              className="text-gray-500 bg-white"
              initial="hidden"
              animate="visible"
              whileHover="hover"
              variants={{
                hidden: {
                  rotate: 0,
                  opacity: 0
                },
                visible: {
                  rotate: 180,
                  opacity: 1,
                  transition: {
                    duration: 0.3
                  }
                },
                hover: {
                  rotate: 0,
                  scale: 1.2,
                  transition: {
                    duration: 0.3
                  }
                }
              }}
            >
              <SiteLogoComponent fill={logoConfig.fill} height="32" width="32" />
            </motion.div>
          </a>
        </div>
      </div>
    </>
  );
};

export default DividerSectionComponent;

import React from 'react';

import LogoComponent from '../../assets/logo.component';
import {
  DividerConfig,
  DEFAULT_DIVIDER_CONFIG,
  DividerLogoConfig,
  DEFAULT_DIVIDER_LOGO_CONFIG
} from '../../../models';

interface DividerSectionComponentProps {
  config?: DividerConfig;
}

const DividerSectionComponent: React.FC<DividerSectionComponentProps> = ({
  config = DEFAULT_DIVIDER_CONFIG
}) => {
  const logoConfig: DividerLogoConfig = { ...DEFAULT_DIVIDER_LOGO_CONFIG, ...config.logo };

  return (
    <>
      <div className="relative">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t-2 border-gray-300"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="bg-white px-2 text-gray-500">
            <LogoComponent overrideClassName={logoConfig.className} fill={logoConfig.fill} />
          </span>
        </div>
      </div>
    </>
  );
};

export default DividerSectionComponent;

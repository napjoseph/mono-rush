import React from 'react';
import { IconLookup } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import joinClassNames from '../../../utils/join-class-names';

interface SidebarToggleButtonComponentProps {
  icon: IconLookup;
  title: string;
  onClick: () => void;
}

const SidebarToggleButtonComponent: React.FC<SidebarToggleButtonComponentProps> = ({
  icon,
  title,
  onClick
}) => {
  return (
    <div className={joinClassNames('h-16', 'w-16')}>
      <button
        className={joinClassNames(
          'text-gray-600',
          'bg-white',
          'hover:bg-gray-50',
          'w-full',
          'h-full',
          'rounded-full',
          'shadow-md',
          'transition duration-300 ease-in-out'
        )}
        aria-label={title}
        title={title}
        onClick={onClick}
      >
        <FontAwesomeIcon icon={icon} fixedWidth size="lg" />
      </button>
    </div>
  );
};

export default SidebarToggleButtonComponent;

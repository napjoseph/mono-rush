import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import joinClassNames from '../../../utils/join-class-names';

const PrintButtonComponent: React.FC = (_props) => {
  return (
    <button
      className={joinClassNames(
        'text-gray-100',
        'bg-blue-700',
        'hover:bg-blue-600',
        'w-full',
        'h-12',
        'p-2',
        'text-lg',
        'rounded-lg',
        'shadow-md',
        'transition duration-300 ease-in-out'
      )}
      aria-label="Print"
      title="Print"
      onClick={window.print}
    >
      <FontAwesomeIcon icon={{ prefix: 'fas', iconName: 'print' }} fixedWidth /> Print
    </button>
  );
};

export default PrintButtonComponent;

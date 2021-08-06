import React from 'react';

import joinClassNames from '../../../utils/join-class-names';

interface ToggleComponentProps {
  text: string;
  checked: boolean;
  toggle: () => void;
}

const ToggleComponent: React.FC<ToggleComponentProps> = ({ text, checked, toggle }) => {
  return (
    <div className="flex cursor-pointer" onClick={toggle} title={text}>
      <div className="flex-none text-xs text-gray-200 uppercase">{text}</div>
      <div className="flex-grow"></div>
      <div className="relative flex-none">
        <div className="w-10 h-4 bg-gray-600 rounded-full shadow-inner"></div>
        <div
          className={joinClassNames(
            'absolute w-6 h-6 transition rounded-full shadow -left-1 -top-1 transform',
            checked
              ? 'translate-x-full bg-blue-700 hover:bg-blue-600'
              : 'bg-gray-300 hover:bg-gray-200'
          )}
        ></div>
      </div>
    </div>
  );
};

export default ToggleComponent;

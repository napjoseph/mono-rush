import React from 'react';
import { useSnapshot } from 'valtio';
import joinClassNames from '../../../utils/join-class-names';

import { sidebarToggleStore } from '../../../store';
import SidebarContentComponent from './sidebar-content.component';
import SidebarToggleButtonComponent from './sidebar-toggle-button.component';

const SidebarComponent: React.FC = (_props) => {
  const sidebar = useSnapshot(sidebarToggleStore);

  return (
    <>
      <div
        className={joinClassNames('print:hidden', 'fixed', 'inset-0', 'z-40', 'overflow-hidden')}
      >
        <div
          className={joinClassNames(
            sidebar.show
              ? 'absolute inset-0 backdrop-filter backdrop-blur bg-gray-800 bg-opacity-10'
              : '',
            'transition-all duration-300 ease-in-out'
          )}
        >
          <div className={joinClassNames('fixed', 'bottom-4', 'right-4')}>
            <SidebarToggleButtonComponent
              icon={{ prefix: 'fas', iconName: 'times' }}
              title="Close Sidebar"
              onClick={sidebar.close}
            />
          </div>
        </div>

        <div
          className={joinClassNames('absolute', 'inset-0', 'z-40', 'flex', 'pointer-events-none')}
        >
          <div
            className={joinClassNames(
              sidebar.show ? 'flex-1' : 'flex-almost-gone',
              'transition-all duration-300 ease-in-out',
              'max-w-sm',
              'min-w-0',
              'bg-gray-800',
              'text-gray-200',
              'pointer-events-auto'
            )}
          >
            <SidebarContentComponent />
          </div>
          <div
            className={joinClassNames(sidebar.show ? '' : 'hidden', 'w-24', 'pointer-events-none')}
          ></div>
        </div>
      </div>
    </>
  );
};

export default SidebarComponent;

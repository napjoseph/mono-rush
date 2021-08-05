import React from 'react';
import { useSnapshot } from 'valtio';

import joinClassNames from '../../../utils/join-class-names';
import { sidebarToggleStore } from '../../../store';
import SidebarContentComponent from './sidebar-content.component';
import SidebarToggleButtonComponent from './sidebar-toggle-button.component';

const MobileSidebarComponent: React.FC = (_props) => {
  const sidebar = useSnapshot(sidebarToggleStore);

  return (
    <>
      <div
        className={joinClassNames(
          sidebar.show ? 'visible' : 'invisible',
          'transition-all duration-100 ease-in-out',
          'print:hidden',
          'fixed',
          'inset-0',
          'z-40'
        )}
      >
        <div
          className={joinClassNames(
            sidebar.show ? 'backdrop-filter backdrop-blur bg-gray-800 bg-opacity-10' : '',
            'transition-all duration-100 ease-in-out',
            'absolute',
            'inset-0'
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
              'transition-all duration-100 ease-in-out',
              'max-w-sm',
              'min-w-0',
              'bg-gray-800',
              'text-gray-200',
              'pointer-events-auto',
              'overflow-auto',
              'with-scrollbars'
            )}
          >
            <SidebarContentComponent />
          </div>
          <div
            className={joinClassNames(
              sidebar.show ? '' : 'hidden',
              'transition-all duration-100 ease-in-out',
              'w-24',
              'pointer-events-none'
            )}
          ></div>
        </div>
      </div>
    </>
  );
};

export default MobileSidebarComponent;

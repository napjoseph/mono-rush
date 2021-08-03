import React from 'react';
import { useSnapshot } from 'valtio';

import DocumentHead from '../document/document-head.component';
import FooterComponent from './footer/footer.component';
import joinClassNames from '../../utils/join-class-names';
import MobileSidebarComponent from './sidebar/mobile-sidebar.component';
import PortalComponent from './portal/portal.component';
import SidebarToggleButtonComponent from './sidebar/sidebar-toggle-button.component';
import { sidebarToggleStore } from '../../store';
import SidebarContentComponent from './sidebar/sidebar-content.component';

/**
 * When set to true, this shows the sidebar.
 * This is still experimental so this is turned off in production.
 */
const SHOW_SIDEBAR = process.env.NEXT_PUBLIC_SHOW_SIDEBAR === 'true';

const LayoutComponent: React.FC = (props) => {
  const sidebar = useSnapshot(sidebarToggleStore);

  return (
    <>
      <DocumentHead />

      <div className={joinClassNames('lg:flex')}>
        <div
          className={joinClassNames(
            sidebar.show ? 'flex-1' : 'flex-almost-gone',
            'transition-all duration-100 ease-in-out',
            'hidden',
            'lg:block',
            'print:hidden',
            'bg-gray-800',
            'text-gray-200',
            'max-w-sm',
            'min-w-0'
          )}
        >
          <div className={joinClassNames(sidebar.show ? 'block' : 'hidden', 'sticky', 'top-0')}>
            <SidebarContentComponent />
          </div>
        </div>
        <div className={joinClassNames('lg:flex-1', 'xs:m-2', 'md:m-3', 'lg:m-5')}>
          <main
            className={joinClassNames(
              'max-w-4xl',
              'p-4',
              'mx-auto',
              'bg-white',
              'shadow-lg',
              'sm:p-6',
              'lg:p-8',
              'print:shadow-none'
            )}
          >
            {props.children}
          </main>
          <FooterComponent />
        </div>
      </div>

      {SHOW_SIDEBAR ? (
        <PortalComponent>
          <div
            className={joinClassNames(
              'transition-all duration-100 ease-in-out',
              'fixed',
              'bottom-4',
              'right-4',
              'print:hidden'
            )}
          >
            <SidebarToggleButtonComponent
              icon={
                sidebar.show
                  ? { prefix: 'fas', iconName: 'times' }
                  : { prefix: 'fas', iconName: 'bars' }
              }
              title={sidebar.show ? 'Close Sidebar' : 'Open Sidebar'}
              onClick={sidebar.show ? sidebar.close : sidebar.open}
            />
          </div>

          <div className="lg:hidden">
            <MobileSidebarComponent />
          </div>
        </PortalComponent>
      ) : null}
    </>
  );
};

export default LayoutComponent;

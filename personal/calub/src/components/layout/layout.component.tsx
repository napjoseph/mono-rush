import React from 'react';
import { useSnapshot } from 'valtio';

import DocumentHead from '../document/document-head.component';
import FooterComponent from './footer/footer.component';
import joinClassNames from '../../utils/join-class-names';
import SidebarComponent from './sidebar/sidebar.component';
import PortalComponent from './portal/portal.component';
import SidebarToggleButtonComponent from './sidebar/sidebar-toggle-button.component';
import { sidebarToggleStore } from '../../store';

/**
 * When set to true, this shows the sidebar toggle button.
 * This is still experimental so this is turned off in production.
 */
const SHOW_SIDEBAR_TOGGLE_BUTTON = false;

/* eslint-disable-next-line */
interface LayoutComponentProps {}

const LayoutComponent: React.FC<LayoutComponentProps> = (props) => {
  const sidebar = useSnapshot(sidebarToggleStore);

  return (
    <>
      <DocumentHead />

      <div className={joinClassNames('xs:m-2', 'md:m-3', 'lg:m-5')}>
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

      {SHOW_SIDEBAR_TOGGLE_BUTTON ? (
        <>
          <div
            className={joinClassNames(
              sidebar.show ? 'hidden' : '',
              'fixed',
              'bottom-4',
              'right-4',
              'print:hidden'
            )}
          >
            <SidebarToggleButtonComponent
              icon={{ prefix: 'fas', iconName: 'bars' }}
              title="Open Sidebar"
              onClick={sidebar.open}
            />
          </div>

          <PortalComponent>{sidebar.show ? <SidebarComponent /> : null}</PortalComponent>
        </>
      ) : null}
    </>
  );
};

export default LayoutComponent;

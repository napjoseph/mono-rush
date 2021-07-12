import React, { createContext } from 'react';

import { InterpreterFrom } from 'xstate';

import { footerLinkListMachine, createFooterLinkListService } from '../states/footer-link-list';

export interface StateContextType {
  services: {
    footerLinkList: InterpreterFrom<typeof footerLinkListMachine>;
  };
}

export const StateContext = createContext<StateContextType>({} as StateContextType);

const footerLinkListService = createFooterLinkListService();

export const StateProvider: React.FC = ({ children }) => {
  return (
    <StateContext.Provider
      value={{
        services: {
          footerLinkList: footerLinkListService
        }
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

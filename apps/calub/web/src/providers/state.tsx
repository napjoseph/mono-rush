import React, { createContext } from 'react';

import { InterpreterFrom } from 'xstate';

import { configMachine, getConfigService } from '../states/';

export interface StateContextType {
  configService: InterpreterFrom<typeof configMachine>;
}

export const StateContext = createContext<StateContextType>({} as StateContextType);

const configService = getConfigService();

// TODO: Add selectors
// https://dev.to/alirezavalizade/boost-your-react-application-s-performance-by-xstate-42p8

// TODO: Figure out how to revalidate on each pag load and update state accordingly

export const StateProvider: React.FC = ({ children }) => {
  return (
    <StateContext.Provider
      value={{
        configService: configService
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

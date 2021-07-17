import { createMachine, assign, interpret, InterpreterFrom } from 'xstate';

import { Config, DEFAULT_CONFIG } from '../models';

export interface ConfigContext {
  content: Config;
}

export type ConfigEvent = { type: 'SET_CONTENT'; content: Config } | { type: 'UNSET_CONTENT' };

export type ConfigState =
  | { value: 'unset'; context: ConfigContext }
  | { value: 'set'; context: ConfigContext };

export const configMachine = createMachine<ConfigContext, ConfigEvent, ConfigState>({
  id: 'config',
  initial: 'unset',
  context: {
    content: DEFAULT_CONFIG
  },
  states: {
    unset: {
      on: {
        SET_CONTENT: {
          target: 'set',
          actions: [
            assign({
              content: (_context, event) => {
                return event.content;
              }
            })
          ]
        }
      }
    },
    set: {
      on: {
        UNSET_CONTENT: {
          target: 'unset',
          actions: [
            assign({
              content: (_context, _event) => DEFAULT_CONFIG
            })
          ]
        }
      }
    }
  }
});

let service: InterpreterFrom<typeof configMachine>;
export const getConfigService = (): InterpreterFrom<typeof configMachine> => {
  if (!service) {
    service = interpret(configMachine).start();
  }

  return service;
};

import { createMachine, assign, interpret, InterpreterFrom } from 'xstate';

import { FooterLink } from '../models';

export interface FooterLinkListContext {
  content: FooterLink[];
}

export type FooterLinkListEvent =
  | { type: 'SET_CONTENT'; content: FooterLink[] }
  | { type: 'UNSET_CONTENT' };

export type FooterLinkListState =
  | { value: 'unset'; context: FooterLinkListContext }
  | { value: 'set'; context: FooterLinkListContext };

export const footerLinkListMachine = createMachine<
  FooterLinkListContext,
  FooterLinkListEvent,
  FooterLinkListState
>({
  id: 'footerLinkList',
  initial: 'unset',
  context: {
    content: []
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
              content: (_context, _event) => []
            })
          ]
        }
      }
    }
  }
});

let service: InterpreterFrom<typeof footerLinkListMachine>;
export const createFooterLinkListService = (): InterpreterFrom<typeof footerLinkListMachine> => {
  if (!service) {
    service = interpret(footerLinkListMachine).start();
  }

  return service;
};

import { Class } from '../../models/classes/class';

import { ViewActions, ViewActionTypes } from '../actions/view';

export interface State {
  selectedClass: Class;
}

export const initialState: State = {
  selectedClass: null,
};

export function reducer(state = initialState, action: ViewActions): State {
  switch (action.type) {
    case ViewActionTypes.SelectClass: {
      return {
        ...state,
        selectedClass: action.payload,
      };
    }
    default:
      return state;
  }
}

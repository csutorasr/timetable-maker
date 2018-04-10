import { Class } from '../../models/classes/class';

import { ViewActions, ViewActionTypes } from '../actions/view';

export interface State {
  selectedClassId: number;
}

export const initialState: State = {
  selectedClassId: null,
};

export function reducer(state = initialState, action: ViewActions): State {
  switch (action.type) {
    case ViewActionTypes.SelectClass: {
      return {
        ...state,
        selectedClassId: action.payload,
      };
    }
    default:
      return state;
  }
}

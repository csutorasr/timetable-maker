import { Class } from '../../../models/classes/class';

import * as fromActions from '../actions/class';

export interface State {
  entities: Class[];
}

export const initialState: State = {
  entities: []
};

export function reducer(state = initialState, action: fromActions.ClassActions) {
  switch (action.type) {
    case fromActions.ClassActionTypes.Save:
    case fromActions.ClassActionTypes.LoadAll: {
      return {
        ...state,
        entities: [],
      };
    }
    case fromActions.ClassActionTypes.LoadSuccess: {
      return {
        ...state,
        entities: action.payload,
      };
    }
    default:
      return state;
  }
}

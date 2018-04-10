import { Classroom } from '../../../models/classes/classroom';

import * as fromActions from '../actions/classroom';

export interface State {
  entities: Classroom[];
}

export const initialState: State = {
  entities: []
};

export function reducer(state = initialState, action: fromActions.ClassroomActions) {
  switch (action.type) {
    case fromActions.ClassroomActionTypes.Save:
    case fromActions.ClassroomActionTypes.LoadAll: {
      return {
        ...state,
        entities: [],
      };
    }
    case fromActions.ClassroomActionTypes.LoadSuccess: {
      return {
        ...state,
        entities: action.payload,
      };
    }
    default:
      return state;
  }
}

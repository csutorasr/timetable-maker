import { Teacher } from '../../../models/classes/teacher';

import * as fromActions from '../actions/teacher';

export interface State {
  entities: Teacher[];
}

export const initialState: State = {
  entities: []
};

export function reducer(state = initialState, action: fromActions.TeacherActions) {
  switch (action.type) {
    case fromActions.TeacherActionTypes.Save:
    case fromActions.TeacherActionTypes.LoadAll: {
      return {
        ...state,
        entities: [],
      };
    }
    case fromActions.TeacherActionTypes.LoadSuccess: {
      return {
        ...state,
        entities: action.payload,
      };
    }
  }
}

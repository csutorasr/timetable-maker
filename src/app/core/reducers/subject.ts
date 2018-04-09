import { Subject } from '../../../models/classes/subject';

import * as fromActions from '../actions/subject';

export interface State {
  entities: Subject[];
}

export const initialState: State = {
  entities: []
};

export function reducer(state = initialState, action: fromActions.SubjectActions) {
  switch (action.type) {
    case fromActions.SubjectActionTypes.Save:
    case fromActions.SubjectActionTypes.LoadAll: {
      return {
        ...state,
        entities: [],
      };
    }
    case fromActions.SubjectActionTypes.LoadSuccess: {
      return {
        ...state,
        entities: action.payload,
      };
    }
  }
}

import * as fromTeacher from './teacher';
import { ActionReducerMap } from '@ngrx/store';

interface InternalState {
  teacher: fromTeacher.State;
}

export interface State {
  core: InternalState;
}

export const reducers: ActionReducerMap<InternalState> = {
  teacher: fromTeacher.reducer,
};

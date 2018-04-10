import { ActionReducerMap } from '@ngrx/store';

import * as fromTeacher from './teacher';
import * as fromClass from './class';
import * as fromClassroom from './classroom';
import * as fromSubject from './subject';

interface InternalState {
  teacher: fromTeacher.State;
  class: fromClass.State;
  classroom: fromClassroom.State;
  subject: fromSubject.State;
}

export interface State {
  core: InternalState;
}

export const reducers: ActionReducerMap<InternalState> = {
  teacher: fromTeacher.reducer,
  class: fromClass.reducer,
  classroom: fromClassroom.reducer,
  subject: fromSubject.reducer,
};

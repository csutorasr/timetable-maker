import { ActionReducerMap } from '@ngrx/store';

import * as fromView from './view';

export interface State {
  view: fromView.State;
}

export const reducers: ActionReducerMap<State> = {
  view: fromView.reducer,
};

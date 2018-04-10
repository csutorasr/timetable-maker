import { Action } from '@ngrx/store';

import { Class } from '../../models/classes/class';

export enum ViewActionTypes {
  SelectClass = '[View] select class',
}

export class SelectClass implements Action {
  readonly type = ViewActionTypes.SelectClass;
  constructor(public payload: number) { }
}

export type ViewActions =
  SelectClass;

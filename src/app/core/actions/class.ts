import { Action } from '@ngrx/store';
import { Class } from '../../../models/classes/class';

export enum ClassActionTypes {
  LoadAll = '[Core/Classes] Load all',
  LoadSuccess = '[Core/Classes] Load success',
  Save = '[Core/Classes] Save',
}

export class LoadAll implements Action {
  public readonly type = ClassActionTypes.LoadAll;
}

export class LoadSuccess implements Action {
  public readonly type = ClassActionTypes.LoadSuccess;
  constructor(public payload: Class[]) { }
}

export class Save implements Action {
  public readonly type = ClassActionTypes.Save;
  constructor(public payload: Class) { }
}

export type ClassActions =
  LoadAll |
  LoadSuccess |
  Save;

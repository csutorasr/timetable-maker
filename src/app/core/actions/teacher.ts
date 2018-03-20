import { Action } from '@ngrx/store';
import { Teacher } from '../../../models/classes/teacher';

export enum TeacherActionTypes {
  LoadAll = '[Core/Teachers] Load all',
  LoadSuccess = '[Core/Teachers] Load success',
  Save = '[Core/Teachers] Save',
}

export class LoadAll implements Action {
  public readonly type: TeacherActionTypes.LoadAll;
}

export class LoadSuccess implements Action {
  public readonly type: TeacherActionTypes.LoadSuccess;
  constructor(public payload: Teacher[]) { }
}

export class Save implements Action {
  public readonly type: TeacherActionTypes.Save;
  constructor(public payload: Teacher) { }
}

export type TeacherActions =
  LoadAll |
  LoadSuccess |
  Save;

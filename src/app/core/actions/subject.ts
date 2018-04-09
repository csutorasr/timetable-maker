import { Action } from '@ngrx/store';
import { Subject } from '../../../models/classes/subject';

export enum SubjectActionTypes {
  LoadAll = '[Core/Subjects] Load all',
  LoadSuccess = '[Core/Subjects] Load success',
  Save = '[Core/Subjects] Save',
}

export class LoadAll implements Action {
  public readonly type = SubjectActionTypes.LoadAll;
}

export class LoadSuccess implements Action {
  public readonly type = SubjectActionTypes.LoadSuccess;
  constructor(public payload: Subject[]) { }
}

export class Save implements Action {
  public readonly type = SubjectActionTypes.Save;
  constructor(public payload: Subject) { }
}

export type SubjectActions =
  LoadAll |
  LoadSuccess |
  Save;

import { Action } from '@ngrx/store';
import { Classroom } from '../../../models/classes/classroom';

export enum ClassroomActionTypes {
  LoadAll = '[Core/Classrooms] Load all',
  LoadSuccess = '[Core/Classrooms] Load success',
  Save = '[Core/Classrooms] Save',
}

export class LoadAll implements Action {
  public readonly type = ClassroomActionTypes.LoadAll;
}

export class LoadSuccess implements Action {
  public readonly type = ClassroomActionTypes.LoadSuccess;
  constructor(public payload: Classroom[]) { }
}

export class Save implements Action {
  public readonly type = ClassroomActionTypes.Save;
  constructor(public payload: Classroom) { }
}

export type ClassroomActions =
  LoadAll |
  LoadSuccess |
  Save;

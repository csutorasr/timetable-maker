import { Action } from '@ngrx/store';

export enum MenuActionTypes {
  CreateTeacher = '[Menu] create teacher',
  CreateClass = '[Menu] create class',
  CreateSubject = '[Menu] create subject',
}

export class CreateTeacher implements Action {
  public readonly type = MenuActionTypes.CreateTeacher;
}

export class CreateClass implements Action {
  public readonly type = MenuActionTypes.CreateTeacher;
}

export class CreateSubject implements Action {
  public readonly type = MenuActionTypes.CreateTeacher;
}

export type MenuActions =
  CreateTeacher |
  CreateClass |
  CreateSubject;

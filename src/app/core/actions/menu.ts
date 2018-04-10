import { Action } from '@ngrx/store';

export enum MenuActionTypes {
  CreateTeacher = '[Menu] create teacher',
  CreateClass = '[Menu] create class',
  CreateClassroom = '[Menu] create classroom',
  CreateSubject = '[Menu] create subject',
}

export class CreateTeacher implements Action {
  public readonly type = MenuActionTypes.CreateTeacher;
}

export class CreateClass implements Action {
  public readonly type = MenuActionTypes.CreateClass;
}

export class CreateClassroom implements Action {
  public readonly type = MenuActionTypes.CreateClassroom;
}

export class CreateSubject implements Action {
  public readonly type = MenuActionTypes.CreateSubject;
}

export type MenuActions =
  CreateTeacher |
  CreateClass |
  CreateSubject;

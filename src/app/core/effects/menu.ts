import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { filter, map, tap, mergeMap } from 'rxjs/operators';
import { ElectronService } from 'ngx-electron';
import { Store } from '@ngrx/store';
import { MatDialog } from '@angular/material';

import { Class } from '../../../models/classes/class';
import { Subject } from '../../../models/classes/subject';
import { Teacher } from '../../../models/classes/teacher';
import { Classroom } from '../../../models/classes/classroom';

import * as fromActions from '../actions/menu';
import * as fromClassActions from '../actions/class';
import * as fromClassroomActions from '../actions/classroom';
import * as fromSubjectActions from '../actions/subject';
import * as fromTeacherActions from '../actions/teacher';
import { CreateClassComponent } from '../create-class/create-class.component';
import { CreateSubjectComponent } from '../create-subject/create-subject.component';
import { CreateTeacherComponent } from '../create-teacher/create-teacher.component';
import { CreateClassroomComponent } from '../create-classroom/create-classroom.component';

@Injectable()
export class MenuEffect {
  @Effect()
  createClass$ = this.actions$.pipe(
    ofType(fromActions.MenuActionTypes.CreateClass),
    mergeMap(() => {
      const dialogRef = this.dialog.open(CreateClassComponent, {
      });
      return dialogRef.afterClosed();
    }),
    filter(result => result instanceof Class),
    map((result: Class) => new fromClassActions.Save(result)),
  );
  @Effect()
  createClassroom$ = this.actions$.pipe(
    ofType(fromActions.MenuActionTypes.CreateClassroom),
    mergeMap(() => {
      const dialogRef = this.dialog.open(CreateClassroomComponent, {
      });
      return dialogRef.afterClosed();
    }),
    filter(result => result instanceof Classroom),
    map((result: Classroom) => new fromClassroomActions.Save(result)),
  );
  @Effect()
  createSubject$ = this.actions$.pipe(
    ofType(fromActions.MenuActionTypes.CreateSubject),
    mergeMap(() => {
      const dialogRef = this.dialog.open(CreateSubjectComponent, {
      });
      return dialogRef.afterClosed();
    }),
    filter(result => result instanceof Subject),
    map((result: Subject) => new fromSubjectActions.Save(result)),
  );
  @Effect()
  createTeacher$ = this.actions$.pipe(
    ofType(fromActions.MenuActionTypes.CreateTeacher),
    mergeMap(() => {
      const dialogRef = this.dialog.open(CreateTeacherComponent, {
      });
      return dialogRef.afterClosed();
    }),
    filter(result => result instanceof Teacher),
    map((result: Teacher) => new fromTeacherActions.Save(result)),
  );
  constructor(private actions$: Actions,
    private dialog: MatDialog,
    private persist: Router,
    private electron: ElectronService,
    private zone: NgZone,
    private store: Store<{}>) {
    this.electron.ipcRenderer.on('menu', (event, message) => {
      this.zone.run(() => {
        switch (message) {
          case 'Create Class':
            this.store.dispatch(new fromActions.CreateClass);
            break;
          case 'Create Teacher':
            this.store.dispatch(new fromActions.CreateTeacher);
            break;
          case 'Create Subject':
            this.store.dispatch(new fromActions.CreateSubject);
            break;
          case 'Create Classroom':
            this.store.dispatch(new fromActions.CreateClassroom);
            break;
          default:
            console.error(`Unknown menu: ${message}`);
        }
      });
    });
  }
}

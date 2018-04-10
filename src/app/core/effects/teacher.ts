import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, filter, tap } from 'rxjs/operators';
import { Effect, Actions, ofType } from '@ngrx/effects';

import { PersistService } from '../../../modules/persistconnector/angular/persist.service';
import { EntityTypeNames } from '../../../models/entities';

import * as fromActions from '../actions/teacher';

@Injectable()
export class TeacherEffect {
  @Effect()
  notified$ = this.persist.notify.pipe(
    filter(t => t === EntityTypeNames.Teacher),
    map(() => new fromActions.LoadSuccess(this.persist.data.teacher)),
  );

  @Effect({ dispatch: false })
  loadAll$ = this.actions$.pipe(
    ofType(fromActions.TeacherActionTypes.LoadAll),
    tap(() => this.persist.findAll(EntityTypeNames.Teacher)),
  );

  @Effect({ dispatch: false })
  save$ = this.actions$.pipe(
    ofType(fromActions.TeacherActionTypes.Save),
    tap(({ payload }: fromActions.Save) => this.persist.save(payload, EntityTypeNames.Teacher)),
  );

  constructor(private actions$: Actions, private persist: PersistService<EntityTypeNames>) { }
}

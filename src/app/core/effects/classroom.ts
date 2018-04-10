import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, filter, tap } from 'rxjs/operators';
import { Effect, Actions, ofType } from '@ngrx/effects';

import { PersistService } from '../../../modules/persistconnector/angular/persist.service';
import { EntityTypeNames } from '../../../models/entities';

import * as fromActions from '../actions/classroom';

@Injectable()
export class ClassroomEffect {
  @Effect()
  notified$ = this.persist.notify.pipe(
    filter(t => t === EntityTypeNames.Classroom),
    map(() => new fromActions.LoadSuccess(this.persist.data.classroom)),
  );

  @Effect({ dispatch: false })
  loadAll$ = this.actions$.pipe(
    ofType(fromActions.ClassroomActionTypes.LoadAll),
    tap(() => this.persist.findAll(EntityTypeNames.Classroom)),
  );

  @Effect({ dispatch: false })
  save$ = this.actions$.pipe(
    ofType(fromActions.ClassroomActionTypes.Save),
    tap(({ payload }: fromActions.Save) => this.persist.save(payload, EntityTypeNames.Classroom)),
  );

  constructor(private actions$: Actions, private persist: PersistService<EntityTypeNames>) { }
}

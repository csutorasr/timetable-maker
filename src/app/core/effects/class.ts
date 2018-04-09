import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, filter, tap } from 'rxjs/operators';
import { Effect, Actions, ofType } from '@ngrx/effects';

import { PersistService } from '../../../modules/persistconnector/angular/persist.service';
import { EntityTypeNames } from '../../../models/entities';

import * as fromActions from '../actions/class';

@Injectable()
export class ClassEffect {
  @Effect()
  notified$ = this.persist.notify.pipe(
    filter(t => t === EntityTypeNames.Class),
    map(() => new fromActions.LoadSuccess(this.persist.data.class)),
  );

  @Effect({ dispatch: false })
  loadAll$ = this.actions$.pipe(
    ofType(fromActions.ClassActionTypes.LoadAll),
    tap(() => this.persist.findAll(EntityTypeNames.Class)),
  );

  @Effect({ dispatch: false })
  save$ = this.actions$.pipe(
    ofType(fromActions.ClassActionTypes.LoadAll),
    tap(({ payload }: fromActions.Save) => this.persist.save(payload, EntityTypeNames.Class)),
  );

  constructor(private actions$: Actions, private persist: PersistService<EntityTypeNames>) { }
}

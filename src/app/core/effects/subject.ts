import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, filter, tap } from 'rxjs/operators';
import { Effect, Actions, ofType } from '@ngrx/effects';

import { PersistService } from '../../../modules/persistconnector/angular/persist.service';
import { EntityTypeNames } from '../../../models/entities';

import * as fromActions from '../actions/subject';

@Injectable()
export class SubjectEffect {
  @Effect()
  notified$ = this.persist.notify.pipe(
    filter(t => t === EntityTypeNames.Subject),
    map(() => new fromActions.LoadSuccess(this.persist.data.subject)),
  );

  @Effect({ dispatch: false })
  loadAll$ = this.actions$.pipe(
    ofType(fromActions.SubjectActionTypes.LoadAll),
    tap(() => this.persist.findAll(EntityTypeNames.Subject)),
  );

  @Effect({ dispatch: false })
  save$ = this.actions$.pipe(
    ofType(fromActions.SubjectActionTypes.LoadAll),
    tap(({ payload }: fromActions.Save) => this.persist.save(payload, EntityTypeNames.Subject)),
  );

  constructor(private actions$: Actions, private persist: PersistService<EntityTypeNames>) { }
}

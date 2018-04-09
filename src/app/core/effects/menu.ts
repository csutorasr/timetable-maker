import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { filter, map, tap } from 'rxjs/operators';
import { ElectronService } from 'ngx-electron';
import { Store } from '@ngrx/store';

import * as fromActions from '../actions/menu';

@Injectable()
export class MenuEffect {
  constructor(private persist: Router, private electron: ElectronService, private zone: NgZone, private store: Store<{}>) {
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
          default:
            console.error(`Unknown menu: ${message}`);
        }
      });
    });
  }
}

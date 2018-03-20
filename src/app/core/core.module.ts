import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { PersistModule } from '../../modules/persistconnector/angular/persist.module';

import { reducers } from './reducers';
import { effects } from './effects';

@NgModule({
  imports: [
    CommonModule,
    PersistModule,
    StoreModule.forFeature('core', reducers),
    EffectsModule.forFeature(effects),
  ]
})
export class CoreModule { }

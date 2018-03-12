import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersistService } from './persist.service';
import { EntityTypeMap } from '../request';
import { PERSIST_MAP } from './map.injectiontoken';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    PersistService,
  ]
})
export class PersistModule {
  public static forRoot<T extends string>(map: EntityTypeMap<T>): ModuleWithProviders {
    return {
      ngModule: PersistModule,
      providers: [
        {
          provide: PERSIST_MAP,
          useValue: map,
        },
      ],
    };
  }
}

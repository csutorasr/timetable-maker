import { Injectable, NgZone, Inject } from '@angular/core';
import { ElectronService } from 'ngx-electron';

import { RequestType, EntityTypeMap, IRequest } from '../request';
import { IResponse } from '../response';
import { PERSIST_MAP } from './map.injectiontoken';
import { IEntity } from '../entity';

@Injectable()
export class PersistService<T extends string> {
  data: {
    [P in T]: any[]
  };
  constructor(private electronService: ElectronService, private zone: NgZone, @Inject(PERSIST_MAP) private map: EntityTypeMap<T>) {
    this.data = <any>{};
    for (const key in map) {
      if (map.hasOwnProperty(key)) {
        this.data[key] = [];
      }
    }
    this.electronService.ipcRenderer.on('persist', (sender, res: IResponse<T, IEntity>) => {
      zone.run(() => {
        switch (res.type) {
          case RequestType.save:
            this.data[res.entityType].push(<any>res.entity);
            break;
          case RequestType.findAll:
            this.data[res.entityType] = <any[]>res.entities;
            break;
        }
      });
    });
  }

  findAll(entityType: T) {
    this.sendData({
      type: RequestType.findAll,
      entityType: entityType,
    });
    return this.data[entityType];
  }

  save<E>(entity: E, entityType: T) {
    this.sendData({
      type: RequestType.save,
      entityType,
      entity: entity,
    });
  }

  private sendData(data: IRequest<T, IEntity>) {
    this.electronService.ipcRenderer.send('persist', data);
  }
}

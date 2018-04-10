import { Injectable, NgZone, Inject } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { Subject } from 'rxjs/Subject';

import { RequestType, EntityTypeMap, IRequest } from '../request';
import { IResponse } from '../response';
import { PERSIST_MAP } from './map.injectiontoken';
import { IEntity } from '../entity';

@Injectable()
export class PersistService<T extends string> {
  data: {
    [P in T]: any[]
  };
  notify = new Subject<string>();
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
          case RequestType.save: {
            const element = this.data[res.entityType].find(e => e.id === res.entity.id);
            if (element) {
              this.data[res.entityType] = this.data[res.entityType].map(e => e.id === res.entity.id ? res.entity : e);
              break;
            }
            this.data[res.entityType].push(this.copyEntityData(res.entityType, res.entity));
            break;
          }
          case RequestType.findAll: {
            this.data[res.entityType] = (<any[]>res.entities).map(e => this.copyEntityData(res.entityType, e));
            break;
          }
        }
        this.notify.next(res.entityType);
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

  private copyEntityData(type: T, data) {
    const entity = new (this.map[type])();
    Object.keys(data).forEach(key => {
      entity[key] = data[key];
    });
    return entity;
  }
}

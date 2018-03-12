import { ipcMain } from 'electron';
import { Teacher } from '../models/classes/teacher';
import { EntityTypeMap, IOrmRequest, RequestType } from '../models/interfaces/orm-request';
import { EntityTypeNames } from '../models/entities';
import { IEntity } from '../models/interfaces/entity';
import { IOrmResponse } from '../models/interfaces/orm-response';


export const EntityType: EntityTypeMap<EntityTypeNames> = {
  teacher: Teacher,
};

class DataTable<T extends IEntity = IEntity> {
  nextId = 0;
  data: T[] = [];
}

export class OrmConnector {
  database: EntityTypeMap<EntityTypeNames, DataTable> = {
    teacher: new DataTable<Teacher>(),
  };
  constructor() {
    ipcMain.on('orm', (event, req: IOrmRequest<EntityTypeNames, IEntity>) => {
      switch (req.type) {
        case RequestType.save:
          const toBeSaved = req.entity;
          const table = this.database[req.entityType];
          const data = table.data;
          let saved = data.find(e => e.id === toBeSaved.id);
          if (saved) {
            for (const key in toBeSaved) {
              if (toBeSaved.hasOwnProperty(key) && key !== 'id') {
                saved[key] = toBeSaved[key];
              }
            }
          } else {
            toBeSaved.id = table.nextId++;
            data.push(toBeSaved);
            saved = toBeSaved;
          }
          this.sendResponse(event, {
            type: req.type,
            entity: saved,
            entityType: req.entityType,
          });
          break;
        case RequestType.findAll:
          this.sendResponse(event, {
            type: req.type,
            entities: this.database[req.entityType].data,
            entityType: req.entityType,
          });
          break;
      }
    });
  }

  sendResponse(event, data: IOrmResponse<EntityTypeNames, IEntity>) {
    event.sender.send('orm', data);
  }
}

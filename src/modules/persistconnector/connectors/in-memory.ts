import { IEntity } from '../entity';
import { Connector } from './connector';
import { ISaveRequest, IFindAllRequest, EntityTypeMap } from '../request';

class DataTable<T extends IEntity = IEntity> {
  nextId = 0;
  data: T[] = [];
}

export class InMemoryConnector<T extends string> implements Connector<T, IEntity> {
  database: EntityTypeMap<T, DataTable>;

  constructor(private entityTypeMap: EntityTypeMap<T>) {
    this.database = <any>{};
    for (const key in entityTypeMap) {
      if (entityTypeMap.hasOwnProperty(key)) {
        const element = entityTypeMap[key];
        this.database[key] = new DataTable();
      }
    }
  }

  save(req: ISaveRequest<T, IEntity>): IEntity {
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
    return saved;
  }
  findAll(req: IFindAllRequest<T>): IEntity[] {
    return this.database[req.entityType].data;
  }
}

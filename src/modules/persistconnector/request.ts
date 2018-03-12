export enum RequestType {
  save = 'save',
  findOne = 'findOne',
  findAll = 'findAll',
  delete = 'delete',
}
export type EntityTypeMap<T extends string, V = any> = {
  [P in T]: V;
};

export interface ISaveRequest<T, V> {
  type: RequestType.save;
  entityType: T;
  entity: V;
}

export interface IFindAllRequest<T> {
  type: RequestType.findAll;
  entityType: T;
}

export type IRequest<T, V> =
  ISaveRequest<T, V> |
  IFindAllRequest<T>;

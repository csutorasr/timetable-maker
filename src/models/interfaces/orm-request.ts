export enum RequestType {
  save = 'save',
  findOne = 'findOne',
  findAll = 'findAll',
  delete = 'delete',
}
export type EntityTypeMap<T extends string, V = Function> = {
  [P in T]: V;
};

export interface IOrmSaveRequest<T, V> {
  type: RequestType.save;
  entityType: T;
  entity: V;
}

export interface IOrmFindAllRequest<T> {
  type: RequestType.findAll;
  entityType: T;
}

export type IOrmRequest<T, V> =
  IOrmSaveRequest<T, V> |
  IOrmFindAllRequest<T>;

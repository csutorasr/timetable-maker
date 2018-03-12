import { RequestType } from './orm-request';

export interface IOrmSaveResponse<T, V> {
  type: RequestType.save;
  entityType: T;
  entity: V;
}

export interface IOrmFindAllResponse<T, V> {
  type: RequestType.findAll;
  entityType: T;
  entities: V[];
}

export type IOrmResponse<T, V> =
  IOrmSaveResponse<T, V> |
  IOrmFindAllResponse<T, V>;

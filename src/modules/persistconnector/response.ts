import { RequestType } from './request';

export interface ISaveResponse<T, V> {
  type: RequestType.save;
  entityType: T;
  entity: V;
}

export interface IFindAllResponse<T, V> {
  type: RequestType.findAll;
  entityType: T;
  entities: V[];
}

export type IResponse<T, V> =
  ISaveResponse<T, V> |
  IFindAllResponse<T, V>;

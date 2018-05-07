import { ISaveRequest, IFindAllRequest } from '../request';

export interface Connector<T extends string, V> {
  save(req: ISaveRequest<T, V>): Promise<V>;
  findAll(req: IFindAllRequest<T>): Promise<V[]>;
}

import { Teacher } from './classes/teacher';
import { EntityTypeMap } from '../modules/persistconnector/request';
import { EntityTypeNames } from './entities';

export const TypeMap: EntityTypeMap<EntityTypeNames> = {
  teacher: Teacher,
};

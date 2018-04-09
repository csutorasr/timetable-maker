import { EntityTypeMap } from '../modules/persistconnector/request';
import { EntityTypeNames } from './entities';
import { Teacher } from './classes/teacher';
import { Subject } from './classes/subject';
import { Class } from './classes/class';

export const TypeMap: EntityTypeMap<EntityTypeNames> = {
  teacher: Teacher,
  subject: Subject,
  class: Class,
};

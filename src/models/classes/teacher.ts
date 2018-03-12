import { ITeacher } from '../interfaces/teacher';

export class Teacher implements ITeacher {
  id: number;
  firstName: string;
  lastName: string;
}

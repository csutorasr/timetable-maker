import { CreatedSubject } from './created-subject';

export class Class {
  id: number;
  name: string;
  subjects: {
    subjectId: number;
    numberInWeek: number;
  }[];
  createdSubjects: CreatedSubject[];
  constructor() {
    this.subjects = [];
    this.createdSubjects = [];
  }
}

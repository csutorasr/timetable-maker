export class Class {
  id: number;
  name: string;
  subjects: {
    subjectId: number;
    numberInWeek: number;
  }[];
  createdSubjects: {
    subjectId: number;
    day: Day;
    nth: number;
    classroomId: number;
  }[];
}

export enum Day {
  Monday = 'Monday',
  Tuesday = 'Tuesday',
  Wednesday = 'Wednesday',
  Thursday = 'Thursday',
  Friday = 'Friday',
  Saturday = 'Saturday',
  Sunday = 'Sunday',
}

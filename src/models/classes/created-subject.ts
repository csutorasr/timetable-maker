export class CreatedSubject {
  subjectId: number;
  day: Day;
  nth: number;
  classroomId: number;
  teacherId: number;
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

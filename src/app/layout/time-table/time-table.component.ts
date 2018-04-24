import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Day, CreatedSubject } from '../../../models/classes/created-subject';
import { Subject } from '../../../models/classes/subject';

@Component({
  selector: 'ttb-time-table',
  templateUrl: './time-table.component.html',
  styleUrls: ['./time-table.component.scss']
})
export class TimeTableComponent {
  @Input() createdSubjects: CreatedSubject[] = [];
  @Input() subjects: Subject[] = [];
  day = Object.keys(Day).map(key => Day[key]);
  @Output() createSubject = new EventEmitter<CreatedSubject>();
  @Output() deleteSubject = new EventEmitter<{ nth: number, day: Day }>();
  triggerCreateSubject(data) {
    this.createSubject.emit(data);
  }
  triggerDeleteSubject(data) {
    this.deleteSubject.emit(data);
  }
}

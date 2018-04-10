import { Component, Input, EventEmitter, Output } from '@angular/core';
import { DragDropData } from 'ng2-dnd';

import { Day, CreatedSubject } from '../../../models/classes/created-subject';

@Component({
  selector: 'ttb-time-table-day',
  templateUrl: './time-table-day.component.html',
  styleUrls: ['./time-table-day.component.scss']
})
export class TimeTableDayComponent {
  @Input() dayName: Day = null;
  @Input() createdSubjects: CreatedSubject[] = [];
  @Output() createSubject = new EventEmitter<CreatedSubject>();
  times = Array.apply(null, {length: 8}).map(Number.call, Number);
  onDrop(event: DragDropData, nth: number) {
    const c = new CreatedSubject();
    c.subjectId = event.dragData.id;
    c.day = this.dayName;
    c.nth = nth;
    c.classroomId = 0;
    this.createSubject.emit(c);
  }

  findCreatedSubject(id: number) {
    return this.createdSubjects.find(cs => cs.nth === id && cs.day === this.dayName);
  }
}

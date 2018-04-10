import { Component, Input, EventEmitter, Output } from '@angular/core';
import { DragDropData } from 'ng2-dnd';

import { Day, CreatedSubject } from '../../../models/classes/created-subject';
import { Subject } from '../../../models/classes/subject';

@Component({
  selector: 'ttb-time-table-day',
  templateUrl: './time-table-day.component.html',
  styleUrls: ['./time-table-day.component.scss']
})
export class TimeTableDayComponent {
  @Input() dayName: Day = null;
  @Input() set createdSubjects(data: CreatedSubject[]) {
    this.createdSubejctsData = data;
    this.loadList();
  }
  @Input() set subjects(data: Subject[]) {
    this.subjectsData = data;
    this.loadList();
  }
  @Output() createSubject = new EventEmitter<CreatedSubject>();

  list: { nth: number; subject?: Subject; classroomId?: number; teacherId?: number; empty: boolean; }[];
  private createdSubejctsData: CreatedSubject[];
  private subjectsData: Subject[];

  onDrop(event: DragDropData, nth: number) {
    const c = new CreatedSubject();
    c.subjectId = event.dragData.id;
    c.day = this.dayName;
    c.nth = nth;
    c.classroomId = 0;
    c.teacherId = 0;
    this.createSubject.emit(c);
  }
  loadList() {
    this.list = [0, 1, 2, 3, 4, 5, 6, 7, 8]
      .map(nth => {
        if (this.createdSubejctsData) {
          const cc = this.createdSubejctsData.find(cs => cs.nth === nth && cs.day === this.dayName);
          if (cc) {
            return {
              nth: cc.nth,
              subject: this.subjectsData ? this.subjectsData.find(s => s.id === cc.subjectId) : null,
              classroomId: cc.classroomId,
              empty: false,
            };
          }
        }
        return {
          nth,
          empty: true,
        };
      });
  }
}

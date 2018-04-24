import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Teacher } from '../../../models/classes/teacher';
import { Classroom } from '../../../models/classes/classroom';

@Component({
  selector: 'ttb-class-misc-selector',
  templateUrl: './class-misc-selector.component.html',
  styleUrls: ['./class-misc-selector.component.scss']
})
export class ClassMiscSelectorComponent {
  @Input() teachers: Teacher[] = [];
  @Input() teacherId: number = null;
  @Output() teacherIdChange = new EventEmitter<number>();
  @Input() classrooms: Classroom[] = [];
  @Input() classroomId: number = null;
  @Output() classroomIdChange = new EventEmitter<number>();
}

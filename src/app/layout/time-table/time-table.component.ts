import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Day, CreatedSubject } from '../../../models/classes/created-subject';

@Component({
  selector: 'ttb-time-table',
  templateUrl: './time-table.component.html',
  styleUrls: ['./time-table.component.scss']
})
export class TimeTableComponent {
  day = Object.keys(Day).map(key => Day[key]);
  @Output() createSubject = new EventEmitter<CreatedSubject>();
  triggerCreateSubject(data) {
    this.createSubject.emit(data);
  }
}

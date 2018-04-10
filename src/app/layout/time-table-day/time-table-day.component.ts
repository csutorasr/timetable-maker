import { Component, Input } from '@angular/core';

@Component({
  selector: 'ttb-time-table-day',
  templateUrl: './time-table-day.component.html',
  styleUrls: ['./time-table-day.component.scss']
})
export class TimeTableDayComponent {
  @Input() dayName = '';
  times = Array.apply(null, {length: 8}).map(Number.call, Number);
}

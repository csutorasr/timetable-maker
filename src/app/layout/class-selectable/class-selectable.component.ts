import { Component, Input } from '@angular/core';
import { Subject } from '../../../models/classes/subject';

@Component({
  selector: 'ttb-class-selectable',
  templateUrl: './class-selectable.component.html',
  styleUrls: ['./class-selectable.component.scss']
})
export class ClassSelectableComponent {
  @Input() selectableSubjects: { count: number, subject: Subject }[] = [];
}

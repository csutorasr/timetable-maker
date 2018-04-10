import { Component } from '@angular/core';

import { Subject } from '../../../models/classes/subject';

@Component({
  selector: 'ttb-create-subject',
  templateUrl: './create-subject.component.html',
  styleUrls: ['./create-subject.component.scss']
})
export class CreateSubjectComponent {
  data = new Subject();
}

import { Component } from '@angular/core';

import { Teacher } from '../../../models/classes/teacher';

@Component({
  selector: 'ttb-create-teacher',
  templateUrl: './create-teacher.component.html',
  styleUrls: ['./create-teacher.component.scss']
})
export class CreateTeacherComponent {
  data = new Teacher();
}

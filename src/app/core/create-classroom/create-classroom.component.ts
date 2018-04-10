import { Component } from '@angular/core';

import { Classroom } from '../../../models/classes/classroom';

@Component({
  selector: 'ttb-create-classroom',
  templateUrl: './create-classroom.component.html',
  styleUrls: ['./create-classroom.component.scss']
})
export class CreateClassroomComponent {
  data = new Classroom();
}

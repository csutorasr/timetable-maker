import { Component, NgZone } from '@angular/core';
import { ElectronService } from 'ngx-electron';

import { ITeacher } from '../models/interfaces/teacher';
import { IOrmRequest, RequestType } from '../models/interfaces/orm-request';
import { EntityTypeNames } from '../models/entities';
import { IEntity } from '../models/interfaces/entity';
import { FormControl } from '@angular/forms';
import { IOrmResponse } from '../models/interfaces/orm-response';

@Component({
  selector: 'ttb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  teachers: ITeacher[] = [];

  lastNameControl: FormControl;
  firstNameControl: FormControl;
  constructor(private electronService: ElectronService, private zone: NgZone) {
    this.electronService.ipcRenderer.on('orm', (sender, res: IOrmResponse<EntityTypeNames, IEntity>) => {
      zone.run(() => {
        switch (res.type) {
          case RequestType.save:
            if (res.entityType === EntityTypeNames.Teacher) {
              this.teachers.push(<ITeacher>res.entity);
            }
            break;
          case RequestType.findAll:
            if (res.entityType === EntityTypeNames.Teacher) {
              this.teachers = <ITeacher[]>res.entities;
            }
            break;
        }
      });
    });
    this.firstNameControl = new FormControl('');
    this.lastNameControl = new FormControl('');
  }

  loadAll() {
    this.sendData({
      type: RequestType.findAll,
      entityType: EntityTypeNames.Teacher,
    });
  }

  save() {
    const data: ITeacher = {
      firstName: this.firstNameControl.value,
      lastName: this.lastNameControl.value,
    };
    this.sendData({
      type: RequestType.save,
      entityType: EntityTypeNames.Teacher,
      entity: data,
    });
  }

  sendData(data: IOrmRequest<EntityTypeNames, IEntity>) {
    this.electronService.ipcRenderer.send('orm', data);
  }
}

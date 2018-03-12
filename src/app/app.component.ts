import { Component, NgZone } from '@angular/core';
import { ElectronService } from 'ngx-electron';

import { EntityTypeNames } from '../models/entities';
import { FormControl } from '@angular/forms';
import { Teacher } from '../models/classes/teacher';
import { IResponse } from '../modules/persistconnector/response';
import { IEntity } from '../modules/persistconnector/entity';
import { IRequest, RequestType } from '../modules/persistconnector/request';

@Component({
  selector: 'ttb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  teachers: Teacher[] = [];

  lastNameControl: FormControl;
  firstNameControl: FormControl;
  constructor(private electronService: ElectronService, private zone: NgZone) {
    this.electronService.ipcRenderer.on('persist', (sender, res: IResponse<EntityTypeNames, IEntity>) => {
      zone.run(() => {
        switch (res.type) {
          case RequestType.save:
            if (res.entityType === EntityTypeNames.Teacher) {
              this.teachers.push(<Teacher>res.entity);
            }
            break;
          case RequestType.findAll:
            if (res.entityType === EntityTypeNames.Teacher) {
              this.teachers = <Teacher[]>res.entities;
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
    const data: Teacher = new Teacher();
    data.firstName = this.firstNameControl.value;
    data.lastName = this.lastNameControl.value;
    this.sendData({
      type: RequestType.save,
      entityType: EntityTypeNames.Teacher,
      entity: data,
    });
  }

  sendData(data: IRequest<EntityTypeNames, IEntity>) {
    this.electronService.ipcRenderer.send('persist', data);
  }
}

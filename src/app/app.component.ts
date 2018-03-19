import { Component, NgZone } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Teacher } from '../models/classes/teacher';
import { IResponse } from '../modules/persistconnector/response';
import { IEntity } from '../modules/persistconnector/entity';
import { IRequest, RequestType, EntityTypeMap } from '../modules/persistconnector/request';
import { PersistService } from '../modules/persistconnector/angular/persist.service';

import { EntityTypeNames } from '../models/entities';
import { TypeMap } from '../models/type-map';

@Component({
  selector: 'ttb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
}

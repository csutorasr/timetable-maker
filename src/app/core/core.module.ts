import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule } from '@angular/forms';

import { PersistModule } from '../../modules/persistconnector/angular/persist.module';
import { MaterialModule } from '../material/material.module';

import { reducers } from './reducers';
import { effects } from './effects';
import { CreateTeacherComponent } from './create-teacher/create-teacher.component';
import { CreateSubjectComponent } from './create-subject/create-subject.component';
import { CreateClassComponent } from './create-class/create-class.component';
import { CreateClassroomComponent } from './create-classroom/create-classroom.component';

@NgModule({
  imports: [
    CommonModule,
    PersistModule,
    StoreModule.forFeature('core', reducers),
    EffectsModule.forFeature(effects),
    MaterialModule,
    FormsModule,
  ],
  declarations: [
    CreateTeacherComponent,
    CreateSubjectComponent,
    CreateClassComponent,
    CreateClassroomComponent,
  ],
  entryComponents: [
    CreateTeacherComponent,
    CreateSubjectComponent,
    CreateClassComponent,
    CreateClassroomComponent,
  ],
})
export class CoreModule { }

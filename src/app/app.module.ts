import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxElectronModule } from 'ngx-electron';

import { AppRoutingModule } from './app-routing.module';
import { ResizableModule } from 'angular-resizable-element';

import { AppComponent } from './app.component';
import { PersistModule } from '../modules/persistconnector/angular/persist.module';
import { TypeMap } from '../models/type-map';
import { MainComponent } from './layout/main/main.component';
import { SchoolTreeViewComponent } from './layout/school-tree-view/school-tree-view.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './reducers';
import { ClassViewComponent } from './layout/class-view/class-view.component';
import { ClassSelectableComponent } from './layout/class-selectable/class-selectable.component';
import { TimeTableComponent } from './layout/time-table/time-table.component';
import { TimeTableDayComponent } from './layout/time-table-day/time-table-day.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SchoolTreeViewComponent,
    ClassViewComponent,
    ClassSelectableComponent,
    TimeTableComponent,
    TimeTableDayComponent,
  ],
  imports: [
    BrowserModule,
    NgxElectronModule,
    ReactiveFormsModule,
    PersistModule.forRoot(TypeMap),
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([]),
    AppRoutingModule,
    SharedModule,
    ResizableModule,
    CoreModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

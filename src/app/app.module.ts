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


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SchoolTreeViewComponent,
  ],
  imports: [
    BrowserModule,
    NgxElectronModule,
    ReactiveFormsModule,
    PersistModule.forRoot(TypeMap),
    StoreModule.forRoot({}),
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

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxElectronModule } from 'ngx-electron';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PersistModule } from '../modules/persistconnector/angular/persist.module';
import { TypeMap } from '../models/type-map';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxElectronModule,
    ReactiveFormsModule,
    PersistModule.forRoot(TypeMap),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

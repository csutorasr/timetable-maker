import { NgModule } from '@angular/core';
import {
  MatDialogModule,
  MatInputModule,
  MatButtonModule,
  MatSelectModule,
} from '@angular/material';


const modules = [
  MatDialogModule,
  MatInputModule,
  MatButtonModule,
  MatSelectModule,
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialModule { }

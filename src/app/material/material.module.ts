import { NgModule } from '@angular/core';
import {
  MatDialogModule,
  MatInputModule,
  MatButtonModule,
  MatSelectModule,
  MatIconModule,
  MatCardModule,
} from '@angular/material';


const modules = [
  MatDialogModule,
  MatInputModule,
  MatButtonModule,
  MatSelectModule,
  MatIconModule,
  MatCardModule,
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TreeViewComponent } from './tree-view/tree-view.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    TreeViewComponent,
  ],
  exports: [
    TreeViewComponent,
  ]
})
export class SharedModule { }

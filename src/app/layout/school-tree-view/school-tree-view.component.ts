import { Component, OnInit } from '@angular/core';
import { TreeModel } from '../../shared/tree-view/tree-model';

@Component({
  selector: 'ttb-school-tree-view',
  templateUrl: './school-tree-view.component.html',
  styleUrls: ['./school-tree-view.component.scss']
})
export class SchoolTreeViewComponent implements OnInit {
  data: TreeModel = {
    label: 'School',
    meta: 'School',
    children: [
      {
        label: 'Teachers',
        meta: 'Teachers',
      },
      {
        label: 'Classes',
        meta: 'Classes',
      }
    ]
  };
  selectedMeta;

  constructor() { }

  ngOnInit() {
  }

  triggered(meta) {
    this.selectedMeta = meta;
  }

}

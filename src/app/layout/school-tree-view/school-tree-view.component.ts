import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

import { TreeModel } from '../../shared/tree-view/tree-model';
import * as fromCore from '../../core/reducers';
import * as fromClassActions from '../../core/actions/class';

@Component({
  selector: 'ttb-school-tree-view',
  templateUrl: './school-tree-view.component.html',
  styleUrls: ['./school-tree-view.component.scss']
})
export class SchoolTreeViewComponent implements OnInit {
  data$: Observable<TreeModel>;
  selectedMeta;

  constructor(private store: Store<fromCore.State>) { }

  ngOnInit() {
    this.store.dispatch(new fromClassActions.LoadAll());
    this.data$ = this.store.pipe(
      select(s => s.core.class.entities),
      map(classes => ({
        label: 'Classes',
        children: classes.map(c => ({
          label: c.name,
          meta: c,
        })),
      }))
    );
  }

  triggered(meta) {
    this.selectedMeta = meta;
  }

}

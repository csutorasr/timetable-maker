import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { filter, map, exhaustMap, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

import * as fromCore from '../../core/reducers';
import * as fromSubjectActions from '../../core/actions/subject';
import * as fromApp from '../../reducers';
import { Class } from '../../../models/classes/class';
import { Subject } from '../../../models/classes/subject';

interface State extends fromCore.State, fromApp.State { }

@Component({
  selector: 'ttb-class-view',
  templateUrl: './class-view.component.html',
  styleUrls: ['./class-view.component.scss']
})
export class ClassViewComponent implements OnInit {
  selectableSubjects$: Observable<Subject[]>;
  class$: Observable<Class>;
  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.class$ = this.store.pipe(
      select(s => s.view.selectedClass)
    );
    this.store.dispatch(new fromSubjectActions.LoadAll());
    this.selectableSubjects$ = this.class$.pipe(
      filter(c => c !== null),
      map(c => {
        const subjects = c.subjects.map(s => ({ ...s }));
        c.createdSubjects.forEach(cs => {
          const subject = subjects.find(s => s.subjectId === cs.subjectId);
          if (subject) {
            subject.numberInWeek--;
          }
        });
        return subjects.filter(s => s.numberInWeek > 0).map(s => s.subjectId);
      }),
      switchMap(subjectIds => this.store.pipe(
        select(s => s.core.subject.entities),
        map(subjects => subjects.filter(s => subjectIds.indexOf(s.id) !== -1)),
      ))
    );
  }

}

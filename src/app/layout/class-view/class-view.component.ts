import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { filter, map, exhaustMap, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

import * as fromCore from '../../core/reducers';
import * as fromSubjectActions from '../../core/actions/subject';
import * as fromClassActions from '../../core/actions/class';
import * as fromApp from '../../reducers';
import { Class } from '../../../models/classes/class';
import { Subject } from '../../../models/classes/subject';
import { CreatedSubject, Day } from '../../../models/classes/created-subject';

interface State extends fromCore.State, fromApp.State { }

@Component({
  selector: 'ttb-class-view',
  templateUrl: './class-view.component.html',
  styleUrls: ['./class-view.component.scss']
})
export class ClassViewComponent implements OnInit {
  subjects$: Observable<Subject[]>;
  selectableSubjects$: Observable<Subject[]>;
  class$: Observable<Class>;
  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.class$ = this.store.pipe(
      select(s => s.view.selectedClassId),
      switchMap(id => this.store.pipe(
        select(s => s.core.class.entities),
        map(entities => entities.find(e => e.id === id)),
      )),
      filter(c => !!c),
    );
    this.subjects$ = this.store.pipe(
      select(s => s.core.subject.entities)
    );
    this.store.dispatch(new fromSubjectActions.LoadAll());
    this.selectableSubjects$ = this.class$.pipe(
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
      switchMap(subjectIds => this.subjects$.pipe(
        map(subjects => subjects.filter(s => subjectIds.indexOf(s.id) !== -1)),
      ))
    );
  }

  createSubject(data: CreatedSubject) {
    this.class$.subscribe(c => {
      if (c.createdSubjects.find(cs => cs.day === data.day && cs.nth === data.nth)) {
        return;
      }
      c.createdSubjects.push(data);
      this.store.dispatch(new fromClassActions.Save(c));
    }).unsubscribe();
  }

  deleteSubject(data: { nth: number, day: Day }) {
    this.class$.subscribe(c => {
      const index = c.createdSubjects.findIndex(cs => cs.day === data.day && cs.nth === data.nth);
      c.createdSubjects.splice(index, 1);
      this.store.dispatch(new fromClassActions.Save(c));
    }).unsubscribe();
  }

}

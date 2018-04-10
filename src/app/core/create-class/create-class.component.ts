import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Class } from '../../../models/classes/class';
import { Subject } from '../../../models/classes/subject';

import * as fromReducer from '../reducers';
import * as fromSubjectActions from '../actions/subject';

@Component({
  selector: 'ttb-create-class',
  templateUrl: './create-class.component.html',
  styleUrls: ['./create-class.component.scss']
})
export class CreateClassComponent implements OnInit {
  subjects$: Observable<Subject[]>;
  data: Class = new Class();
  selectedSubjectId: number = null;
  constructor(private store: Store<fromReducer.State>) { }
  ngOnInit() {
    this.store.dispatch(new fromSubjectActions.LoadAll());
    this.subjects$ = this.store.pipe(select(state => state.core.subject.entities));
  }

  subjectById(id: number): Subject {
    let subject: Subject;
    this.subjects$.subscribe(subjects => subject = subjects.find(s => s.id === id)).unsubscribe();
    return subject;
  }

  addSubject(subjectId: number) {
    if (this.data.subjects.find(s => s.subjectId === subjectId)) {
      return;
    }
    this.data.subjects.push({
      subjectId,
      numberInWeek: 0,
    });
  }

}

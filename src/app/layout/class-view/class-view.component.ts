import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { filter, map, exhaustMap, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

import * as fromCore from '../../core/reducers';
import * as fromSubjectActions from '../../core/actions/subject';
import * as fromClassActions from '../../core/actions/class';
import * as fromClassroomActions from '../../core/actions/classroom';
import * as fromTeacherActions from '../../core/actions/teacher';
import * as fromApp from '../../reducers';
import { Class } from '../../../models/classes/class';
import { Subject } from '../../../models/classes/subject';
import { CreatedSubject, Day } from '../../../models/classes/created-subject';
import { Teacher } from '../../../models/classes/teacher';
import { Classroom } from '../../../models/classes/classroom';

interface State extends fromCore.State, fromApp.State { }

@Component({
  selector: 'ttb-class-view',
  templateUrl: './class-view.component.html',
  styleUrls: ['./class-view.component.scss']
})
export class ClassViewComponent implements OnInit {
  teachers$: Observable<Teacher[]>;
  classrooms$: Observable<Classroom[]>;
  subjects$: Observable<Subject[]>;
  selectableSubjects$: Observable<{ count: number, subject: Subject }[]>;
  class$: Observable<Class>;
  classroomId: number = null;
  teacherId: number = null;
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
    this.classrooms$ = this.store.pipe(select(s => s.core.classroom.entities));
    this.store.dispatch(new fromClassroomActions.LoadAll());
    this.teachers$ = this.store.pipe(select(s => s.core.teacher.entities));
    this.store.dispatch(new fromTeacherActions.LoadAll());
    this.selectableSubjects$ = this.class$.pipe(
      map(c => {
        const subjects = c.subjects.map(s => ({ ...s }));
        c.createdSubjects.forEach(cs => {
          const subject = subjects.find(s => s.subjectId === cs.subjectId);
          if (subject) {
            subject.numberInWeek--;
          }
        });
        return subjects.filter(s => s.numberInWeek > 0).map(s => ({
          count: s.numberInWeek,
          subjectId: s.subjectId
        }));
      }),
      switchMap(subjectIds => this.subjects$.pipe(
        map(subjects => subjectIds.map(s => ({
          count: s.count,
          subject: subjects.find(subject => subject.id === s.subjectId),
        }))),
      ))
    );
  }

  createSubject(data: CreatedSubject) {
    this.class$.subscribe(c => {
      this.store.pipe(select(s => s.core.class.entities)).subscribe(classes => {
        data.classroomId = this.classroomId;
        data.teacherId = this.teacherId;
        if (c.createdSubjects.find(cs => cs.day === data.day && cs.nth === data.nth)) {
          return;
        }
        if (data.classroomId == null || data.teacherId == null) {
          return;
        }
        let sameClassroom = false, sameTeacher = false;
        const matchedClass = classes.find(x => !!x.createdSubjects.find(cs =>
          cs.day === data.day &&
          cs.nth === data.nth &&
          (cs.classroomId === data.classroomId && (sameClassroom = true) ||
           cs.teacherId === data.teacherId && (sameTeacher = true))
        ));
        if (matchedClass) {
          if (sameClassroom) {
            // TODO: set error
          }
          if (sameTeacher) {
            // TODO: set error
          }
          return;
        }
        c.createdSubjects.push(data);
        this.store.dispatch(new fromClassActions.Save(c));
      }).unsubscribe();
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

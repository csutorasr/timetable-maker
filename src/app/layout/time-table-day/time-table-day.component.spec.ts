import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeTableDayComponent } from './time-table-day.component';

describe('TimeTableDayComponent', () => {
  let component: TimeTableDayComponent;
  let fixture: ComponentFixture<TimeTableDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeTableDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeTableDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

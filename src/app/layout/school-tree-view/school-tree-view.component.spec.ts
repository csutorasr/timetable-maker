import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolTreeViewComponent } from './school-tree-view.component';

describe('SchoolTreeViewComponent', () => {
  let component: SchoolTreeViewComponent;
  let fixture: ComponentFixture<SchoolTreeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolTreeViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolTreeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

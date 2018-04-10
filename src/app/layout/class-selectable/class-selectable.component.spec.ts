import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassSelectableComponent } from './class-selectable.component';

describe('ClassSelectableComponent', () => {
  let component: ClassSelectableComponent;
  let fixture: ComponentFixture<ClassSelectableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassSelectableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassSelectableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassMiscSelectorComponent } from './class-misc-selector.component';

describe('ClassMiscSelectorComponent', () => {
  let component: ClassMiscSelectorComponent;
  let fixture: ComponentFixture<ClassMiscSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassMiscSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassMiscSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

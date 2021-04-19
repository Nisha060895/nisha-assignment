import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemOneComponent } from './problem-one.component';

describe('ProblemOneComponent', () => {
  let component: ProblemOneComponent;
  let fixture: ComponentFixture<ProblemOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProblemOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

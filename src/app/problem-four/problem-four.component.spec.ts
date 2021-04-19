import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemFourComponent } from './problem-four.component';

describe('ProblemFourComponent', () => {
  let component: ProblemFourComponent;
  let fixture: ComponentFixture<ProblemFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProblemFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

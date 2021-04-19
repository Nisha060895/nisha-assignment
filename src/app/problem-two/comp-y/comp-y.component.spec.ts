import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompYComponent } from './comp-y.component';

describe('CompYComponent', () => {
  let component: CompYComponent;
  let fixture: ComponentFixture<CompYComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompYComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

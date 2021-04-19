import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CornerOneComponent } from './corner-one.component';

describe('CornerOneComponent', () => {
  let component: CornerOneComponent;
  let fixture: ComponentFixture<CornerOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CornerOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CornerOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

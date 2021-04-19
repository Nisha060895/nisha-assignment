import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CornerFourComponent } from './corner-four.component';

describe('CornerFourComponent', () => {
  let component: CornerFourComponent;
  let fixture: ComponentFixture<CornerFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CornerFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CornerFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

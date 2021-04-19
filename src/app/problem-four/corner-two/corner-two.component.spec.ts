import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CornerTwoComponent } from './corner-two.component';

describe('CornerTwoComponent', () => {
  let component: CornerTwoComponent;
  let fixture: ComponentFixture<CornerTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CornerTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CornerTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

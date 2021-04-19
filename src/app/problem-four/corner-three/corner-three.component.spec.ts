import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CornerThreeComponent } from './corner-three.component';

describe('CornerThreeComponent', () => {
  let component: CornerThreeComponent;
  let fixture: ComponentFixture<CornerThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CornerThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CornerThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

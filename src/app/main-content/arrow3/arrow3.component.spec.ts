import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Arrow3Component } from './arrow3.component';

describe('Arrow3Component', () => {
  let component: Arrow3Component;
  let fixture: ComponentFixture<Arrow3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Arrow3Component]
    });
    fixture = TestBed.createComponent(Arrow3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

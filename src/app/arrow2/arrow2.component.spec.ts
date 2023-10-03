import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Arrow2Component } from './arrow2.component';

describe('Arrow2Component', () => {
  let component: Arrow2Component;
  let fixture: ComponentFixture<Arrow2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Arrow2Component]
    });
    fixture = TestBed.createComponent(Arrow2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

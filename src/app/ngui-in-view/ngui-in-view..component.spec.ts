import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NguiInView.Component } from './ngui-in-view..component';

describe('NguiInView.Component', () => {
  let component: NguiInView.Component;
  let fixture: ComponentFixture<NguiInView.Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NguiInView.Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NguiInView.Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

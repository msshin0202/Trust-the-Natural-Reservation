import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EroomstatusComponent } from './eroomstatus.component';

describe('EroomstatusComponent', () => {
  let component: EroomstatusComponent;
  let fixture: ComponentFixture<EroomstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EroomstatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EroomstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

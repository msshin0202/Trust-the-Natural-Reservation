import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustlandingComponent } from './custlanding.component';

describe('CustlandingComponent', () => {
  let component: CustlandingComponent;
  let fixture: ComponentFixture<CustlandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustlandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustlandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

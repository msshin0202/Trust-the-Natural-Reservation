import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StayedInComponent } from './stayed-in.component';

describe('StayedInComponent', () => {
  let component: StayedInComponent;
  let fixture: ComponentFixture<StayedInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StayedInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StayedInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { View.ProfileComponent } from './view.profile.component';

describe('View.ProfileComponent', () => {
  let component: View.ProfileComponent;
  let fixture: ComponentFixture<View.ProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ View.ProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(View.ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmplandingComponent } from './emplanding.component';

describe('EmplandingComponent', () => {
  let component: EmplandingComponent;
  let fixture: ComponentFixture<EmplandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmplandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmplandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { EmpUserService } from './emp-user.service';

describe('EmpUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmpUserService = TestBed.get(EmpUserService);
    expect(service).toBeTruthy();
  });
});

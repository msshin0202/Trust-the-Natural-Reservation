import { TestBed } from '@angular/core/testing';

import { CustUserService } from './cust-user.service';

describe('CustUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustUserService = TestBed.get(CustUserService);
    expect(service).toBeTruthy();
  });
});

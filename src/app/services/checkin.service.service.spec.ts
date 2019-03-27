import { TestBed } from '@angular/core/testing';

import { Checkin.ServiceService } from './checkin.service.service';

describe('Checkin.ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Checkin.ServiceService = TestBed.get(Checkin.ServiceService);
    expect(service).toBeTruthy();
  });
});

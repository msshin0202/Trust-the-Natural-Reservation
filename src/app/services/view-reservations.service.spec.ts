import { TestBed } from '@angular/core/testing';

import { ViewReservationsService } from './view-reservations.service';

describe('ViewReservationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViewReservationsService = TestBed.get(ViewReservationsService);
    expect(service).toBeTruthy();
  });
});

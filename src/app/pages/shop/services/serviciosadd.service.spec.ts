import { TestBed } from '@angular/core/testing';

import { ServiciosaddService } from './serviciosadd.service';

describe('ServiciosaddService', () => {
  let service: ServiciosaddService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciosaddService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { DevRouteGuardService } from './dev-route-guard.service';

describe('DevRouteGuardService', () => {
  let service: DevRouteGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevRouteGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

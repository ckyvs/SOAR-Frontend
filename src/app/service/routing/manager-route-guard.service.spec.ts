import { TestBed } from '@angular/core/testing';

import { ManagerRouteGuardService } from './manager-route-guard.service';

describe('ManagerRouteGuardService', () => {
  let service: ManagerRouteGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagerRouteGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { EmpAdminRouteGuardService } from './emp-admin-route-guard.service';

describe('EmpAdminRouteGuardService', () => {
  let service: EmpAdminRouteGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpAdminRouteGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

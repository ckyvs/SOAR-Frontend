import { TestBed } from '@angular/core/testing';

import { InfraAdminRouteGuardService } from './infra-admin-route-guard.service';

describe('InfraAdminRouteGuardService', () => {
  let service: InfraAdminRouteGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfraAdminRouteGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

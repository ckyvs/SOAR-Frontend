import { TestBed } from '@angular/core/testing';

import { InfraAdminService } from './infra-admin.service';

describe('InfraAdminService', () => {
  let service: InfraAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfraAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

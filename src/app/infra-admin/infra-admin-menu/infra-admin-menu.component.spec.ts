import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfraAdminMenuComponent } from './infra-admin-menu.component';

describe('InfraAdminMenuComponent', () => {
  let component: InfraAdminMenuComponent;
  let fixture: ComponentFixture<InfraAdminMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfraAdminMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfraAdminMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

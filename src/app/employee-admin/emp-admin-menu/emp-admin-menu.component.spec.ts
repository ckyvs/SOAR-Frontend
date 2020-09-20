import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpAdminMenuComponent } from './emp-admin-menu.component';

describe('EmpAdminMenuComponent', () => {
  let component: EmpAdminMenuComponent;
  let fixture: ComponentFixture<EmpAdminMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpAdminMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpAdminMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

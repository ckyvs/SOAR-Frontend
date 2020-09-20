import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerRespondedRequestComponent } from './manager-responded-request.component';

describe('ManagerRespondedRequestComponent', () => {
  let component: ManagerRespondedRequestComponent;
  let fixture: ComponentFixture<ManagerRespondedRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerRespondedRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerRespondedRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

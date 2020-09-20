import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespondedRequestsComponent } from './responded-requests.component';

describe('RespondedRequestsComponent', () => {
  let component: RespondedRequestsComponent;
  let fixture: ComponentFixture<RespondedRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespondedRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RespondedRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

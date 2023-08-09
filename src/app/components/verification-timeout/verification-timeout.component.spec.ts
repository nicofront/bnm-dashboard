import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificationTimeoutComponent } from './verification-timeout.component';

describe('VerificationTimeoutComponent', () => {
  let component: VerificationTimeoutComponent;
  let fixture: ComponentFixture<VerificationTimeoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerificationTimeoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificationTimeoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

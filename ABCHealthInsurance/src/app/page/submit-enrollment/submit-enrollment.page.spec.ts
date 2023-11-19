import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubmitEnrollmentPage } from './submit-enrollment.page';

describe('SubmitEnrollmentPage', () => {
  let component: SubmitEnrollmentPage;
  let fixture: ComponentFixture<SubmitEnrollmentPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SubmitEnrollmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

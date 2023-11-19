import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlanDetailsPage } from './plan-details.page';

describe('PlanDetailsPage', () => {
  let component: PlanDetailsPage;
  let fixture: ComponentFixture<PlanDetailsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PlanDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
